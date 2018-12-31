<template>
  <div class="advance">
    <h1>応用編</h1>
    <h2>一人あたり地方税(千円)</h2>
    <div row>
      <v-flex xs6 sm6 d-flex>
        <v-select
          :items="prefectures"
          label="都道府県"
          item-text="prefName"
          item-value="prefCode"
          @change="changePrefecture"
        ></v-select>
      </v-flex>
      <v-flex xs6 sm6 d-flex>
        <v-select
          :items="cities"
          label="市町村"
          item-text="cityName"
          item-value="cityCode"
          @change="changeCity"
        ></v-select>
      </v-flex>
    </div>

    <BarChart :chartData="chartData" :options="options" class="line_chart"/>
  </div>
</template>

<script>
import axios from "axios";
import BarChart from "../../components/BarChart";

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
  components: {
    BarChart
  },
  data: () => ({
    prefectures: [],
    cities: [],
    activePrefectureCode: "",
    chartData: {
      labels: [],
      datasets: []
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
  methods: {
    changePrefecture: async function(selectedPrefectureCode) {
      const response = await axios.get(
        "https://opendata.resas-portal.go.jp/api/v1/cities",
        {
          headers: {
            "X-API-KEY": "igDIvsWS3g9gQtO43BbUvCs6df4O2mzZy5emV8on"
          },
          params: {
            prefCode: selectedPrefectureCode
          }
        }
      );
      this.activePrefectureCode = selectedPrefectureCode;
      this.cities = response.data.result || [];
    },
    changeCity: async function(selectedCityCode) {
      const response = await axios.get(
        "https://opendata.resas-portal.go.jp/api/v1/municipality/taxes/perYear",
        {
          headers: {
            "X-API-KEY": "igDIvsWS3g9gQtO43BbUvCs6df4O2mzZy5emV8on"
          },
          params: {
            prefCode: this.activePrefectureCode,
            cityCode: selectedCityCode
          }
        }
      );
      const taxes = response.data.result || [];
      if (Array.isArray(taxes.data) && taxes.data.length > 0) {
        this.chartData = {
          labels: taxes.data.map(item => item.year),
          datasets: [
            {
              label: taxes.cityName,
              data: taxes.data.map(item => item.value)
            }
          ]
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.advance {
  padding: 20px;
  h2 {
    margin-top: 40px;
  }
  .line_chart {
    width: 500px;
    height: 500px;
  }
}
</style>
