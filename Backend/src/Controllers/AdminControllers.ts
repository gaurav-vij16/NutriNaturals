import { Request, Response } from "express";
import { AdminModel } from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const addAdmin = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const existingAdmin = await AdminModel.findOne({ $or: [{ email }, { username }] });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new AdminModel({
      username,
      email,
      password: hashedPassword,
      role: "admin"
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin created successfully", admin: newAdmin });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

interface AdminLoginRequest {
  email: string;
  password: string;
}

export const adminLogin = async (req: Request<{}, {}, AdminLoginRequest>, res: Response) => {
  try {
    const { email, password } = req.body;

    const admin = await AdminModel.findOne({ email }).select("+password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { adminId: admin._id, role: admin.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    // Remove password before sending response
    const { password: _, ...adminData } = admin.toObject();
    res.status(200).json({ message: "Login successful", admin: adminData, token });

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};