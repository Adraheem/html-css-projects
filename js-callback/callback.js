function getData(url, good, bad) {
  if (url === null) {
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      // ...
      good(xhr.responseText);
    } else {
      // ...
      bad(xhr.status);
    }
  };
  xhr.send();
}

function success(response) {
  console.log("Successful");
  console.log(response);
}

function notSuccessful(message) {
  console.log("Failed");
  console.log(`The status of this resulted to: ${message}`);
}

let url = prompt("Please enter a URL to connect");
getData(url, success, notSuccessful);
