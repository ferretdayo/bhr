<template>
  <div class="function">
    <h1>関数の利用方法</h1>
    <h2>関数の実行</h2>
    {{ sayHello() }}
    <h2>関数の実行 - データを利用した場合 -</h2>
    {{ sayHelloUsingData() }}
    <h2>計算結果の表示1</h2>
    {{ calc1() }}
    <h2>計算結果の表示2</h2>
    {{ calc2() }}
    <h2>平均値の計算</h2>
    {{ calc3() }}
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "hello!!!"
  }),
  methods: {
    sayHello: function() {
      return "hello world";
    },
    sayHelloUsingData: function() {
      return this.text;
    },
    calc1: function() {
      // 基礎的なやり方
      const numberList = [1, 5, 14, 9];
      let result = 0;
      for (let i = 0; i < numberList.length; i++) {
        result += numberList[i];
      }
      return `[1, 5, 14, 9]の足し算をした結果、${result}になりました！`;
    },
    calc2: function() {
      // 応用的なやり方
      const numberList = [1, 5, 14, 9];
      const result = numberList.reduce((prev, current) => {
        return prev + current;
      }, 0);
      return `[1, 5, 14, 9]の足し算をした結果、${result}になりました！`;
    },
    calc3: function() {
      const heightList = [163, 159, 184, 174];
      const sum = heightList.reduce((prev, current) => {
        return prev + current;
      }, 0);
      return `
        [163, 159, 184, 174]の平均の身長は、
        ${sum / heightList.length}です！
      `;
    }
  }
};
</script>

<style lang="scss" scoped>
.function {
  padding: 20px;
  h2 {
    margin-top: 40px;
  }
}
</style>
