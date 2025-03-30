import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch

export const useBookedSessionsDispatch: DispatchFunction = useDispatch; // no need to recreate those hooks for each slice. can be called useAppDispatch etc.
export const useBookedSessionsSelector: TypedUseSelectorHook<RootState> = useSelector