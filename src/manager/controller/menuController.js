const menuService = require('../service/menuService');

async function getFixedMenuController(req, res) {
  try {
    const data = await menuService.fetchFixedMenu();
    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error fetching fixed menu', error: err });
  }
}

async function getTodayMenuController(req, res) {
  try {
    const data = await menuService.fetchTodayMenu();
    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error fetching today\'s menu', error: err });
  }
}

async function updateTodayMenuController(req, res) {
  try {
    const result = await menuService.updateTodayMenu(req.body);
    return res.status(200).json({ success: true, message: 'Today\'s menu updated', data: result });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
}

module.exports = {
  getFixedMenuController,
  getTodayMenuController,
  updateTodayMenuController
};
