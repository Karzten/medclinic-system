<template>
  <div class="mode">
    <svg  v-show="mixLayout == 'light-only'"
    @click="customizeMixLayout('dark-only')">
      <use href="@/assets/svg/icon-sprite.svg#moon"></use>
    </svg>
    <!-- <i
      class="fa fa-moon-o"
     
    ></i> -->
    <svg   v-show="mixLayout == 'dark-only'"
    @click="customizeMixLayout('light-only')">
      <use href="@/assets/svg/icon-sprite.svg#moon"></use>
    </svg>
    <!-- <i
      
      v-show="mixLayout == 'dark-only'"
      @click="customizeMixLayout('light-only')"
    ></i> -->
  </div>
</template>

<script>
import { useLayoutStore } from '~~/store/layout';

  export default {
    name: 'Mode',
    data() {
      return {
        mixLayout: 'light-only',
      };
    },
    methods: {
      customizeMixLayout(val) {
        this.mixLayout = val;
        console.log("aaaaaaaaaaaa",val)
        // this.$store.dispatch('layout/setLayout', val);
        useLayoutStore().setLayout({class:val})
      },
    },
  };
</script>
