// src/utils/api.js

import fetchData from '../utils/api.js'; // Import the fetchData function
// import mockData from '../data/test-summary.json';
// import React, { useState, useEffect } from 'react';
// const fetchData = require('../utils/api');
// const mockData = require('../data/test-summary.json');

async function getTestResults() {
  // const [testData, setTestData] = useState(null);

  const apiUrl = 'https://umayadia-apisample.azurewebsites.net/api/persons';
  const headers = {
    'Authorization': 'Bearer YOUR_API_TOKEN',
  };

  try {
    const data = await fetchData(apiUrl, headers);
    return data;
  } catch (error) {
    console.error('API request error:', error);
    // return mockData;
  };
}

// module.exports = getTestResults;
export default getTestResults;

if(process.env.IS_LOCAL) {
  getTestResults()
    .then((result) => {
      console.log(JSON.stringify(result, null, 2));
    });
};
