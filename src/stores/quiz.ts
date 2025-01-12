import { defineStore } from 'pinia';
import type { Question, TestResult } from '../types/mbti';
import { questions } from '../data/questions';
import { professionalQuestions } from '../data/professionalQuestions';
import { useVersionStore } from './version';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    currentQuestionIndex: 0,
    answers: [] as number[],
    result: null as TestResult | null,
  }),
  
  getters: {
    currentQuestions(): Question[] {
      const versionStore = useVersionStore();
      return versionStore.currentVersion === 'standard' ? questions : professionalQuestions;
    },
    
    progress: (state) => (state.currentQuestionIndex / state.currentQuestions.length) * 100,
    isFinished: (state) => state.currentQuestionIndex >= state.currentQuestions.length,
    
    finalResult: (state) => {
      if (!state.result) {
        console.log('No result available');
        return null;
      }
      
      const getType = (a: number, b: number) => a >= b;
      const result = state.result;
      
      let mbtiType = '';
      mbtiType += getType(result.E, result.I) ? 'E' : 'I';
      mbtiType += getType(result.S, result.N) ? 'S' : 'N';
      mbtiType += getType(result.T, result.F) ? 'T' : 'F';
      mbtiType += getType(result.J, result.P) ? 'J' : 'P';
      
      return mbtiType;
    },

    dimensionScores: (state) => {
      if (!state.result) return null;
      
      return {
        EI: state.result.E - state.result.I,
        SN: state.result.S - state.result.N,
        TF: state.result.T - state.result.F,
        JP: state.result.J - state.result.P
      };
    }
  },
  
  actions: {
    submitAnswer(answer: number) {
      this.answers[this.currentQuestionIndex] = answer;
      this.currentQuestionIndex++;
      
      if (this.isFinished) {
        this.calculateResult();
      }
    },
    
    calculateResult() {
      const result: TestResult = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
      };
      
      this.answers.forEach((answer, index) => {
        const question = this.currentQuestions[index];
        if (!question) {
          console.error(`Question not found for index ${index}`);
          return;
        }

        switch (question.category) {
          case 'EI':
            answer > 0 ? result.E += Math.abs(answer) : result.I += Math.abs(answer);
            break;
          case 'SN':
            answer > 0 ? result.S += Math.abs(answer) : result.N += Math.abs(answer);
            break;
          case 'TF':
            answer > 0 ? result.T += Math.abs(answer) : result.F += Math.abs(answer);
            break;
          case 'JP':
            answer > 0 ? result.J += Math.abs(answer) : result.P += Math.abs(answer);
            break;
        }
      });
      
      this.result = result;
      this.saveToLocalStorage();
    },
    
    resetQuiz() {
      this.currentQuestionIndex = 0;
      this.answers = [];
      this.result = null;
      localStorage.removeItem('quizState');
    },

    saveToLocalStorage() {
      const state = {
        currentQuestionIndex: this.currentQuestionIndex,
        answers: this.answers,
        result: this.result
      };
      localStorage.setItem('quizState', JSON.stringify(state));
    },

    loadFromLocalStorage() {
      const savedState = localStorage.getItem('quizState');
      if (savedState) {
        const state = JSON.parse(savedState);
        this.currentQuestionIndex = state.currentQuestionIndex;
        this.answers = state.answers;
        this.result = state.result;
      }
    }
  }
}); 