<template>
  <div class="home">
    <h1 class="title">MBTI 职业性格测试</h1>
    <div class="version-select">
      <h3>请选择测试版本：</h3>
      <el-radio-group v-model="selectedVersion" class="version-options">
        <el-radio label="standard">标准版（93题）</el-radio>
        <el-radio label="professional">专业版（144题）</el-radio>
      </el-radio-group>
      
      <!-- 版本说明卡片 -->
      <div class="version-info">
        <div v-if="selectedVersion === 'standard'" class="version-card">
          <h4>标准版特点：</h4>
          <ul>
            <li>题目数量：93题</li>
            <li>测试时长：约15-20分钟</li>
            <li>适用人群：
              <ul>
                <li>首次了解MBTI性格测试的人</li>
                <li>时间较为紧张的测试者</li>
                <li>想要快速了解自己性格类型的人</li>
              </ul>
            </li>
            <li>测试结果：包含基础的性格类型分析和职业建议</li>
          </ul>
        </div>
        
        <div v-else class="version-card">
          <h4>专业版特点：</h4>
          <ul>
            <li>题目数量：144题</li>
            <li>测试时长：约25-30分钟</li>
            <li>适用人群：
              <ul>
                <li>需要深入了解自己性格特征的人</li>
                <li>正在进行职业规划的求职者</li>
                <li>希望获得更准确测试结果的人</li>
              </ul>
            </li>
            <li>测试结果：提供更详细的维度分析和职业发展建议</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="description">
      <h2>测试说明</h2>
      <p>本测试旨在帮助您了解自己的性格类型和职业倾向。</p>
      <p>测试过程中：</p>
      <ul>
        <li>请根据第一感觉选择最符合您的选项</li>
        <li>没有对错之分，请如实回答</li>
        <li>每个问题都有两个选项，选择更符合您的一项</li>
        <li>测试涵盖四个维度：
          <ul>
            <li>外向-内向 (E-I)：关注能量来源和注意力方向</li>
            <li>感觉-直觉 (S-N)：信息收集和处理方式</li>
            <li>思维-情感 (T-F)：决策时的考虑因素</li>
            <li>判断-知觉 (J-P)：对外部世界的处理方式</li>
          </ul>
        </li>
        <li>测试预计用时：{{ selectedVersion === 'standard' ? '15-20' : '25-30' }}分钟</li>
      </ul>
    </div>
    <div class="actions">
      <el-button type="primary" size="large" @click="startTest">开始测试</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useVersionStore } from '../stores/version'
import type { TestVersion } from '../stores/version'

const router = useRouter()
const versionStore = useVersionStore()
const selectedVersion = ref<TestVersion>('standard')

const startTest = () => {
  versionStore.setVersion(selectedVersion.value)
  router.push('/quiz')
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.title {
  color: #409EFF;
  margin-bottom: 2rem;
}

.version-select {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f5f7fa;
  border-radius: 8px;
}

.version-options {
  margin-top: 1rem;
}

.description {
  text-align: left;
  margin: 2rem 0;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.description h2 {
  color: #303133;
  margin-bottom: 1rem;
}

.description ul {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.description li {
  margin: 0.5rem 0;
  color: #606266;
}

.actions {
  margin-top: 2rem;
}

.version-info {
  margin-top: 1.5rem;
}

.version-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  text-align: left;
}

.version-card h4 {
  color: #409EFF;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: left;
}

.version-card ul {
  list-style: none;
  padding-left: 0;
  text-align: left;
}

.version-card ul ul {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
  text-align: left;
}

.version-card li {
  margin: 0.8rem 0;
  color: #606266;
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;
  text-align: left;
}

.version-card li::before {
  content: "•";
  color: #409EFF;
  position: absolute;
  left: 0;
}

.version-card ul ul li::before {
  content: "-";
}

@media (max-width: 768px) {
  .version-card {
    padding: 1.2rem;
  }
  
  .version-card h4 {
    font-size: 1rem;
  }
  
  .version-card li {
    font-size: 0.9rem;
  }
}
</style> 