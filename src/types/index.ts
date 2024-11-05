export interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  grade: string;
  studentId: string;
  contactNumber: string;
  address?: string;
  guardianName?: string;
  guardianContact?: string;
  bloodGroup?: string;
}

export interface Program {
  id?: number;
  name: string;
  description?: string;
  duration?: string;
  fees: number;
}

export interface Payment {
  id?: number;
  studentId: number;
  programId: number;
  amount: number;
  paymentDate: string;
  paymentType: 'tuition' | 'exam' | 'other';
  status: 'pending' | 'completed' | 'failed';
  description?: string;
}

export interface Attendance {
  id?: number;
  studentId: number;
  programId: number;
  date: string;
  status: 'present' | 'absent' | 'late';
  notes?: string;
}

export interface Exam {
  id?: number;
  programId: number;
  name: string;
  date: string;
  totalMarks: number;
  passingMarks: number;
  description?: string;
}

export interface ExamResult {
  id?: number;
  examId: number;
  studentId: number;
  marksObtained: number;
  rank?: number;
  remarks?: string;
}

export interface FinancialTransaction {
  id?: number;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description?: string;
  date: string;
}