const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const nodemailer = require('nodemailer');
const conn = require('./connect/mongodb');

const serverless =require("serverless-http");

const multer  = require('multer')
const storage1 = multer.memoryStorage()
const upload1 = multer({ storage: storage1 }).single("EducationalInstitutionLogo");

const { v4: uuidv4 } = require('uuid');
const port = process.env.PORT;
const session = require('express-session');
const RedisStore = require('connect-redis');
app.use(express.urlencoded({
    extended: true
}));
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  genid:()=> uuidv4(),
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
  store:  RedisStore.session
}))

const cookieParseer=require('cookie-parser')





app.use(cookieParseer());

app.use(express.json());
app.use(cors());

const cookiesRouters = require('./routers/cookies.routers');
const userTypeRouters = require('./routers/usertype.routers');
const Section = require('./routers/Section.routers');
const usersRouters1 = require('./routers/users1.routers');
const departmentRouter = require('./routers/department.routers');
const employee_types = require('./routers/EmployeeTypes.routers');
const group = require('./routers/group.routers');
const holiday_types = require('./routers/holiday_types.routers');
const position = require('./routers/position.routers');
const Country = require('./routers/Country.routers');
const Provice = require('./routers/Provice.routers');
const District = require('./routers/District.routers');
const Village = require('./routers/Village.routers');
const TitleLao = require('./routers/TitleLao.routers');
const TitleEng = require('./routers/TitleEng.routers');
const Gender = require('./routers/Gender.routers');
const Religion = require('./routers/Religion.routers');
const Nationality = require('./routers/Nationality.routers');
const login = require('./routers/login.routers');
const EducationalInstitutionType = require('./routers/EducationalInstitutionType.routers');
const EducationalInstitutionDetail = require('./routers/EducationalInstitutionDetail.routers');
const SystemEduction = require('./routers/SystemEduction.routers');
const Eduction = require('./routers/Eduction.routers');
const CourseOfStudy = require('./routers/CourseOfStudy.routers');
const CourseOfSector = require('./routers/CourseOfSector.routers');
const EducationalDetail = require('./routers/EducationalDetail.routers');
const EducationalInstitution = require('./routers/EducationalInstitution.routers');
const FamilyStatus = require('./routers/FamilyStatus.routers');
const Person = require('./routers/Person.routers');
const Job = require('./routers/Job.routers');
const Family = require('./routers/Person.routers');
const Learner = require('./routers/Learner.routers');
const LearnerType = require('./routers/LearnerType.routers');
const Teacher = require('./routers/Teacher.routers');
const TeacherTitle = require('./routers/TeacherTitle.routers');
const TeacherPosition = require('./routers/TeacherPosition.routers');
const Firebase = require('./routers/Firebase.routers');
const SendOTPEmail = require('./routers/SendOTPEmail.routers');
const SendOTPPhoneNumber = require('./routers/SendOTPPhoneNumber.routers');
const Notification = require('./routers/Notification.routers');

const SendOTPPhoneNumberByFirebase = require('./routers/SendOTPPhoneNumberByFirebase.routers');
app.use("/api", SendOTPPhoneNumberByFirebase);

app.use("/api", Notification);

app.use("/api", SendOTPPhoneNumber);

app.use("/api", SendOTPEmail);
app.use("/api", Firebase);

app.use("/api", FamilyStatus);
app.use("/api", TeacherPosition);
app.use("/api", TeacherTitle);
app.use("/api", Teacher);
app.use("/api", LearnerType);
app.use("/api", Learner);
app.use("/api", Family);
app.use("/api", Job);
app.use("/api", Person);


app.use("/api", EducationalDetail);
app.use("/api",upload1, EducationalInstitution);

app.use("/api", CourseOfSector);
app.use("/api", CourseOfStudy);
app.use("/api", EducationalInstitutionType);
app.use("/api", Eduction);
app.use("/api", SystemEduction);
app.use("/api", cookiesRouters);
app.use("/api", userTypeRouters);
app.use("/api", EducationalInstitutionDetail);
app.use("/api", cookiesRouters);
app.use("/api", usersRouters1);
app.use("/api", departmentRouter);
app.use("/api", employee_types);
app.use("/api", group);
app.use("/api", holiday_types);
app.use("/api", position);
app.use("/api", Country);
app.use("/api", Provice);
app.use("/api", District);
app.use("/api", Village);
app.use("/api", TitleLao);
app.use("/api", TitleEng);
app.use("/api", Gender);
app.use("/api", Religion);
app.use("/api", Nationality);
app.use("/api", Section);
app.use("/api", login);


app.listen(port, () => {
    console.log('Server listenting on port' + port);
})
app.get('/', function(req, res){
  
  res.send("Run Server Monday");
  });




  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      
      cb(null, 'uploads/')
  
    },
    filename: function (req, file, cb) {
      
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      
      cb(null, file.fieldname + '-' + uniqueSuffix)
    
    }
  })
   app.post('/api/profile1', upload1, function (req, res, next) {
    console.log("Upload");
    
    upload1(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          console.log("// A Multer error occurred when uploading.");

          // A Multer error occurred when uploading.
        } else if (err) {
          console.log("// An unknown error occurred when uploading.");

          // An unknown error occurred when uploading.
        }
        console.log("Exit Function upload");
        // Everything went fine.
      })

      console.log("End");

     const file =  req.file;
     console.log(file);

     console.log(file.fieldname);




   })
  const upload = multer({ storage: storage })
  
  app.post('/api/profile', upload.single("avatar"), function (req, res, next) {

    const file =  req.file;
    const file1 =  req.body;

    console.log(file);
    console.log(file1);

    res.send("upload file success");

  })

  app.post('/api/photos/upload', upload.array('photos', 12), function (req, res, next) {
    const file =  req.file;

    
    console.log(file.fieldname);
    res.send("Run Server Monday");

      })
  
  const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  app.post('/api/cool-profile', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
  })
  

  exports.app = app;
