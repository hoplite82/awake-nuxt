<template>
  <div class="item">
    <center>
      <h2 class="title">
        {{ title }}
      </h2>
      
    </center>
    <div>
   
    </div>
    

    <div class="flex-container">
      <div class="item flex-item-break">  
       Ort:  <pre>{{ ort }} </pre>
      </div>
      <div class="item flex-item-left">                              
            Datum: <pre>{{ startdatePretty }}</pre>
            Beginn: <pre>{{ starttime }}</pre>
          <div v-if="startdatePretty == enddatePretty"></div>
          <div v-else>EndDatum: <pre>{{ enddatePretty }}</pre></div>
          Ende: <pre>{{ endtime }}</pre>       
      </div>
      <div class="item flex-item-right">
        <markdown :markdown="content" />
       
      </div>
    </div>
  </div>
</template>
<script>

import Markdown from '../Markdown'
export default {
  props: {
    title: { type: String, default: '' },
    link: { type: String, default: '' },
    startdate: { type: String, default: null },
    enddate: { type: String, default: null },
    ort: { type: String, default: 'keine Angabe' },
    content: { type: String, default: '' },
  },components: {
    Markdown
  },
  computed: {
    startdatePretty() {
      return this.getFormattedDate(this.startdate)
    },
    enddatePretty() {
      return this.getFormattedDate(this.enddate)
    },
    starttime() {
      return this.time(this.startdate)
    },
    endtime() {
      return this.time(this.enddate)
    },
  },
  methods: {
    time(date) {
      const adate = new Date(date)
      return (
        ('0' + adate.getHours()).slice(-2) +
        ':' +
        ('0' + adate.getMinutes()).slice(-2)
      )
    },
    getFormattedDate(pdate) {
      const newdate = new Date(pdate)
      return (
        newdate.getDate() +
        '.' +
        (newdate.getMonth() + 1) +
        '.' +
        newdate.getFullYear()
      )
    },
  },
}
</script>
<style scoped>
.item {
  background: #afacac;
  padding: 1rem;
}
* {
  box-sizing: border-box;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.flex-item-left {
  flex: 25%;
}

.flex-item-right {
  flex: 75%;
}

.flex-item-break {
  flex: 100%;
}

/* Responsive layout - makes a one column-layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-item-right,
  .flex-item-left {
    flex: 100%;
  }
}
</style>
