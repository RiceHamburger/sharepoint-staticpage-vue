<template>
  <div class="app">
    <Header/>
    <router-view/>
    test
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/header.vue'

export default defineComponent({
  name: 'App',
  components:{
    Header
  },
});
</script>

<style lang="scss">

</style>
