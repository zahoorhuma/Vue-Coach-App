export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters: {
    getRequests(state) {
      return state.requests;
    },
    hasRequests(state) {
      return state.requests && state.requests.length > 0;
    },
    getRequestsCount(state) {
      return state.requests.length;
    },
  },
  mutations: {
    addRequest(state, payload) {
      console.log(payload);
      state.requests.push(payload.data);
    },
  },
};
