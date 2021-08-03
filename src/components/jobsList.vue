<script lang="ts">
import { defineComponent, PropType } from 'vue'
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
    }
})
</script>

<template>
    <div class="job-list">
        <p>Ordered by {{order}}</p>
        <ul>
            <li v-for="job in jobs" :key="job.id">
                <h2>{{job.title}}</h2>
                <div class="salary">
                    {{job.salary}}
                </div>
                <div class="description">
                    <p>
                        fwfekekofjoejfoefjoejfoefjeofjkwkfoewkfowkfowfkowkfoekfoekfoefk
                    </p>
                </div>
            </li>
        </ul>    
    </div>            
</template>

<style scoped>

</style>