<template>
  <div id="post-page" class="page-wrapper post-page">
    <main-section theme="one-column">
      <center>
        <h1 class="title">{{ $store.state.name }}</h1>
        <opti-image
          v-if="image"
          :src="responsiveImage.src"
          :srcset="responsiveImage.srcSet"
          :width="imageRatio[0]"
          :height="imageRatio[0]"
          :sizes="`(min-width: 768px) ${100 / $siteConfig.posts.perRow}vw`"
        />
        <br /><br />
        <br />
        <strong class="is-size-3"> {{ ShortDesc }}</strong><br />
       

        <markdown :markdown="$store.state.content" class="is-size-3" />
      
      <div class="other-posts">
        <span class="subtitle is-size-4">
          {{ isAuthor ? 'Der Autor verfasste folgende Posts' : '' }} </span
        ><br />
        <!-- Related Posts -->
        <posts-grid :number="3" :author="name" />
      
      </div>
      </center>
    </main-section>
  </div>
</template>
<script>
const imageDimensionDefault = '1x1'
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
    ...mapState(['name', 'image', 'isAuthor', 'ShortDesc', 'content', 'slug']),
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    },
    imageRatioClass() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions.toLowerCase().replace('x', 'by')
    },
    imageRatio() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions
        .toLowerCase()
        .split('x')
        .map((size) => {
          return size * 500
        })
    },
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
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
