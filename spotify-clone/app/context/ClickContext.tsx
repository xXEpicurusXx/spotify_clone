// context/ClickContext.tsx
import { createContext, useContext, ReactNode } from "react";
import { Song } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";

interface ClickContextType {
  handleClick: (id: string) => void;
}

const ClickContext = createContext<ClickContextType | undefined>(undefined);

export const ClickProvider: React.FC<{
  children: ReactNode;
  songs: Song[];
}> = ({ children, songs }) => {
  const onPlay = useOnPlay(songs);

  const handleClick = (id: string) => {
    onPlay(id);
  };

  return (
    <ClickContext.Provider value={{ handleClick }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = () => {
  const context = useContext(ClickContext);
  if (!context) {
    throw new Error("useClick must be used within a ClickProvider");
  }
  return context;
};
