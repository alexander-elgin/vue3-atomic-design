import { defineStore } from 'pinia'

export type Activity = {
  title: string,
  done: boolean,
};

export default defineStore('activities', {
  state: () => {
    const activities: Array<Activity> = [];

    return ({ activities })
  },
  actions: {
    add(title: string) {
      this.activities.push({ title, done: false })
    },
    remove({ activity }: { activity: Activity }) {
      this.activities.splice(this.activities.indexOf(activity), 1)
    },
    toggle({ activity, done }: { activity: Activity, done: boolean } ) {
      activity.done = done;// eslint-disable-line no-param-reassign
    },
  },
});
