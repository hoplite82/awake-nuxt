<template>
   <resource-grid
    v-bind="$props"
    :resource="$cms.termin"
    :theme="$siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <termin-card
        :title="item.title"
        :link="item.slug ? `/termine/${item.slug}` : ''"
        :ort="item.ort"
        :startdate="item.startdate"
        :enddate="item.enddate"
      />
    </template>
  </resource-grid> 
</template>
<script>
import TerminCard from '~/components/cards/TerminCard'
export default {
  name: 'TermineGrid',
  components: { TerminCard },
  props: {
    perRow: { type: Number, default: 1 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    exclude: { type: String, default: '' }
  }
}
</script>
