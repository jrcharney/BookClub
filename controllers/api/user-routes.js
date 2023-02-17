import { Router } from 'express';
import User from "../../models/main/User.js"
import UserProfile from '../../models/user/UserProfile.js';
import UserSettings from '../../models/user/UserSettings.js';

const userRoutes = new Router();

// TODO: This seems incomplete.  Describe what each route does.

const createUser = async (req,res) => {
  try {
    // NOTE: Renaming "dbUserData" to just "user" to eliminate redundancy
    const user = await User.create({
      username: req.body.username,
      email:    req.body.email,
      password: req.body.password,
      // WISHLIST: Validate password twice
      // WISHLIST: CAPATCHA
    });

    // TODO: get the user id so. We need it to create user_settings and user_profile
    // We need to use the ID not just for the session but to set user settings and user profiles.
    const = user_id =  user.id;
    
    // User Settings (What should be public?  By default, these items will be set to private)
    const user_settings = await UserSettings.create({
      user_id:        user_id,                    // NOTE: This cannot be changed. It is fixed.
      show_real_name: req.body.show_real_name,    // If enable, the user can share their real name.
      show_location:  req.body.show_location,     // If enable, the user can share their location.
      show_dob:       req.body.show_dob,          // Show the user's data of birth.  If age is hidden, show Month and Day if this is true, otherwise don't display.
      show_age:       req.body.show_age,          // Show age. If DOB is hidden, share age if true, otherwise do not show.
      // TODO: Should we have included a field for gender?
      // NOTE: There will likely be a whole bunch of other show_* settings here if the app is ever expanded.
      show_about:     req.body.show_about         // If enable, share the about field.  TODO: Advise user to avoid sharing personal information.
    });

    // User Profile fields (The fields that can be set to public, but are private by default)
    const user_profile  = await UserProfile.create({
      user_id:    user_id,              // NOTE: This cannot be changed. It is fixed.
      first_name: req.body.first_name,
      last_name:  req.body.last_name,
      dob:        req.body.dob,       // A field for the user to provide their date of birth (required for some access)
      // TODO: Calculate Age
      location:   req.body.location,  // A field for the user to share their location
      about:      req.body.about      // A field for the user to tell everybody about themselves
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = user.id;
      res.status(200).json(user);
      // TODO: How to upload the user_settings and user_profile?
    });
  } catch(error){
    console.log(err);
    res.status(500).json(err);    // .json({ error: err.message });
  }
  // TODO: There should probably be a `finally` here, Something should happen no matter what.
};

const getAllUsers = async (req,res) => {
  try {
    const users = await User.findAll({
      
        include: [
            {
                model: [
                  UserSettings,
                  UserProfile
                ]                   // TODO: Should we need Include this?
            }
        ]
    });
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// TODO: This should produce a user profile that others can see.
const getUser = async (req,res) => {
  try {
    const user_id = req.session.user_id;
    //const { id } = req.params;
    const user = await User.findOne({
        where: { id : user_id }, // { id: id },
        include: [
                  {
                    model: UserSettings,
                    attributes: [
                      'user_id',
                      'show_real_name',
                      'show_location',
                      'show_dob',
                      'show_age',
                      'show_location',
                      // 'show_*',
                      'show_about'
                    ],
                  },
                  {
                    model: UserProfile,
                    attributes: [
                      'user_id',
                      'first_name',
                      'last_name',
                      'dob',
                      'location',
                      'about'
                    ],
                  }
                ]
    });
    if (user) {
      // TODO: Serialize the data before passing it to the template.
      // TODO: Only show what is permitted.
      user.map()
        //return res.status(200).json({ user });
    }
    return res.status(404).send('User with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// TODO: User should only have access to this.
// This method should control what the user wants to share.
const getUserSettings = async (req,res) => {};

// TODO: User should only have access to this.
// This method shows items on the user profile.
const getUserProfile = async (req,res) => {};


// TODO: Probably should split this into two functions.
// This method should allow the user to update their username, email, and password.
// NOTE: User.id cannot be changed.
const updateUser = async (req,res) => {};

// TODO: Add a couple of barriers before going through with this!
// "Please, baby, please, baby, please, baby, please! Don't leave!" (Pretty sure James Brown said that.)
const deleteUser = async (req,res) => {};

// Sign Up: Create new user
// Note: Changed the route to sign-up because `/` goes to the homepage.
// The signup page should be on another page.
userRoutes.post('/signup', createUser);

// Login
// TODO: Username recovery with email.
// TODO: Password recovery (and reset) with email.
userRoutes.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,      // TODO: Have an option to login with user name
      },
    });

    if (!user) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
userRoutes.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


/*
userRoutes.get('/user/:id', (req,res) => {
  // TODO: show a user profile
  // TODO: How would we look up a user page by username?
})
*/

export default userRoutes;