import firebase, { firestore } from "./firebase";

const startSession = async (user, formValue, setSessionID) => {
  const sessionRef = firestore.collection("Sessions").doc(formValue);
  await sessionRef
    .set({
      owner: user.uid,
      members: [user.uid],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      setSessionID(formValue);
    });
  if (formValue) {
    const memberRef = firestore
      .collection("Sessions")
      .doc(formValue)
      .collection("members");
    await memberRef.add({
      user: user.displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
      colour: "nothing for now",
    });
  }
};

export default startSession;
