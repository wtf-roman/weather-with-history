<template>
  <v-app>
    <v-app-bar
      app
      color="blue"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn-toggle
          v-model="locale"
          mandatory
      >
        <v-btn value="en" color="light-blue darken-2">
          EN
        </v-btn>
        <v-btn value="ru" color="light-blue darken-2">
          RU
        </v-btn>
      </v-btn-toggle>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: 'App',

  data: () => ({
    locale: 'en',
  }),
  watch: {
    locale(value) {
      i18n.locale = value;
    },
  },
};
</script>
