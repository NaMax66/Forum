<template>
  <div class="chat_form">
    <form>
      <label>
        Ваш ник
        <input v-model="name" type="text">
      </label>
      <h5>Выберете комнату</h5>
      <div class="chat_choose_room">
        <button @click.prevent="submitForm('Друзья')">Друзья</button>
        <button @click.prevent="submitForm('Семья')">Семья</button>
        <button @click.prevent="submitForm('Работа')">Работа</button>
      </div>
      <h5>Или создайте свою</h5>
      <label>
        Название
        <input v-model="room" type="text">
        <button @click.prevent="submitForm">Войти</button>
      </label>
    </form>
  </div>
</template>

<script>
  import { mapMutations } from "vuex"

  export default {
    name: "main_page",
    data: () => ({
      messageRxd: "",
      name: "",
      room: ""
    }),
    mounted() {

    },
    methods: {
      ...mapMutations(["setUser"]),
      submitForm(presetRoom) {
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
    font-size: 2rem;
    width: 80%;
    @media (min-width: 500px) {
      width: 400px;
    }

    margin: 5rem auto;
    box-shadow: var(--shodow);
    padding: 2rem 3rem;
    border-radius: 3px;
    background-color: var(--light-gray);

    & label {
      display: block;
    }
    & h5 {
      margin-bottom: 1rem;
    }
    & input {
      height: 3rem;
      border-radius: 3px;
      border: 1px solid var(--admin-color);
      background-color: var(--white);
      font-size: 1.6rem;
    }
  }
  .chat_choose_room {
    display: flex;
    flex-wrap: wrap;
  }


</style>

