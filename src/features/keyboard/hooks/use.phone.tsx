import { useState } from "react";

export type UsePhonenumberStructure = ReturnType<typeof usePhone>;
export function usePhone() {
  const initialState: string = "";
  const [phoneNumber, setPhoneNumber] = useState(initialState);

  const handlerClick = (singlePhoneNumber: string) => {
    setPhoneNumber(phoneNumber + singlePhoneNumber);
  };

  const handlerClickDelete = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  return {
    phoneNumber,
    handlerClick,
    handlerClickDelete,
  };
}
