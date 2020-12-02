<template>
  <div id="category-page" class="page-wrapper category-page">
    <!-- <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.description"
      :image="$store.state.image"
    /> -->
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <h1 class="title">{{$store.state.name}}</h1>
        <h2 class="subtitle">{{$store.state.description}}</h2>
        <posts-grid :category="[$store.state.name]" :per-row="2" :number="50" />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">All Categories</h3>
        <div class="panel">
          <nuxt-link
            v-for="cat in catsfiltered"
            :key="cat.slug"
            :to="`/categories/${cat.slug}`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single,
            }"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
export default {
  data() {
    return {
      allCats: [],
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'category', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
      .then((cats) => cats.filter((cat) => cat.name != 'showstart'))
//      .then((cats) => cats.map((cat) => cat.name))
  },
  computed: {
    catsfiltered() {
      // console.log(this.allCats.filter((v) => v != 'showstart'))
      return this.allCats
    },
  },
}
</script>
