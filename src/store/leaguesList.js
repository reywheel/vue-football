import leaguesApi from "@/api/leagues";

export const getterTypes = {
  getAll: "[leagues list] get all",
  isLoading: "[league list] is loading"
};

export const mutationTypes = {
  getLeaguesStart: "[leagues list] get leagues start",
  getLeaguesSuccess: "[leagues list] get leagues success",
  getLeaguesFailure: "[leagues list] get leagues failure"
};

export const actionTypes = {
  getLeagues: "[leagues list] get leagues"
};

const state = {
  data: null,
  isLoading: false
};

const getters = {
  [getterTypes.getAll]: state => state.data,
  [getterTypes.isLoading]: state => state.isLoading
};

const mutations = {
  [mutationTypes.getLeaguesStart](state) {
    state.data = null;
    state.isLoading = true;
  },
  [mutationTypes.getLeaguesSuccess](state, leagues) {
    state.isLoading = false;
    state.data = leagues;
  },
  [mutationTypes.getLeaguesFailure](state) {
    state.isLoading = false;
  }
};

const actions = {
  async [actionTypes.getLeagues]({ commit }) {
    commit(mutationTypes.getLeaguesStart);
    try {
      const leagues = await leaguesApi.getLeagues();
      commit(mutationTypes.getLeaguesSuccess, leagues);
    } catch (e) {
      commit(mutationTypes.getLeaguesFailure);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
