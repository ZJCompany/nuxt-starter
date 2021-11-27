<template>

<div>
<p>jihad and zeyad</p>
 
 <AtomsDialogModal show="true">
  <template v-slot:title>
    <h1>Add User</h1>
  </template>

    <template v-slot:content>
    <AtomsLabel >Username</AtomsLabel>
    <AtomsInput type="text"></AtomsInput>
  </template>


    <template v-slot:footer>
      <AtomsButton class="bg-green-500" type="submit">Save</AtomsButton>
  </template>
</AtomsDialogModal>
</div>

</template>

<script setup>
import {ref} from 'vue'
           function add() {
             console.log('work');
           }
           let text=ref('')
</script>