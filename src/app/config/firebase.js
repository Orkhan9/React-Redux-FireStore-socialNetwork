import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig={
    apiKey: "AIzaSyC0M23nLZSsdBKNPkCil8ppQQjRUpL976c",
    authDomain: "revents-ac618.firebaseapp.com",
    projectId: "revents-ac618",
    storageBucket: "revents-ac618.appspot.com",
    messagingSenderId: "436222056062",
    appId: "1:436222056062:web:a5c0e80e048c3aa014aa2f"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;