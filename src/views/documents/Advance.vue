<template>
  <div class="advance">
    <h1>応用編</h1>
    <h2>ほげ</h2>
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
.advance {
  padding: 20px;
  h2 {
    margin-top: 40px;
  }
}
</style>
