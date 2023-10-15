
/** image onto base64 */
export default function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      // Step 1: Create a new FileReader object to read the file
      const fileReader = new FileReader();
  
      // Step 2: Read the file as a Data URL, which will convert the file to a Base64-encoded string
      fileReader.readAsDataURL(file);
  
      // Step 3: When the file reading is complete, the onload event will be triggered
      fileReader.onload = () => {
        // Step 4: Resolve the promise with the Base64-encoded result of the file
        resolve(fileReader.result);
      };
  
      // Step 5: If there is an error while reading the file, the onerror event will be triggered
      fileReader.onerror = (error) => {
        // Step 6: Reject the promise with the error object
        reject(error);
      };
    });
  }
  