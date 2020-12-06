<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        
        <p class="title">Aktuelles</p>
        <posts-grid :category="['firstpost']" :perRow="$siteConfig.posts.perRow" :number="3" />
       
         <p class="title"><br /></p>
        <posts-grid :category="['showstart']" :perRow="$siteConfig.posts.perRow" />
        <!-- <posts-grid exclude="administratives" /> -->
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <!--<news-letter-form-modal /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
// import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    // NewsLetterFormModal
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
