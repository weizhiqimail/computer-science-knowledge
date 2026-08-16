const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadDir = path.join(__dirname, "uploads");
fs.mkdirSync(uploadDir, { recursive: true });

// Multer负责解析multipart/form-data；diskStorage决定保存目录和文件名。
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, callback) => {
    const safeOriginal = path
      .basename(file.originalname)
      .replace(/[^\p{L}\p{N}._-]/gu, "_");
    callback(null, `${Date.now()}-${safeOriginal || "upload.bin"}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024, files: 1 },
});
const app = express();

// single("file")必须与浏览器表单字段名一致，并且一次只接收一个文件。
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "请选择文件" });
  res.json({
    message: "上传成功",
    originalName: req.file.originalname,
    savedName: req.file.filename,
    bytes: req.file.size,
  });
});

app.get("/health", (req, res) => res.json({ healthy: true }));

// 将Multer的大小、数量等校验错误转换成清晰的JSON响应。
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError)
    return res.status(400).json({ error: error.code, message: error.message });
  console.error(error);
  res.status(500).json({ error: "UPLOAD_FAILED" });
});

app.listen(3400, "127.0.0.1", () =>
  console.log("Upload server listening on http://127.0.0.1:3400"),
);
