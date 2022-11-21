function checkForSpam(message) {
  let result;
  // Change code below this line
  const normalized = message.toLowerCase();

  if (normalized.includes("spam")) {
    console.log(true);
  } else if (normalized.includes("sale")) {
    console.log(true);
  } else {
    console.log(false);
  }
  // Change code above this line
  return result;
}
