const {usersModel} = require("../models");
const { handleHttpError } = require("../utils/handleError");
const {matchedData} = require("express-validator")

// GET data base list 
const getItems = async (req, res) => {
    try
    {
        const data = await usersModel.find({});
        res.send({data})
    }
    catch(e)
    {
        handleHttpError(res,'ERROR_LIST_ITEMS')
    }
    
};


// GET DETail

const getItem = async (req, res) => {
    try
    {
        req = matchedData(req);
        const {id} =req;
        const data = await usersModel.findById(id);
        res.send({data})
    }
    catch(e)
    {
        handleHttpError(res,'ERROR_GET_ITEM')
    };
};


// GET RECORD
const createItem = async (req,res)=>{
    try
    {
        const body = matchedData(req)
        const data = await usersModel.create(body);
        res.send({data});
    }
    catch(e)
    {
        handleHttpError(res,'ERROR_CREATE_ITEMS')
    }
};


// DELETE RECORD

const deleteItem = async (req, res) => {
    try
    {
        req = matchedData(req);
        const {id} =req;
        const data = await usersModel.deleteOne({_id:id});
        res.send({data})
    }
    catch(e)
    {
        handleHttpError(res,'ERROR_DELETE_ITEM')
    };
};

module.exports = {getItems,getItem,createItem, deleteItem}