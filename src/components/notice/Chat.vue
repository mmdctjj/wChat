<template>
    <div class="chat">
        <van-nav-bar :left-text="this.name" left-arrow @click-left="onClickLeft"
            style="background: #fff;color: #000;padding: 25px 5px 0px 5px;">
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <div class="chatContainer">
            <span v-for="(container,index) in chat"
                :key="index"
            >
                <OtherNew v-if="container.other" :msg="container.other" ></OtherNew>
                <MyNew v-if="container.mine" :msg="container.mine" img-url="../../assets/2.jpg"></MyNew>
            </span>
        </div>

        <van-cell-group
            style="background:#fff;min-height:53px;
            position:fixed;width: 100%;bottom:0px"
        >
            <van-icon style="padding-left:3px" size="24px" name="chat-o" />
            <textarea cols="0" rows="0" v-model="mes"></textarea>
            <van-icon size="24px" name="smile-o" />
            <van-icon v-if="mes ==''" size="24px" name="add-o" />
            <button v-else class="btn"
                style="padding-top:-25px"
                size="small"
                @click="sendMsg()"
            >发送</button>
        </van-cell-group>
    </div>
</template>

<script>
import MyNew from "./MyNew";
import OtherNew from "./OtherNew";
import { mapState } from "vuex";
export default {
  components: {
    MyNew,
    OtherNew
  },
  name: "",
  data() {
    return {
      isTabShow: false,
      arr: [
        { id: 1, name: "婷婷" },
        { id: 2, name: "琳琳" },
        { id: 3, name: "茗茗" },
        { id: 4, name: "莹莹" }
      ],
      name: "",
      mes: "",
      chat: [{ other: "你好" }, { mine: "你也好" }],
      ws: null
    };
  },
  computed: mapState({
    user_store: state => state.user
  }),
  created() {
    this.onMessage();
  },
  mounted() {
    this.getName();
  },
  methods: {
    // 获取聊天对象名字
    getName() {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].id == this.user_store.chatObjId) {
          this.name = this.arr[i].name;
          return;
        }
      }
    },
    // 点击返回事件
    onClickLeft() {
      this.$router.push({ path: "/chatList" });
      this.user_store.isTabShow = true;
    },
    // 发送消息
    sendMsg() {
      this.chat.push({ mine: this.mes });
      var message = {
        from: this.user_store.id,
        to: this.user_store.chatObjId,
        msg_type: 1,
        msg_state: 0,
        message: this.mes
      };
      this.$ws.send(JSON.stringify(message));
      this.mes = "";
    },
    onMessage() {
      let _this = this;
      this.$ws.onmessage = function(e) {
        console.log("Received Message: " + e.data);
        _this.chat.push({ other: JSON.parse(e.data).message });
      };
    }
  }
};
</script>

<style>
.img {
  width: 14%;
}
.img img {
  width: 100%;
}
.new {
  max-width: 57%;
  min-height: 35px;
  line-height: 200%;
  padding: 5px 10px;
  border-radius: 5px;
}
textarea {
  width: 68%;
  height: 24px;
  border: none;
  background: #eee;
  margin: 10px 0;
  margin-bottom: -5px;
  padding: 5px 0;
}
button {
  border: none;
  width: 40px;
  padding: 3px 3px;
  font-size: 15px;
  line-height: 200%;
  height: 32px;
  color: #fff;
  background-color: #07c160;
}
</style>
