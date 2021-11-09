<template>
  <v-card
      class="mx-auto"
      max-width="300"
      tile
  >
    <v-list dense>
      <v-subheader>{{ $t('history') }}</v-subheader>
      <v-list-item-group
          v-model="selectedItem"
          color="primary"
      >
        <v-list-item
            v-for="(item, i) in history"
            :key="`history_item_${i}`"
            :value="item"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'SearchHistory',

  props: {
    history: {type: Array, default: () => ([])},
  },
  data: () => ({
    selectedItem: '',
  }),
  watch: {
    selectedItem(value) {
      this.$emit('history-select-item', value);
    },
  },
};
</script>
