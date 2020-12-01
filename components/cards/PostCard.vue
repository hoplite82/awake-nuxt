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
    <br />
    <strong class="is-size-5">Thema: </strong>
    <span class="is-size-5" v-for="(cat,index) in removedStartCategories" :key="index">
      <span v-if="index !== 0"> | </span>
        <a @click="goToCathegorieSide(cat)">{{ cat }}</a>
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
    categories: {
      type: Array,
      default() {
        return ['KategorieTest', 'Kategorie2']
      },
    },
  },
  computed: {
    removedStartCategories() {
      return this.categories.filter((v) => v !== 'showstart')
    },
    datePretty() {
      return getFormattedDate(this.date)
    },
  },
  methods: {
    goToAuthorSide(authorname) {
      this.$cms.member.getAll().then((res) => {
        res.forEach((member) => {
          if (authorname == member.name)
            this.$router.push('/members/' + member.slug)

          //  this.members.push(member)
        })
      })
    },
    goToCathegorieSide(category) {
      this.$cms.category.getAll().then((res) => {
        res.forEach((cat) => {
          if (category == cat.name) this.$router.push('/categories/' + cat.slug)

          //  this.members.push(member)
        })
      })
    },
  },
}
</script>
