import firebase, { firestore } from "./firebase";

export const deleteSession = async (session, user) => {
  await firestore
    .collection("Sessions")
    .doc(session)
    .collection("members")
    .get()
    .then((snapshot) => {
      !snapshot.empty && snapshot.forEach((doc) => doc.ref.delete());
    });
  await firestore
    .collection("Sessions")
    .doc(session)
    .collection("messages")
    .get()
    .then((snapshot) => {
      !snapshot.empty && snapshot.forEach((doc) => doc.ref.delete());
    });
  await firestore.collection("Sessions").doc(session).delete();
};
