<template>
  <div id="__root">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "CustomLayout",
};
</script>
