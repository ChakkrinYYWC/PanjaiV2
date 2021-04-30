const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: "dfuqgcqif",
    api_key: "836578381329955",
    api_secret: "qeXingjN8-x-r7O50kXwv0j6Nfc",
});

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
    params: {
        folder: 'Too-Panjai',
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }

});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;


// require('dotenv').config();
// const cloudinary = require('cloudinary').v2;
// cloudinary.config({
//     cloud_name: "dfuqgcqif",
//     api_key: "836578381329955",
//     api_secret: "qeXingjN8-x-r7O50kXwv0j6Nfc",
// });
// // cloudinary.config({
// //     cloud_name: process.env.CLOUDINARY_NAME,
// //     api_key: process.env.CLOUDINARY_API_KEY,
// //     api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// module.exports = { cloudinary };
