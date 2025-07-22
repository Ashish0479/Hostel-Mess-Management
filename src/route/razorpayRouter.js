// route: /api/payment/order

const express = require('express');
const razorpay = require('../config/razorpay');
const Bill = require('../schem/billSchema');
const router = express.Router();

router.post('/order', async (req, res) => {
  try {
    const { amount, studentId, month, year } = req.body;

    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: `rcpt_${studentId}_${month}_${year}`,
    };

    const order = await razorpay.orders.create(options);
    return res.status(200).json({
      success: true,
      order,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Order creation failed" });
  }
});

module.exports = router;
