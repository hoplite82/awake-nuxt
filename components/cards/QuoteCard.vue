<template>
  <div class="">
    <article class="is-size-4-desktop">
      <h3 class="title">{{ title }}</h3>
      <img v-if="image" :src="image" class="textwrap" />
      <div class="has-text-justified">
        <slot>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          tempora, tenetur quo animi beatae obcaecati eligendi repellat omnis
          reprehenderit consectetur ipsum, distinctio non illo ex temporibus
          soluta accusamus ea vero! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iste harum libero quisquam eum repudiandae rem
          doloremque nostrum laudantium quos sed! Earum dolore optio pariatur id
          quasi, sed hic corrupti excepturi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Doloremque sequi optio odit quos
          molestiae. Aliquid veniam perferendis quae incidunt doloribus totam
          quia pariatur modi, consequatur blanditiis eveniet, nostrum fuga.
          Consequuntur. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Aut cumque sapiente rerum culpa assumenda pariatur beatae
          reprehenderit quae molestiae nostrum perspiciatis eligendi repellendus
          omnis, accusamus impedit odit debitis et quam.
        </slot>
      </div>
    </article>
    <div class="clear"><br /> <br /></div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: 'Überschrift' },
    image: { type: String, default: '' },
  },
}
</script>
<style>
.textwrap {
  width: 25rem;
  height: auto;
  float: left;
  margin: 1rem;
}
</style>

<style scoped>
h3 {
  text-decoration: underline;
}
.clear {
  clear: both;
}

/* Responsive layout - makes a one column-layout instead of a two-column layout */
@media (max-width: 769px) {
  .textwrap {
    width: 90%;
    height: auto;
    float: left;
  }
}
</style>
