import UserSettings from "../models/user/UserSettings.js";

const userSettingsData = [
    {
        user_id: 1,     // Joe
        show_real_name: true,
        show_location: true,
        show_dob: true,
        show_age: true,
        show_about: true,
    },
    {
        user_id: 2,     // Josh
        show_real_name: true,
        show_location: false,
        show_dob: false,
        show_age: true,
        show_about: false,
    },
    {
        user_id: 3,     // Sven
        show_real_name: true,
        show_location: true,
        show_dob: true,
        show_age: false,
        show_about: true,
    },
    {
        user_id: 4,     // Emily
        show_real_name: true,
        show_location: true,
        show_dob: false,
        show_age: true,
        show_about: true,

    },
    {
        user_id: 5,     // Jackie
        show_real_name: false,
        show_location: false,
        show_dob: false,
        show_age: false,
        show_about: true,
    },
    {
        user_id: 6,     // Barnabas
        show_real_name: true,
        show_location: true,
        show_dob: false,
        show_age: true,
        show_about: true,
    }
];

const seedUserSettings = () => UserSettings.bulkCreate(userSettingsData);

export default seedUserSettings;