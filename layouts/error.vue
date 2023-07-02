<template>
  <div>
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An Error Occurred</h1>
      <nuxt-link to="/">Home Page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog'
}
</script>
    