<template>
  <div>
    <p ></p>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: "chat.vue",
    computed: mapState['messages']
  }
</script>

<style scoped>

</style>
