<template>
    <div class="othernew">
        <div class="img"><img src="../../assets/2.jpg" alt=""></div>
        <div class="new">{{msg}}</div>
    </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  name: "",
  data() {
    return {};
  }
};
</script>

<style>
.othernew {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 15px;
}
.img {
  padding: 0 10px 0 10px;
}
.new {
  background: #fff;
}
</style>
