<template>
  	<div id='chatList'>
        <van-nav-bar
            style="background: #fff;color:#000;padding: 25px 0 0px 0;"
            left-text="微信">
            <van-icon name="add-o" slot="right" />
        </van-nav-bar>
        <chat-box
            v-for="(chatBox,index) in arr"
            :key="index"
            :box="chatBox"
        ></chat-box>
  	</div>
</template>

<script>
import ChatBox from "./ChatBox";
import { mapState, store } from "vuex";
export default {
  data() {
    return {
      user: [
        { id: 1, name: "婷婷" },
        { id: 2, name: "琳琳" },
        { id: 3, name: "茗茗" },
        { id: 4, name: "莹莹" }
      ],
      arr: [],
      isTabShow: true
    };
  },
  components: {
    ChatBox
  },
  computed: mapState({
    user_store: state => state.user
  }),
  beforeMount() {
    // arr存放剔除登录用户后的聊天列表数组
    var arr = this.user.filter(item => {
      if (item.id != this.user_store.id) {
        return item;
      }
    });
    this.arr = arr;
  },
  methods: {}
};
</script>

<style>
.new_box {
  padding: 6px 5px;
  background: #ffffff;
  border-bottom: 0.06px solid #ddd;
}
.new_left {
  width: 16%;
  padding: 5px;
}
.new_right {
  padding: 8px 0px 5px 0px;
}
.new_right .flex {
  padding: 5px 10px;
}
.new_right .new_name .name {
  font-weight: 500;
}
.new_right .new_name .time {
  font-size: 14px;
  color: #777777;
}
.new_right .new {
  font-size: 14px;
  color: #666666;
}
.push_left {
  display: inline-block;
  float: left;
}
.push_right {
  display: inline-block;
  float: right;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.color {
  color: #aaa;
}
</style>
