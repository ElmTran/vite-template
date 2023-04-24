import { login, logout } from '@/api/user'
import { setToken, getToken, removeToken } from '@/utils/auth'
import { router } from '@/router'

const state = {
    token: getToken(),
    username: '',
    roles: [],
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USERNAME: (state, username) => {
        state.username = username
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

const actions = {
    // user login
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
                const { data } = response
                commit('SET_TOKEN', data.token)
                commit('SET_USERNAME', data.username)
                commit('SET_ROLES', data.roles)
                setToken(data.token)
                router.push({ path: '/' })
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // user logout
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_USERNAME', '')
                commit('SET_ROLES', [])
                removeToken()
                router.push({ path: '/login' })
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}