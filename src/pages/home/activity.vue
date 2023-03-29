<template>
  <v-list-item lines='one'>
    <v-checkbox color="teal" v-model="activity.done">
      <template v-slot:label>
        <span :class="activity.done ? 'done' : ''">{{ activity.title }}</span>
      </template>
    </v-checkbox>

    <template v-slot:append>
      <v-btn
        class="align-start"
        color="teal"
        icon="fas fa-trash"
        size="small"
        variant="plain"
        @click="dialog = true"
      ></v-btn>
    </template>
  </v-list-item>

  <v-dialog v-model="dialog" max-width="240">
    <v-card>
      <v-card-title>{{ $t('pages.home.activity.confirmRemoval') }}</v-card-title>

      <v-card-text>{{ $t('shared.remove') }}?</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="teal" flat="flat" @click="dialog = false">
          {{ $t('shared.cancel') }}
        </v-btn>

        <v-btn color="teal" flat="flat" @click="remove(activity); dialog = false">
          {{ $t('shared.ok') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'

import useActivitiesStore from '@/plugins/pinia/stores/activities'
import type { Activity } from '@/plugins/pinia/stores/activities'

export default {
  props: {
    activity: { type: Object as PropType<Activity> },
  },
  setup ({ activity }: { activity: Activity }) {
    const { t } = useI18n()
    const dialog = ref(false);

    const activitiesStore = useActivitiesStore();
    const { remove } = activitiesStore;

    return { activity, dialog, remove, t }
  },
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
