<template>
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="
      $siteConfig.posts.imageDimensions ||
      $siteConfig.cards.imageDimensions ||
      null
    "
  >
    <span
      v-if="author && $siteConfig.posts.displayAuthor"
      class="author-wrapper is-size-5"
    >
      <strong>Autor:</strong>

      <a @click="goToAuthorSide(author)">{{ author }}</a>
    </span>
    <br />
    <span v-if="date" class="date-wrapper is-size-5">
      <strong>Veröffentlicht am: </strong> {{ datePretty }}
    </span>
  </generic-card>
</template>

<script>
import GenericCard from './GenericCard'
import { getFormattedDate } from '~/helper'
export default {
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.date)
    },
  },
  methods: {
    goToAuthorSide(authorname) {
      let link = 'test'
      this.$cms.member.getAll().then((res) => {
        res.forEach((member) => {
          if (authorname == member.name)
            this.$router.push('/members/' + member.slug)
              
          //  this.members.push(member)
        })
      })
    },
  },
}
</script>
