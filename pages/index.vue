<template>
  <div class="chat_form">
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
    <div class="room_list">
      <button @click.prevent="submitForm('Друзья')">Друзья</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'main_page',
  data: () => ({
    messageRxd: '',
    name: '',
    room: ''
  }),
  mounted() {

  },
  methods: {
    ...mapMutations(["setUser"]),
    submitForm (presetRoom) {
      let room = presetRoom ? presetRoom : this.room
      const user = {
        name: this.name,
        room
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
.chat_form {
  font-size: 1.6rem;
}

</style>

