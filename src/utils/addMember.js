import firebase, { firestore } from "./firebase";

const addMember = async (sessionID, user) => {
  try {
    const memberRef =
      sessionID &&
      firestore.collection("Sessions").doc(sessionID).collection("members");
    const snapshot = await memberRef.where("uid", "==", user.uid).get();
    if (snapshot.empty) {
      await memberRef
        .add({
          user: user.displayName,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid: user.uid,
          colour: "nothing for now",
        })
        .then(() => console.log("member added!", sessionID))
        .catch((err) => console.log("nope", err));
      return;
    }
    console.log(user.uid + " is already a member");
  } catch (error) {
    console.log(error, "inside the try catch");
  }
};

export default addMember;
