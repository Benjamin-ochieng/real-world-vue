<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import * as eventService from '@/services/eventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    // fetch event (by id) and set local event data
    eventService
      .getEvent(this.id)
      .then(({ data }) => (this.event = data))
      .catch(err => console.log(err))
  }
}
</script>

<style scoped></style>
