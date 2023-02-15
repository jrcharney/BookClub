import User from "../models/main/User.js";

// TODO: Eventually separate all three pieces of information into separate tables for security.

const userData = [
  {
    // id: 1
    username: "Joe",
    email: "joe@gmail.com",
    password: "password1234",
  },
  {
    // id: 2
    username: "Josh",
    email: "josh@gmail.com",
    password: "password1234",
  },
  {
    // id: 3
    username: "Sven",
    email: "sven@gmail.com",
    password: "password1234",
  },
  {
    // id: 4
    username: "Emily",
    email: "emily@gmail.com",
    password: "password1234",
  },
  {
    // id: 5
    username: "Jackie",
    email: "jackie@gmail.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

export default seedUsers;