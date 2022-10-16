export interface RetrospectCardProps {
    date: string;
    percentage: number;
    todoCount: number;
    didCount: number;
    text: string;
}

export interface Item {
  importance: number,
  context: string
}