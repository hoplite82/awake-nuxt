<template>
  <nav
    class="navbar has-shadow is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <site-logo v-if="$siteConfig.logo === 'logo-component'" />
        <img
          v-else
          :src="$siteConfig.logo"
          :alt="$siteConfig.siteName"
          class="logo"
        />
      </nuxt-link>
      <hamburger-button @click="active = !active" />
    </div>

    <div
      :class="{
        'navbar-menu': true,
        'is-active': active,
      }"
    >
      <ul class="navbar-end">
        
        <li
          v-for="cat in $store.$cms.category"
          :key="cat.slug"
          class="navbar-item"
          @click="active = false"
        >
         <nuxt-link
            :to="`/categories/${cat.slug}`"
            
            >{{ cat.name }} </nuxt-link>
          
          <!-- <component
            :is="nuxt-link"
            
            :to="item.name"
            :target="item.target ? item.target : '_self'"
          > </component>  -->
        
         
       
        <!-- </li><li>{{getAny}}</li> -->
        <!-- <li class="navbar-item site-search-wrapper">
          <site-search />
        </li> -->
        <li></li>
      </ul>
    </div>
  </nav>
</template>
<script>
import SiteSearch from '~/components/SiteSearch'
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav2',
  components: { SiteSearch, HamburgerButton },
  data() {
    return {
      active: false,
      allCats: []
    }
  },
  computed: {
    // getCat() {
    //  return this.$cms.category.getAll().then(r => console.log)
    // },
    // getAny() {
    //  return "return was geht"
    // },
  
  },
    
  // async created() {
  //   this.allCats = await this.$cms.category.getAll()
  // }
  // //   
}
</script>
<style lang="scss" scoped>
.navbar-item img {
  max-height: 2rem;
}
.site-search-wrapper {
  transform: translateX(5px);
  @media (max-width: 1023px) {
    display: none;
  }
}
.navbar-burger {
  height: auto;
}

.navbar-menu a {
  display: block;
}
.navbar-item {
  margin-left: 2rem;
  font-weight: bold;
}
</style>
