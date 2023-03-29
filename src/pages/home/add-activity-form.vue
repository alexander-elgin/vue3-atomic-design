<template>
  <v-form ref="form">
    <v-text-field
      v-model="newActivityTitle"
      v-validate="'alpha_spaces|min:3|required'"
      name="newActivityTitle"
      :data-vv-as="$t('pages.home.addActivityForm.activity')"
      color="teal"
      :label="`${$t('pages.home.addActivityForm.whatToDo')}?`"
      @keydown.enter.prevent="add"
      ref="field"
      append-icon="fas fa-paper-plane"
      @click:append="add"
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

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
