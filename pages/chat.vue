<template>
  <div class="chat_wrap">
    <div ref="messageBlock" class="chat_msg_wrap">
      <div class="one_msg" :class="{__admin: msg.name === 'admin', __currentUser: user.name === msg.name }"
           v-for="(msg, i) in messages" :key="i">
        <h5>{{msg.name}}</h5>
        <p>
          {{ msg.text }}
        </p>
      </div>
      <div class="input_form">
        <div class="input_form_inputs">
          <textarea @keyup.enter="sendMessage" type="text" v-model="new_message"></textarea>
          <button @click="sendMessage">&hookrightarrow;</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from "vuex"

  export default {
    name: "chat.vue",
    computed: mapState(["messages", "user"]),
    middleware: ["chat"],
    data: () => ({
      new_message: ""
    }),
    watch: {
      messages() {
        /* хак для js чтобы скролилось в конец списка */
        setTimeout(() => {
          this.$refs.messageBlock.scrollTop = this.$refs.messageBlock.scrollHeight
        })
      }
    },
    methods: {
      sendMessage(e) {
        if (e.shiftKey) {
          return
        }
        this.$socket.emit("createMessage", {
          text: this.new_message,
          id: this.$store.state.user.id
        }, data => {
          if (typeof data === "string") {
            console.error(data)
          } else {
            this.new_message = ""
          }
        })
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .chat_wrap {
    height: calc(100vh - 9rem);
    overflow: hidden;
  }

  .chat_msg_wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow-y: auto;
    height: 90%;
    @media (min-width: 400px) {
      height: 95%;
    }
    @media (min-width: 800px) {
      height: 100%;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    & .__currentUser {
      align-self: flex-start;
      background-color: var(--current-user-color);
    }
  }

  .one_msg {
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    width: 90%;
    background-color: var(--other-user-color);
    padding: 5px;
    border-radius: var(--border-radius);
    color: var(--black);
    @media (min-width: 500px) {
      width: 60%;
    }

    &.__admin {
      color: var(--admin-color);
      background-color: var(--white);
    }

    &.__currentUser {
      & h5 {
        color: #BF360C;
      }
    }

    & h5 {
      margin: 0;
    }

    & p {
      margin-top: 4px;
      margin-bottom: 0;
    }
  }

  .input_form {
    background-color: #37474F;
    position: fixed;
    height: auto;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .input_form_inputs {
    max-width: 120rem;
    margin: 0 auto;
    padding: 5px;
    display: flex;
    align-items: center;

    & textarea {
      height: 5rem;
      background-color: var(--white);
      border: none;
      width: 100%;
      margin-left: 1rem;
      font-size: 1.6rem;
      font-family: inherit;
      padding: 3px;
      border-radius: var(--border-radius);

      @media (min-width: 1200px) {
        margin-left: 0;
      }
    }

    & button {
      display: block;
      border: none;
      background-color: rgba(#BF360C, 0.7);
      width: 8rem;
      font-size: 1.5rem;
      margin: 0 0 0 1rem;
      height: 5.6rem;
      color: var(--white);
      border-radius: var(--border-radius);
      box-shadow: none;
    }
  }
</style>
