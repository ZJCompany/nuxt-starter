<template>
  <div>
    <p>jihad and zeyad</p>
    <!-- <AtomsDialogModal show="true">
      <template v-slot:title>
        <h1>Add User</h1>
      </template>

      <template v-slot:content>
        <AtomsLabel>Username</AtomsLabel>
        <AtomsInput type="text" v-model:modelValue="formData.username"></AtomsInput>

        <AtomsInput type="password" v-model:modelValue="formData.password" class="my-4"></AtomsInput>
        <button @click="changeText">Click</button>
        {{ formData }}
      </template>

      <template v-slot:footer>
        <AtomsButton class="bg-green-500" type="submit">Save</AtomsButton>
      </template>
    </AtomsDialogModal>-->

    <AtomsInput type="text" v-model:modelValue="formData.username" rules="phone|max6"></AtomsInput>

    <!-- {{ formData }} -->
  </div>
</template>

<script setup>
console.log("sad");
// import { ref } from 'vue'
// import FormSection from '~~/components/atoms/FormSection.vue';
// function add() {
//   console.log('work');
// }
// let text = ref('')

let formData = ref({ username: 'default', password: '' })

// function changeText() {
//   text.value = "jihadandzeyad";
// }
</script>