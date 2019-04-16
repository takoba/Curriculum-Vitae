<template>
  <div class="loginForm">
    <p>login form</p>
    <modalWindow v-if="is_show" @close="close">
      <div slot="body">
      </div>
    </modalWindow>
  </div>
</template>

<script>
import Vue from 'vue';

import ModalWindow from './common/ModalWindow.vue';

Vue.component(ModalWindow.name, ModalWindow);

export default {
  name: 'LoginForm',

  data() {
    return {
      is_show: true,
    };
  },
  mounted() {
  },
  updated() {
  },


  methods: {
    close() {
      this.is_show = false;
    },
  },
}
</script>

<style lang="sass">
</style>
