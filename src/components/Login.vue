<template>
    <div id="login" :style="{height:height}">
        <transition name="login_pic">
			<div v-show="show" id="pic">
				<img src="../assets/2.jpg" alt="">
			</div>
		</transition>
		<transition name="login_infor">
			<div v-show="show">
				<div id="username">
					<label for="">账号</label>
					<input placeholder="请输入账号" type="text" v-model="userId">
				</div>
				<div id="password">
					<label for="">密码</label>
					<input placeholder="请输入密码" type="password" v-model="password">
				</div>
				<div id="btn">
                <button @click="getUser">登录</button>
            </div>
			</div>
		</transition>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      user: [
        { id: 1, name: "婷婷" },
        { id: 2, name: "琳琳" },
        { id: 3, name: "茗茗" },
        { id: 4, name: "莹莹" }
      ],
      userId: "",
      password: "",
      show: false,
      isTabShow: false,
      height: ""
    };
  },
  computed: mapState({
    user_store: state => state.user
  }),
  mounted() {
    this.shows();
  },
  methods: {
    getUser() {
      if (this.userId != "" && this.password != "") {
        for (let i = 0; i < this.user.length; i++) {
          while (this.user[i].id == this.userId) {
            // 将用户信息上传到store中，后面待用
            this.user_store.id = this.userId;
            // 登录成功后进入首页
            this.$router.push({ path: "/chatList" });
            // 显示底部导航栏
            this.user_store.isTabShow = true;
            // 登录的时候发送消息到服务器，同事注册连接对象
            this.$ws.send(
              JSON.stringify({
                // 消息类型：0表示登录或退出提醒，1表示单聊消息，2表示群聊消息
                msg_type: 0,
                // 消息状态：0表示未读，1表示已读
                // msg_state: 0,
                msg: this.user[i].name + "logined"
              })
            );
            return;
          }
        }
      }
    },
    shows() {
      this.height = window.screen.height - 160 + "px";
      this.show = true;
    }
  }
};
</script>

<style scoped>
#login {
  background: #13ddba;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160px;
}
#pic {
  width: 25%;
}
#pic img {
  width: 100%;
  border-radius: 50%;
}
input {
  width: 16rem;
  height: 2rem;
  background: none;
  border: none;
  margin-top: 1.5rem;
  outline: none;
}
button {
  height: 3rem;
  width: 19rem;
  margin-top: 1.5rem;
  border: 1px #aaaaaa solid;
  border-radius: 2rem;
  background: none;
  color: #ffffff;
  outline: none;
}
button:active {
  background: #25917f;
  color: #dddddd;
}
#username,
#password {
  border-bottom: #aaaaaa solid 1px;
  color: #ffffff;
}
.login_pic-enter-active {
  transition: all 1s linear;
}
.login_pic-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translate(-80px, 450px);
}

.btn_infro-enter-active,
.login_infor-enter-active {
  transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
}
.btn_infro-enter,
.login_infor-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
</style>
