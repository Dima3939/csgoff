import Vue from 'vue'

export default {
    state: {
        cases: [],
    },
    mutations: {
        SET_CASES(state, payload){
            state.cases = payload
        },
    },
    actions:{
        LOAD_CASES({commit}){
            Vue.$db.collection('cases')
            .get()
            .then(querySnapshot => {
                let cases = []
                querySnapshot.forEach(s => {
                    const data = s.data()
                    let kase = {
                        id: s.id,
                        title: data.title,
                        price: data.price,
                        imageUrl: data.imageUrl,
                    }

                    let content = []
                    if(data.content) {
                        data.content.forEach(p => {
                            let contents = {
                                id: p.id,
                                title: p.title,
                                description: p.description,
                                imageUrl: p.imageUrl,
                            }
                            content.push(contents)
                        })
                    }
                    kase.content = content

                    cases.push(kase)
                })
                commit('SET_CASES', cases)
            })
                .catch(error => console.log(error))
        }
    },

    getters:{
        getCases: (state) => state.cases,
    }
}
