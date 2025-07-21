const Menu = require('../../schem/menuSchema');
const TodayMenu = require('../schema/todayMenuSchema');


async function getFixedMenu() {
  return await Menu.find({});
}

async function getTodayMenu(date) {
  return await TodayMenu.findOne({ date });
}

async function saveOrUpdateTodayMenu(date, data) {
  const existing = await TodayMenu.findOne({ date });

  if (existing) {
    Object.assign(existing, data);
    return await existing.save();
  } else {
    return await TodayMenu.create({ date, ...data });
  }
}

module.exports = {
  getFixedMenu,
  getTodayMenu,
  saveOrUpdateTodayMenu
};
