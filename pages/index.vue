<template>
<div>
 <NuxtLayout name="custom">
     <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <template #header> Some header template content.
      
      </template>
  </NuxtLayout>
</div>
</template>

<script setup>

</script>