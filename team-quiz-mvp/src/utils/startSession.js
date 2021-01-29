import firebase, { firestore } from "./firebase";

const startSession = async (user, setSessionID) => {
  const sessionRef = firestore.collection("Sessions");

  let sessionID;
  await sessionRef
    .add({
      owner: user.uid,
      members: [user.uid],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((docRef) => {
      setSessionID(docRef.id);
      sessionID = docRef.id;
    });
  console.log(sessionID, "does this print??");
  if (sessionID) {
    const memberRef = firestore
      .collection("Sessions")
      .doc(sessionID)
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
