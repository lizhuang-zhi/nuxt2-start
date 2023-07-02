<template>
  <div>
    <div>secret page</div>
    <div>global middleware 和 secret middleware 都生效</div>
  </div>
</template>

<script>
export default {
  // 方式一:
  middleware: ['secret'],
  // // 方式二:
  // middleware(ctx) {
  //   if (true) {
  //     return ctx.redirect("/");
  //   }
  // },
};
</script>