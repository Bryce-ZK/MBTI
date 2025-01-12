<template>
  <div class="quiz">
    <div class="progress-container">
      <h2 class="progress-text">进度: {{ currentQuestionIndex + 1 }}/{{ quizStore.currentQuestions.length }}</h2>
      <el-progress :percentage="progressPercentage" :format="format" />
    </div>
    
    <div class="question-card">
      <h2 class="question-text">{{ currentQuestion.text }}</h2>
      
      <div class="options">
        <el-radio-group 
          v-model="selectedAnswer" 
          class="option-group"
          @change="handleAnswerSelect"
        >
          <el-radio 
            v-for="(option, index) in currentQuestion.options" 
            :key="index"
            :label="option.score"
            class="option-item"
          >
            {{ option.text }}
          </el-radio>
        </el-radio-group>
      </div>
      
      <div class="hint" v-if="showHint">
        <el-alert
          title="已选择答案，即将进入下一题..."
          type="success"
          :closable="false"
          show-icon
        />
      </div>
    </div>

    <div class="questions-panel">
      <h3>题目列表</h3>
      <div class="questions-list">
        <div
          v-for="(question, index) in quizStore.currentQuestions"
          :key="index"
          class="question-item"
          :class="{
            'answered': quizStore.answers[index] !== undefined,
            'current': index === currentQuestionIndex
          }"
          @click="jumpToQuestion(index)"
        >
          <span class="question-number">{{ index + 1 }}</span>
          <span class="question-status">
            {{ getQuestionStatus(index) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.progress-container {
  margin-bottom: 2rem;
}

.progress-text {
  color: #606266;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.question-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.question-text {
  color: #303133;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  text-align: center;
}

.options {
  margin: 2rem auto;
  max-width: 600px;
  display: flex;
  justify-content: center;
}

.option-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  align-items: flex-start;
}

.option-item {
  margin: 0;
  padding: 1.2rem 1.5rem;
  border: 1px solid #DCDFE6;
  border-radius: 8px;
  transition: all 0.1s ease;
  height: auto;
  cursor: pointer;
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

.option-item:not(:has(.el-radio__input.is-checked)):hover {
  background-color: #f5f7fa;
  border-color: #409EFF;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

:deep(.el-radio) {
  width: 100%;
  margin-right: 0;
  display: flex;
  align-items: flex-start;
}

:deep(.el-radio__input) {
  align-self: flex-start;
  margin-top: 0.25rem;
  white-space: nowrap;
}

:deep(.el-radio__label) {
  white-space: normal;
  line-height: 1.5;
  font-size: 1.1rem;
  padding-left: 1rem;
  color: #303133;
  flex: 1;
  display: block;
}

:deep(.el-radio__input.is-checked + .el-radio__label) {
  color: #409EFF;
  font-weight: 500;
}

.option-item:has(.el-radio__input.is-checked) {
  background-color: #ecf5ff;
  border-color: #409EFF;
}

.hint {
  margin-top: 2rem;
  text-align: center;
}

.el-radio-group {
  transition: opacity 0.1s ease;
}

.el-radio-group:has(.el-radio__input.is-checked) {
  opacity: 0.7;
  pointer-events: none;
}

.actions {
  text-align: center;
  margin-top: 3rem;
}

.el-button {
  min-width: 150px;
  padding: 12px 30px;
  font-size: 1.1rem;
}

.questions-panel {
  margin-top: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.questions-panel h3 {
  color: #303133;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
}

.questions-list {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
}

.question-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.question-item:hover {
  background-color: #f5f7fa;
  transform: translateY(-2px);
}

.question-item.answered {
  background-color: #f0f9eb;
  border-color: #67c23a;
}

.question-item.current {
  background-color: #ecf5ff;
  border-color: #409EFF;
}

.question-number {
  font-size: 0.9rem;
  font-weight: 500;
  color: #303133;
  margin-bottom: 2px;
}

.question-status {
  font-size: 0.7rem;
  color: #909399;
}

.question-item.answered .question-status {
  color: #67c23a;
}

.question-item.current .question-status {
  color: #409EFF;
}

@media (max-width: 768px) {
  .quiz {
    padding: 15px;
  }

  .question-card {
    padding: 1.5rem;
  }

  .question-text {
    font-size: 1.2rem;
  }

  .options {
    margin: 1.5rem auto;
  }

  .option-item {
    padding: 1rem 1.2rem;
  }

  :deep(.el-radio__label) {
    font-size: 1rem;
  }

  .questions-list {
    grid-template-columns: repeat(10, 1fr);
    gap: 8px;
  }
  
  .question-number {
    font-size: 0.8rem;
  }
  
  .question-status {
    font-size: 0.6rem;
  }
}

@media (max-width: 480px) {
  .quiz {
    padding: 10px;
  }

  .question-card {
    padding: 1.2rem;
  }

  .options {
    margin: 1rem auto;
  }

  .option-item {
    padding: 0.8rem 1rem;
  }

  .questions-list {
    grid-template-columns: repeat(8, 1fr);
    gap: 6px;
  }

  .question-item {
    padding: 4px;
  }

  .question-number {
    font-size: 0.75rem;
  }

  .question-status {
    font-size: 0.55rem;
  }
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quiz'

const router = useRouter()
const quizStore = useQuizStore()
const selectedAnswer = ref<number | null>(null)
const showHint = ref(false)

const currentQuestionIndex = computed(() => quizStore.currentQuestionIndex)
const currentQuestion = computed(() => quizStore.currentQuestions[currentQuestionIndex.value])
const isLastQuestion = computed(() => currentQuestionIndex.value === quizStore.currentQuestions.length - 1)
const progressPercentage = computed(() => quizStore.progress)

const format = (percentage: number) => `${percentage.toFixed(0)}%`

const handleAnswerSelect = () => {
  showHint.value = true;
  
  setTimeout(() => {
    if (selectedAnswer.value === null) return;
    
    quizStore.submitAnswer(selectedAnswer.value);
    selectedAnswer.value = null;
    showHint.value = false;
    
    if (isLastQuestion.value) {
      quizStore.calculateResult();
      console.log('Last question answered, navigating to result');
      console.log('Current result:', quizStore.result);
      
      setTimeout(() => {
        router.push('/result').catch(err => {
          console.error('Navigation failed:', err);
        });
      }, 800);
    }
  }, 800);
}

const jumpToQuestion = (index: number) => {
  quizStore.currentQuestionIndex = index;
  selectedAnswer.value = quizStore.answers[index] || null;
}

const getQuestionStatus = (index: number) => {
  if (index === currentQuestionIndex.value) {
    return '当前题目';
  }
  return quizStore.answers[index] !== undefined ? '已作答' : '未作答';
}
</script> 