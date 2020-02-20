"use strict";
module.exports = {
  checkingUserinput(infoType, input) {
    if (input == null || input == NaN || input == "") {
      return 0;
    }
    if (infoType == "firstName") {
      var nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/;
      if (input.match(nameRegex)) {
        return true;
      }
    }
    if (infoType == "lastName") {
      var nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/;
      if (input.match(nameRegex)) {
        return true;
      }
    }
    if (infoType == "number") {
      var numRegex = /^[+]?([0-9]{2})?[ ]?[0-9]{10}$/;
      if (input.match(numRegex)) {
        return true;
      }
    }
    if (infoType == "id") {
      var idRegex = /^[a-zA-Z0-9]{1,}[._+-]?[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}([.][a-zA-Z]{2,4}){1,3}$/;
      if (input.match(idRegex)) {
        return true;
      }
    }
    if (infoType == "pswd") {
      var pswdRegex = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[+@#$%^&*!.()-]).{8,}/;
      if (input.match(pswdRegex)) {
        return true;
      }
      if (typeof input != NaN) {
        return false;
      }
    } else {
      return false;
    }
  }
};
