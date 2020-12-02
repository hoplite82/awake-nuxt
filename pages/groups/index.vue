<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <!-- <site-hero title="Categories" image="https://picsum.photos/1800/1801" />     -->
    <main-section theme="one-column">
      <GroupsGrid />
    </main-section>
  </div>
</template>
<script>

export default {
  head() {
    return {
      title: `Gruppen | ${this.$siteConfig.siteName}`,
    }
  },
}
</script>
