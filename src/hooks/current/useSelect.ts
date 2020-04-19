import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { selectCurrentItem, Item } from "../../moduels/currentItem";

export default function useSelect() {
  const dispath = useDispatch();

  return useCallback(
    ({ id, name, info, tag, src, beforeVideo, profile }: Item) =>
      dispath(
        selectCurrentItem({ id, name, info, tag, src, beforeVideo, profile })
      ),
    [dispath]
  );
}
