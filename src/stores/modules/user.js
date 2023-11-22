import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

import { resetRouter } from '@/router'

const state = {
    token: getToken(),
    username: '',
    nickname: '',
    avatar: '',
    roles: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USERNAME: (state, username) => {
        state.username = username
    },
    SET_NICKNAME: (state, nickname) => {
        state.nickname = nickname
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    // user login
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
                const data = response
                commit('SET_TOKEN', data.token)
                commit('SET_USERNAME', data.username)
                commit('SET_ROLES', data.roles)
                setToken(data.token)
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
                // reset router
                resetRouter()
                // remove token
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                commit('SET_USERNAME', '')
                commit('SET_NICKNAME', '')
                commit('SET_AVATAR', '')
                removeToken()
                resolve()
            }).catch(error => { 
                reject(error)
            })
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            commit('SET_USERNAME', '')
            commit('SET_NICKNAME', '')
            commit('SET_AVATAR', '')
            removeToken() // must remove  token  first
            resolve()
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}