import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ChildClickedContextProps {
  childClicked: any;
  setChildClicked: (child: any) => void;
}

const ChildClickedContext = createContext<ChildClickedContextProps | undefined>(undefined);

export const useChildClicked = (): ChildClickedContextProps => {
  const context = useContext(ChildClickedContext);
  if (!context) {
    throw new Error('useChildClicked must be used within a ChildClickedProvider');
  }
  return context;
};

interface ChildClickedProviderProps {
  children: ReactNode;
}

export const ChildClickedProvider: React.FC<ChildClickedProviderProps> = ({ children }) => {
  const [childClicked, setChildClicked] = useState<any>(null);

  return (
    <ChildClickedContext.Provider value={{ childClicked, setChildClicked }}>
      {children}
    </ChildClickedContext.Provider>
  );
};
