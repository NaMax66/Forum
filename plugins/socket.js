import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

export default function({store}) {
  Vue.use(new VueSocketIO({
    debug: false,
    connection: `http://${process.env.APP_IP}:${process.env.APP_PORT}`,
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  }))
}
