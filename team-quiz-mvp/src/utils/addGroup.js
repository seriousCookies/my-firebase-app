import firebase, { firestore } from "./firebase";

const addGroup = async (sessionID, user) => {
  const groupsRef =
    (await sessionID) &&
    firestore.collection("Sessions").doc(sessionID).collection("groups");

  console.log(sessionID, user, groupsRef, "this now?");
  await groupsRef.add({
    owner: user.uid,
    member: [],
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export default addGroup;
