<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import PopupView from './views/PopupView.vue'
</script>

<template>
    <Header/>
    <RouterView class="pb-24 pt-40"/>
    <PopupView/>
    <Footer/>
</template>
