"use strict";

const logins = [{name:"admin", pwd:"admin"}, {name:"bob", pwd:"123"}];
const CATALOG_PAGE = "catalog.html";
var failedAttempts = 0;

// references
// https://stackoverflow.com/questions/47391462/how-to-do-transition-effects-between-two-html-pages

function validLogin(username, pwd) {
    var valid = false;

    for (let i of logins) { 
        if ((i.name == username.toLowerCase()) && (i.pwd == pwd)) {
            valid = true;
            console.log("found match, loading next page");
            $("body").css("opacity", 0); // the transition property is 0.5s in the CSS
            setTimeout(function() {
                window.location.href = CATALOG_PAGE;
            }, 500);
        }

    }

    if (!valid) {  // invalid login, clear the fields
        $("#username").val("");
        $("#pwd").val("");
        $("#button").attr("disabled",true);
        failedAttempts++;
        if (failedAttempts < 3) {
            // show error message for 2 seconds
            $("h4").html("Invalid username or password."); 
            setTimeout(function(){ $("h4").html(""); }, 2000);
        } else { // give the user a "hint"
            $("h4").html("Hint: admin/admin"); 
        }

    }
    console.log("search ended");

}


function handleEnterButton() {
    var username = $("#username").val();
    var pwd = $("#pwd").val();

    if ((event.key == "Enter") && ($("#button")[0].disabled == false)) {
        console.log("enter pressed");
        validLogin(username, pwd);

    } else {
        // only enable Enter button when there are values to check
        if ((username != "") && (pwd != "")) {
            // console.log("text");
            $("#button").attr("disabled",false);
            $("#button").unbind().click(function() {  // unbind() so the click function only gets called once
                validLogin(username, pwd);
            });
        } else {
            // console.log("empty");
            $("#button").attr("disabled",true);
        }
    }
}

function init() {
    $(document).ready(function() {
        $("body").css("opacity", 1);
    });
    $("#button").attr("disabled",true);
    $("#username").keyup(handleEnterButton);  // keyup also detects the backspace
    $("#pwd").keyup(handleEnterButton);
};

init();
