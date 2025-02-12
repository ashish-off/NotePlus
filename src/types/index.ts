export interface notesType {
  id?: string ;
  title: string;
  details: string;
  date: string;
}

export interface noteState {
  notes: notesType[];
}