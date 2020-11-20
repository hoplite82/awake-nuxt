<template>
  <div class="card-content">
    <div class="media">
      <div class="media-content item">
        <nuxt-link :to="link">
          <h2 class="title">
            {{ title }}
          </h2>
        
        <h4> Ort: {{ ort }}  </h4>
        <h4>Start:{{ startdatePretty }} | Zeit: {{ starttime }}</h4>
        <h4>Ende: {{ enddatePretty }} | Zeit: {{ endtime }}</h4>
        </nuxt-link>
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
    ort: {type: String, default: "keine Angabe"}
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
    }
  },
  methods: {
    time(date) {
      const adate = new Date(date)
      return (
        ('0' + adate.getUTCHours()).slice(-2) +
        ':' +
        ('0' + adate.getUTCMinutes()).slice(-2)
      )
    }, getFormattedDate(date) {
  const months = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ]
  const dateObj = new Date(date)
  return ` ${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`
  }
  }
}
</script>
<style lang="scss">
h4 {
  color: $dark;
}
.item {
}

.item:hover {
  background: $primary;
}
</style>
