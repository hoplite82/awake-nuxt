<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.member"
    :theme="$siteConfig.categories.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <member-card
        :title="item.name"
        :link="item.slug ? `/members/${item.slug}` : ''"
        :image="item.image"
        :description="item.description"
        :pos="item.pos"
        
      />
    </template>
  </resource-grid>
</template>

<script>
import MemberCard from '~/components/cards/MemberCard'
export default {
  name: 'MemberGrid',
  components: { MemberCard },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    group: {type: String,default: ''},
    exclude: { type: String, default: '' }
  }
}
</script>
