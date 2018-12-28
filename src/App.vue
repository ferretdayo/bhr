<template>
  <v-app light>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BHRのプログラミング勉強</span>
      </v-toolbar-title>
      <v-menu :nudge-width="100" style="margin-left: 10px">
        <v-toolbar-title slot="activator">
          <span>サンプルプログラム集</span>
          <v-icon light>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile v-for="item in items" :key="item.label" :to="item.link">
            <v-list-tile-title v-text="item.label"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Main</v-btn>
        <v-btn to="/about" flat>About</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        { label: "データの操作", link: "/documents/data" },
        { label: "関数", link: "/documents/function" },
        { label: "イベントハンドラ", link: "/documents/event" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
