import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

// Create new admission
router.post('/admissions', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      gender,
      address,
      course,
      previousSchool,
      previousGrade
    } = req.body;

    const [result] = await pool.query(
      `INSERT INTO admissions (
        firstName,
        lastName,
        email,
        phone,
        dateOfBirth,
        gender,
        address,
        course,
        previousSchool,
        previousGrade,
        status,
        applicationDate
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', NOW())`,
      [
        firstName,
        lastName,
        email,
        phone,
        dateOfBirth,
        gender,
        address,
        course,
        previousSchool,
        previousGrade
      ]
    );

    res.status(201).json({
      id: result.insertId,
      status: 'pending',
      message: 'Application submitted successfully'
    });
  } catch (error) {
    console.error('Error creating admission:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Get all admissions
router.get('/admissions', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM admissions ORDER BY applicationDate DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching admissions:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// Update admission status
router.patch('/admissions/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await pool.query(
      'UPDATE admissions SET status = ? WHERE id = ?',
      [status, id]
    );

    res.json({ message: 'Status updated successfully' });
  } catch (error) {
    console.error('Error updating admission status:', error);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

export default router;