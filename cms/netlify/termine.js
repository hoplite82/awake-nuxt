import { getMixins } from './mixins'

class Termin {
  constructor(axios) {
    this.slug = 'termin'
    this.slugPlural = 'termine'
    this.pretty = 'Termin'
    this.plural = 'Termine'
    this.axios = axios
    this.editUrl = '/admin/#/collections/termine/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Termin.prototype, getMixins)

export default Termin
