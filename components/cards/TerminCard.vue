<template>
  <div class="item">
    <center>
      <h2 class="title">
        {{ title }}
      </h2>
      <h4 class="is-size-4">Ort: <pre > {{ ort }}</pre></h4>
    </center>
    <div class="flex-container">
      <div class="item flex-item-left">
        <span class="is-size-4">
              
          <h4>
            Datum: <pre>{{ startdatePretty }}</pre>
            Beginn: <pre>{{ starttime }}</pre>
          </h4>

          <h4 v-if="startdatePretty == enddatePretty"></h4>
          <h4 v-else>EndDatum: <pre>{{ enddatePretty }}</pre></h4>
          <h4>Ende: <pre>{{ endtime }}</pre></h4>
        </span>
      </div>
      <div class="item flex-item-right is-size-4">
        {{ content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    link: { type: String, default: '' },
    startdate: { type: Date, default: null },
    enddate: { type: Date, default: null },
    ort: { type: String, default: 'keine Angabe' },
    content: { type: String, default: '' },
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
        ('0' + adate.getUTCHours()).slice(-2) +
        ':' +
        ('0' + adate.getUTCMinutes()).slice(-2)
      )
    },
    getFormattedDate(date) {
      const adate = new Date(date)
      return (
        ('0' + adate.getDay()).slice(-2) +
        '.' +
        ('0' + adate.getMonth()).slice(-2) +
        '.' +
        adate.getFullYear()
      )
    },
  },
}
</script>
<style lang="scss">
h4 {
  color: $dark;
}

.item {
  background: #afacac;
  padding: 1rem;
}
* {
  box-sizing: border-box;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item-left {
  flex: 25%;
}

.flex-item-right {
  flex: 75%;
}

/* Responsive layout - makes a one column-layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-item-right,
  .flex-item-left {
    flex: 100%;
  }
}
</style>
