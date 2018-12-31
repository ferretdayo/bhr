<template>
  <div class="html">
    <h1>HTMLを利用した操作</h1>
    <h2>if文を利用する</h2>
    <div v-if="true">trueです</div>

    <h2>if-elseを利用する</h2>
    <div v-if="number > 4">数値は4より上です</div>
    <div v-else>数値は4未満です</div>

    <h2>for文を利用する1 - 配列の場合 -</h2>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>

    <h2>for文を利用する2 - オブジェクトの配列 -</h2>
    <ul>
      <li v-for="item in items" :key="item.key">{{item.label}}</li>
    </ul>

    <h2>双方向バインディング</h2>
    <v-text-field v-model="text" style="width: 50vw"></v-text-field>
    {{ text }}
  </div>
</template>

<script>
export default {
  data: () => ({
    number: 2,
    list: ["飲み会", "野球", "飲み会", "テニス"],
    items: [
      { key: 1, label: "堀田" },
      { key: 2, label: "大川" },
      { key: 3, label: "鶴田" }
    ],
    text: ""
  })
};
</script>

<style lang="scss" scoped>
.html {
  padding: 20px;
  h2 {
    margin-top: 40px;
  }
}
</style>
