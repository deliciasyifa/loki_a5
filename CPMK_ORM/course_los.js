const express = require("express");
const router = express.Router();
const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost/loki");

sequelize.define('/course_los', {

    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    course_plan_id:{
        type: DataTypes.STRING,
        allowNull: false
    },
    type:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    code:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    parent_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at:{
        type: DataTypes.DATE,
        allowNull: false
    },
    },

    {
        tableName: "course_los",
        timestamps: false,
    }
);


module.exports = router;