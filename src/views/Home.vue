<template>
  <div>
    <HelloWorld text="やっほー"/>
    <LineChart :chartData="chartData" :options="options" class="line_chart"/>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import LineChart from "../components/LineChart";

export default {
  data: () => ({
    chartData: {
      labels: ["1月", "2月", "3月"],
      datasets: [
        {
          label: "サンプル1",
          data: [10, 5, 10]
        },
        {
          label: "サンプル2",
          data: [3, 13, 40]
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{ ticks: { beginAtZero: true } }]
      },
      elements: {
        line: {
          tension: 0 // ベジェ曲線を無効にする
        }
      },
      animation: {
        duration: 0 // 一般的なアニメーションの時間
      },
      hover: {
        animationDuration: 0 // アイテムのマウスオーバー時のアニメーションの長さ
      },
      responsiveAnimationDuration: 0, // サイズ変更後のアニメーションの長さ
      responsive: true
    }
  }),
  components: {
    HelloWorld,
    LineChart
  }
};
</script>

<style lang="scss" scoped>
.line_chart {
  width: 500px;
  height: 500px;
}
</style>
