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