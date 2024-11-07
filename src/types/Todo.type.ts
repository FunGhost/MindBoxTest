export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export enum FilterType {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  NOT_COMPLETED = "NOT_COMPLETED",
}
