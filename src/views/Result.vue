<template>
  <div class="result" v-if="hasResult">
    <h1>测试结果</h1>
    <div class="result-card">
      <div class="type-info">
        <h2>你的MBTI类型是：{{ mbtiType }}</h2>
        <h3>{{ typeInfo.title }}</h3>
      </div>

      <div class="dimension-analysis">
        <h2>维度分析</h2>
        <div class="dimension-charts">
          <!-- EI维度 -->
          <div class="dimension-item">
            <div class="dimension-title">
              <span>内向 (I)</span>
              <span class="dimension-score">{{ dimensionScores?.EI || 0 }}%</span>
              <span>外向 (E)</span>
            </div>
            <div class="dimension-bar">
              <div class="scale-marks">
                <span v-for="n in 11" :key="n">{{ (n - 6) * 10 }}</span>
              </div>
              <div class="bar-container">
                <div class="bar-indicator"
                  :style="{ left: `${50 + (dimensionScores?.EI || 0) / 2}%` }"
                ></div>
              </div>
            </div>
          </div>

          <!-- SN维度 -->
          <div class="dimension-item">
            <div class="dimension-title">
              <span>直觉 (N)</span>
              <span class="dimension-score">{{ dimensionScores?.SN || 0 }}%</span>
              <span>感觉 (S)</span>
            </div>
            <div class="dimension-bar">
              <div class="scale-marks">
                <span v-for="n in 11" :key="n">{{ (n - 6) * 10 }}</span>
              </div>
              <div class="bar-container">
                <div class="bar-indicator"
                  :style="{ left: `${50 + (dimensionScores?.SN || 0) / 2}%` }"
                ></div>
              </div>
            </div>
          </div>

          <!-- TF维度 -->
          <div class="dimension-item">
            <div class="dimension-title">
              <span>情感 (F)</span>
              <span class="dimension-score">{{ dimensionScores?.TF || 0 }}%</span>
              <span>思维 (T)</span>
            </div>
            <div class="dimension-bar">
              <div class="scale-marks">
                <span v-for="n in 11" :key="n">{{ (n - 6) * 10 }}</span>
              </div>
              <div class="bar-container">
                <div class="bar-indicator"
                  :style="{ left: `${50 + (dimensionScores?.TF || 0) / 2}%` }"
                ></div>
              </div>
            </div>
          </div>

          <!-- JP维度 -->
          <div class="dimension-item">
            <div class="dimension-title">
              <span>知觉 (P)</span>
              <span class="dimension-score">{{ dimensionScores?.JP || 0 }}%</span>
              <span>判断 (J)</span>
            </div>
            <div class="dimension-bar">
              <div class="scale-marks">
                <span v-for="n in 11" :key="n">{{ (n - 6) * 10 }}</span>
              </div>
              <div class="bar-container">
                <div class="bar-indicator"
                  :style="{ left: `${50 + (dimensionScores?.JP || 0) / 2}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="description">
        <h3>性格特征描述：</h3>
        <p>{{ typeInfo.description }}</p>

        <div class="traits">
          <div class="strengths">
            <h4>优势特点：</h4>
            <ul>
              <li v-for="strength in typeInfo.strengths" :key="strength">
                {{ strength }}
              </li>
            </ul>
          </div>

          <div class="weaknesses">
            <h4>发展建议：</h4>
            <ul>
              <li v-for="weakness in typeInfo.weaknesses" :key="weakness">
                {{ weakness }}
              </li>
            </ul>
          </div>
        </div>

        <div class="careers">
          <h4>适合的职业方向：</h4>
          <div class="career-list">
            <span 
              v-for="career in typeInfo.careers" 
              :key="career"
              class="career-item"
            >
              {{ career }}
            </span>
          </div>
        </div>
      </div>

      <div class="actions">
        <el-button type="primary" @click="exportPDF">
          导出PDF报告
        </el-button>
        <el-button @click="retakeTest">
          重新测试
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quiz'
import * as echarts from 'echarts'
import { jsPDF } from 'jspdf'
import { getTypeDescription } from '../data/mbtiDescriptions'
import { ElMessage } from 'element-plus'
import html2canvas from 'html2canvas'

const router = useRouter()
const quizStore = useQuizStore()
const chartRef = ref<HTMLElement>()

const hasResult = computed(() => quizStore.result !== null)
const mbtiType = computed(() => quizStore.finalResult || 'UNKNOWN')
const typeInfo = computed(() => {
  const info = getTypeDescription(mbtiType.value);
  console.log('MBTI Type:', mbtiType.value);
  console.log('Type Info:', info);
  return info;
});

