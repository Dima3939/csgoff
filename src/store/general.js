export default {
    state: {
        processing: false,
        error: null
    },
    mutations: {
        SET_PROCESSING(state, payload){
            state.processing = payload
        },
        SET_ERROR(state, payload){
            state.error = payload
        },
        // eslint-disable-next-line no-unused-vars
        CLEAR_ERROR(state, payload){
            state.error = null
        }
    },
    getters:{
        getProcessing: (state) => state.processing,
        getError: (state) => state.error
    }
}