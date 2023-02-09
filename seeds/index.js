import seedUsers from "./user-seeds.js";
import seedBooks from "./book-seeds.js";
import seedPost from "./post-seeds.js"
import process from "process"
import sequelize from "../config/connections.js";


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");
    await seedBooks();
    console.log("\n----- BOOKS SEEDED -----\n");
    await seedPost();
    console.log("\n----- POST SEEDED -----\n")  
  
    process.exit(0);
  };
  
  seedAll();
  