<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.member"
    :theme="$siteConfig.categories.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <category-card
        :title="item.name"
        :link="item.slug ? `/members/${item.slug}` : ''"
        :image="item.image"
        
      />
    </template>
  </resource-grid>
</template>

<script>
import CategoryCard from '~/components/cards/CategoryCard'
export default {
  name: 'MemberGrid',
  components: { CategoryCard },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    exclude: { type: String, default: '' }
  }
}
</script>
