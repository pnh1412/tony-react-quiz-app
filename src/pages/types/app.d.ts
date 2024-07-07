export interface AppState {
  category: string;
  amount:  number;
  difficulty: string;
  type: string;
  score: number;
}

export type IRootState = {
  app: AppState
}