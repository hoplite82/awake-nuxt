<template>
  <div id="kontakt-page" class="page-wrapper kontakt-page">
    <site-hero
      title="Kontakt"
      subtitle="Hier können Sie uns eine Nachricht hinterlassen"
      image="/uploads/banner_west.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p>Hinterlassen Sie uns eine Nachricht.</p>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <!-- form start -->
              <form
                name="form-contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="form-contact" />
                <!-- Name -->
                <div class="field">
                  <label class="label is-medium">Name</label>
                  <div class="control has-icons-left">
                    <input
                      class="input is-medium"
                      type="text"
                      name="name"
                      placeholder="John Smith"
                    />
                    <span class="icon is-small is-left">
                      <font-awesome-icon icon="user" />
                    </span>
                  </div>
                </div>
                <!-- Email -->
                <div class="field">
                  <label class="label is-medium">Email</label>
                  <div class="control has-icons-left">
                    <input
                      class="input is-medium"
                      type="email"
                      name="mail"
                      placeholder="your@email.com"
                    />
                    <span class="icon is-small is-left">
                      <font-awesome-icon icon="envelope" />
                    </span>
                  </div>
                </div>
                <!-- Subject -->
                <div class="field">
                  <label class="label is-medium">Betreff</label>
                  <div class="control has-icons-left">
                    <input
                      name="Betreff"
                      class="input is-medium"
                      type="text"
                      placeholder="Brief Summary"
                    />
                    <span class="icon is-small is-left">
                      <font-awesome-icon icon="briefcase" />
                    </span>
                  </div>
                </div>
                <!-- Message -->
                <div class="field">
                  <label class="label is-medium">Nachricht</label>
                  <div class="control">
                    <textarea
                      name="massage"
                      class="textarea"
                      placeholder="Detailed description of your comment, request, etc"
                      rows="8"
                    ></textarea>
                  </div>
                </div>
                <div class="control">
                  <button class="button is-primary">Senden</button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">Neuste Veröffentlichungen</h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
// import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Kontakt | ${this.$siteConfig.siteName}`,
    }
  },
}
</script>
