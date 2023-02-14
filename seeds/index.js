import process from "process"
import sequelize from "../config/connections.js";
import seedBooks from "./book-seeds.js";
import seedAuthors from "./author-seeds.js";
import seedBookAuthors from "./bookauthor-seeds.js";
import seedUsers from "./user-seeds.js";
import seedComments from "./comment-seeds.js";
//import seedPosts from "./post-seeds.js"


const seedAll = async () => {
    console.log("\n----- BEGIN SEEDING -----\n");
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedBooks();
    console.log("\n----- BOOKS SEEDED -----\n");
    await seedAuthors();
    console.log("\n----- AUTHORS SEEDED -----\n");
    await seedBookAuthors();
    console.log("\n----- BOOKAUTHORS SEEDED -----\n");
    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");
    await seedComments();
    console.log("\n----- COMMENTS SEEDED -----\n");
    //await seedPosts();
    //console.log("\n----- POSTS SEEDED -----\n")  
    console.log("\n----- END SEEDING -----\n");  
    process.exit(0);
};

seedAll();
