<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <nav>
    <RouterLink to="/">{{ $t('organisms.nav.home') }}</RouterLink> |
    <RouterLink to="/about">{{ $t('organisms.nav.about') }}</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  padding: 30px;
  > a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
     color: #42b983;
    }
  }
}
</style>
