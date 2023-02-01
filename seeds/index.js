import seedUsers from "./user-seeds.js";
import seedComments from "./comment-seeds.js";
import seedBooks from "./book-seeds.js";
import seedAuthor from "./author-seeds.js";
import seedBookAuthor from "./bookauthor-seeds.js";

import sequelize from "../config/connection";


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");
    await seedBooks();
    console.log("\n----- USERS SEEDED -----\n");
    await seedAuthor();
    console.log("\n----- USERS SEEDED -----\n");
    await seedBookAuthor();
    console.log("\n----- USERS SEEDED -----\n");  
    await seedComments();
    console.log("\n----- COMMENTS SEEDED -----\n");
  
    process.exit(0);
  };
  
  seedAll();
  