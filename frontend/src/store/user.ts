import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as any,
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    setUser(user: any, token: string) {
      this.user = user;
      this.token = token;
      localStorage.setItem('token', token);
    },
    logout() {
      this.user = null;
      this.token = '';
      localStorage.removeItem('token');
    }
  }
});
