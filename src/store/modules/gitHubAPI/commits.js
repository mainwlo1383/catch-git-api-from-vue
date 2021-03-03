import {
    API_BASE_URL,
    API_URL_ITEM,
    GIT_HUB_ID,
    TOKEN
} from '../../const'

const state = {
    gitHubFileCommitList: [],
    status: {
        get: false,
        post: false,
        update: false,
        delete: false
    }
}

const mutations = {
    getGitHubFileCommitSuccess(state, data) {
        state.gitHubFileCommitList = data
    },
    getGitHubFileCommitFail(state) {
        state.gitHubFileCommitList = []
    },
    fetchRequest(state, type) {
        state.status[type] = true
    },
    fetchRequestEnd(state, type) {
        state.status[type] = false
    }
}

const actions = {
    gitHubFileCommit({
        commit
    }, fileName) {
        commit('fetchRequest', 'get')
        return new Promise((resolve, reject) => {
            axios
                .get(`${API_BASE_URL}/${API_URL_ITEM.repo}/${GIT_HUB_ID}/${fileName}/${API_URL_ITEM.commit}`)
                .then(resp => {
                    commit('getGitHubFileCommitSuccess', resp.data)
                    commit('fetchRequest', 'get')
                    resolve()
                })
                .catch(err => {
                    commit('getGitHubFileCommitFail')
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