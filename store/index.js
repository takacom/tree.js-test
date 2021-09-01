import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function() {
            return {
                message: 'This is store message!',
            };
        },
    })
}

export default createStore