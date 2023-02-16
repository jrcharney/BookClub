import process from "process"
import sequelize from "../config/connections.js";
// TODO: Group our seeds like we did with our models
// main seeds
import seedBooks from "./book-seeds.js";
import seedAuthors from "./author-seeds.js";
import seedBookAuthors from "./bookauthor-seeds.js";
import seedUsers from "./user-seeds.js";
import seedComments from "./comment-seeds.js";
// user seeds
import seedUserProfiles from "./userprofile-seeds.js";
import seedUserSettings from "./usersettings-seeds.js";
// tag seeds
import seedTagTypes from "./tagtype-seeds.js";
import seedTags from './tag-seeds.js';
import seedAuthorTags from './authortag-seeds.js';
import seedBookTags from './booktag-seeds.js';


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
    await seedUserProfiles();
    console.log("\n----- USERPROFILES SEEDED -----\n");
    await seedUserSettings();
    console.log("\n----- USERSETTINGS SEEDED -----\n");
    await seedTagTypes();
    console.log("\n----- TAGTYPES SEEDED -----\n");
    await seedTags();
    console.log("\n----- TAGS SEEDED -----\n");
    await seedAuthorTags();
    console.log("\n----- AUTHORTAGS SEEDED -----\n");
    await seedBookTags();
    console.log("\n----- BOOKTAGS SEEDED -----\n");
    console.log("\n----- END SEEDING -----\n");  
    process.exit(0);
};

seedAll();
