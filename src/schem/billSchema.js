const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  month: {
    type: Number, // 1 to 12
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  totalPresent: {
    type: Number,
    default: 0
  },
  totalExtra: {
    type: Number,
    default: 0
  },
  totalGuestCharge: {
    type: Number,
    default: 0
  },
  fixedCharge: {
    type: Number,
    default: 620
  },
  grandTotal: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paymentMode: {
    type: String,
    enum: ['cash', 'online', 'upi', 'none'],
    default: 'none'
  },
  paymentDate: {
    type: Date
  },
  amountPaid: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

billSchema.index({ student: 1, month: 1, year: 1 }, { unique: true });

module.exports = mongoose.model('Bill', billSchema);
