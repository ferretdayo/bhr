<template>
  <div class="event_handler">
    <h1>ボタンが押された時の動作</h1>

    <h2>アラートを出す</h2>
    <v-btn @click="alert">押すとアラートが出ます</v-btn>

    <h2>押すと入力した結果を足し算します</h2>
    <v-text-field v-model="firstValue" class="input-form"></v-text-field>
    <span>+</span>
    <v-text-field v-model="secondValue" class="input-form"></v-text-field>
    <v-btn @click="sum">押すと計算結果が出ます</v-btn>

    <h2>押さずに計算結果を出す</h2>
    <v-text-field v-model="firstValueExtra" class="input-form"></v-text-field>
    <span>+</span>
    <v-text-field v-model="secondValueExtra" class="input-form"></v-text-field>
    <span>=</span>
    <span>{{ computedSum }}</span>

    <h2>選択したものが表示されます</h2>
    <v-flex xs12 sm6 d-flex>
      <v-select :items="items" label="食べ物" @change="changeSelection"></v-select>
    </v-flex>
    <div v-if="selectedItem">
      <span class="strong">{{ selectedItem }}</span>が選択されました。
    </div>
    <div v-else>何も選択されていません。</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstValue: undefined,
    secondValue: undefined,
    firstValueExtra: undefined,
    secondValueExtra: undefined,
    items: ["焼き芋", "りんご", "みかん", "柿"],
    selectedItem: ""
  }),
  methods: {
    alert: function() {
      alert("アラートです");
    },
    sum: function() {
      if (
        Number.isInteger(Number(this.firstValue)) &&
        Number.isInteger(Number(this.secondValue))
      ) {
        const sum = Number(this.firstValue) + Number(this.secondValue);
        alert("計算結果は、" + sum + "です！");
      } else {
        alert("数値を入力してください");
      }
    },
    changeSelection: function(value) {
      this.selectedItem = value;
    }
  },
  computed: {
    computedSum: function() {
      if (
        Number.isInteger(Number(this.firstValueExtra)) &&
        Number.isInteger(Number(this.secondValueExtra))
      ) {
        return Number(this.firstValueExtra) + Number(this.secondValueExtra);
      } else {
        return "計算不可能";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.event_handler {
  padding: 20px;
  .input-form {
    display: inline-block;
    margin-right: 5px;
    margin-left: 5px;
    width: 100px;
  }
  .strong {
    font-size: 24px;
  }
  h2 {
    margin-top: 40px;
  }
}
</style>
