import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBLr5elxI0AciiVfkARG6_rJQA5Y3uDsZo",
    authDomain: "linkedin-clone-350a7.firebaseapp.com",
    projectId: "linkedin-clone-350a7",
    storageBucket: "linkedin-clone-350a7.appspot.com",
    messagingSenderId: "684226830733",
    appId: "1:684226830733:web:c0d15ab836b73d01121dc4"
};


const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
export function FirebaseGetAllNodeDataWithURL(nodeURL) {
    return new Promise((resolve, reject) => {

        try {
            db.collection(nodeURL).orderBy("timestamp","desc").onSnapshot((snapshot)=>{
                resolve(snapshot)
            })
        } catch (error) {
            reject(error)
        }
    //   try {
    //     firebase
    //       .database()
    //       .ref(nodeURL)
    //       .on("value", (snapshot) => {
    //         resolve(snapshot);
    //       });
    //   } catch (error) {
    //     reject(error);
    //   }
    });
  }
export { db, auth };