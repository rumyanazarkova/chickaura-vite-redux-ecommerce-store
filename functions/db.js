
import fs from 'fs';
import path from 'path';


export const handler = async (event) => {
  try {
    const data = JSON.parse(await fs.promises.readFile(path.resolve('D:\\Projects\\chickaura-vite-redux-ecommerce-store\\db.json'), 'utf8'));

 
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
      },
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};





