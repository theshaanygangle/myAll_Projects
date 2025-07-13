import { request } from "express"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req,res)=> {
      const {name , email , password } = req.body;

      if (!name || !email || !password) {
            return res.json({
                  success : false,
                  message : 'Missing Credentials'
            })
      }
      try {
            const hashedPassword = await bcrypt.hash(password,10) // 10 signifies the encription level of password provided by the user
      } catch (error) {
            return res.json({
                  success : false,
                  message : error.message, //error.message will return error message
            })
      }
}