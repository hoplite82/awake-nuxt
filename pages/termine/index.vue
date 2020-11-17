<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <!-- <site-hero title="Categories" image="https://picsum.photos/1800/1801" />     -->
    <main-section theme="one-column">
      <member-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Members | ${this.$siteConfig.siteName}`,
    }
  },
}
</script>
