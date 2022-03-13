"use strict";
exports.__esModule = true;
var app_1 = require("firebase/app");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: 'AIzaSyDUetHWOtMFacYBgqYEecAt97rWlsIkxGw',
    authDomain: 'caliber-12-2021.firebaseapp.com',
    databaseURL: 'https://caliber-12-2021-default-rtdb.firebaseio.com',
    projectId: 'caliber-12-2021',
    storageBucket: 'caliber-12-2021.appspot.com',
    messagingSenderId: '844365230658',
    appId: '1:844365230658:web:ee8b3e0cb11a68a9cff3db',
    measurementId: 'G-Y0NR39092W'
};
var app = app_1.initializeApp(firebaseConfig);
var auth = auth_1.getAuth();
auth_1.signInWithEmailAndPassword(auth, 'trainerEmail@gmail.com', 'password').then(function (res) {
    console.log('****', res);
});
