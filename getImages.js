const fs = require('fs');
const path = require('path');

// Specify the path to the local storage folder containing your images
const storageFolderPath = './db-images'; // Update this with your actual folder path

// Initialize an empty array to store image metadata
const imageMetadataArray = [];

// Read the image files from the storage folder
fs.readdir(storageFolderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Iterate through the list of image files
  files.forEach((file) => {
    // Create a full path to the image file
    const imagePath = path.join(storageFolderPath, file);

    // Create an object representing image metadata
    const imageMetadata = {
      fileName: file,
      filePath: imagePath,
      description: '', // Add a description if needed
    };

    // Add the image metadata object to the array
    imageMetadataArray.push(imageMetadata);
  });

  // Create a JSON object with the image metadata
  const jsonData = {
    images: imageMetadataArray,
  };

  // Write the JSON data to the db.json file
  const dbJsonPath = './db.json'; // Update this with your desired JSON file path
  fs.writeFile(dbJsonPath, JSON.stringify(jsonData, null, 2), (writeErr) => {
    if (writeErr) {
      console.error('Error writing JSON data to file:', writeErr);
    } else {
      console.log('Images imported to db.json successfully.');
    }
  });
});
