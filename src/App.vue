<template>
    <div id="app">
        <router-view />
        <van-tabbar
            v-model="active"
            active-color="#07c160"
            v-show="this.user_store.isTabShow"
            >
            <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item icon="friends-o">通讯录</van-tabbar-item>
            <van-tabbar-item icon="browsing-history-o">动态</van-tabbar-item>
            <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      active: 0
    };
  },
  computed: mapState({
    user_store: state => state.user
  }),
  name: "App",
  created() {
    this.$ws.onopen = function(evt) {
      console.log("Connection open ...");
    };
    this.$ws.onmessage = function(e) {
      console.log("Received Message: " + e.data);
    };

    this.$ws.onclose = function(evt) {
      console.log("Connection closed.");
    };
  }
};
</script>

<style>
body {
  background: #eee;
}
.van-nav-bar__text,
.van-nav-bar__left .van-icon,
.van-nav-bar__right .van-icon {
  color: #222;
  font-size: 16px;
}
</style>
