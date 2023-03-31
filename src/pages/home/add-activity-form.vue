<template>
  <v-form>
    <v-text-field
      append-icon="fas fa-paper-plane"
      @click:append="add"
      color="teal"
      :error-messages="v$.newActivityTitle.$errors.map(e => e.$message)"
      @input="v$.newActivityTitle.$touch"
      @keydown.enter.prevent="add"
      :label="`${$t('pages.home.addActivityForm.whatToDo')}?`"
      name="newActivityTitle"
      v-model="state.newActivityTitle"
    />
  </v-form>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useVuelidate } from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'

import useActivitiesStore from '@/plugins/pinia/stores/activities'

export default {
  setup () {
    const state = reactive({
      newActivityTitle: '',
    })

    const v$ = useVuelidate({
      newActivityTitle: { minLength: minLength(3), required },
    }, state)

    const activitiesStore = useActivitiesStore();

    const add = () => {
      const { value: validator } = v$

      if (!validator.$invalid) {
        activitiesStore.add(state.newActivityTitle);
        state.newActivityTitle = ''
        validator.$reset()
      }
    };

    const { t } = useI18n()

    return { add, state, t, v$ }
  },
};
</script>
