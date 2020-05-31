export default function({ store, redirect }) {
  /* Интересная проверка - есть ли ключи в объекте. */
  if (!Object.keys(store.state.user).length) {
    redirect("/?message=noUser")
  }
}
