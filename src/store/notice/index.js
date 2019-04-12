import $http from '../../axios'

const getNotices = 'getNotices'

const notices = ({ commit, state }) => {
    $http.get('/getNotices')
        .then((res) => {
            commit(getNotices, res)
        })
        .catch((err) => console.log(err))
}

export default {
    state: {
        // 聊天列表
        noticeLists: [],
        // 当前聊天对象id
        chatObjId: null
    },
    mutations: {
        [getNotices](state, res) {
            state.noticeLists = res.data
        }
    },
    actions: {
        [getNotices]({ commit, state }) {
            notices({ commit, state })
        }
    }
}
