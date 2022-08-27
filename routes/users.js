const express = require ("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const {validatorGetItem, validatorCreateItem}=require("../validators/users")
const {getItems, getItem, createItem,  deleteItem}=require("../controllers/users");
// GET DETAIL ITEM
router.get("/:id",validatorGetItem,getItem);
// GET LIST
router.get("/",getItems)
//POST ITEM
router.post("/", validatorCreateItem, createItem);
module.exports=router;