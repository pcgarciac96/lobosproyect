import mongoose from 'mongoose';
export const startConnection = async () => {
    try{
        mongoose.set('strictQuery', true);
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/dataProjectDT"); 
        console.log(db.connection.name);
        console.log("conectado");
        
    }catch (error) {
        console.error("error",error);
        
    }
  
}