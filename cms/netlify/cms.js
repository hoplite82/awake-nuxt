import Post from './post'
import Category from './category'
import Member from './member'
import Termin from './termine'

import LifeCycleHooks from './hooks/lifeCycle'
class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.post = new Post(axios)
    this.category = new Category(axios)
    this.member = new Member(axios)
    this.termin = new Termin(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
