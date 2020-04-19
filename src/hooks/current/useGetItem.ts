import { useSelector } from "react-redux";
import { RootState } from "../../moduels";

export default function useGetItem() {
  const item = useSelector((state: RootState) => state.item);
  return item;
}
