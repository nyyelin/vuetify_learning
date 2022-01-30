<template>
  <v-app class="deep-purple">
    <Navbar></Navbar>
    <v-main class="mx-4 my-2">
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
