import multer from "multer";
import { extname, join } from "path";
import rootDir from "../../rootDir";
import { log } from "console";
const upload = join(rootDir, "storage", "upload");
const images = join(upload, "images");
const resume = join(upload, "resume");
const assets = join(upload, "assets");
const kids = join(upload, "kids");
const imageStorage = multer.diskStorage({
  destination: images,
  filename: (req, file, cb) => {
    log(req.url)
    cb(null, file.fieldname + "-" + Date.now() + extname(file.originalname));
  },
});
const resumeStorage = multer.diskStorage({
  destination: resume,
  filename: (req, file, cb) => {
    log(req.url);
    cb(null, file.fieldname + "-" + Date.now() + extname(file.originalname));
  },
});
const assetsStorage = multer.diskStorage({
  destination: assets,
  filename: (req, file, cb) => {
    log(req.url);
    cb(null, file.fieldname + "-" + Date.now() + extname(file.originalname));
  },
});
const TestimonialAssetsStorage = multer.diskStorage({
  destination: kids,
  filename: (req, file, cb) => {
    log(req.url);
    cb(null, file.fieldname + "-" + Date.now() + extname(file.originalname));
  },
});

// Initialize image middleware and add file size limit
export const imageMiddleware = multer({
  storage: imageStorage,
}).single("image"); // 'image' is the name attribute of the file input field

// Initialize resume middleware and add file size limit
export const resumeMiddleware = multer({
  storage: resumeStorage,
}).single("resume"); // 'resume' is the name attribute of the file input field

// Initialize assets middleware and add file size limit
export const assetMiddleware = multer({
  storage: assetsStorage,
}).single("assets"); // 'assets' is the name attribute of the file input field

// Initialize assets middleware and add file size limit
export const TestimonialAssetsMiddleware = multer({
  storage: TestimonialAssetsStorage,
}).single("kids"); // 'assets' is the name attribute of the file input field
