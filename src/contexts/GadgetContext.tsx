import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Gadget, gadgets as initialGadgets } from '@/lib/gadgets';

interface GadgetContextType {
  gadgets: Gadget[];
  addGadget: (gadget: Omit<Gadget, 'id' | 'rating' | 'inStock'>) => void;
}

const GadgetContext = createContext<GadgetContextType | undefined>(undefined);

export const GadgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gadgets, setGadgets] = useState<Gadget[]>(initialGadgets);

  const addGadget = (gadget: Omit<Gadget, 'id' | 'rating' | 'inStock'>) => {
    const newGadget: Gadget = {
      ...gadget,
      id: String(gadgets.length + 1),
      rating: 4.5,
      inStock: true,
    };
    setGadgets(prev => [...prev, newGadget]);
  };

  return (
    <GadgetContext.Provider value={{ gadgets, addGadget }}>
      {children}
    </GadgetContext.Provider>
  );
};

export const useGadgets = (): GadgetContextType => {
  const context = useContext(GadgetContext);
  if (!context) {
    throw new Error('useGadgets must be used within a GadgetProvider');
  }
  return context;
};
