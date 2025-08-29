const express = require("express");
const app = express();

// user details
const FULL_NAME = "aaryan_wadhawan";
const DOB = "14102003";
const EMAIL = "aaryantest@gmail.com";
const ROLL_NUMBER = "22BCY10197";

function isNumeric(str) {
  return /^[0-9]+$/.test(str);
}

function isAlphabetic(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function isSpecial(str) {
  return !isNumeric(str) && !isAlphabetic(str);
}

function alternatingCaps(str) {
  let result = "";
  let caps = true;
  for (let ch of str) {
    result += caps ? ch.toUpperCase() : ch.toLowerCase();
    caps = !caps;
  }
  return result;
}

app.post("/bfhl", (req, res) => {
  let { data } = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Invalid input" });
  }

  let odd_numbers = [];
  let even_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let alpha_concat = "";

  data.forEach((item) => {
    if (isNumeric(item)) {
      (parseInt(item) % 2 === 0 ? even_numbers : odd_numbers).push(item);
      sum += Number(item);
    } else if (isAlphabetic(item)) {
      alphabets.push(item.toUpperCase());
      alpha_concat += item;
    } else {
      special_characters.push(item);
    }
  });

  // Reverse the alpha_concat and apply alternating caps
  alpha_concat = alternatingCaps(alpha_concat.split("").reverse().join(""));

  res.json({
    is_success: true,
    user_id: `${FULL_NAME.toLowerCase()}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers: odd_numbers,
    even_numbers: even_numbers,
    alphabets: alphabets,
    special_characters: special_characters,
    sum: sum.toString(),
    concat_string: alpha_concat,
  });
});

app.listen(3000, () => {
  console.log("Application is running on port 3000!");
});
