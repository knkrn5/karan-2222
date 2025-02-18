import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"
import fs from "fs"

// dotenv.config({ path: "./backend/.env" });
dotenv.config({ path: ".env" });
console.log("cloudinary name",process.env.CLOUDINARY_CLOUD_NAME)

/* if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    throw new Error("Cloudinary configuration environment variables are not set");
} */


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Upload 
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // File has been uploaded successfully
        console.log("File is uploaded on Cloudinary ", response.url);
        return response;

    } catch (error) {
        // Handle errors 
        fs.unlinkSync(localFilePath);
        console.error("Error uploading to Cloudinary:", error);
        return null;
    }
};


export  {uploadOnCloudinary};


/*  // Optimize delivery by resizing and applying auto-format and auto-quality
 const optimizeUrl = cloudinary.url('shoes', {
     fetch_format: 'auto',
     quality: 'auto'
 });
 
 console.log(optimizeUrl);
 
 // Transform the image: auto-crop to square aspect_ratio
 const autoCropUrl = cloudinary.url('shoes', {
     crop: 'auto',
     gravity: 'auto',
     width: 500,
     height: 500,
 });
 
 console.log(autoCropUrl); */



