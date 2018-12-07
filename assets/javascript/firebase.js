// Initialize Firebase
var config = {
    apiKey: "AIzaSyC5dEKiF6n5n7a4wdy4xy-AWjq3fL8_9Bc",
    authDomain: "ivory-93291.firebaseapp.com",
    databaseURL: "https://ivory-93291.firebaseio.com",
    projectId: "ivory-93291",
    storageBucket: "ivory-93291.appspot.com",
    messagingSenderId: "36194213397"
};
firebase.initializeApp(config);

// Variable to reference the database
var database = firebase.database();

// Everytime user enters anything, store it in an obj and put in Firebase
("#ivory-button").on("click", function (event) {
    event.preventDefault();

    // Grab the user input
    var userMessage = $("ivory-input").val().trim();

    // Put it in local variable
    var message = {
        text: userMessage,
        speaker: "user",
    };

    // push to firebase
    database.ref().push(message);

    // test
    console.log(userMessage.text);
    console.log(userMessage.speaker);

    // Do we need to clear?
    $("#ivory-input").val("")
    // or
    $("#ivory-input").empty();
});

// Everytime ivory responds, store it in an obj and push to firebase
("#ivory-answer").on("click", function (event) {
    event.preventDefault();
// if ivory didnt say anthing, exit out
// if he did, grab ivorys response
    if ($("#ivory-input").val().trim() === ""){
        return
      }
      else {
        var ivoryMessage = $("ivory-input").val().trim();

        $('#ivoryAnswer').empty();

    // put it in local variable
    var message = {
        text: ivoryMessage,
        speaker: "ivory",
    };

    // push to firebase
    database.ref().push(message);

    // test
    console.log(ivoryMessage.text);
    console.log(ivoryMessage.speaker);
}
});

//child added will show html with message everytime an obj is added to firebase
//we need to get ivorys aligned left and user's aligned right
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
    // debugger;
    // Store everything into a variable.
     if (childSnapshot.val().message.speaker === "user"){
        //append message to bubble on left side
     }
     if (childSnapshot.val().message.speaker === "ivory"){
        //  append message to bubble on right side
     }

}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});