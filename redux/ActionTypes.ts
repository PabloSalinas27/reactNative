export const StateBase: ConstBase = {
  isLoading: false,
} as const;

type ConstBase = {
  isLoading: boolean;
  errMess?: string;
};
