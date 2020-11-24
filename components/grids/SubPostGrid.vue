<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.post"
    :theme="$siteConfig.posts.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <sub-post-grid
        :title="item.title"
        :link="item.slug ? `/${item.slug}` : ''"
        :image="item.featureImage"
        :author="item.author"
        :date="item.date"
      />
    </template>
  </resource-grid>
</template>

<script>
import SubPostPost from '~/components/cards/SubPost'
export default {
  name: 'PostsGrid',
  components: { SubPostPost },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    author: {type: String},
    category: {
      type: Array,
      default() {
        return []
      }
    },
    exclude: { type: String, default: '' }
  }
}
</script>
