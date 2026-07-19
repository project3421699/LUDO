// Serverless function to expose Firebase Configuration from environment variables
module.exports = (req, res) => {
  res.status(200).json({
    databaseURL: process.env.FIREBASE_DATABASE_URL || "",
    apiKey: process.env.FIREBASE_API_KEY || "",
    projectId: process.env.FIREBASE_PROJECT_ID || "",
    appId: process.env.FIREBASE_APP_ID || ""
  });
};
