const menuRepo = require('../repository/menuRepository');


async function fetchFixedMenu() {
  return await menuRepo.getFixedMenu();
}

async function fetchTodayMenu() {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0]; //  "2025-07-20"

  const todayOverride = await menuRepo.getTodayMenu(dateStr);

  if (todayOverride) return todayOverride;

  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' }); // "Monday"
  const weekly = await menuRepo.getFixedMenu();
  return weekly.find(m => m.day === dayName);
}

// Save or update today's menu (manager only)
async function updateTodayMenu(data) {
  const { date, breakfast, lunch, dinner } = data;

  if (!date || !breakfast || !lunch || !dinner) {
    throw new Error("All fields (date, breakfast, lunch, dinner) are required.");
  }

  return await menuRepo.saveOrUpdateTodayMenu(date, { breakfast, lunch, dinner });
}

module.exports = {
  fetchFixedMenu,
  fetchTodayMenu,
  updateTodayMenu
};
