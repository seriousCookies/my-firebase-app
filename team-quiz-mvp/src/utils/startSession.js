import firebase, { firestore } from "./firebase";

const startSession = async (user, formValue, setSessionID) => {
  const sessionRef = firestore
    .collection("Sessions")
    .doc(formValue.sessionName);
  await sessionRef
    .set({
      owner: user.uid,
      members: [user.uid],
      sessionType: formValue.sessionType,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      setSessionID(formValue.sessionName);
    });
  if (formValue) {
    const memberRef = firestore
      .collection("Sessions")
      .doc(formValue.sessionName)
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
