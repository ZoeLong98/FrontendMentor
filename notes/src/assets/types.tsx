export interface FormState {
  message: string;
  errors: { [key: string]: string };
}
export interface FormState_Simple {
  message: string;
}
export interface Note {
  id: string;
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
}
