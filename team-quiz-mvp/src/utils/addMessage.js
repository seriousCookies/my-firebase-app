import firebase, { firestore } from "./firebase";

const addMessage = async (sessionID, user, formValue) => {
  const messagesRef = (await sessionID)
    ? firestore.collection("Sessions").doc(sessionID).collection("messages")
    : firestore.collection("messages");
  await messagesRef.add({
    user: user.displayName,
    body: formValue,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    uid: user.uid,
    colour: "nothing for now",
  });
};

export default addMessage;
