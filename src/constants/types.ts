export type BoardColumns = "To do" | "In progress" | "Testing" | "Done";
export interface Data {
  id: number;
  content: string;
  status: BoardColumns;
}
