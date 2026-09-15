<template>
  <div class="p-8 max-w-5xl mx-auto">
    <div v-if="c">
      <div class="flex items-center justify-between mb-8 border-b border-[var(--color-cyber-magenta)]/30 pb-4">
        <h1 class="text-4xl font-black tracking-tighter text-white italic drop-shadow-[0_0_10px_rgba(255,0,60,0.5)]">{{ c.name.toUpperCase() }} _NODE</h1>
        <router-link to="/" class="text-[var(--color-cyber-cyan)] hover:text-white uppercase tracking-widest font-bold font-mono">> Disconnect</router-link>
      </div>
      
      <!-- ROULETTE CONTAINER -->
      <div class="bg-[var(--color-cyber-panel)] cyber-border shadow-[0_0_50px_rgba(0,240,255,0.15)] p-2 mb-10 relative overflow-hidden flex flex-col items-center">
        <!-- The Window -->
        <div class="w-full h-56 bg-[#050810] relative overflow-hidden shadow-inner my-6 cyber-border">
          
          <!-- Center line indicator -->
          <div class="absolute top-0 bottom-0 left-1/2 w-1 bg-[var(--color-cyber-magenta)] z-20 shadow-[0_0_15px_#ff003c] transform -translate-x-1/2"></div>
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-cyber-magenta)] rotate-45 -mt-2 z-20"></div>
          <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-cyber-magenta)] rotate-45 -mb-2 z-20"></div>

          <!-- The sliding reel -->
          <div 
            class="h-full flex items-center absolute left-0"
            :style="{ 
              transform: `translateX(${currentTranslate}px)`,
              transition: isSpinning ? `transform ${spinDuration}ms cubic-bezier(0.1, 0.7, 0.1, 1)` : 'none'
            }"
          >
            <!-- Items -->
            <div 
              v-for="(item, index) in rouletteItems" 
              :key="index"
              class="w-48 h-44 flex flex-col items-center justify-center border-r border-[var(--color-cyber-cyan)]/20 shrink-0 relative bg-gradient-to-b from-transparent to-[var(--color-cyber-panel)]/50"
              :class="getColorClass(item.rarity)"
            >
              <img :src="item.image" class="w-32 h-32 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] relative z-10 hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        <!-- WIN POPUP MODAL -->
        <div v-if="wonItem && !isSpinning" class="fixed inset-0 z-50 bg-[#050810]/90 backdrop-blur-md flex flex-col items-center justify-center">
           <h2 class="text-6xl text-[var(--color-cyber-cyan)] font-black mb-12 tracking-tighter italic cyber-glitch">DECRYPTED SUCCESSFULLY</h2>
           <div class="bg-[var(--color-cyber-panel)] cyber-border p-16 flex flex-col items-center shadow-[0_0_80px_rgba(0,240,255,0.4)]">
             <img :src="wonItem.image" class="w-80 h-80 object-contain mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
             <p class="font-black text-4xl text-white uppercase italic tracking-wider">{{ wonItem.name }}</p>
           </div>
           <button @click="resetRoulette" class="mt-16 cyber-button px-16 py-4 text-2xl font-black shadow-[0_0_20px_rgba(255,0,60,0.5)] hover:shadow-[0_0_40px_rgba(255,0,60,0.8)]">ACCEPT ASSET</button>
        </div>

        <button 
          v-if="!wonItem || isSpinning"
          @click="openCase" 
          :disabled="isSpinning"
          class="cyber-button py-5 px-20 text-3xl my-6 shadow-[0_0_20px_rgba(255,0,60,0.4)] hover:shadow-[0_0_40px_rgba(255,0,60,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSpinning ? 'HACKING...' : `DECRYPT ($${c.price.toFixed(2)})` }}
        </button>
        <p v-if="error" class="text-[var(--color-cyber-magenta)] mt-2 font-black tracking-widest uppercase z-10">{{ error }}</p>
      </div>

      <h2 class="text-2xl font-black mb-6 text-[var(--color-cyber-cyan)] tracking-tighter italic">> DATABASE_CONTENTS</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        <div v-for="item in c.items" :key="item.itemId" class="bg-[var(--color-cyber-panel)] flex flex-col justify-between transition-transform hover:scale-105 shadow-lg" :class="getColorClass(item.item.rarity)">
          <div class="p-4 flex-grow flex items-center justify-center">
            <img :src="item.item.image" class="w-full h-24 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
          </div>
          <div class="bg-[#050810] p-3 text-center border-t border-[var(--color-cyber-cyan)]/20">
            <p class="font-black text-xs text-white uppercase truncate mb-1">{{ item.item.name }}</p>
            <p class="text-[var(--color-cyber-magenta)] text-[11px] font-mono font-bold">{{ (item.chance * 100).toFixed(1) }}% DROP CHANCE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { useUserStore } from '../store/user';

const route = useRoute();
const userStore = useUserStore();
const c = ref<any>(null);
const error = ref('');

const rouletteItems = ref<any[]>([]);
const currentTranslate = ref(0);
const isSpinning = ref(false);
const spinDuration = ref(7000); 
const wonItem = ref<any>(null);

const itemWidth = 192; // w-48 = 192px

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/api/cases');
  c.value = res.data.find((x: any) => x.id === Number(route.params.id));
  generateMockReel();
});

const generateMockReel = () => {
  if (!c.value) return;
  rouletteItems.value = [];
  for (let i = 0; i < 100; i++) {
    const r = Math.random();
    let cum = 0;
    let selected = c.value.items[0].item;
    for (const ci of c.value.items) {
      cum += ci.chance;
      if (r <= cum) {
        selected = ci.item;
        break;
      }
    }
    rouletteItems.value.push(selected);
  }
  currentTranslate.value = (800 / 2) - (itemWidth / 2); 
};

const openCase = async () => {
  if (!userStore.token) {
    error.value = 'ERR: NO UPLINK FOUND';
    return;
  }
  if (userStore.user.balance < c.value.price) {
    error.value = 'ERR: INSUFFICIENT CREDITS';
    return;
  }
  
  error.value = '';
  isSpinning.value = true;
  wonItem.value = null;
  generateMockReel(); 

  try {
    const res = await axios.post(`http://localhost:3000/api/cases/${c.value.id}/open`, {}, {
      headers: { Authorization: `Bearer ${userStore.token}` }
    });
    
    const winningItem = res.data.item;
    const winningIndex = 75;
    rouletteItems.value[winningIndex] = winningItem; 

    const randomOffset = Math.floor(Math.random() * (itemWidth - 10)) - (itemWidth / 2) + 5; 
    const centerOffset = 450 - (itemWidth / 2);
    
    setTimeout(() => {
      currentTranslate.value = centerOffset - (winningIndex * itemWidth) + randomOffset;
    }, 50);

    setTimeout(() => {
      isSpinning.value = false;
      wonItem.value = winningItem;
      if (userStore.user) {
        userStore.user.balance -= c.value.price;
      }
    }, spinDuration.value + 500);
    
  } catch (err: any) {
    isSpinning.value = false;
    error.value = err.response?.data?.error || 'CRITICAL FAILURE';
  }
};

const resetRoulette = () => {
  wonItem.value = null;
  generateMockReel();
};

const getColorClass = (rarity: string) => {
  const map: any = { blue: 'cyber-blue', purple: 'cyber-purple', pink: 'cyber-pink', red: 'cyber-red', gold: 'cyber-gold' };
  return map[rarity] || 'cyber-blue';
};
</script>
