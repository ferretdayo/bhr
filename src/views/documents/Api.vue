<template>
  <div class="api">
    <h1>APIの利用</h1>
    <h2>API</h2>
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
    ]
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
