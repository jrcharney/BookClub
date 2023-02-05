import express from "express";
const app = express();
const PORT = config.port || 3001;

app.use(express.json());

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
  });
  
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });