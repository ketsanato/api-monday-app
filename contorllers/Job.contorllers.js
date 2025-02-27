
const Model = require("../models/Job.models");



module.exports.create=async (req,res,next)=>{
const form = req.body;


const data = {
    JobID:form.JobID,
    JobName:form.JobName,
    created_date:new Date()


}

Model.create(data,err=>{

    if(!err){
        console.log("Save");
        res.json({
            status:true,
            message:"Saved"


        })
    }else{
        console.log("error ");

        res.json({
            status:false,
            message:err


        })
    }
})
}
module.exports.read1=async (req,res,next)=>{

    Model.aggregate([
        {
          $lookup:
            {
              from: "District",
              localField: "DistrictID",
              foreignField: "_id",
              as: "DistrictName"
            }
       },
    ]).exec((err,data)=>{

    if(!err){

        res.json({
            status:true, 
            message:"selete all data ",
        data:data
    })
    }else{


        console.log("error");
        res.json({
            status:false,
        message:err
    })
    }
  });
        
    }

module.exports.read=async (req,res,next)=>{
    
    Model.find().exec((err,data)=>{
    if(!err){

        res.json({
            status:true, 
            message:"selete all data ",
        data:data
    })
    }else{


        console.log("error");
        res.json({
            status:false,
        message:err
    })
    }
  });
        
    }

    module.exports.update=async (req,res,next)=>{
        const form = req.body;
        const data = {
            JobID:form.JobID,
            JobName:form.JobName,
                        updated_date:new Date()

        }        
        console.log(form);
        Model.findByIdAndUpdate(form._id,data,{useFindAndModify:false}).exec((err,data)=>{

            if(!err){
        console.log("Updatwe Sucess  ");

                res.json({
                    status:true,
                message:"Update Sucess !",
                data:data
                
                })
      
            }else{
                console.log("error");

          res.json({
                    status:false,
                message:err})


            }
        })



    }


    
    module.exports.delete=async (req,res,next)=>{

        const form = req.body; 
   
        
        Model.findByIdAndDelete(form._id,{useFindAndModify:false}).exec((err)=>{

            if(!err){
        console.log("Delete Sucess  ");

                res.json({
                    status:true,
                message:"Delete Sucess !",
           
                });
      
            }else{
                console.log(" Delete error");

          res.json({
                    status:false,
                message:err});


            }
        })



    }