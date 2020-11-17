import { getMixins } from './mixins'

class Post {
  constructor(axios) {
    this.slug = 'member'
    this.slugPlural = 'members'
    this.pretty = 'Member'
    this.plural = 'Members'
    this.axios = axios
    this.editUrl = '/admin/#/collections/members/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Post.prototype, getMixins)

export default Post
