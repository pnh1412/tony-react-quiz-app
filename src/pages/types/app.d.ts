export interface AppState {
  category: string;
  amount:  number;
  difficulty: string;
  type: string;
}

export type IRootState = {
  app: AppState
}