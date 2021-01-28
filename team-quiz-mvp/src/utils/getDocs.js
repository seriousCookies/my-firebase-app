import { firestore } from "./firebase";

const getDocs = (setData) => {
  firestore.collection("Things").onSnapshot((querySnapshot) => {
    let testing = [];
    querySnapshot.forEach((doc) => {
      testing.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setData(testing);
  });
};

export default getDocs;
