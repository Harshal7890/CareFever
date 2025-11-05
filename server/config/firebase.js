const admin = require("firebase-admin");
const serviceAccount = require("./carefever-firebase-adminsdk-fbsvc-6057834c9b.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// You can export multiple items like this
module.exports = {
    db,
    admin
};