<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contact Us"
      subtitle="Example Contact Page"
      image="/uploads/banner_west.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p>Hinterlassen sie uns eine Nachricht.</p>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <!-- form start -->
              <form
                name="kontakt-contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="form-kontakt" />
                <!-- Name -->
                <div class="field">
                  <label class="label is-medium">Name</label>

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
                <!-- Email -->
                <div class="field">
                  <label class="label is-medium">Email</label>

                  <input
                    class="input is-medium"
                    type="email"
                    placeholder="your@email.com"
                    name="mail"
                  />
                  <span class="icon is-small is-left">
                    <font-awesome-icon icon="envelope" />
                  </span>
                </div>
                <!-- Subject -->
                <div class="field">
                  <label class="label is-medium">Subject</label>

                  <input
                    class="input is-medium"
                    type="text"
                    placeholder="Brief Summary"
                  />
                  <span class="icon is-small is-left">
                    <font-awesome-icon icon="briefcase" />
                  </span>
                </div>
                <!-- Message -->
                <div class="field">
                  <label class="label is-medium">Message</label>

                  <textarea
                    class="textarea"
                    placeholder="Detailed description of your comment, request, etc"
                    rows="8"
                  ></textarea>
                </div>

                <div class="control">
                  <button class="button is-primary">Contact Uss</button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">Latest Posts</h3>
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
      title: `Contact | ${this.$siteConfig.siteName}`,
    }
  },
}
</script>
