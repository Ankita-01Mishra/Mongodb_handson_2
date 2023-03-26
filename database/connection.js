const {MongoClient}=require('mongodb')

const url="mongodb://127.0.0.1:27017"
const client=new MongoClient(url);

const insertToDB=async (data) =>{
    try{
    const connectionRes=await client.connect(); //making db connection
    console.log(connectionRes);
    const database=client.db("student"); //Define database
    const collection=database.collection("information"); //Define collection
   const dbResponse=await collection.insertOne(data)
    await client.close(); //Closing the connection
    return dbResponse;
    }catch(error){
        return error.message
    }
}

const findInDb= async(query)=>{
  try{
    const database=client.db("student");
    const collection=database.collection("information");
    await client.connect()
    const dbResponse=await collection.find(query).toArray()
    await client.close(); //Closing the connection
    return dbResponse;
  }catch(error){
    return error.message
  }
}

const updateInDb= async(filteredCond,value)=>{
  try{
    const database=client.db("Human_Resource");
    const collection=database.collection("employee");
    await client.connect()
    const dbResponse=await collection.updateOne(filteredCond,value)
    await client.close(); //Closing the connection
    return dbResponse;
  }catch(error){
    return error.message
  }
}

const deleteInDb= async(filteredCond)=>{
    const database=client.db("student");
    const collection=database.collection("information");
    await client.connect()
    const dbResponse=await collection.deleteOne(filteredCond)
    await client.close(); //Closing the connection
    return dbResponse;
}


module.exports={
    insertToDB,findInDb,updateInDb,deleteInDb
}