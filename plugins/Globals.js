import SiteConfig, { CMS } from '~/config/_siteConfig'

const data = require('../static/api/categories.json');
// console.log("Data"+data);
let navitems = []


data.forEach(

  v => {
    if (v.innav) {
      let x = {name: "",link: "",pos: 100}
      x.name = v.name
      x.link = "/categories/"+v.slug
      x.pos = ((v.pos) ? v.pos : 100) 
      navitems.push(x)
      
    }
  }
)

SiteConfig.mainMenu.forEach(el => {
  navitems.push(el)
});
navitems.sort((a,b) => a.pos - b.pos)
navitems.forEach((v,i) => console.log(v.name+"i:"+i+"pos:"+v.pos)
) 


export default (
  { app }, inject) => {
  inject('siteConfig', SiteConfig)
  const cms = new CMS(app.$axios);
  inject('cms', cms)
  inject('navitems', navitems)



}
