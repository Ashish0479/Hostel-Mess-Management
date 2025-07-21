// scripts/seedMenu.js
const mongoose = require('mongoose');
const Menu = require('../schem/menuSchema');
const menuData = require('./menuData.json');

async function seed() {
  await mongoose.connect('mongodb+srv://vpashish2016:lSHSpoPF3aX7SVQI@cluster0.iydnt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  await Menu.deleteMany({});
  await Menu.insertMany(menuData);
  console.log("Fixed Menu seeded ✅");
  process.exit();
}

seed();
