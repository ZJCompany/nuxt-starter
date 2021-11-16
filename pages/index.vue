<template>
  <div>
    <BaseFooButton title="submit" class="bg-green-500 text-white"  @add-itam="add" type="button" ></BaseFooButton>
    <br/>
    {{text}}

    <div class="p-3 bg-red-500 border-0">
        <AtomsLabel class="text-lg" value="Text input"></AtomsLabel>
       <AtomsInput class="m-3 " v-model:modelValue="text"  ></AtomsInput>
    </div>
     

    <!-- <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a  href="https://nuxtjs.org">External Link to another page</a> -->
  </div>
</template>

<script setup>
import {ref} from 'vue'
           function add() {
             console.log('work');
           }
           let text=ref('')
</script>