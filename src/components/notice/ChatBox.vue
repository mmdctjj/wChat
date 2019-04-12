<template>
  <div @click="joinChat(box.id)">
      <div class="new_box ripple">
            <div class="new_left push_left">
                <img src="../../assets/2.jpg" alt="">
            </div>
            <div class="new_right">
                <div class="new_name flex">
                        <div class="name">{{box.name}}</div>
                        <div class="time color">2月3日</div>
                </div>
                <div class="flex color">
                    你还是我的好姐妹吗
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["box"],
  computed: mapState({
    user_store: state => state.user
  }),
  methods: {
    joinChat(id) {
      this.$router.push({ path: "/chatList/" + id });
      this.user_store.chatObjId = id;
      this.user_store.isTabShow = false;
    }
  }
};
</script>

<style>
.new_box img {
  width: 100%;
}
</style>
