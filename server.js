import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config/config";
const app = express();

app.use(express.json());

// cors middleware
// app.use(cors())
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type"],
  })
);
app.use(express.json());
app.use(cors(corsOptions));

mongoose
  .connect(config.mongodbURI)
  .then(() => {
    const PORT =config.port;
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.status(201).json({ message: "Server is  up and running" });
});
