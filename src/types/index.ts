export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface Note {
  _id: string;
  title: string;
  details: string;
  userId?: string;
  dateLabel: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface notesType {
  id?: string ;
  title: string;
  details: string;
  date: string;
}

export interface noteState {
  notes: notesType[];
}

// Auth Types
export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface AuthState {
  name: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
}