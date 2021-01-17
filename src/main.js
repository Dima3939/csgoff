import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import "firebase/firestore"

Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
db.settings({
    timestampsInSnapshots: true
});

Vue.$db = db

new Vue({
    vuetify,
    router,
  store,
  render: h => h(App),

    created(){
        let vm = this
        firebase.auth().onAuthStateChanged(function(user) {
            vm.$store.dispatch('STATE_CHANGED',user)
        });

        this.$store.dispatch('LOAD_CASES')
    }

}).$mount('#app')
