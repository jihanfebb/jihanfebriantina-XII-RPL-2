import express from "express";
import db from "./config/database";

import User from "./models/user";
import Computer from "./models/computer";
import Dapartement from "./models/dapartement";
import Project from "./models/project";
import DeptProj from "./models/deptproj";

const app=express();

try{
    await db.authenticate();
    console.log("database connected");
    Computer.sync();
    User.sync();
    Dapartement.sync();
    Project.sync();
    DeptProj.sync();
}catch(error){
    console.error(error);
}

app.listen(5000,()=>console.log('server up and running'));