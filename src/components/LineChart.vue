<script>
import { Line, Bar, mixins } from "vue-chartjs";

export default {
  mixins: [Line, mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: false
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
