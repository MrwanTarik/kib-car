export function formatPhoneNumber(phoneNumber) {
  // Remove all non-numeric characters
  phoneNumber = phoneNumber.replace(/\D/g, "");

  // Define the structure
  const structure = ["(", ") ", "-", "-"];

  // Define the pattern
  const pattern = [3, 3, 2, 2];

  let formattedNumber = "";
  let currentIndex = 0;

  // Iterate over the pattern to construct the formatted number
  for (let i = 0; i < pattern.length; i++) {
    formattedNumber +=
      structure[i] + phoneNumber.substr(currentIndex, pattern[i]);
    currentIndex += pattern[i];
  }

  // Return the formatted number, removing leading characters
  return formattedNumber.startsWith("(")
    ? formattedNumber
    : formattedNumber.slice(2);
}

export function hideLastTwoDigits(formattedNumber) {
  // Replace the last two digits with bullets
  return formattedNumber.slice(0, -2) + "••";
}
export function clearFormatPhoneNumber(phoneNumber) {
  // Remove all non-digit characters except the plus sign
  let cleaned = phoneNumber.replace(/[^0-9+]/g, "");

  // Check if the number starts with a plus sign, if not add it
  if (cleaned[0] !== "+") {
    cleaned = "+90" + cleaned;
  }

  return cleaned;
}
