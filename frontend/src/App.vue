<template>
  <div class="min-h-screen flex flex-col font-sans bg-[var(--color-cyber-bg)]">
    <!-- Header -->
    <header class="bg-[var(--color-cyber-dark)] border-b border-[var(--color-cyber-cyan)]/30 p-4 shadow-[0_0_20px_rgba(0,240,255,0.1)] flex justify-between items-center relative z-50">
      <router-link to="/" class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyber-cyan)] to-[var(--color-cyber-magenta)] tracking-tighter italic cyber-glitch">
        NEON_DROP
      </router-link>
      <div class="flex items-center space-x-6 text-sm font-bold uppercase tracking-wide">
        <router-link to="/" class="hover:text-[var(--color-cyber-cyan)] transition">Terminal</router-link>
        
        <template v-if="!isAuthReady">
          <span class="text-[var(--color-cyber-cyan)] animate-pulse">SYNCING...</span>
        </template>
        <template v-else-if="userStore.user">
          <router-link v-if="userStore.user.role === 'admin'" to="/admin" class="text-[var(--color-cyber-magenta)] font-bold italic border-b border-[var(--color-cyber-magenta)] hover:bg-[var(--color-cyber-magenta)] hover:text-white px-2 transition">OVERSEER</router-link>
          
          <div class="bg-[var(--color-cyber-panel)] px-4 py-2 cyber-border text-[var(--color-cyber-cyan)] font-black text-lg">
            ${{ userStore.user.balance.toFixed(2) }}
          </div>
          <router-link to="/inventory" class="hover:text-[var(--color-cyber-magenta)] transition">Inventory</router-link>
          <router-link to="/contracts" class="hover:text-[var(--color-cyber-magenta)] transition">Contracts</router-link>
          <router-link to="/profile" class="hover:text-white transition">{{ userStore.user.username }}</router-link>
          <button @click="userStore.logout" class="text-gray-500 hover:text-[var(--color-cyber-magenta)] transition">Disconnect</button>
        </template>
        <template v-else>
          <form @submit.prevent="login" class="flex space-x-2 items-center">
            <input v-model="email" type="email" placeholder="SYS.EMAIL" class="p-1 px-3 bg-[#0a0d14] border border-[var(--color-cyber-cyan)]/50 outline-none focus:border-[var(--color-cyber-cyan)] focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] text-[var(--color-cyber-cyan)] w-40" required />
            <input v-model="password" type="password" placeholder="KEY" class="p-1 px-3 bg-[#0a0d14] border border-[var(--color-cyber-cyan)]/50 outline-none focus:border-[var(--color-cyber-cyan)] focus:shadow-[0_0_10px_rgba(0,240,255,0.3)] text-[var(--color-cyber-cyan)] w-28" required />
            <button class="cyber-button px-5 py-2">ACCESS</button>
          </form>
          <button @click="register" class="cyber-button-cyan px-5 py-2">NEW UPLINK</button>
        </template>
      </div>
    </header>

    <!-- Live Drops Feed -->
    <div class="bg-[var(--color-cyber-panel)] border-b border-[var(--color-cyber-magenta)]/30 p-2 overflow-x-hidden flex space-x-4">
      <div class="inline-flex space-x-2 animate-marquee items-center">
        <span class="text-[var(--color-cyber-magenta)] font-black mr-4 px-2 tracking-widest">LIVE_FEED//</span>
        <div v-for="drop in liveDrops" :key="drop.id" class="flex items-center space-x-3 bg-[var(--color-cyber-dark)] border border-white/5 px-4 py-1 shadow min-w-max">
          <img :src="drop.item.image" class="w-10 h-10 object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]" />
          <div class="flex flex-col text-left">
            <span class="text-[var(--color-cyber-cyan)] text-xs font-mono">{{ drop.user }}</span>
            <span class="font-bold truncate max-w-[150px] text-gray-200 text-xs">{{ drop.item.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="flex-grow relative bg-[radial-gradient(ellipse_at_top,_var(--color-cyber-panel)_0%,_var(--color-cyber-bg)_100%)]">
      <router-view />
    </main>

    <footer class="bg-[var(--color-cyber-dark)] border-t border-[var(--color-cyber-cyan)]/20 p-6 text-center text-[var(--color-cyber-cyan)]/50 text-xs tracking-widest font-mono">
      > NET_NODE: NEON_DROP_2026 // CONNECTION_SECURE
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from './store/user';
import axios from 'axios';
import { io } from 'socket.io-client';

const userStore = useUserStore();
const email = ref('');
const password = ref('password123');
const liveDrops = ref<any[]>([]);
const isAuthReady = ref(false);

onMounted(async () => {
  if (userStore.token && !userStore.user) {
    try {
      const res = await axios.get('http://localhost:3000/api/auth/me', {
        headers: { Authorization: `Bearer ${userStore.token}` }
      });
      userStore.setUser(res.data, userStore.token);
    } catch (e: any) {
      console.error('Auth check failed:', e.response?.data || e.message);
      userStore.logout();
    }
  }
  isAuthReady.value = true;

  const socket = io('http://localhost:3000');
  socket.on('live-drop', (drop) => {
    liveDrops.value.unshift(drop);
    if (liveDrops.value.length > 15) {
      liveDrops.value.pop();
    }
  });
});

const login = async () => {
  try {
    const res = await axios.post('http://localhost:3000/api/auth/login', {
      email: email.value,
      password: password.value
    });
    userStore.setUser(res.data.user, res.data.token);
  } catch (e) {
    alert('Access Denied');
  }
};

const register = async () => {
  try {
    const rand = Math.floor(Math.random() * 10000);
    const u = `CYBER_${rand}`;
    const e = `${u}@net.com`;
    await axios.post('http://localhost:3000/api/auth/register', {
      username: u,
      email: e,
      password: password.value
    });
    email.value = e;
    
    const res = await axios.post('http://localhost:3000/api/auth/login', {
      email: e,
      password: password.value
    });
    userStore.setUser(res.data.user, res.data.token);
  } catch (e) {
    alert('Registration Failed');
  }
};
</script>

<style>
.animate-marquee {
  display: flex;
  min-width: 100%;
}
</style>
