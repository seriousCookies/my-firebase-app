const deleteUser = (user) => {
  user &&
    user
      .delete()
      .then(() => {
        console.log("user logged out!");
      })
      .catch((err) => {
        console.log(err, "problem with user delete!");
      });
};

export default deleteUser;
