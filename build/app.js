src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"
src="script.js"
id='data'

var defaultProject = firebase.initializeApp(firebaseConfig);
console.log(defaultProject.name);  // "[DEFAULT]"
// Option 1: Access Firebase services via the defaultProject variable
var defaultStorage = defaultProject.storage();
var defaultFirestore = defaultProject.firestore();


// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
apiKey: "AIzaSyDu_TwRtpYz1T3Y1YQelPLABX39rPZKkYM",
authDomain: "saveit-2457d.firebaseapp.com",
databaseURL: "https://SaveIt.firebaseio.com",
storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://saveit-2457d-default-rtdb.firebaseio.com"
});