onMounted(() => {
  if (!hasResult.value) {
    router.push('/')
    return
  }

  if (chartRef.value && quizStore.result) {
    const chart = echarts.init(chartRef.value)
    const scores = quizStore.dimensionScores
    
    const option = {
      radar: {
        indicator: [
          { name: 'E-I', max: 40 },
          { name: 'S-N', max: 40 },
          { name: 'T-F', max: 40 },
          { name: 'J-P', max: 40 }
        ],
        shape: 'circle',
      },
      series: [{
        type: 'radar',
        data: [{
          value: [
            scores?.EI || 0,
            scores?.SN || 0,
            scores?.TF || 0,
            scores?.JP || 0
          ],
          name: mbtiType.value,
          areaStyle: {
            color: 'rgba(64, 158, 255, 0.3)'
          },
          lineStyle: {
            color: '#409EFF'
          },
          itemStyle: {
            color: '#409EFF'
          }
        }]
      }]
    }
    
    chart.setOption(option)
  }
})

const retakeTest = () => {
  quizStore.resetQuiz()
  router.push('/')
}

const exportPDF = async () => {
  const element = document.querySelector('.result-card')
  const actionsElement = document.querySelector('.actions')
  if (!element || !actionsElement) return

  try {
    // 临时隐藏操作按钮
    const originalDisplay = actionsElement.style.display
    actionsElement.style.display = 'none'

    // A4 尺寸（以点为单位）
    const pageWidth = 595.28
    const pageHeight = 841.89
    const margin = 40

    // 设置导出样式
    const originalStyle = element.getAttribute('style') || ''
    element.setAttribute('style', `
      ${originalStyle}
      width: ${pageWidth - margin * 2}px !important;
      padding: ${margin}px !important;
      background: white;
    `)

    // 渲染内容
    const canvas = await html2canvas(element as HTMLElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    })

    // 计算缩放比例以适应页面宽度
    const imgWidth = pageWidth - margin * 2
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // 创建PDF（使用自定义高度）
    const pdf = new jsPDF({
      unit: 'pt',
      format: [pageWidth, Math.max(pageHeight, imgHeight + margin * 2)],
      orientation: 'p'
    })

    // 添加内容
    const imgData = canvas.toDataURL('image/jpeg', 1.0)
    pdf.addImage(imgData, 'JPEG', margin, margin, imgWidth, imgHeight)

    // 恢复原始样式和显示
    element.setAttribute('style', originalStyle)
    actionsElement.style.display = originalDisplay

    // 保存文件
    pdf.save(`MBTI-${mbtiType.value}-测试结果.pdf`)
    ElMessage.success('PDF导出成功！')
  } catch (error) {
    console.error('PDF导出失败：', error)
    ElMessage.error('PDF导出失败，请重试')
    // 确保在出错时也恢复按钮显示
    if (actionsElement) {
      actionsElement.style.display = 'flex'
    }
  }
}
</script>

<style scoped>
.result {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.result-card {
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.type-info {
  text-align: center;
  margin-bottom: 2.5rem;
}

.type-info h2 {
  font-size: 1.8rem;
  color: #303133;
  margin-bottom: 1rem;
}

.type-info h3 {
  font-size: 1.4rem;
  color: #409EFF;
}

.charts {
  margin: 2rem 0;
}

.description {
  margin: 2rem 0;
}

.description p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #606266;
  text-align: justify;
}

.traits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.careers {
  margin: 2rem 0;
}

.career-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.career-item {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: #f0f9eb;
  color: #67c23a;
  border: 1px solid #b3e19d;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
}

.career-tag {
  margin: 0.5rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

h3 {
  color: #409EFF;
  margin-bottom: 1rem;
}

h4 {
  margin-bottom: 1rem;
  color: #606266;
}

p {
  line-height: 1.6;
  color: #606266;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  margin: 0.8rem 0;
  color: #606266;
  line-height: 1.6;
  padding-left: 1.5rem;
  position: relative;
}

li::before {
  content: "•";
  color: #409EFF;
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .traits {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.dimension-analysis {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

.dimension-charts {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
}

.dimension-item {
  width: 100%;
}

.dimension-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #606266;
  font-weight: 500;
}

.dimension-score {
  color: #409EFF;
  font-weight: bold;
  font-size: 1.1rem;
  min-width: 60px;
  text-align: center;
}

.dimension-bar {
  position: relative;
  margin: 1.5rem 0;
}

.scale-marks {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #909399;
  font-size: 0.8rem;
}

.bar-container {
  height: 8px;
  background: #E4E7ED;
  border-radius: 4px;
  position: relative;
}

.bar-indicator {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #409EFF;
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: left 0.3s ease;
}

.bar-container::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #909399;
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .dimension-analysis {
    padding: 1.5rem;
  }

  .dimension-charts {
    gap: 1.5rem;
  }

  .scale-marks {
    font-size: 0.7rem;
  }
}
</style> 