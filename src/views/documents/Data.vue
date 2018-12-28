<template>
  <div class="data">
    <h1>Vue.jsでのデータの利用</h1>
    <h2>データを表示する方法</h2>
    {{ text }}
    <h2>オブジェクトも表示できる</h2>
    {{ object }}
    <h2>配列も表示出来る</h2>
    {{ array }}
    <h2>計算もいける</h2>
    {{ 2 + 3 }}
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "hello world",
    object: {
      key: "キー",
      value: "値"
    },
    array: ["まーもん", "河野"]
  })
};
</script>

<style lang="scss" scoped>
.data {
  padding: 20px;
  h2 {
    margin-top: 40px;
  }
}
</style>
