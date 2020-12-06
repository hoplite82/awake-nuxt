<template>
  <div id="category-page" class="page-wrapper category-page">
     
    <site-hero v-if="$store.state.image" :image="$store.state.image" :theme="'clean'">
    </site-hero>
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
            v-for="group in allGroups"
            :key="group.slug"
            :to="`/groups/${group.slug}`"
            :class="{
              'panel-block': true,
              'is-active': group.slug === $route.params.single
            }"
          >
            {{ group.name }}
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
      allGroups: []
    }
  },computed: {
    responsiveImage() {
      if ($store.state.image.indexOf('/uploads') === 0) {
        return require(`~/assets${$store.state.image}`)
      }
      return { src: this.image, srcSet: '' }
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'Group', slug: params.single })
  },
  async created() {
    this.allGroups = await this.$cms.Group.getAll()
  }
}
</script>
