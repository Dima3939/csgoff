<template>
  <div class="p-8 max-w-6xl mx-auto">
    <div class="flex items-center justify-between mb-8 border-b border-[var(--color-cyber-magenta)]/30 pb-4">
      <h1 class="text-5xl font-black tracking-tighter text-white italic drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">ROOT_ACCESS // OVERSEER</h1>
    </div>

    <div v-if="loading" class="text-[var(--color-cyber-cyan)] font-mono animate-pulse">BYPASSING FIREWALL...</div>
    <div v-else-if="error" class="text-[var(--color-cyber-magenta)] font-black text-2xl cyber-glitch">{{ error }}</div>
    <div v-else>
      
      <!-- STATS -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="bg-[var(--color-cyber-panel)] cyber-border p-6 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
           <p class="text-[var(--color-cyber-cyan)] font-mono text-sm">TOTAL_OPERATORS</p>
           <p class="text-4xl text-white font-black italic">{{ stats.totalUsers }}</p>
        </div>
        <div class="bg-[var(--color-cyber-panel)] cyber-border p-6 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
           <p class="text-[var(--color-cyber-cyan)] font-mono text-sm">CRATES_DECRYPTED</p>
           <p class="text-4xl text-white font-black italic">{{ stats.totalCasesOpened }}</p>
        </div>
        <div class="bg-[var(--color-cyber-panel)] cyber-border-magenta p-6 shadow-[0_0_20px_rgba(255,0,60,0.1)]">
           <p class="text-[var(--color-cyber-magenta)] font-mono text-sm">CIRCULATING_FUNDS</p>
           <p class="text-4xl text-white font-black italic">${{ stats.totalUserBalance?.toFixed(2) }}</p>
        </div>
      </div>

      <!-- CASE CREATOR -->
      <h2 class="text-2xl font-black text-[var(--color-cyber-magenta)] tracking-widest italic mb-6">> DEPLOY_NEW_CRATE</h2>
      <div class="bg-[var(--color-cyber-panel)] cyber-border-magenta p-6 mb-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input v-model="newCase.name" placeholder="CRATE_NAME (e.g. NEON CASE)" class="p-2 bg-[#050810] border border-[var(--color-cyber-magenta)]/50 text-[var(--color-cyber-magenta)] font-bold outline-none" />
          <input v-model="newCase.price" type="number" placeholder="PRICE_IN_CREDITS (e.g. 2.50)" class="p-2 bg-[#050810] border border-[var(--color-cyber-magenta)]/50 text-[var(--color-cyber-magenta)] font-bold outline-none" />
          <input v-model="newCase.image" placeholder="IMAGE_URL" class="p-2 bg-[#050810] border border-[var(--color-cyber-magenta)]/50 text-[var(--color-cyber-magenta)] font-bold outline-none" />
        </div>

        <p class="text-[var(--color-cyber-cyan)] font-mono text-sm mb-4">ASSIGN_ASSETS_AND_PROBABILITIES (SUM MUST BE 1.0 FOR 100%)</p>
        
        <div v-for="(ci, index) in newCase.items" :key="index" class="flex items-center space-x-4 mb-2">
          <select v-model="ci.itemId" class="p-2 bg-[#050810] border border-[var(--color-cyber-cyan)]/50 text-[var(--color-cyber-cyan)] outline-none flex-grow">
            <option disabled value="">Select Asset...</option>
            <option v-for="item in allItems" :key="item.id" :value="item.id">
              {{ item.name }} (${{ item.price }})
            </option>
          </select>
          <input v-model="ci.chance" type="number" step="0.01" placeholder="CHANCE (0.1 = 10%)" class="p-2 bg-[#050810] border border-[var(--color-cyber-cyan)]/50 text-[var(--color-cyber-cyan)] w-32 outline-none" />
          <button @click="newCase.items.splice(index, 1)" class="bg-red-900 text-white px-3 py-2 font-bold hover:bg-red-700">X</button>
        </div>

        <div class="flex space-x-4 mt-6">
          <button @click="newCase.items.push({ itemId: '', chance: 0 })" class="cyber-button-cyan px-4 py-2 text-sm">+ ADD SLOT</button>
          <button @click="createCase" class="cyber-button px-6 py-2 text-sm font-black tracking-widest">DEPLOY CRATE</button>
        </div>
        <p v-if="caseMsg" class="mt-4 text-[var(--color-cyber-cyan)] font-mono">{{ caseMsg }}</p>
      </div>

      <!-- USERS LIST -->
      <h2 class="text-2xl font-black text-[var(--color-cyber-cyan)] tracking-widest italic mb-6">> USER_DATABASE</h2>
      <div class="bg-[#050810] cyber-border p-1 overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-[var(--color-cyber-panel)] border-b border-[var(--color-cyber-cyan)]/30 text-[var(--color-cyber-cyan)] font-mono text-xs">
              <th class="p-3">ID</th>
              <th class="p-3">CALLSIGN</th>
              <th class="p-3">ROLE</th>
              <th class="p-3">STEAM_ID</th>
              <th class="p-3">BALANCE</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr v-for="u in users" :key="u.id" class="border-b border-[var(--color-cyber-cyan)]/10 hover:bg-[var(--color-cyber-panel)]/50 transition-colors">
              <td class="p-3 text-gray-500 font-mono">#{{ u.id }}</td>
              <td class="p-3 font-bold text-white">{{ u.username }}</td>
              <td class="p-3">
                <span :class="u.role === 'admin' ? 'text-[var(--color-cyber-magenta)] font-bold' : 'text-gray-400'">{{ u.role.toUpperCase() }}</span>
              </td>
              <td class="p-3 text-[var(--color-cyber-cyan)] font-mono">{{ u.steamId || 'NULL' }}</td>
              <td class="p-3 text-green-400 font-black">${{ u.balance.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useUserStore } from '../store/user';

const userStore = useUserStore();
const loading = ref(true);
const error = ref('');
const stats = ref<any>({});
const users = ref<any[]>([]);
const allItems = ref<any[]>([]);

const newCase = ref({
  name: '',
  price: '',
  image: '',
  items: [{ itemId: '' as any, chance: 0.5 }]
});
const caseMsg = ref('');

onMounted(async () => {
  if (!userStore.token || userStore.user?.role !== 'admin') {
    error.value = 'ERR_UNAUTHORIZED: NOT ROOT';
    loading.value = false;
    return;
  }

  try {
    const resStats = await axios.get('http://localhost:3000/api/admin/stats', {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    stats.value = resStats.data;

    const resUsers = await axios.get('http://localhost:3000/api/admin/users', {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    users.value = resUsers.data;

    const resItems = await axios.get('http://localhost:3000/api/admin/items', {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    allItems.value = resItems.data;

  } catch (e: any) {
    error.value = 'ACCESS DENIED';
  } finally {
    loading.value = false;
  }
});

const createCase = async () => {
  try {
    caseMsg.value = 'DEPLOYING...';
    await axios.post('http://localhost:3000/api/admin/cases', newCase.value, {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    caseMsg.value = 'CRATE DEPLOYED SUCCESSFULLY!';
    newCase.value = { name: '', price: '', image: '', items: [{ itemId: '', chance: 0.5 }] };
    setTimeout(() => caseMsg.value = '', 3000);
  } catch (e: any) {
    caseMsg.value = 'ERR: ' + (e.response?.data?.error || 'FAILED TO DEPLOY');
  }
};
</script>
