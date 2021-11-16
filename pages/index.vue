<template>
  <div>
    <BaseFooButton title="submit" class="bg-green-500 text-white"  @add-itam="add" type="button" ></BaseFooButton>
    <br/>
      <BaseFooButton  title="Save" class="bg-red-500 text-white"  @add-itam="add" type="button" ></BaseFooButton>

    <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
  </div>
</template>

<script setup>
           function add() {
             console.log('work');
           }
</script>