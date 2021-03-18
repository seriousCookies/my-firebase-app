import { firestore } from "./firebase";

const validateSessionID = async (sessionID) => {
  try {
    const sessionRef = await firestore.collection("Sessions").doc(sessionID);
    const snapshot = await sessionRef.get();
    return snapshot.exists;
  } catch (error) {
    console.log(error, "inside the try catch");
  }
};

export default validateSessionID;
