const validation = require("../UserRegistration/registration");

var EmailId = {
  1: "abc.100@abc.com.au",
  2: "abc@1.com",
  3: "abc@gmail.com.com",
};

function validatingIdObjects() {
  for (var i in EmailId) {
    var x = validation.checkingUserinput(EmailId[i]);
    return x;
  }
}
exports.validatingIdObjects = validatingIdObjects;
