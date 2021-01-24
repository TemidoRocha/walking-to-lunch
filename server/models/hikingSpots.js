'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  coordinates: {
    type: [Number],
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  typology: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  distance: {
    type: Number,
    required: true,
    min: [0],
  },
  measure: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  duration: {
    type: [String],
  },
  dificulty: {
    type: String,
    lowercase: true,
    enum: ['low', 'medium', 'high', 'hardcore'],
    trim: true,
  },
  searchWords: {
    type: [String],
  },
  url: {
    type: String,
  },
  operator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('HikingSpots', schema);
