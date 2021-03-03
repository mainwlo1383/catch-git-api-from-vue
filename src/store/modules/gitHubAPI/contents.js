import {
    API_BASE_URL,
    API_URL_ITEM,
    GIT_HUB_ID,
    TOKEN
} from '../../const'

const state = {
    gitHubFileREADMEList: [],
    status: {
        get: false,
        post: false,
        update: false,
        delete: false
    }
}

const mutations = {
    getGitHubFileREADMESuccess(state, data) {
        state.gitHubFileREADMEList = data
    },
    getGitHubFileREADMEFail(state) {
        state.gitHubFileREADMEList = []
    },
    fetchRequest(state, type) {
        state.status[type] = true
    },
    fetchRequestEnd(state, type) {
        state.status[type] = false
    }
}

const actions = {
    gitHubFileREADME({
        commit
    }, fileName) {
        commit('fetchRequest', 'get')
        return new Promise((resolve, reject) => {
            axios
                .get(`${API_BASE_URL}/${API_URL_ITEM.repo}/${GIT_HUB_ID}/${fileName}/${API_URL_ITEM.content}/README.md`)
                .then(resp => {
                    commit('getGitHubFileREADMESuccess', resp.data)
                    commit('fetchRequest', 'get')
                    resolve()
                })
                .catch(err => {
                    commit('getGitHubFileREADMEFail')
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