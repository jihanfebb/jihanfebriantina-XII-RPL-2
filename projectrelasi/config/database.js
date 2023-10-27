import { sequelize } from "sequelize"; 

const db=new Sequelize ('relasidb','root','',{
    host:"localhost",
    dialect:"mysql"
});

export default db;