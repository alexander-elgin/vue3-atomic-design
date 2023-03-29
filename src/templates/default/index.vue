<script setup lang="ts">
import Nav from '../../organisms/nav.vue'
import HelloWorld from './hello-world.vue'
import Logo from './logo.svg?url'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" :src='Logo' width="128" height="128" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Nav />
    </div>
  </header>

  <slot />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
