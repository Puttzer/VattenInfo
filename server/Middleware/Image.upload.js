
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.file)
        // cb(null, '../client/public/uploads/');
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {   // reject a file   
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') { cb(null, true); } else { cb(null, false); }
};
const ImageUpload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 1024 }, fileFilter: fileFilter })

// const ImageUpload = multer({ storage, })



module.exports = ImageUpload



