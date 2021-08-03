<template>
  <div class="app">
    <button @click="handleClick('title')">order by title</button>
    <button @click="handleClick('salary')">order by salary</button>
    <button @click="handleClick('location')">order by location</button>
    <JobList :jobs="jobs" :order="order"/>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs,ref } from 'vue';
import JobList from './components/jobsList.vue'
import Job from './types/job'
import OrderTerm from './types/OrderTerm'

export default defineComponent({
  name: 'App',
  components:{
    JobList
  },
  setup() {
    // const age = ref<number | string>(25)

    // const state = reactive({
    //   name:'TEST',
    //   age: 25 as number | string
    // })
    // return{
    //   ...toRefs(state)
    // }

    const jobs = ref<Job[]>([
      {title:'first test',location:'f0',salary:200,id:0},
      {title:'first test1',location:'f1',salary:300,id:1},
      {title:'first test2',location:'f2',salary:400,id:2},
      {title:'first test3',location:'f3',salary:500,id:3},
    ])

    const order = ref<OrderTerm>('title')

    const handleClick = (term:OrderTerm) =>{
      order.value = term
    }

    return{
      jobs,
      handleClick,
      order
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
