import { getMixins } from './mixins'

class Group {
  constructor(axios) {
    this.slug = 'group'
    this.slugPlural = 'groups'
    this.pretty = 'Group'
    this.plural = 'Groups'
    this.axios = axios
  }
}

// Mixins
Object.assign(Group.prototype, getMixins)
export default Group

