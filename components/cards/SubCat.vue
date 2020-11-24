<template>
  <div class="card">
    
    <div class="card-content">
      <p class="content">
        “Always code as if the guy who ends up maintaining your code will be a
        violent psychopath who knows where you live.”
      </p>
      <p class="subtitle">
        ~ Martin Golding
      </p>
    </div>
    <!-- <footer class="card-footer">
      <div class="card-footer-item">
        <span> Share on <a href="#">Twitter</a> </span>
      </div>
      <div class="card-footer-item">
        <span> Share on <a href="#">Facebook</a> </span>
      </div>
    </footer> -->
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {type: String, default: "content"},
    img: {type: String, default: "imgpath"}
  },author: {
      type: String,
      default: ''
    }
}
</script>

