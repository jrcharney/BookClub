const withAuth = (req, res, next) => {
    // if the user isnt logged in, redirect them to the login route.
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  export default withAuth;