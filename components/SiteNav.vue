<template>
  <nav
    class="navbar has-shadow is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand" >
      <nuxt-link class="navbar-item" to="/">
        <site-logo v-if="$siteConfig.logo === 'logo-component'" />
        <img
          :src="$siteConfig.logo"
          :alt="$siteConfig.siteName"
          class="logo"
          @click="active = false"
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
      <ul class="navbar-start">
        <li
          v-for="item in $siteConfig.mainMenu"
          :key="item.link"
          class="navbar-item is-size-3"
          @click="active = false"
        >
          <component
            :is="item.link.startsWith('http') ? 'a' : 'nuxt-link'"
            :href="item.link"
            :to="item.link"
            :target="item.target ? item.target : '_self'"
          >
            {{ item.name }}
          </component>
        </li>
      </ul>
      <ul class="navbar-end">
         <li class="navbar-item site-search-wrapper is-size-3">
          <site-search />
        </li>
         <li class="navbar-item site-search-wrapper is-size-3">
         
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import SiteSearch from '~/components/SiteSearch'
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav',
  components: { SiteSearch, HamburgerButton },
  data() {
    return {
      active: false,
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-item img {
  max-width: auto;
  max-height: 5rem;
  
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

@media (max-width: 769px) {
  .navbar-item img {
  max-width: 15rem;
  max-height: auto;
  }
}

</style>
