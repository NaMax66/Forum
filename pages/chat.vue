<template>
  <div>
    <div class="one_msg" v-for="(msg, i) in messages" :key="i">
      <h5>{{msg.name}}</h5>
      <p>
        {{ msg.text }}
      </p>
    </div>
    <div class="input_form">
      <input type="text" v-model="new_message">
      <button @click="sendMessage">Отправить</button>
    </div>
  </div>
</template>
<script>
  import { mapState } from "vuex"

  export default {
    name: "chat.vue",
    computed: mapState(["messages"]),
    middleware: ["chat"],
    data: () => ({
      new_message: ""
    }),
    methods: {
      sendMessage () {
        console.log(this.$store.state.user.id)
        this.$socket.emit('createMessage', {
          text: this.new_message,
          id: this.$store.state.user.id
        }, data => {
          if (typeof data === 'string') {
            console.error(data)
          } else {
            this.text = ''
          }
        })
      }
    }
  }
</script>

<style scoped>
  .one_msg {
    margin-bottom: .5rem;
    font-size: 1.6rem;
  }
</style>
