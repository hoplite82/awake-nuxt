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
        <!-- Posts in Category -->
        <markdown :markdown="$store.state.content" />
        <member-grid :group="$store.state.name" :per-row="3" :number="100"/>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">
          Gruppen
        </h3>
        <div class="panel">
          <nuxt-link
            v-for="cat in allCats"
            :key="cat.slug"
            :to="`/groups/${cat.slug}`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single
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
    setPageData(store, { resource: 'Group', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.Group.getAll()
  }
}
</script>
