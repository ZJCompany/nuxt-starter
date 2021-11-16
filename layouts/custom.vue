<template>
  <div>
    Some shared layout content:
    <slot />
  </div>
</template>
<script>
export default {
  layout: "custom",
};
</script>