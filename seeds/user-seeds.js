import User from "../models/main/User.js";

const userData = [
  {
    username: "Joe",
    email: "joe@gmail.com",
    password: "password1234",
  },
  {
    username: "Josh",
    email: "josh@gmail.com",
    password: "password1234",
  },
  {
    username: "Sven",
    email: "sven@gmail.com",
    password: "password1234",
  },
  {
    username: "Emily",
    email: "emily@gmail.com",
    password: "password1234",
  },
  {
    username: "Jackie",
    email: "jackie@gmail.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

export default seedUsers;