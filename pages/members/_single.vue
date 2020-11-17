<template>
  <div id="post-page" class="page-wrapper post-page">
    <main-section :one-column-constrained="true">
      <h1>{{ $store.state.name }}</h1>
      <opti-img></opti-img>
        
          <strong>{{$store.state.image}}</strong> {{ image }}
         {{isAuthor}}
          {{ShortDesc}}
      <markdown :markdown="$store.state.content" />
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setPageData, getFormattedDate } from '../../helper'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
import PostSidebar from '~/components/PostSidebar'

export default {
  components: {
    Markdown,
    PostSidebar,
 
  },
  computed: {
    ...mapState([
      'title',
      'subtitle',
      'featureImage',
      'underSubtitle',
      'author',
      'category',
      'slug',
    ]),
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    },
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'member', slug: params.single })
  },
}
</script>
<style scoped lang="scss">
.edit-post {
  margin-bottom: 20px;
}
</style>
