/* eslint-disable indent */
import { createContext, useState } from "react";
import { MessageType } from "../types/Message";

const ALERT_TIME = 5000;

const AlertContext = createContext<{
  text: string;
  type: MessageType;
  setAlert: (text: string, type: MessageType) => void;
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

  const setAlert = (text: string, type: MessageType) => {
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

export default AlertContext;
