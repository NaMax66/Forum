<template>
  <div>
    <form>
      <label>
        Имя
        <input v-model="name" type="text">
      </label>
      <label>
        Комната
        <input v-model="room" type="text">
      </label>
      <button @click.prevent="submitForm">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'main_page',
  components: {
    AppLogo
  },
  data: () => ({
    messageRxd: '',
    name: '',
    room: ''
  }),
  mounted() {

  },
  methods: {
    ...mapMutations(["setUser"]),
    submitForm () {
      const user = {
        name: this.name,
        room: this.room
      }
      /* передаем на сервер объект с данными пользователя */
      /* третий объект - это функция, которая будет вызвана после того как серер выполнит действия */
      this.$socket.emit("userJoined", user, data => {
        if (typeof data === "string") {
          /* если ответ приходит в виде строки - значит это ошибка */
          console.error(data)
        } else {
          user.id = data.userId
          /* вызываем мутацию */
          this.setUser(user)

          /* открываем страницу чат */
          this.$router.push("/chat")
        }
      })
    },
    clear() {
      this.$v.$reset()
      this.name = ""
      this.room = ""
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

