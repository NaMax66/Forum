export const state = () =>({
  chatMessages: 'Hi',
  user: {},
  messages: [],
  users: []
})

export const mutations = {
  SET_MESSAGE(state, chatMessage) {
    state.chatMessages += chatMessage
  },
  setUser(state, user) {
    state.user = user
  },
  clearData(state) {
    state.user = {}
    state.messages = []
    state.users = []
  },
  SOCKET_newMessage(state, message) {
    state.messages.push(message)
  },
  SOCKET_updateUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  FORMAT_MESSAGE({ commit }, chatMessage) {
    const chatMsgFmt = `${new Date().toLocaleString()}: ${chatMessage}\r\n`
    commit('SET_MESSAGE', chatMsgFmt)
  }
}
