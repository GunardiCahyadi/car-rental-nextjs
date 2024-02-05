// server/server.js
import express from "express";
import carsRoutes from "./libs/carsRoutes";

const app = express();

app.use(express.json());

app.use("/api", carsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
