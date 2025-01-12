import { defineStore } from 'pinia';

export type TestVersion = 'standard' | 'professional';

export const useVersionStore = defineStore('version', {
  state: () => ({
    currentVersion: 'standard' as TestVersion
  }),

  actions: {
    setVersion(version: TestVersion) {
      this.currentVersion = version;
    }
  }
}); 