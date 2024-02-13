export interface IAction {
  type: "ADD_TRANSACTION" | "REMOVE_TRANSACTION" | "CLOSE_MODAL";
  payload?: any;
}

export interface ITransaction {
  id: number;
  date: Date;
  category: string;
  vendor: string;
  amount: number;
}

export interface IAppState {
  transactions: ITransaction[];
  balance: number;
  isModalOpened: boolean;
}
