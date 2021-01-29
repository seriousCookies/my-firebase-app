import firebase, { firestore } from "./firebase";

const leaveSession = async (sessionID, user) => {
  try {
    const doc = await firestore
      .collection("Sessions")
      .doc(sessionID)
      .collection("members")
      .where("uid", "==", user.uid)
      .get()
      .then((snapshot) => {
        !snapshot.empty && snapshot.forEach((doc) => doc.ref.delete());
      })
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  } catch (error) {
    console.log(error, "inside the try catch");
  }
};

export default leaveSession;
