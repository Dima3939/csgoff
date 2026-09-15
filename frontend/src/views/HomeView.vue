<template>
  <div class="p-8 max-w-6xl mx-auto">
    <div class="flex items-center justify-between mb-12">
      <h1 class="text-5xl font-black tracking-tighter text-white italic drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">
        DATA <span class="text-[var(--color-cyber-magenta)]">CRATES</span>
      </h1>
      <div class="cyber-button-cyan px-4 py-2">AVAILABLE NODES</div>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <router-link
        v-for="c in cases"
        :key="c.id"
        :to="'/case/' + c.id"
        class="group relative bg-[var(--color-cyber-panel)] cyber-border p-6 text-center transition-all overflow-hidden flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
        style="min-height: 320px;"
      >
        <div class="absolute -right-4 -top-4 w-16 h-16 bg-[var(--color-cyber-magenta)] opacity-20 rotate-45 group-hover:opacity-50 transition-opacity"></div>
        <div class="absolute -left-4 -bottom-4 w-16 h-16 bg-[var(--color-cyber-cyan)] opacity-20 rotate-45 group-hover:opacity-50 transition-opacity"></div>
        
        <img :src="c.image" class="w-full h-40 object-contain mb-6 drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform duration-500 z-10 relative" />
        
        <div class="z-10 relative">
          <h2 class="text-xl font-black text-white mb-3 tracking-widest uppercase italic">{{ c.name }}</h2>
          <div class="inline-block bg-[var(--color-cyber-dark)] border border-[var(--color-cyber-cyan)] px-5 py-2 text-[var(--color-cyber-cyan)] font-black tracking-widest group-hover:bg-[var(--color-cyber-cyan)] group-hover:text-black transition-colors">
            ${{ c.price.toFixed(2) }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const cases = ref<any[]>([]);

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/api/cases');
  cases.value = res.data;
});
</script>
