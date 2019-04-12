<template>
    <div class="mynew">
        <div class="new">{{msg}}</div>
        <div class="img"><img src="../../assets/2.jpg" alt=""></div>
    </div>
</template>

<script>
export default {
  props: {
    msg: String,
    imgUrl: String
  },
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
.mynew {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 15px;
}
.new {
  padd-right: 10px;
  text-align: right;
  background: rgb(53, 235, 129);
}
</style>
