<template>
  <div id="category-page" class="page-wrapper category-page">
    <!-- <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.content"
      :image="$store.state.image"
    />  -->
    <site-hero
      :title="$store.state.name"
      :image="$store.state.image"
    /> 
    <main-section>
      <template v-slot:default>
        <!-- Posts in Category -->
        <span class="is-size-4 has-text-weight-semibold is-family-monospace">
          <markdown :markdown="$store.state.content" tag="Einleitung"></markdown></span>
        <posts-grid :category="[$store.state.name]" :per-row="2" />
      </template>


      <!--
      <template v-slot:sidebar>
        <h3 class="subtitle">
          All Categories
        </h3>
        <div class="panel">
          <nuxt-link
            v-for="cat in allCats"
            :key="cat.slug"
            :to="`/categories/${cat.slug}`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single
            }"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </template>
      -->
    </main-section>
  </div>
</template>
<script>
import Markdown from '../../components/Markdown.vue'
import { setPageData } from '../../helper'
export default {
  components: { Markdown },
  data() {
    return {
      allCats: []
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'category', slug: params.single })
  },
  // async created() {
  //   this.allCats = await this.$cms.category.getAll()
  // }
  async created() {
    this.allCats = await this.$cms.category.getAll()
  }
}
</script>
