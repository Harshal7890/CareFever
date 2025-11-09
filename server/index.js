const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const aiRoutes = require("./routes/ai.route");
const alertsRoutes = require("./routes/alerts.route");
const sosRoutes = require("./routes/sos.route");
const { clerkMiddleware } = require("@clerk/express");
const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/user", userRoutes);
app.use("/ai", aiRoutes);
app.use("/api/alerts", alertsRoutes);
app.use("/api/sos", sosRoutes); // ✅ Added SOS route

const { saveProfileController } = require("./controller/user.controller");
app.post("/save-profile", saveProfileController);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
