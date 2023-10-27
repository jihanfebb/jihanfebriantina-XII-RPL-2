import {sequlize} from "sequelize";
import db from "../config/database.js";
import User from "./user.js";
import Project from "./project.js";

const {DataTypes}=sequlize;

const Dapartement=db.define('dapartement',{
    dapartement_head:DataTypes.STRING,
    dapartement_description:DataTypes.STRING
},{
    freezeTabelName:true
});

Dapartement.hasMany(User,{foreignkey:'dapartement_id'});
User.belongsTo(Dapartement,{foreignkey:'dapatrement_id'});




export default Dapartement;