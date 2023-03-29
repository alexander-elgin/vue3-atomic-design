<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import Nav from '@/organisms/nav.vue'
import logoUrl from './logo.svg?url'

const { t } = useI18n()

const logoSize = 128
</script>

<template>
  <Nav />
  <div>
    <img :alt="$t('templates.default.logo')" :src="logoUrl" :width="logoSize" :height="logoSize" />
  </div>
  <slot />
</template>
