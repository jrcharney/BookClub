import { dirname, path } from "path";
import express from "express";
import session from "express-session";
import config from "./config/config";
import sequelize from "./config/connections";
import routes from "./controllers";
import helpers from "./utils/helpers";
import exphbs from "express-handlebars";
import ConnSessSeq from "connect-session-sequelize";
import { fileURLToPath } from "url";
const SequelizeStore = ConnSessSeq(session.Store);

const app = express();
const PORT = config.port || 3001;
const hbs = exphbs.create({helpers});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sess = {
  // Secret passphrase
  secret: 'If I told you it would not be a secret',
  // Cookie Data
  cookie: {},
  // ???
  resave: false,
  // ???
  saveUninitialized: true,
  // Create new sequelize store
  store: new SequelizeStore({ db: sequelize })
};

app.use(session(sess));
app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(routes);

sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
})

/*
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
  
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
*/
