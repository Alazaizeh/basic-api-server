"use strict";

const express = require("express");
const router = express.Router();
const { Food } = require("../models/index");

router.get("/food", getAllFood);
router.get("/food/:id", getOneFood);
router.post("/food", createFood);
router.delete("/food/:id", deleteFood);
router.put("/food/:id", updateFood);
async function getAllFood(req, res) {
  let food = await Food.getAll();
  res.status(200).json(food);
}

async function getOneFood(req, res) {
  const id = parseInt(req.params.id);

  let food = await Food.get(id);
  res.status(200).json(food);
}

async function createFood(req, res) {
  let foodBody = req.body;
  let food = await Food.create(foodBody);
  res.status(201).json(food);
}

async function deleteFood(req, res) {
  const id = parseInt(req.params.id);

  let food = await Food.delete(id);
  res.status(200).json(food);
}

async function updateFood(req, res) {
  const id = parseInt(req.params.id);
  let food = await Food.update(id, req.body);
  res.status(200).json(food);
}
module.exports = router;
