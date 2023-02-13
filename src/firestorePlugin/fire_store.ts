import {initializeApp} from "firebase/app";
import {getFirestore, connectFirestoreEmulator} from "firebase/firestore";

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: 'AIzaSyAkcPGQJYUKayLiq92XSe21_e4JrMoGHsM',
    authDomain: 'chadopedia.firebaseapp.com',
    databaseURL: 'https://chadopedia-default-rtdb.firebaseio.com',
    projectId: 'chadopedia',
    storageBucket: 'chadopedia.appspot.com',
    messagingSenderId: '292955403698',
    appId: '1:292955403698:web:14afada992e74a6235a0ab',
    measurementId: 'G-GZ35JTJLRF'
}
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)
// if (!firestore_data._settingsFrozen) {
//     connectFirestoreEmulator(firestore_data, '127.0.0.1', 8080)
// }

export {firestore};