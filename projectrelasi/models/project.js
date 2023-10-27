import { Sequelize } from "sequelize";
import db from "../config/database.js";
// import Dapartement from "./dapartement.js";

const{DataTypes}=Sequelize;

const Project=db.define('project',{
    project_head:DataTypes.STRING,
    project_name:DataTypes.STRING,
    project_description:DataTypes.STRING
},{
    frezeeTableName:true
});

export default Project;