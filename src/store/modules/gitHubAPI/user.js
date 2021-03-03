import {
    API_BASE_URL,
    API_URL_ITEM,
    GIT_HUB_ID,
    TOKEN
} from '../../const'

const state = {
    gitHubUserInfoList: [],
    status: {
        get: false,
        post: false,
        update: false,
        delete: false
    }
}

const mutations = {
    getGitHubUserInfoSuccess(state, data) {
        state.gitHubUserInfoList = data
    },
    getGitHubUserInfoFail(state) {
        state.gitHubUserInfoList = []
    },
    fetchRequest(state, type) {
        state.status[type] = true
    },
    fetchRequestEnd(state, type) {
        state.status[type] = false
    }
}

const actions = {
    gitHubUserInfo({
        commit
    }) {
        commit('fetchRequest', 'get')
        return new Promise((resolve, reject) => {
            axios
                .get(`${API_BASE_URL}/${API_URL_ITEM.user}/${GIT_HUB_ID}`)
                .then(resp => {
                    commit('getGitHubUserInfoSuccess', resp.data)
                    commit('fetchRequest', 'get')
                    resolve()
                })
                .catch(err => {
                    commit('getGitHubUserInfoFail')
                    commit('fetchRequest', 'get')
                    console.log(err)
                    reject(err)

                })

        })
    }
}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}