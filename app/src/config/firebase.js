import * as firebase from 'firebase'

var firebaseConfig = {
 apiKey: "AIzaSyCUI3_jo9wzP_x80UPeIIK721bXZnsb1Fw",
 authDomain: "art-ecommerce-utn.firebaseapp.com",
 databaseURL: "https://art-ecommerce-utn.firebaseio.com",
 projectId: "art-ecommerce-utn",
 storageBucket: "art-ecommerce-utn.appspot.com",
 messagingSenderId: "765944642549",
 appId: "1:765944642549:web:7cd158a4136e39e9f8febc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});
firebase.db = db;
firebase.auth = firebase.auth();

export default firebase;