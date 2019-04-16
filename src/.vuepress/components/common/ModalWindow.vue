<template>
  <transition name="modalWindow__transition--fade" appear>
    <div class="modalWindow">
      <div class="modalWindow__mask">
        <div class="modalWindow__wrapper">
          <div class="modalWindow__container">
            <div class="modalWindow__header">
              <slot name="header"></slot>
              <button class="modalWindow__close-button" v-on:click="$emit('close')"><fa icon="times" /></button>
            </div>
            <div class="modalWindow__body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimes);

Vue.component('fa', FontAwesomeIcon);

export default {
  name: 'ModalWindow',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">

.button {
  &--resetStyling {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
}
// -- /general


.modalWindow__mask {
  position: fixed;
  z-index: 6000001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
}

.modalWindow__wrapper {
  display: table-cell;
  vertical-align: middle;

  .modalWindow__container {
    width: 720px;
    margin: 0px auto;
    padding: 30px 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);

    position: relative;

    .modalWindow__close-button {
      @extend .button--resetStyling;
    }

    .modalWindow__header {
      h3 {
        margin-top: 0;
        color: #42b983;
      }

      .modalWindow__close-button {
        position: absolute;
        top: 16px;
        right: 16px;
      }
    }

    .modalWindow__body {
      margin: 20px 0;
      padding: 0 80px;
    }
  }
}

@media screen and (max-width: 680px) {
  .modalWindow__wrapper {
    .modalWindow__container {
      width: 100%;

      .modalWindow__body {
        margin: 20px 0;
        padding: 0;
      }
    }
  }
}


/*
 * The following styles are auto-applied to elements with
 * transition="modalWindow__transition--fade" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modalWindow__transition--fade {
  &-enter-active,
  &-leave-active {
    transition: opacity .3s ease;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
