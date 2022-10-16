export interface TodoType {
  categoryId: number|null;
  categoryName: string|null;
  endDate: string;
  goalId: number;
  goalName: string;
  id: number;
  importance: number;
  isDone: boolean;
  startDate: string;
  text: string;
}