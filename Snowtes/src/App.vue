<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import PopupView from './views/PopupView.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="h-full">
      <Header/>
      <div class="flex-1">
        <RouterView/>
        <PopupView/>
      </div>
      <Footer/>
    </div>
  </div>
</template>
