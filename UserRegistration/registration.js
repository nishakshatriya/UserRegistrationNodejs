"use strict";
module.exports = {
  checkingUserinput(infoType, input) {
    if (input == null || input == NaN || input == "") {
      return 0;
    } 
     if (infoType == "firstName") {
      var nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/;
      if (input.match(nameRegex)){
        return true;
      }

    }
     if (infoType == "lastName") {
      var nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/;
      if (input.match(nameRegex)){
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
      if (input.match(pswdRegex)){
        return true;
      }
      if(typeof (input)!= NaN){
        return false;

      }
    } 
    else {
      return false;
    }
  }
  // userNameValidating(firstName) {
  //   var nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/;
  //   if (firstName == null || firstName == NaN || firstName == "") {
  //     return 0;
  //   } else if (firstName.match(nameRegex)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // userLastNameValidation(lastName) {
  //   var nameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/;
  //   if(lastName == null || lastName == NaN || lastName == ""){
  //     return 0;
  //   }else if (lastName.match(nameRegex)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // },
  // mobileNumberValidation(number) {
  //   var numRegex = /^[+]?([0-9]{2})?[ ]?[0-9]{10}$/;
  //   if (number == null || number == NaN || number == ""){
  //     return 0;
  //   }else if (number.match(numRegex)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // },
  // emailIdValidation(id) {
  //   var numRegex = /^[a-zA-Z0-9]{1,}[._+-]?[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}([.][a-zA-Z]{2,4}){1,3}$/;
  //   if (id == null || id == NaN || id == ""){
  //     return 0;
  //   }else if (id.match(numRegex)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // },
  // passwordValidation(pswd) {
  //   var pswdRegex = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[+@#$%^&*!.()-]).{8,}/;
  //   if(pswd == null || pswd == NaN || pswd == ""){
  //     return 0;
  //   }else if (pswd.match(pswdRegex)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
};
