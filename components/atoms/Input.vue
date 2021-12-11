<template>
    <input
        :type="type"
        v-model="name"
        autocomplete="address-level2"
        class="form-input focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
    <ul v-if="errors.length != -1">
        <li class="bg-red-300 my-1" v-for="(error,index) in errors" :key="index">{{ error }}</li>
    </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { computed } from 'vue'

// const props = defineProps(['modelValue', 'type', 'rules'])
const props = defineProps(['modelValue', 'type'])
const emit = defineEmits(['update:modelValue'])


const type = ref(props.type);
const errors = ref([]);

const name = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emit('update:modelValue', val);
    }
})


</script>
