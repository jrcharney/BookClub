import UserProfile from "../models/user/UserProfile.js";

const userProfileData = [
    {
        user_id: 1,     // Joe
        first_name: "Joseph",
        last_name: "Smiley",
        dob: "1986-10-10",
        location: "Kalamazoo, MI, USA"
    },
    {
        user_id: 2,     // Josh
        first_name: "Joshua",
        last_name: "Theriot",
        dob: "2003-07-09",
        location: "Vancouver, BC, CAN",
        about : "Last name pronounced: Terry-Oh"
    },
    {
        user_id: 3,     // Sven
        first_name: "Sven",
        last_name: "Erikson",
        dob: "1990-09-19",
        location: "Stockholm, SWE",
        about: "I know six languages: English, Swedish, Danish, German, Norwegian, and Finnish."
    },
    {
        user_id: 4,     // Emily
        first_name: "Emily",
        last_name: "Weiss-Fielding",
        dob: "1968-02-22",
        location: "Boston, MA, USA"
    },
    {
        user_id: 5,     // Jackie
        first_name: "Jackie",
        last_name: "Carmichael",
        dob: "2006-05-07",
        location: "Henderson, NV, USA"
    },
    {
        user_id: 6,     // Barnabas
        first_name: "Barnabas",
        last_name: "Konstantine",
        dob: "1992-04-19",
        location: "Irving, TX, USA",
        about: "Read banned books!"
    }
];

const seedUserProfiles = () => UserProfile.bulkCreate(userProfileData);

export default seedUserProfiles;