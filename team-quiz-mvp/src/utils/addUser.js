import { auth } from "../firebase";

export const addUser = (username) => {
  auth.signInAnonymously().catch((err) => {
    console.log(err, "error adding user");
  });
  auth.onAuthStateChanged((user) => {
    user &&
      user
        .updateProfile({
          displayName: username,
        })
        .then(() => console.log("updated!"))
        .catch((err) => {
          console.log(err, "erro occured");
        });
  });
};
