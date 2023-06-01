export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Huma",
          lastName: "Zahoor",
          hourlyRate: 80,
          areas: ["frontend", "backend", "career"],
          description: "I'm Huma and worked is Systems limited",
        },
        {
          id: "c2",
          firstName: "Mohsin",
          lastName: "Ali",
          hourlyRate: 90,
          areas: ["frontend", "career"],
          description: "I'm Mohsin and worked in AirIt",
        },
      ],
    };
  },
  getters: {
    getCoaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    getCoachesCount(state) {
      return state.coaches.length;
    },
  },
  mutations: {
    addCoach(state, payload) {
      console.log(payload);
      state.coaches.push(payload.data);
      console.log(this.state.coaches);
    },
  },
};
