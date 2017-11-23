import axios from '../plugins/axios'

export const state = () => ({
	users: [
		{ id: 0, login: "john"}
	]
})

export const mutations = {
	setUsers(state, users) {
		state.users = users
	}
}

export const actions = {
	async nuxtServerInit({ commit }) {
		const res = await axios.get('users')
		const users = res.data

		commit('setUsers', users)
	}
}
