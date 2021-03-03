import {
    API_BASE_URL,
    API_URL_ITEM,
    GIT_HUB_ID,
    TOKEN
} from '../../const'

const state = {
    gitHubUserRpeoList: [],
    status: {
        get: false,
        post: false,
        update: false,
        delete: false
    }
}

const mutations = {
    getGitHubUserRpeoSuccess(state, data) {
        state.gitHubUserRpeoList = data
    },
    getGitHubUserRpeoFail(state) {
        state.gitHubUserRpeoList = []
    },
    fetchRequest(state, type) {
        state.status[type] = true
    },
    fetchRequestEnd(state, type) {
        state.status[type] = false
    }
}

const actions = {
    gitHubUserRpeo({
        commit
    }) {
        commit('fetchRequest', 'get')
        return new Promise((resolve, reject) => {
            axios
                .get(`${API_BASE_URL}/${API_URL_ITEM.user}/${GIT_HUB_ID}/${API_URL_ITEM.repo}`)
                .then(resp => {
                    commit('getGitHubUserRpeoSuccess', resp.data)
                    commit('fetchRequest', 'get')
                    resolve()
                })
                .catch(err => {
                    commit('getGitHubUserRpeoFail')
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