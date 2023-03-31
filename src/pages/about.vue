<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const features = [
  'i18n',
  'Pinia',
  'PostCSS (incl. nesting CSS)',
  'Vuelidate',
  'Vuetify'
]
</script>

<template>
  <v-card class="mx-auto text-left" max-width="640" min-width="320">
    <v-toolbar color="teal">
      <v-toolbar-title>{{ $t('pages.about.featuresInclude') }}</v-toolbar-title>
    </v-toolbar>
    <v-list :items='features'></v-list>
  </v-card>
</template>
