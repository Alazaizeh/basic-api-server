"use strict";

const express = require("express");
const router = express.Router();
const { Clothes } = require("../models/index");

router.get("/clothes", getAllClothes);
router.get("/clothes/:id", getOneClothes);
router.post("/clothes", createClothes);
router.delete("/clothes/:id", deleteClothes);
router.put("/clothes/:id", updateClothes);

async function getAllClothes(req, res) {
  let clothe = await Clothes.getAll();
  res.status(200).json(clothe);
}

async function createClothes(req, res) {
  let clothe = req.body;
  let clothes = await Clothes.create(clothe);
  res.status(201).json(clothes);
}

async function getOneClothes(req, res) {
  const id = parseInt(req.params.id);

  let clothe = await Clothes.get(id);
  res.status(200).json(clothe);
}

async function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  let clothe = await Clothes.update(id, req.body);
  res.status(200).json(clothe);
}
async function deleteClothes(req, res) {
  const id = parseInt(req.params.id);

  let clothe = await Clothes.delete(id);
  res.status(200).json(clothe);
}

module.exports = router;
