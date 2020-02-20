const assert = require("chai").assert;
const validation = require("../UserRegistration/registration");
const emailValid = require("../UserRegistration/email");

//FirstName
describe("FirstName Validation", function() {
  it("valid username FirstLetter Caps", () => {
    let firstname = validation.userNameValidating("Nisha");
    assert.equal(true, firstname);
  }),
    it("Invalid username FirstLetter lowercase", () => {
      let firstname = validation.userNameValidating("nish");
      assert.equal(false, firstname);
    }),
    it("Invalid username Minimum 3 letters", () => {
      let firstname = validation.userNameValidating("ni");
      assert.equal(false, firstname);
    }),
    it("Invalid username if SpaceEncountered", () => {
      let firstname = validation.userNameValidating("Nis ha");
      assert.equal(false, firstname);
    }),
    it("Invalid if undefined", () => {
      let firstname = validation.userNameValidating("");
      assert.equal(0,firstname);
    }),
    it("Invalid if null", () => {
      let firstname = validation.userNameValidating(null);
      assert.equal(0,firstname);
    }),
    it("Invalid username if Special char is present", () => {
      let firstname = validation.userNameValidating("Ni@ha");
      assert.equal(false, firstname);
    });
});

//LastName
describe("Lastname Validation", function() {
  it("valid lastname", () => {
    let lastname = validation.userLastNameValidation("Kshatriya");
    assert.equal(true, lastname);
  }),
    it("Invalid lastname", () => {
      let lastname = validation.userLastNameValidation("ksh");
      assert.equal(false, lastname);
    }),
    it("Invalid username Minimum 3 letters", () => {
      let lastname = validation.userLastNameValidation("ks");
      assert.equal(false, lastname);
    }),
    it("Invalid username if SpaceEncountered", () => {
      let lastname = validation.userLastNameValidation("Ksh at ri ya");
      assert.equal(false, lastname);
    }),
    it("Invalid if undefined", () => {
      let lastname = validation.userLastNameValidation("");
      assert.equal(0,lastname);
    }),
    it("Invalid if null", () => {
      let lastname = validation.userLastNameValidation(null);
      assert.equal(0,lastname);
    }),
    it("Invalid username if special char Encounter", () => {
      let lastname = validation.userLastNameValidation("Kshatr@iy");
      assert.equal(false, lastname);
    });
});

//PhoneNumber
describe("Validating Phone Number", () => {
  it("number format 1", () => {
    let phoneNo = validation.mobileNumberValidation("+91 9922123456");
    assert.equal(true, phoneNo);
  }),
    it("Invalid if characters present", () => {
      let phoneNo = validation.mobileNumberValidation("+91 99221ab56");
      assert.equal(false, phoneNo);
    }),
    it("Invalid for more then 10 nos ", () => {
      let phoneNo = validation.mobileNumberValidation("+91 999999999999");
      assert.equal(false, phoneNo);
    }),
    it("Valid Format 2 ", () => {
      let phoneNo = validation.mobileNumberValidation("91 9922112561");
      assert.equal(true, phoneNo);
    }),
    it("Invalid Format ", () => {
      let phoneNo = validation.mobileNumberValidation("9921910319");
      assert.equal(true, phoneNo);
    }),
    it("Invalid if undefined", () => {
      let phoneNo = validation.mobileNumberValidation("");
      assert.equal(0,phoneNo);
    }),
    it("Invalid if null", () => {
      let phoneNo = validation.mobileNumberValidation(null);
      assert.equal(0,phoneNo);
    }),
    it("Invalid if less than 10", () => {
      let phoneNo = validation.mobileNumberValidation("989");
      assert.equal(false, phoneNo);
    });
});

//Mail-ID
describe("Email Validation", function() {
  it("Valid email_id", () => {
    let id = validation.emailIdValidation("nisha.kshatriya08@gmail.com");
    assert.equal(true, id);
  }),
    it("Invalid email id", () => {
      let id = validation.emailIdValidation("abc@gmail@com");
      assert.equal(false, id);
    }),
    it("Invalid if undefined", () => {
      let id = validation.emailIdValidation("");
      assert.equal(0,id);
    }),
    it("Invalid if null", () => {
      let id = validation.emailIdValidation(null);
      assert.equal(0,id);
    });
});

//Password
describe("Password Validation", function() {
  it("valid format", () => {
    let pswd = validation.passwordValidation("Nisha@123");
    assert.equal(true, pswd);
  }),
    it("less than 8 chars", () => {
      let pswd = validation.passwordValidation("Nisha12");
      assert.equal(false, pswd);
    }),
    it("Atleast 1 UpperCase", () => {
      let pswd = validation.passwordValidation("Nisha12");
      assert.equal(false, pswd);
    }),
    it("less than 8 chars", () => {
      let pswd = validation.passwordValidation("Nisha12");
    }),
    it("less than 1 number", () => {
      let pswd = validation.passwordValidation("Nishaaa@aa");
      assert.equal(false, pswd);
    }),
    it("Atleast 1 special symbol", () => {
      let pswd = validation.passwordValidation("Nishaa123445");
      assert.equal(false, pswd);
    }),
    it("Invalid if undefined", () => {
      let pswd = validation.passwordValidation("");
      assert.equal(0,pswd);
    }),
    it("Invalid if null", () => {
      let pswd = validation.passwordValidation(null);
      assert.equal(0,pswd);
    });
});

describe("Validating Email_Collection",function(){
    it('Validate every email -->',() => {
        var emailSet = emailValid.validatingIdObjects();
        assert.equal(true,emailSet);
    });
});
