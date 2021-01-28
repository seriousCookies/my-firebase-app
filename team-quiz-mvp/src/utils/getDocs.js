import { firestore } from "./firebase";

const getDocs = (collection, setData) => {
  firestore
    .collection(collection)
    .orderBy("createdAt", "asc")
    .limitToLast(25)
    .onSnapshot((querySnapshot) => {
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
