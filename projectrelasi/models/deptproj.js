import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Dapartement from "./dapartement";
import Project from "./project.js";

const {DataTypes}=Sequelize;

const DeptProj=db.define('deptproj',{
},{
    frezeeTableName:true
},{
    timestamps: false
});

Dapartement.belongsToMany(Project, { through: DeptProj });
Project.belongsToMany(Dapartement, { through: DeptProj });

export default DeptProj;