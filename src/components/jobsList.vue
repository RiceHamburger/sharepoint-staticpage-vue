<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import Job from '@/types/job'
import OrderTerm from '@/types/OrderTerm'

export default defineComponent({
    props:{
        jobs:{
            required:true,
            type: Array as PropType<Job[]>
        },
        order:{
            required:true,
            type: String as PropType<OrderTerm>
        }
    },
    setup(props){
        const orderJobs = computed(()=>{
            return [...props.jobs].sort((a:Job,b:Job)=>{
                // console.log(a[props.order] > b[props.order] ? 1:-1);
                return a[props.order] > b[props.order] ? 1:-1
            })
        })

        return{
            orderJobs
        }
    }
})
</script>

<template>
    <div class="job-list">
        <p>Ordered by {{order}}</p>
        <transition-group name="list" tag="ul">
            <li v-for="job in orderJobs" :key="job.id">
                <h2>{{job.title}}</h2>
                <div class="salary">
                    {{job.salary}}
                </div>
                <div class="description">
                    <p>
                        {{job.location}}
                    </p>
                </div>
            </li>
        </transition-group>    
    </div>            
</template>

<style scoped>
.list-move{
    transition: all 1s;
}
</style>