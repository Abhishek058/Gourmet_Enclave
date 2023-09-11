import express, { request, response } from "express";
import { MDBurl, PORT } from "./config.js";
import cors from "cors";
import mongoose from "mongoose";
import orderRoute from './routes/ordersRoute.js'

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Gourmet Enclave");
});

app.use("/orders", orderRoute)

mongoose
  .connect(MDBurl)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(
        `Server is running on http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("Unable to Connect DataBase");
  });
