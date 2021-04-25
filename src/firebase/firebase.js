import firebase from "firebase";

var firebaseConfig = {
	apiKey: "XXXXX",
	authDomain: "XXXXX",
	projectId: "XXXXX",
	storageBucket: "XXXXX",
	messagingSenderId: "XXXXX",
	appId: "XXXXX",
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const urlCollection = db.collection("urls");

// export utils/refs
export { db, auth, urlCollection };
