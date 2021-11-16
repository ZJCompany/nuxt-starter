<template>
    <button @click="$emit('add-itam')" :type="type" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
    <svg class="animate-spin fill-current " viewBox="0 0 24 24">
  </svg>   
  {{title}}
   <slot></slot>
    </button>
</template>

<script>
    import { defineComponent } from 'vue'
    export default defineComponent({
        props: {
            type: {
                type: String,
                default: 'submit',
            },
            title:{
                   type: String,
                default: 'Button',
            }
        }
    })
</script>