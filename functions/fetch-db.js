import fs from 'fs';
import path from 'path';
 
const dbFilePath = path.resolve('db.json');

export const handler = async (event) => {
  try {
    console.log(`Attempting to read from path: ${dbFilePath}`);
    
    if (!fs.existsSync(dbFilePath)) {
      console.error(`File does not exist at path: ${dbFilePath}`);
      throw new Error('File not found');
    }
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
         'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET', 
      },
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    console.error('eror',error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET', 
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};





