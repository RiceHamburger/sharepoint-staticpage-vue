<template>
  <div class="app">
    <p>{{name}}</p>
    <button @click="changeName('Change')">b</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  data(){
    return{
      name:'TEST',
      age: 25 as number | string
    }
  },
  components: {
    
  },
  methods:{
    changeName(name:string){
      this.name = name;
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
