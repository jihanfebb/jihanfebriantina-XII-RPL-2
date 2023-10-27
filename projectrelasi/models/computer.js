import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes}=Sequelize;

const Computer=db.define('computer',{ 
    nama_computer:DataTypes.STRING
},{
    freezeTabelName:True
});



export default computer;
