<template>
  <div>
    <BaseFooButton  @add-itam="add" type="button" ><p>dsds</p></BaseFooButton>
    <h1>Home page</h1>
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