import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
const { APP_PORT, APP_IP } = process.env;

export default function({store}) {
  Vue.use(new VueSocketIO({
    debug: false,
    connection: `http://${APP_IP}:${APP_PORT}`,
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  }))
}
