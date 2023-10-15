// src/utils/api.js

async function fetchData(apiUrl, headers) {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers,
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      throw new Error(`API request error: ${error.message}`);
    }
  }
  
export default fetchData;
// module.export = {
//   fetchData: fetchData
// };