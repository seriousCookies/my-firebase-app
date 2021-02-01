import { firestore } from "./firebase";

const checkOwner = async (userID, sessionID, setOwner) => {
  try {
    const sessionRef = firestore.collection("Sessions").doc(sessionID);
    const doc = await sessionRef.get();
    setOwner(doc.data().owner === userID);
  } catch (error) {
    console.log(error, "inside the try catch");
  }
};

export default checkOwner;
