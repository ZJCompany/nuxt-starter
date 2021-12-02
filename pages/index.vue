<template>
  <div>
    {{ $t('hello') }}
    <AtomsInput type="text" v-model:modelValue="lang"></AtomsInput>
    <button @click="$i18n.locale = lang">Change Language</button>
    <NuxtLayout name="custom">
      <NuxtLink to="/about">About (internal link that belongs to the Nuxt App)</NuxtLink>
      <template #header>Some header template content.</template>
    </NuxtLayout>
  </div>
</template>
<script setup>
let lang = ref('en');

console.log("sad");
// import { ref } from 'vue'
// import FormSection from '~~/components/atoms/FormSection.vue';
// function add() {
//   console.log('work');
// }
// let text = ref('')

let formData = ref({ username: '', password: '' })

// function changeText() {
//   text.value = "jihadandzeyad";
// 
</script>