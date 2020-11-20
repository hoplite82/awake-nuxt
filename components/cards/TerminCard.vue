<template>
  

    
      
    <div class="card-content">
      <div class="media">
        <div class="media-content item">
          <nuxt-link :to="link">
            <h2 class="title">
            
              {{ title }}
            </h2>
            </nuxt-link>
            
             <h4>
             Start: {{ startdatePretty}}
            </h4>
           
          
        </div>
      </div>
    </div>
  
</template>
<script>
import { getFormattedDate } from '~/helper'
export default {
  props: {
    title: { type: String, default: '' },
    link: { type: String, default: '' },
    startdate: {type: String, default: ""},
    enddate: {type: String, default: ''}
  },
  computed: {
    startdatePretty() {
      return getFormattedDate(this.startdate)
    }, enddatePretty() {
      return getFormattedDate(this.enddate)
    }
    
  }
}
</script>
<style lang="scss">
.item {
  
}

.item:hover {
  background: $primary;
}

</style>
