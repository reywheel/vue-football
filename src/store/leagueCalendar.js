import leagueApi from "@/api/leagues";

export const mutationTypes = {
  getLeagueCalendarStart: "[league calendar] get league calendar start",
  getLeagueCalendarSuccess: "[league calendar] get league calendar success",
  getLeagueCalendarFailure: "[league calendar] get league calendar failure"
};

export const getterTypes = {
  getAllMatches: "[league calendar] get all matches",
  isLoading: "[league calendar] is loading"
};

export const actionTypes = {
  getLeagueCalendar: "[league] get league calendar"
};

const state = {
  data: null,
  isLoading: false
};

const getters = {
  [getterTypes.getAllMatches]: state => state.data,
  [getterTypes.isLoading]: state => state.isLoading
};

const mutations = {
  [mutationTypes.getLeagueCalendarStart](state) {
    state.data = null;
    state.isLoading = true;
  },
  [mutationTypes.getLeagueCalendarSuccess](state, league) {
    state.data = league;
    state.isLoading = false;
  },
  [mutationTypes.getLeagueCalendarFailure](state) {
    state.isLoading = false;
  }
};

const actions = {
  async [actionTypes.getLeagueCalendar]({ commit }, { id }) {
    try {
      commit(mutationTypes.getLeagueCalendarStart);
      const league = await leagueApi.getLeagueCalendar(id);
      commit(mutationTypes.getLeagueCalendarSuccess, league);
    } catch (e) {
      commit(mutationTypes.getLeagueCalendarFailure);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
