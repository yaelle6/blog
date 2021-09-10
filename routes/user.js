const userRoute = require('express').Router();
const mysql = require('mysql');
const db = require('../db');

userRoute.post('/signin', (req, res) => {});
userRoute.post('/login', (req, res) => {});
userRoute.get('/me', (req, res) => {});
userRoute.patch('/me', (req, res) => {});

module.exports = userRoute;
