const multer=require("multer")
  
 const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "Public/uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
 })

 const upload=multer({storage:storage})

 const fileupload=upload.fields([
    { name: 'document', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 },
    { name: 'video', maxCount: 1 }
 ])

 module.exports=fileupload