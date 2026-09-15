<template>
  <div class="p-8 max-w-6xl mx-auto">
    <div class="flex items-center justify-between mb-8 border-b border-[var(--color-cyber-cyan)]/30 pb-4">
      <h1 class="text-5xl font-black tracking-tighter text-white italic drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">TRADE_UP // CONTRACT</h1>
      <p class="text-[var(--color-cyber-cyan)] font-mono text-sm max-w-xs text-right">EXCHANGE 10 LOW-TIER ASSETS FOR 1 HIGH-TIER ASSET.</p>
    </div>

    <!-- Contract Status -->
    <div v-if="wonItem" class="mb-10 text-center bg-[var(--color-cyber-panel)] cyber-border shadow-[0_0_50px_rgba(0,240,255,0.2)] p-10 relative overflow-hidden">
       <h2 class="text-4xl text-[var(--color-cyber-cyan)] font-black mb-6 tracking-tighter italic cyber-glitch">NEW ASSET ACQUIRED</h2>
       <div class="flex flex-col items-center z-10 relative">
         <img :src="wonItem.image" class="w-64 h-64 object-contain mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
         <p class="font-black text-2xl text-white uppercase italic">{{ wonItem.name }}</p>
         <p class="text-[var(--color-cyber-magenta)] font-mono text-lg mt-2">VALUE: ${{ wonItem.price.toFixed(2) }}</p>
       </div>
       <button @click="reset" class="mt-8 cyber-button-cyan px-10 py-3 text-lg z-10 relative">CONTINUE</button>
    </div>

    <div v-else>
      <!-- The 10 Slots -->
      <div class="grid grid-cols-5 gap-4 mb-8">
        <div 
          v-for="i in 10" :key="i"
          class="h-32 bg-[var(--color-cyber-panel)] border border-[var(--color-cyber-cyan)]/20 flex items-center justify-center relative cursor-pointer hover:border-[var(--color-cyber-magenta)] transition-colors"
          @click="removeSlot(i - 1)"
        >
          <template v-if="selectedItems[i - 1]">
            <img :src="selectedItems[i - 1].item.image" class="w-20 h-20 object-contain drop-shadow" />
            <div class="absolute inset-0 bg-[var(--color-cyber-magenta)]/10 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity text-[var(--color-cyber-magenta)] font-black">X</div>
          </template>
          <template v-else>
            <span class="text-[var(--color-cyber-cyan)]/30 font-mono text-3xl font-black">{{ i }}</span>
          </template>
        </div>
      </div>

      <!-- Action Bar -->
      <div class="flex items-center justify-between bg-[#050810] cyber-border p-6 mb-10 shadow-inner">
        <div>
          <p class="text-gray-400 font-mono text-sm">TOTAL SACRIFICE VALUE</p>
          <p class="text-[var(--color-cyber-magenta)] font-black text-2xl">${{ totalValue.toFixed(2) }}</p>
        </div>
        <button 
          @click="signContract" 
          :disabled="selectedItems.length !== 10 || isProcessing"
          class="cyber-button px-12 py-4 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isProcessing ? 'PROCESSING...' : (selectedItems.length === 10 ? 'SIGN CONTRACT' : `SELECT ${10 - selectedItems.length} MORE`) }}
        </button>
      </div>

      <!-- Inventory Selection -->
      <h2 class="text-2xl font-black text-[var(--color-cyber-cyan)] tracking-widest italic mb-6">> AVAILABLE_ASSETS</h2>
      
      <div v-if="loading" class="text-[var(--color-cyber-cyan)] font-mono animate-pulse">EXTRACTING INVENTORY...</div>
      <div v-else-if="inventory.length === 0" class="text-gray-500 font-mono">NO ASSETS AVAILABLE.</div>
      <div v-else class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div 
          v-for="inv in inventory" 
          :key="inv.id" 
          @click="selectItem(inv)"
          class="bg-[var(--color-cyber-panel)] p-3 cursor-pointer transition-transform hover:scale-105 border-b-2 relative"
          :class="[ getColorBorder(inv.item.rarity), isSelected(inv.id) ? 'opacity-30' : '' ]"
        >
          <div class="absolute top-1 right-1 text-xs font-mono text-gray-400">${{ inv.item.price.toFixed(2) }}</div>
          <img :src="inv.item.image" class="w-full h-16 object-contain mb-2" />
          <p class="font-bold text-[10px] text-white truncate text-center">{{ inv.item.name }}</p>
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
const inventory = ref<any[]>([]);
const selectedItems = ref<any[]>([]);
const loading = ref(true);
const isProcessing = ref(false);
const wonItem = ref<any>(null);

const totalValue = computed(() => {
  return selectedItems.value.reduce((sum, inv) => sum + inv.item.price, 0);
});

const loadInventory = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/inventory', {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    inventory.value = res.data;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadInventory();
});

const isSelected = (id: number) => {
  return selectedItems.value.some(i => i.id === id);
};

const selectItem = (inv: any) => {
  if (isSelected(inv.id)) return; // already selected
  if (selectedItems.value.length >= 10) return; // max 10
  selectedItems.value.push(inv);
};

const removeSlot = (index: number) => {
  if (selectedItems.value[index]) {
    selectedItems.value.splice(index, 1);
  }
};

const signContract = async () => {
  if (selectedItems.value.length !== 10) return;
  isProcessing.value = true;
  
  try {
    const ids = selectedItems.value.map(i => i.id);
    const res = await axios.post('http://localhost:3000/api/inventory/contract', { inventoryIds: ids }, {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    
    wonItem.value = res.data.item;
    
  } catch (e: any) {
    alert(e.response?.data?.error || 'CONTRACT FAILED');
  } finally {
    isProcessing.value = false;
  }
};

const reset = () => {
  wonItem.value = null;
  selectedItems.value = [];
  loadInventory();
};

const getColorBorder = (rarity: string) => {
  const map: any = { blue: 'border-blue-600', purple: 'border-purple-600', pink: 'border-pink-500', red: 'border-red-600', gold: 'border-yellow-500' };
  return map[rarity] || 'border-gray-500';
};
</script>
