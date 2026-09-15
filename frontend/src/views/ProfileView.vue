<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-5xl font-black tracking-tighter text-white mb-10 italic drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">OPERATOR_DOSSIER</h1>
    
    <div v-if="userStore.user" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Profile Info -->
      <div class="bg-[var(--color-cyber-panel)] cyber-border p-10 relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]">
        <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-[var(--color-cyber-cyan)] opacity-10 rotate-45 pointer-events-none"></div>
        
        <div class="relative z-10">
          <p class="text-lg mb-6 text-[var(--color-cyber-cyan)] font-mono">CALLSIGN // <span class="font-black text-white text-3xl tracking-widest ml-4 italic">{{ userStore.user.username }}</span></p>
          <p class="text-lg text-[var(--color-cyber-cyan)] font-mono flex items-center">
            FUNDS // 
            <span class="font-black text-white text-3xl ml-4 bg-[#050810] px-4 py-2 cyber-border-magenta shadow-inner">${{ userStore.user.balance.toFixed(2) }}</span>
          </p>
          
          <button @click="topup" class="mt-12 cyber-button px-8 py-3 text-lg">
            REQUEST FUNDING (+$100)
          </button>
        </div>
      </div>

      <!-- Settings & Steam -->
      <div class="bg-[var(--color-cyber-panel)] cyber-border p-10 relative overflow-hidden shadow-[0_0_30px_rgba(255,0,60,0.1)]">
        <div class="relative z-10">
          <h2 class="text-2xl font-black text-white mb-6 italic tracking-widest border-b border-[var(--color-cyber-magenta)] pb-2">CONNECTIONS</h2>
          
          <!-- Steam Link -->
          <div class="mb-8">
            <p class="text-sm text-gray-400 font-mono mb-2">STEAM_ACCOUNT_STATUS</p>
            <div v-if="userStore.user.steamId" class="text-[var(--color-cyber-cyan)] font-black text-lg flex items-center">
              [ LINKED: {{ userStore.user.steamId }} ]
            </div>
            <button v-else @click="mockLinkSteam" class="cyber-button-cyan px-6 py-2 text-sm w-full">
              LINK STEAM ACCOUNT (MOCK)
            </button>
          </div>

          <!-- Trade URL -->
          <div>
            <p class="text-sm text-gray-400 font-mono mb-2">TRADE_URL</p>
            <form @submit.prevent="saveTradeUrl" class="flex flex-col space-y-3">
              <input 
                v-model="tradeUrlInput" 
                type="text" 
                placeholder="https://steamcommunity.com/tradeoffer/new/..." 
                class="w-full p-2 bg-[#050810] border border-[var(--color-cyber-cyan)]/50 text-[var(--color-cyber-cyan)] text-xs font-mono outline-none focus:border-[var(--color-cyber-cyan)] focus:shadow-[0_0_10px_rgba(0,240,255,0.3)]"
              />
              <button class="bg-[#050810] border border-[var(--color-cyber-magenta)] text-[var(--color-cyber-magenta)] font-black py-2 hover:bg-[var(--color-cyber-magenta)] hover:text-white transition-colors">
                SAVE URL
              </button>
              <p v-if="tradeMsg" class="text-[var(--color-cyber-cyan)] text-xs font-mono">{{ tradeMsg }}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-20 text-[var(--color-cyber-magenta)] font-black text-2xl cyber-glitch">
      <p>ACCESS DENIED. PLEASE CONNECT TO NODE.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useUserStore } from '../store/user';

const userStore = useUserStore();
const tradeUrlInput = ref('');
const tradeMsg = ref('');

// Pre-fill trade URL if it exists
watch(() => userStore.user, (newUser) => {
  if (newUser?.tradeUrl) {
    tradeUrlInput.value = newUser.tradeUrl;
  }
}, { immediate: true });

const topup = async () => {
  try {
    const res = await axios.post('http://localhost:3000/api/auth/topup', { amount: 100 }, {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    userStore.user.balance = res.data.balance;
  } catch (e) {
    alert('FAILED TO ACQUIRE FUNDS');
  }
};

const mockLinkSteam = async () => {
  try {
    const res = await axios.post('http://localhost:3000/api/settings/mock-link-steam', {}, {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    userStore.user.steamId = res.data.steamId;
    alert(res.data.message);
  } catch (e) {
    alert('FAILED TO LINK STEAM');
  }
};

const saveTradeUrl = async () => {
  try {
    tradeMsg.value = 'SAVING...';
    const res = await axios.post('http://localhost:3000/api/settings/trade-url', { tradeUrl: tradeUrlInput.value }, {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    userStore.user.tradeUrl = res.data.tradeUrl;
    tradeMsg.value = 'DATA SAVED SUCCESSFULLY';
    setTimeout(() => tradeMsg.value = '', 3000);
  } catch (e: any) {
    tradeMsg.value = 'ERR: ' + (e.response?.data?.error || 'INVALID URL');
  }
};
</script>
