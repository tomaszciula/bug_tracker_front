import { BoardColumns, Data } from "@/constants/types";
import axios from "axios";
import { useEffect, useState } from "react";

// export const useDragAndDrop = (initialState: Data[]) => {
export const useDragAndDrop = (initialState: any) => {

  const [isDragging, setIsDragging] = useState(false);
  // const [listItems, setListItems] = useState<Data[]>(initialState)
  const [listItems, setListItems] = useState(initialState);

  // const updateBugEntityStatus = (card: any) => {
  //     axios.put(process.env.REACT_APP_API_URL + "/bug/update/status", card)
  // }
  useEffect(() => {
    console.log("Ze środka useEffect useDragAndDrop - listItems: ", listItems);
    setListItems(initialState);
  }, [listItems])

  const handleUpdateList = (id: number, status: BoardColumns) => {
    console.log("Ze środka handleUpdateList: ", id, status);
    console.log("ListItems wewnątrz handleUpdateList: ", listItems);

    let card = listItems.find((item) => item.id === id);
    console.log("card: ", card);

    if (card && card.status !== status) {
      card.status = status;
      console.log("handleUpdateList, nowy status: ", card.status);
      // updateBugEntityStatus(card);
      if (Array.isArray(listItems)) {
        setListItems((prev) => [
          card!,
          ...prev.filter((item) => item.id !== id),
        ]);
      }
    }
  };

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    listItems,
    handleUpdateList,
    handleDragging,
  };
};
