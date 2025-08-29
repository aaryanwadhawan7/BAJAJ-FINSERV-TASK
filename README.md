# Full Stack API Project - VIT Assignment

## Description

This project implements a REST API using Node.js serverless function on Vercel.  
It accepts a POST request with an array of mixed elements and returns categorized data including odd and even numbers, alphabets in uppercase, special characters, sum of numbers, and a reversed alternating caps string.

## API Endpoint

- **Method:** POST  
- **Route:** `/api/bfhl`  
- **Base URL:** `https://<your-vercel-project>.vercel.app`  
- **Full URL:** `https://<your-vercel-project>.vercel.app/api/bfhl`

## Request Format

{
"data": [/* array of strings */]
}

text

## Response Format

{
"is_success": true,
"user_id": "your_fullname_ddmmyyyy",
"email": "your_email",
"roll_number": "your_roll_number",
"odd_numbers": [/* odd numbers as strings /],
"even_numbers": [/ even numbers as strings /],
"alphabets": [/ uppercase alphabets /],
"special_characters": [/ special characters */],
"sum": "sum_of_numbers_as_string",
"concat_string": "reversed_alternate_caps_string"
}

text

## Setup Instructions

1. Create an `api` folder in the project root.
2. Add the API code as `bfhl.js` inside the `api` folder.
3. Deploy the project to Vercel.
4. Test the API using any REST client like Postman by sending a POST request to `/api/bfhl`.

## Testing

- Example POST request body:

{
"data": ["a", "1", "334", "4", "R", "$"]
}

text

- Expected response contains categorized data as per the assignment requirements.

---

This README provides the basic information to understand, use, and test the API you have built for the assignment.