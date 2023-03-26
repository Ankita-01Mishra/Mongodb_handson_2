const mongoClient=require("../database/connection")
const studentEnrollment=async(req,res)=>{
    const studentData=req.body;
    try{
        const result=await mongoClient.insertToDB(studentData)
        console.log('The result of database operation ->',result);
        return res.status(200).send(result);  
    }catch(error){
        console.log(error);
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const getStudentData= async(req,res)=>{
    const queryParams=req.query
    // const query={cgpa:{$eq: +queryParams.cgpa}}
    // console.log(query);
    console.log(queryParams); 
    try{
        const result=await mongoClient.findInDb(queryParams)
        console.log('The result of database operation ->',result);
        return res.status(200).send(result);  
    }catch(error){
        console.log(error);
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const updateStudentData= async(req,res)=>{
    const updateData=req.body
    const filter=updateData.filter;
    const value={$set:updateData.value}
    console.log(filter);
    console.log(value);
    try{
        const result=await mongoClient.updateInDb(filter,value)
        console.log('The result of database operation ->',result);
        return res.status(200).send(result);  
    }catch(error){
        console.log(error);
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

const deleteStudentData= async(req,res)=>{
    const condition=req.query;
    console.log(condition);
    try{
        const result=await mongoClient.deleteInDb(condition)
        console.log('The result of database operation ->',result);
        return res.status(200).send(result);  
    }catch(error){
        console.log(error);
        return res.status(500).send({message:`something went wrong while performing db operation ${error}`})
    }
}

module.exports={
    studentEnrollment,getStudentData,updateStudentData,deleteStudentData
}