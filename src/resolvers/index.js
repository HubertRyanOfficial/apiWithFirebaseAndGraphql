const firebase = require("../config/database");

//

const resolvers = {
  Query: {
    async users(_, args) {
      const usersData = await firebase.firestore().collection("users").get();
      return usersData.docs.length > 0
        ? usersData.docs.map((doc) => doc.data())
        : [];
    },
    async user(_, { id }) {
      const userData = await firebase
        .firestore()
        .collection("users")
        .doc(id)
        .get();
      return userData.exists ? userData.data() : null;
    },
  },
  Mutation: {
    async createUser(_, { name, username, email }) {
      const userRef = firebase.firestore().collection("users");
      const newUser = await userRef.add({
        name,
        username,
        email,
      });

      return newUser.id;
    },
    async deleteUser(_, { id }) {
      const user = firebase.firestore().collection("users").doc(id);
      const getUser = await user.get();

      if (getUser.exists) {
        firebase.firestore().collection("users").doc(id).delete();
      }

      return id;
    },
    async updateUser(_, { id, username }) {
      const user = firebase.firestore().collection("users").doc(id);
      const getUser = await user.get();

      if (getUser.exists) {
        user.update({
          username,
        });
      }

      return id;
    },
  },
};

module.exports = resolvers;
