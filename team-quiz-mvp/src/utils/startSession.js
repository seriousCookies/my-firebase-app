import firebase, { firestore } from "./firebase";

const startSession = async (user, setSessionID) => {
  const sessionRef = firestore.collection("Sessions");
  await sessionRef
    .add({
      owner: user.uid,
      member: [user.uid],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((docRef) => setSessionID(docRef.id));
};

export default startSession;
