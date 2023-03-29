<template>
  <v-card class="mx-auto text-left" max-width="640" min-width="320">
    <v-toolbar color="teal">
      <v-toolbar-title>{{ $t('pages.home.toDoList') }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <AddActivityForm />
      <v-list>
        <Activity v-for="(activity, index) in activities" :key="index" :activity="activity" />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

import useActivitiesStore from '@/plugins/pinia/stores/activities'
import Activity from './activity.vue';
import AddActivityForm from './add-activity-form.vue';

const activitiesStore = useActivitiesStore();
const { activities } = storeToRefs(activitiesStore);
const { t } = useI18n()
</script>
