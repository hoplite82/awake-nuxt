<template>
  <div id="categories-page" class="page-wrapper">
    <!-- <site-hero title="Categories" image="https://picsum.photos/1800/1801" />     -->
    <main-section theme="one-column">
      <termine-grid />
    </main-section>
  </div>
</template>
<script>


export default {
  head() {
    return {
      title: `Termine | ${this.$siteConfig.siteName}`,
    }
  }
}
</script>
