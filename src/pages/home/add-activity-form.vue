<template>
  <v-form ref="form">
    <v-text-field
      append-icon="fas fa-paper-plane"
      @click:append="add"
      color="teal"
      @keydown.enter.prevent="add"
      :label="`${$t('pages.home.addActivityForm.whatToDo')}?`"
      name="newActivityTitle"
      v-model="newActivityTitle"
      v-validate="'alpha_spaces|min:3|required'"
    />
  </v-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useI18n } from 'vue-i18n'

import useActivitiesStore from '@/plugins/pinia/stores/activities'

const { t } = useI18n()
const activitiesStore = useActivitiesStore();
const newActivityTitle: Ref<string> = ref('');

const add = () => {
  activitiesStore.add(newActivityTitle.value);
  newActivityTitle.value = ''
};
</script>
