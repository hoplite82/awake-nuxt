<template>
  <v-runtime-template class="content" :template="content"></v-runtime-template>
</template>

<script>
import MarkdownIt from 'markdown-it'
import taskList from 'markdown-it-task-lists'
import VRuntimeTemplate from 'v-runtime-template'

export default {
  name: 'Markdown',
  components: { VRuntimeTemplate },
  props: {
    tag: { type: String, default: 'article' },
    markdown: { type: String, required: true }
  },
  computed: {
    content() {
      const md = new MarkdownIt({
        linkify: true,
        typographer: true,
        html: true
      })
      md.use(taskList, {label: false}); 
      let html = md.render(this.markdown)
      
      html = this.useResponsiveImages(html)
      html = this.wrapTable(html)
      html = html.replace(/<table>/g, '<table class="table is-striped">')

      return `<div class="content has-text-justified">${html}</div>`
    }
  },
  methods: {
    useResponsiveImages(html) {
      const images = html.match(/<img(.*?)>/g)
      if (images) {
        images.forEach((image) => {
          const origImage = image
            .match(/src="([^"]*)"/g)[0]
            .replace('src="', '')
            .replace('"', '')
          let replace = `src="${origImage}"`

          const generatedImage = require(`~/assets${origImage}`)
          if (origImage.endsWith('.gif')) {
            if (origImage.startsWith('/')) {
              replace = `src="${generatedImage}"`
            }

            const gifImage = image.replace(/src="([^"]*)"/g, replace)
            html = html.replace(image, gifImage)
          } else {
            if (origImage.startsWith('/')) {
              replace = `src="${generatedImage.src}" srcset="${generatedImage.srcSet}"`
            }

            const optiImage = image
              .replace('<img', '<opti-image')
              .replace('>', '/>')
              .replace(/src="([^"]*)"/g, replace)
            html = html.replace(image, optiImage)
          }
        })
      }
      return html
    },
    wrapTable(html) {
      html = html.replace(/<table/g, `<div class="table-wrapper"><table`)
      html = html.replace(/<\/table>/g, `</table></div>`)
      return html
    }
  }
}
</script>

<style scoped></style>
