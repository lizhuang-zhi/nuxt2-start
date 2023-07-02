<template>
  <div>
    <div>Store Page</div>
  </div>
</template>

<script>
export default {
  name: "StorePage",
  head: {
    title: "This is the Store Page",
  },
  mounted() {
    console.log(this.$store.state);
  }
};
</script>