/* eslint-disable indent */
import { createContext, useState } from "react";

import { Message } from "types/Message";

const ALERT_TIME = 5000;

export const AlertContext = createContext<{
  text: string;
  type: Message;
  setAlert: (text: string, type: Message) => void;
}>({
  text: "",
  type: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAlert: () => {},
});

interface AlertProviderProps {
  children: React.ReactNode;
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  const setAlert = (text: string, type: Message) => {
    setText(text);
    setType(type);
    setTimeout(() => {
      setText("");
      setType("");
    }, ALERT_TIME);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        // @ts-ignore
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
