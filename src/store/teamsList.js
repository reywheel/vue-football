import teamsApi from "@/api/teams";

export const getterTypes = {
  getAllTeams: "[teams list] get all teams",
  isLoading: "[teams list] is loading"
};

export const mutationTypes = {
  getTeamsStart: "[teams list] get teams",
  getTeamsSuccess: "[teams list] get teams success",
  getTeamsFailure: "[teams list] get teams failure"
};

export const actionTypes = {
  getTeams: "[teams list] get teams"
};

const state = {
  data: null,
  isLoading: false
};

const getters = {
  [getterTypes.getAllTeams]: state => state.data,
  [getterTypes.isLoading]: state => state.isLoading
};

const mutations = {
  [mutationTypes.getTeamsStart](state) {
    state.data = null;
    state.isLoading = true;
  },
  [mutationTypes.getTeamsSuccess](state, teams) {
    state.data = teams;
    state.isLoading = false;
  },
  [mutationTypes.getTeamsFailure](state) {
    state.isLoading = false;
  }
};

const actions = {
  async [actionTypes.getTeams]({ commit }) {
    try {
      commit(mutationTypes.getTeamsStart);
      const teams = await teamsApi.getTeams();
      commit(mutationTypes.getTeamsSuccess, teams);
    } catch (e) {
      commit(mutationTypes.getTeamsFailure);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
