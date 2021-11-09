import {getCityByName} from '@/api/WeatherService';
import i18n from '@/plugins/i18n';

export const state = {
    loading: false,
    searchQuery: '',
    city: null,
    history: [],
    searchErrorMessage: '',
};

export const getters = {};

export const actions = {
    init({commit}) {
        const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) ?? [];
        commit('setHistory', storedHistory);
    },
    async getCityByName({commit}, searchQuery) {
        try {
            commit('setLoading', true);
            const {locale} = i18n;
            const {data} = await getCityByName({city: searchQuery, lang: locale});
            console.log(data);
            const {name: cityName} = data;
            if (cityName) {
                commit('setSearchErrorMessage', '');
                commit('setCity', data);
                commit('setHistoryItem', cityName);
                commit('saveHistory');
            }
        } catch (e) {
            commit('setSearchErrorMessage', i18n.t('searchErrorMessage'));
            console.error(`Произошла ошибка получения данных: ${e.message}`);
        } finally {
            commit('setLoading', false);
        }
    },
    initSearch({commit, dispatch}, searchQuery) {
        commit('setSearchQuery', searchQuery);
        dispatch('getCityByName', searchQuery);
    },
};

export const mutations = {
    setLoading(state, payload) {
        state.loading = payload;
    },
    setSearchQuery(state, payload) {
        state.searchQuery = payload;
    },
    setCity(state, payload) {
        state.city = payload;
    },
    setHistory(state, payload) {
        state.history = payload;
    },
    setHistoryItem(state, payload) {
        state.history.push(payload);
    },
    saveHistory(state) {
        localStorage.setItem('searchHistory', JSON.stringify(state.history));
    },
    setSearchErrorMessage(state, payload) {
        state.searchErrorMessage = payload;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
};
