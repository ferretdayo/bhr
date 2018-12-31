<template>
  <div class="api">
    <h1>APIの利用</h1>
    <h2>APIを利用する - 都道府県の取得 -</h2>
    <ul v-for="prefecture in prefectures" :key="prefecture">
      <li>code: {{prefecture.prefCode}} - name: {{prefecture.prefName}}</li>
    </ul>
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
    prefectures: []
  })
};
</script>

<style lang="scss" scoped>
.api {
  padding: 20px;
  h2 {
    margin-top: 40px;
  }
}
</style>
