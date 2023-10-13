
import fs from 'fs';
import path from 'path';
/* const dbFilePath = path.resolve('/var/task/netlify/functions/your-function-name/db.json'); */
const dbFilePath = path.resolve(__dirname, '../../../db.json');

export const handler = async (event) => {
  try {
  
    const data = JSON.parse(await fs.promises.readFile(dbFilePath, 'utf8'));
    
    const { section, id } = event.queryStringParameters;

    let responseData;

    if (section && id) {
   
      const sectionData = data[section];
      responseData = sectionData.find(item => item.id ===  parseInt(id, 10));
    } else if (section) {
  
      responseData = data[section];
    } else {
   
      responseData = data;
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://chickaura.netlify.app', 
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://chickaura.netlify.app', 
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};





