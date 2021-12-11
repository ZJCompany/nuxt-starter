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
  <div class="vld-parent h-48">
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      loader="bars"
      height="200"
      width="100"
      background-color="#8B949E"
    />
    <label>
      <input type="checkbox" v-model="fullPage" />Full page?
    </label>
    <button
      @click.prevent="doAjax"
      class="p-2 bg-green-100 rounded-md hover:bg-green-300"
    >fetch Data</button>
  </div>

  <!-- Sweetalert example-->
  <button
    @click.prevent="showLogo"
    class="p-2 bg-blue-100 rounded-md hover:bg-blue-300"
  >Korek Telecom</button>

  <br />
  <br />
  <br />
  <button @click.prevent="deleteModal" class="p-2 bg-red-200 rounded-lg">Delete it</button>
</template>
<script setup >

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// import Swal from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'

let isLoading = ref(false);
let fullPage = ref(true);
let doAjax = () => {
  isLoading.value = true;

  setTimeout(() => isLoading.value = false, 5000)
}

let onCancel = () => {
  console.log("User cancelled the loader");
}


// Sweetalert2 
let timerInterval
Swal.fire({
  title: 'Game is starting!',
  html: 'The game will start in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

let showLogo = () => {
  Swal.fire({
    title: 'Korek Telecom!',
    text: 'Build future in tech.',
    // imageUrl: 'https://unsplash.it/400/200',
    imageUrl: '../public/korek-logo.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Korek logo',
    confirmButtonText: 'I agree'
  })

  // Swal.fire({
  //   title: 'هل تريد الاستمرار؟',
  //   icon: 'question',
  //   iconHtml: '؟',
  //   confirmButtonText: 'نعم',
  //   cancelButtonText: 'لا',
  //   showCancelButton: true,
  //   showCloseButton: true
  // })
}


let deleteModal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}

</script>