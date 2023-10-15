// src/components/TestSummaries.js

import './TestSummaries.css';
// import fetchData from '../../utils/api'; // Import the fetchData function
import React, { useState, useEffect } from 'react';
import getTestResults from '../../lib/jama-test-results.js'; // Import from the lib directory

// const testResults = require('../../lib/jama-test-results');

function TestSummaries() {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    getTestResults()
      .then(data => {
        console.log(data);
        setTestData(data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
    }, []);

  if (!testData) {
    return <div>Loading...</div>;
  }
  console.log(getTestResults);
  console.log(testData);

  return (
    <div>
      <h1>BEVF JAMA Test Summary</h1>
      {Object.keys(testData).map((testCycle) => (
        <div key={testCycle}>
          <h2>Test Cycle: {testCycle}</h2>
          <table>
            <thead>
              <tr>
                <th>Test Case</th>
                <th>Result</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(testData[testCycle]).map(([testCase, data]) => (
                <tr key={testCase}>
                  <td>{data.name}</td>
                  <td className={data.result === 'passed' ? 'passed' : 'failed'}>
                    {/* {data.result}</td> */}
                    {data.age}
                  </td>
                  <td>
                  <a href={data.url} target="_blank" rel="noopener noreferrer">
                    {/* {data.url} */}
                    {data.note}
                  </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default TestSummaries;
// module.export = TestSummaries;
