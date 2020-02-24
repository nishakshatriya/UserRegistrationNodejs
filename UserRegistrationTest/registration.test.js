const assert = require("chai").assert;
const validation = require("../UserRegistration/registration");
const emailValid = require("../UserRegistration/email");

//FirstName
describe("FirstName Validation", function() {
  it("When given valid username should return true", () => {
    let firstname = validation.checkingUserinput("firstName","Nisha");
    assert.equal(true, firstname);
  }),
    it("When given user name first letter lowercase should return false", () => {
      let firstname = validation.checkingUserinput("firstName","nish");
      assert.equal(false, firstname);
    }),
    it("When given username less than 3 chars should return false", () => {
      let firstname = validation.checkingUserinput("firstName","ni");
      assert.equal(false, firstname);
    }),
    it("When space encountered in username should return false", () => {
      let firstname = validation.checkingUserinput("firstName","Nis ha");
      assert.equal(false, firstname);
    }),
    it("When username field is empty string should return 0", () => {
      let firstname = validation.checkingUserinput("firstName","");
      assert.equal(0,firstname);
    }),
    it("When username field is null should return 0", () => {
      let firstname = validation.checkingUserinput("firstName",null);
      assert.equal(0,firstname);
    }),
    it("When username has special character should return false ", () => {
      let firstname = validation.checkingUserinput("firstName","Ni@ha");
      assert.equal(false, firstname);
    });
});

// LastName
describe("Lastname Validation", function() {
  it("When given valid lastname should return true", () => {
    let lastname = validation.checkingUserinput("lastName","Kshatriya");
    assert.equal(true, lastname);
  }),
    it("When given lastname first char lowercase should return false", () => {
      let lastname = validation.checkingUserinput("lastName","ksh");
      assert.equal(false, lastname);
    }),
    it("When given lastname less than 3 chars should return false", () => {
      let lastname = validation.checkingUserinput("lastName","ks");
      assert.equal(false, lastname);
    }),
    it("When space encountered in username should return false", () => {
      let lastname = validation.checkingUserinput("lastName","Ksh at ri ya");
      assert.equal(false, lastname);
    }),
    it("When given lastname as empty string should return 0", () => {
      let lastname = validation.checkingUserinput("lastName","");
      assert.equal(0,lastname);
    }),
    it("When given lastname null should return 0", () => {
      let lastname = validation.checkingUserinput("lastName",null);
      assert.equal(0,lastname);
    }),
    it("When lastname has special symbol should return false", () => {
      let lastname = validation.checkingUserinput("lastName","Kshatr@iy");
      assert.equal(false, lastname);
    });
});

//PhoneNumber
describe("Validating Phone Number", () => {
  it("When given phone number in valid format should return true", () => {
    let phoneNo = validation.checkingUserinput("number","+91 9922123456");
    assert.equal(true, phoneNo);
  }),
    it("When given phone number has chars should return false", () => {
      let phoneNo = validation.checkingUserinput("number","+91 99221ab56");
      assert.equal(false, phoneNo);
    }),
    it("When given phone number has more than 10 digit should return false ", () => {
      let phoneNo = validation.checkingUserinput("number","+91 999999999999");
      assert.equal(false, phoneNo);
    }),
    it("When given phone number in valid format should return true ", () => {
      let phoneNo = validation.checkingUserinput("number","91 9922112561");
      assert.equal(true, phoneNo);
    }),
    it("IWhen given phone number in valid format should return true", () => {
      let phoneNo = validation.checkingUserinput("number","9921910319");
      assert.equal(true, phoneNo);
    }),
    it("When given phone number is blank should return 0", () => {
      let phoneNo = validation.checkingUserinput("number","");
      assert.equal(0,phoneNo);
    }),
    it("When given phone number is null should return 0", () => {
      let phoneNo = validation.checkingUserinput("number",null);
      assert.equal(0,phoneNo);
    }),
    it("When given phone number less than 10 digit should return true", () => {
      let phoneNo = validation.checkingUserinput("number","989");
      assert.equal(false, phoneNo);
    });
});

//Mail-ID
describe("Email Validation", function() {
  it("When given valid emaild_id format should return true", () => {
    let id = validation.checkingUserinput("id","nisha.kshatriya08@gmail.com");
    assert.equal(true, id);
  }),
    it("When given invalid email_id should return false", () => {
      let id = validation.checkingUserinput("id","abc@gmail@com");
      assert.equal(false, id);
    }),
    it("When given email_id field is empty should return 0", () => {
      let id = validation.checkingUserinput("id","");
      assert.equal(0,id);
    }),
    it("When given email_id is  null should return 0", () => {
      let id = validation.checkingUserinput("id",null);
      assert.equal(0,id);
    });
});

//Password
describe("Password Validation", function() {
  it("When given password is valid should return true", () => {
    let pswd = validation.checkingUserinput("pswd","Nisha@123");
    assert.equal(true, pswd);
  }),
    it("When given password is less than 8 characters should return", () => {
      let pswd = validation.checkingUserinput("pswd","Nisha12");
      assert.equal(false, pswd);
    }),
    it("When given password doesnt have atleast 1 uppercase should return false", () => {
      let pswd = validation.checkingUserinput("pswd","Nisha12");
      assert.equal(false, pswd);
    }),
    it("When given password doesnt have atleast 1 number should return false", () => {
      let pswd = validation.checkingUserinput("pswd","Nishaaa@aa");
      assert.equal(false, pswd);
    }),
    it("When given password doesnt have atleast 1 special char should return false", () => {
      let pswd = validation.checkingUserinput("pswd","Nishaa123445");
      assert.equal(false, pswd);
    }),
    it("When given password is blank should return false", () => {
      let pswd = validation.checkingUserinput("pswd","");
      assert.equal(false,pswd);
    }),
    it("When given password is null should return false", () => {
      let pswd = validation.checkingUserinput("pswd",null);
      assert.equal(false,pswd);
    });
});

describe("Validating Email_Collection",function(){
    it('Validate every email -->',() => {
        var emailSet = emailValid.validatingIdObjects("id",x);
        assert.equal(true,emailSet);
    });
});
