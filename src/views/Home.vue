<template>
  <div>
    <Notice />
    <News />
    <Article />
    <button @click="handleClick('title')">order by title</button>
    <button @click="handleClick('salary')">order by salary</button>
    <button @click="handleClick('location')">order by location</button>
    <JobList :jobs="jobs" :order="order"/>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import JobList from '@/components/jobsList.vue'
import Notice from '@/components/Notice.vue'
import News from '@/components/News.vue'
import Article from '@/components/Article.vue'
import Job from '@/types/job'
import OrderTerm from '@/types/OrderTerm'

export default defineComponent({
  name: 'Home',
  components:{
    JobList,
    Notice,
    News,
    Article
  },
  setup() {

    const jobs = ref<Job[]>([
      {title:'first test',location:'b0',salary:200,id:0},
      {title:'airst test1',location:'s1',salary:300,id:1},
      {title:'birst test2',location:'dd2',salary:400,id:2},
      {title:'cirst test3',location:'a3',salary:500,id:3},
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

</style>