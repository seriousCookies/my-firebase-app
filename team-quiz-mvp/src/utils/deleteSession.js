import checkOwner from "./checkOwner";
import firebase, { firestore } from "./firebase";

export const deleteSession = async (session, user) => {
  let permission;
  await checkOwner(user.uid, session, (per) => (permission = per));

  permission && firestore.collection("Sessions").doc(session).delete();
};
