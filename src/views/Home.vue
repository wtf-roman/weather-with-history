<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ $t('welcomeMsg') }}
        </h1>
        <h2>
          {{ $t('inputHintMsg') }}
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="6" offset="3">
        <v-text-field
            v-model="searchQuery"
            :loading="loading"
            :placeholder="$t('cityName')"
            :rules="[searchRules.required]"
            append-icon="mdi-magnify"
            solo
            @click:append="searchCityHandler"
        ></v-text-field>
        <template v-if="searchErrorMessage">
          {{ searchErrorMessage }}
        </template>
        <template v-else>
          <CityCard v-if="city" :city="city"/>
        </template>
      </v-col>
    </v-row>
    <v-row v-if="history.length">
      <v-col>
        <SearchHistory :history="history" @history-select-item="selectHistoryItemHandler"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CityCard from '@/components/CityCard';
import SearchHistory from '@/components/SearchHistory';

import {mapActions, mapState} from 'vuex';

export default {
  name: 'Home',

  components: {
    CityCard,
    SearchHistory,
  },
  data: () => ({
    searchQuery: '',
  }),
  computed: {
    ...mapState('weather', [
      'loading',
      'city',
      'history',
      'searchErrorMessage',
    ]),
    searchRules() {
      return {
        required: value => !!value || this.$t('searchInputValidationText'),
      };
    },
  },
  methods: {
    ...mapActions('weather', [
      'init',
      'initSearch',
    ]),
    searchCityHandler() {
      this.initSearch(this.searchQuery);
    },
    selectHistoryItemHandler(value) {
      this.searchQuery = value;
    },
  },
  created() {
    this.init();
  },
};
</script>
