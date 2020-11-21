const auth = firebase.auth();
const db= firebase.firestore();
const { serverTimestamp } = firebase.firestore.FieldValue;
const thingsList = document.getElementById('thingsList')
const createThings = document.getElementById('createThings')

const WhenSignedIn = document.getElementById('WhenSignedIn')
const WhenSignedOut = document.getElementById('WhenSignedOut')
const signInBtn = document.getElementById('signInBtn')
const signOutBtn = document.getElementById('signOutBtn')
const userDetail = document.getElementById('userDetail')

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

let thingsRef;
let unsubscribe;

auth.onAuthStateChanged(user => {
    if (user) {
        WhenSignedIn.hidden= false;
        WhenSignedOut.hidden= true;
        createThings.hidden=false;
        userDetail.innerHTML = `<h3>Hello ${user.displayName} !</h3>`
        console.log('this prints')
        thingsRef = db.collection('Things')
        createThings.onclick = () => {
            thingsRef.add({
                name: "somethingnew",
                uid: user.uid,
                createdAt: serverTimestamp()
            });
        };
        unsubscribe = thingsRef
        .where('uid', '==', user.uid)
        .onSnapshot(q => {
            const item = q.docs.map(d => {
                return `<li>${d.data().name}</li>`
            })
            thingsList.innerHTML = item.join('');
        })


    } else {
        WhenSignedIn.hidden= true;
        WhenSignedOut.hidden= false;
        userDetail.innerHTML = "";
        unsubscribe && unsubscribe();
    }
});

