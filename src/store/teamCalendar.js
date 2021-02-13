import teamApi from "@/api/teams";

export const getterTypes = {
  calendar: "[team calendar] team calendar",
  isLoading: "[team calendar] is loading"
};

export const mutationTypes = {
  getTeamCalendarStart: "[team calendar] get team calendar start",
  getTeamCalendarSuccess: "[team calendar] get team calendar success",
  getTeamCalendarFailure: "[team calendar] get team calendar failure"
};

export const actionTypes = {
  getTeamCalendar: "[team calendar] get team calendar"
};

const state = {
  data: null,
  isLoading: false
};

const getters = {
  [getterTypes.calendar]: state => state.data,
  [getterTypes.isLoading]: state => state.isLoading
};

const mutations = {
  [mutationTypes.getTeamCalendarStart](state) {
    state.data = null;
    state.isLoading = true;
  },
  [mutationTypes.getTeamCalendarSuccess](state, calendar) {
    state.data = calendar;
    state.isLoading = false;
  },
  [mutationTypes.getTeamCalendarFailure](state) {
    state.isLoading = false;
  }
};

const actions = {
  async [actionTypes.getTeamCalendar]({ commit }, { teamId }) {
    try {
      commit(mutationTypes.getTeamCalendarStart);
      const calendar = await teamApi.getTeamCalendar(teamId);
      commit(mutationTypes.getTeamCalendarSuccess, calendar);
    } catch (e) {
      commit(mutationTypes.getTeamCalendarFailure);
      throw e;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
