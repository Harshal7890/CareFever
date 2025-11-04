const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const aiRoutes = require("./routes/ai.route");

const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });

const app = express();

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// Routes
app.use("/", userRoutes);
app.use("/ai", aiRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
