"use strict";
module.exports = {
  userNameValidating(firstName) {
    var nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/;
    if (firstName.match(nameRegex)) {
      return true;
    } else {
      return false;
    }
  },
  userLastNameValidation(lastName) {
    var nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/;
    if (lastName.match(nameRegex)) {
      return true;
    } else {
      return false;
    }
  },
  mobileNumberValidation(number) {
    var numRegex = /^[+]?([0-9]{2})?[ ]?[0-9]{10}$/;
    if (number.match(numRegex)) {
      return true;
    } else {
      return false;
    }
  },
  emailIdValidation(id) {
    var numRegex = /^[a-zA-Z0-9]{1,}[._+-]?[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}([.][a-zA-Z]{2,4}){1,3}$/;
    if (id.match(numRegex)) {
      return true;
    } else {
      return false;
    }
  },
  passwordValidation(pswd) {
    var pswdRegex = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[+@#$%^&*!.()-]).{8,}/;
    if (pswd.match(pswdRegex)) {
      return true;
    } else {
      return false;
    }
  }
};
