import { Sequelize } from "sequelize";
import db from "../config/database";
import Computer from "./computer.js";

const{DataTypes}=Sequelize;

const User=db.define('user',{
    nama:DataTypes.STRING,
    nik:DataTypes.STRING
},{
    frezeeTableName:true
});

User.hasOne(Computer,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
});
Computer.belongsTo(User,{foreignKey:'user_id'});

export default User;