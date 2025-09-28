const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: IMAGEKIT_PUBLIC_KEY,
  privateKey: IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  try {
    const response = await imagekit.upload({
      file: file,          // Buffer, base64 string, or file URL
      fileName: fileName,  // required
      folder: "mohit-project",
    });
    return response;
  } catch (err) {
    console.error("ImageKit upload error:", err);
    throw err;
  }
}

module.exports = uploadFile;
