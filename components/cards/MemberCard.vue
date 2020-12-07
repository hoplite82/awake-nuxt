<template>
  <generic-card :title="title" :image="image" :link="link">
   <span v-if="this.pos" class="is-size-5 has-text-weight-semibold has-text-black">{{this.pos}}. Listenplatz </span>
   <span v-else class="is-size-6"> {{ description }}</span>
  </generic-card>
</template>

<script>
import GenericCard from './GenericCard'
export default {
  name: 'MemberCard',
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }, pos: {
      type: Number,
      default: 0
    } 
  }
}
</script>
