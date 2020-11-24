import Vue from 'vue'
import CategoriesGrid from '../components/grids/CategoriesGrid'
import DisqusComments from '../components/DisqusComments'
import IntersectionObserver from '../components/IntersectionObserver'
import LoadingSpinner from '../components/LoadingSpinner'
import MainSection from '../components/MainSection'
import NewsLetterSlideOut from '../components/NewsLetterSlideOut'
import PostsGrid from '../components/grids/PostsGrid'
import SiteFooter from '../components/SiteFooter'
import SiteHero from '../components/SiteHero'
import SiteLogo from '../components/SiteLogo'
import SiteNav from '../components/SiteNav'
import ResourceGrid from '~/components/grids/ResourceGrid'
import MemberGrid from '~/components/grids/MemberGrid'
import TermineGrid from '~/components/grids/TermineGrid'
import SiteNav2 from '~/components/SiteNav2'
// import Navbar from 'nuxt-buefy/lib/module'
//Vue.component(.name, TermineGrid)
Vue.component(SiteNav2.name, SiteNav2)
Vue.component(TermineGrid.name, TermineGrid)
Vue.component(CategoriesGrid.name, CategoriesGrid)
Vue.component(DisqusComments.name, DisqusComments)
Vue.component(IntersectionObserver.name, IntersectionObserver)
Vue.component(LoadingSpinner.name, LoadingSpinner)
Vue.component(MainSection.name, MainSection)
Vue.component(NewsLetterSlideOut.name, NewsLetterSlideOut)
Vue.component(PostsGrid.name, PostsGrid)
Vue.component(SiteFooter.name, SiteFooter)
Vue.component(SiteHero.name, SiteHero)
Vue.component(SiteLogo.name, SiteLogo)
Vue.component(SiteNav.name, SiteNav)
Vue.component(ResourceGrid.name, ResourceGrid)
Vue.component(MemberGrid.name, MemberGrid)
