<template>
  <div id="bilanz-page" class="page-wrapper bilanz-page">
    <!-- <site-hero title="Ortsbeirat Bilanz 2016-2020" image="/uploads/bilanz-banner.png"></site-hero> -->

    <main-section>
      <h1 class="title is-1">Testing</h1>

     
      <ul>
        <li v-for="member in members" :key="member.slug">
          Name: {{ member.name }}, link: {{ "/members/"+member.slug }} |  |
          <a @click="getLink(member.name)">{{ member.name }}</a>
        </li>
      </ul>
    </main-section>
  </div>
</template>

<script>
import QuoteCard from '../components/cards/QuoteCard.vue'
import MainSection from '../components/MainSection.vue'
export default {
  components: { QuoteCard, MainSection },
  data() {
    return { members: [],authorname: "Robert Pratersch" }
  },
  computed: {
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    },
    link() {
      return this.setData()
    },
  },
  methods: {
    setData() {
      let amembers = []
      this.$cms.member.getAll().then((res) => {
        res.forEach((member) => {
          
          this.members.push(member)
        })
      })
    }, getLink(authorname){
      let link = 'test'
       this.$cms.member.getAll().then((res) => {
        res.forEach((member) => {
          if(authorname==member.name) this.$router.push("/members/"+member.slug)  
        //  this.members.push(member)
        })
      })
    
    }
    
  },mounted(){this.setData()}
}
</script>

<style>
</style>