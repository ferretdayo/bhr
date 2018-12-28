<template>
  <div class="about">
    <h1>This is an {{ title }} page</h1>
    <h3>APIから取得した都道府県</h3>
    <div>{{ prefectures }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    const response = await axios.get(
      "https://opendata.resas-portal.go.jp/api/v1/prefectures",
      {
        headers: {
          "X-API-KEY": "igDIvsWS3g9gQtO43BbUvCs6df4O2mzZy5emV8on"
        }
      }
    );
    this.prefectures = response.data.result || [];
  },
  data: () => ({
    title: "About",
    prefectures: []
  })
};
</script>
