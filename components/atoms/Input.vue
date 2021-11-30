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
    <!-- <p class="bg-red-300 my-1" v-if="errors">{{ errors }}</p> -->
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { computed } from 'vue'

const props = defineProps(['modelValue', 'type', 'rules'])
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

if (props.rules.includes('phone')) {
    watch(name, (currentType, prevType) => {
        let max = props.rules.includes('max') ? props.rules.charAt(props.rules.indexOf('max') + 3) : 7;
        let regx = new RegExp("^[7-9]\\d{" + (max - 1) + "}$");

        if (!regx.test(name.value)) {
            if (!errors.value.includes("*A phone number should start with a number between 7 and 9 and must be " + (max) + " characters"))
                errors.value.push("*A phone number should start with a number between 7 and 9 and must be " + (max) + " characters");
        } else {
            errors.value = [];
        }


    })
}

</script>
