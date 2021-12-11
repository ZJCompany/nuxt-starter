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


<!-- Loading example -->
  <div class="vld-parent h-60">
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      loader="bars"
      height=200
      width=100
      background-color ="#8B949E"
    />
    <label>
      <input type="checkbox" v-model="fullPage" />Full page?
    </label>
    <button @click.prevent="doAjax" class="p-2 bg-green-100 rounded-md hover:bg-green-300">fetch Data</button>
  </div>  
</template>
<script setup>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

let isLoading = ref(false);
let fullPage = ref(true);
let doAjax = () => {
  isLoading.value = true;

  setTimeout(() => isLoading.value = false, 5000)
}

let onCancel = () => {
  console.log("User cancelled the loader");
}

</script>