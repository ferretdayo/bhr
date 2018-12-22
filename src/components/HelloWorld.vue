<template>
  <v-container>
    <v-layout text-xs-center wrap>{{message}} {{text}}</v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    message: "aaa"
  }),
  props: ["text"]
};
</script>
