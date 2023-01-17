function validateLength(phoneNumber) {
  if (phoneNumber.length == 11) {
    return true;
  } else {
    return false;
  }
}

function getPrefix(phoneNumber) {
  return phoneNumber.substring(0, 4);
}

function check9mobile(phoneNumber) {
  const prefix = ["0809", "0818", "0817", "0909", "0908"];

  return prefix.includes(phoneNumber);
}

function checkGlo(phoneNumber) {
  const prefix = ["0805", "0807", "0705", "0815", "0811", "0905", "0915"];
  return prefix.includes(phoneNumber);
}

function checkMTN(phoneNumber) {
  const prefix = [
    "0803",
    "0806",
    "0703",
    "0706",
    "0813",
    "0816",
    "0810",
    "0814",
    "0903",
    "0906",
    "0913",
    "0916",
    "07025",
    "07026",
    "0704",
  ];
  return prefix.includes(phoneNumber);
}

function checkAirtel(phoneNumber) {
  const prefix = [
    "0802",
    "0808",
    "0708",
    "0812",
    "0701",
    "0902",
    "0901",
    "0904",
    "0907",
    "0912",
  ];
  return prefix.includes(phoneNumber);
}

function checkPhoneNumberProvider(phoneNumber) {
  if (check9mobile(phoneNumber)) {
    return "9mobile";
  } else if (checkGlo(phoneNumber)) {
    return "Glo";
  } else if (checkMTN(phoneNumber)) {
    return "MTN";
  } else if (checkAirtel(phoneNumber)) {
    return "Airtel";
  } else {
    return "Undefined";
  }
}

const formElement = document.getElementById("form");
const inputElement = document.getElementById("phoneNumber");
const outputElement = document.getElementById("output");

formElement.onsubmit = function (e) {
  e.preventDefault();

  const phoneNumber = inputElement.value;
  if (validateLength(phoneNumber)) {
    const prefix = getPrefix(phoneNumber);

    const provider = checkPhoneNumberProvider(prefix);

    // we now have the provider, let's output it
    console.log(provider);
    outputElement.textContent = provider;
  } else {
    // Phone number is not equal to 11
    console.log("Invalid");
    outputElement.textContent = "Invalid";
  }
};

var calPoints = function (ops) {
  let newArr = [];

  for (var i = 0; i < ops.length; i++) {
    console.log(newArr);
    const v = ops[i];
    if (v === "+") {
      const nValue =
        Number(newArr[newArr.length - 1]) + Number(newArr[newArr.length - 2]);
      newArr.push(nValue);
    } else if (v === "D") {
      const nValue = Number(newArr[newArr.length - 1]) * 2;
      newArr.push(nValue);
    } else if (v === "C") {
      newArr.pop();
    } else {
      const nValue = Number(v);
      newArr.push(nValue);
    }
  }

  var sum = 0;
  for (var i = 0; i < newArr.length; i++) {
    sum = sum + newArr[i];
  }

  return sum;
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]));

function checkString(str) {
    const isEven = (n) => n % 2 === 0;

    
}

