<template>
  <v-card
      class="mx-auto"
      max-width="500"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{ city.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ new Date().toLocaleString() }}, {{ city.weather[0].description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
            class="text-h2"
            cols="12"
        >
          {{ Math.round(city.main.temp) }}&deg;C
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col
            cols="4"
        >
          {{ $t('weather.feelsLike') }} {{ Math.round(city.main.feels_like) }}&deg;C
        </v-col>
        <v-col
            cols="4"
        >
          {{ $t('weather.minTemp') }} {{ Math.round(city.main.temp_min) }}&deg;C
        </v-col>
        <v-col
            cols="4"
        >
          {{ $t('weather.maxTemp') }} {{ Math.round(city.main.temp_max) }}&deg;C
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>
        {{ Math.round(city.wind.speed) }} {{ $t('weather.ms') }}
        <span v-if="city.wind.gust">({{ Math.round(city.wind.gust) }} {{ $t('weather.ms') }})</span>
        {{ windDirection(city.wind.deg) }}
      </v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-water</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ city.main.humidity }}%</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-arrow-collapse-down</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ city.main.pressure * 0.750 }}</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
import {windDirection} from '@/utils/funcs';

export default {
  name: 'CityCard',

  props: {
    city: {type: Object, default: () => ({})},
  },
  data: () => ({}),
  methods: {
    windDirection(deg) {
      return windDirection(deg);
    },
  },
};
</script>
