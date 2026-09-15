<template>
  <div class="p-8 max-w-5xl mx-auto">
    <h1 class="text-5xl font-black tracking-tighter text-white mb-8 italic drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">DATA_INVENTORY</h1>
    
    <div v-if="loading" class="text-[var(--color-cyber-cyan)] font-mono animate-pulse">EXTRACTING DATA...</div>
    <div v-else-if="error" class="text-[var(--color-cyber-magenta)] font-black">{{ error }}</div>
    <div v-else>
      <div class="mb-10 flex items-center justify-between bg-[var(--color-cyber-panel)] cyber-border p-6 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
        <p class="text-[var(--color-cyber-cyan)] font-black tracking-widest text-lg">
          FILES_FOUND: <span class="text-white">{{ items.length }}</span>
        </p>
        <p class="text-[var(--color-cyber-cyan)] font-black tracking-widest text-lg">
          TOTAL_VALUE: <span class="bg-[#050810] px-4 py-2 text-white cyber-border border-opacity-50">${{ totalValue.toFixed(2) }}</span>
        </p>
      </div>

      <div v-if="items.length === 0" class="text-center py-24 text-[var(--color-cyber-cyan)]/50 font-mono text-xl cyber-border border-dashed">
        NO ASSETS FOUND. DECRYPT CRATES TO AQUIRE DATA.
      </div>

      <div v-else class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div 
          v-for="inv in items" 
          :key="inv.id" 
          class="bg-[var(--color-cyber-panel)] flex flex-col justify-between relative group hover:scale-[1.05] transition-transform duration-300 shadow-lg"
          :class="getColorClass(inv.item.rarity)"
        >
          <!-- Price tag -->
          <div class="absolute top-0 right-0 bg-[#050810] px-3 py-1 text-[var(--color-cyber-cyan)] font-black text-sm cyber-border border-t-0 border-r-0 z-10">
            ${{ inv.item.price.toFixed(2) }}
          </div>
          
          <div class="p-6 flex-grow flex items-center justify-center relative">
            <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-cyber-dark)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img :src="inv.item.image" class="w-full h-24 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] relative z-10" />
          </div>
          
          <div class="bg-[#050810] p-3 text-center relative z-10 cyber-border-magenta border-opacity-20 border-x-0 border-b-0">
            <p class="font-black text-xs text-white uppercase italic truncate">{{ inv.item.name }}</p>
          </div>

          <!-- Hover actions -->
          <div class="absolute inset-0 bg-[#050810]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
             <button 
                @click="sellItem(inv.id)" 
                class="cyber-button-cyan px-6 py-2 text-sm"
             >
                LIQUIDATE
             </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useUserStore } from '../store/user';

const userStore = useUserStore();
const items = ref<any[]>([]);
const loading = ref(true);
const error = ref('');

const totalValue = computed(() => {
  return items.value.reduce((sum, inv) => sum + inv.item.price, 0);
});

const loadInventory = async () => {
  if (!userStore.token) {
    error.value = 'ACCESS DENIED';
    loading.value = false;
    return;
  }
  try {
    const res = await axios.get('http://localhost:3000/api/inventory', {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    items.value = res.data;
  } catch (e: any) {
    error.value = e.response?.data?.error || 'FAILED TO LOAD ARMORY';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadInventory();
});

const sellItem = async (id: number) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/inventory/${id}/sell`, {}, {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    items.value = items.value.filter(i => i.id !== id);
    userStore.user.balance = res.data.balance;
  } catch (e: any) {
    alert(e.response?.data?.error || 'FAILED TO SELL ITEM');
  }
};

const getColorClass = (rarity: string) => {
  const map: any = { blue: 'cyber-blue', purple: 'cyber-purple', pink: 'cyber-pink', red: 'cyber-red', gold: 'cyber-gold' };
  return map[rarity] || 'cyber-blue';
};
</script>
