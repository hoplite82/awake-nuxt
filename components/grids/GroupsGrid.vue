<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.Group"
    :theme="$siteConfig.categories.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <category-card
        :title="item.name"
        :link="item.slug ? `/groups/${item.slug}` : ''"
        :image="item.image"
        :description="item.subDisc"
        
      />
    </template>
  </resource-grid>
</template>

<script>
import CategoryCard from '~/components/cards/CategoryCard'
export default {
  name: 'GroupsGrid',
  components: { CategoryCard },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    group: {type: String,default: ''},
    exclude: { type: String, default: '' }
  }
}
</script>
