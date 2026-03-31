
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { locationService, Address } from '@/services/locationService';

interface LocationContextType {
  cep: string;
  address: Address | null;
  city: string;
  state: string;
  isLoading: boolean;
  updateCep: (newCep: string) => Promise<boolean>;
  detectAndSetLocation: () => Promise<void>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [cep, setCep] = useState<string>(() => localStorage.getItem('multideal_cep') || '01234-567');
  const [address, setAddress] = useState<Address | null>(null);
  const [city, setCity] = useState<string>('São Paulo');
  const [state, setState] = useState<string>('SP');
  const [isLoading, setIsLoading] = useState(false);

  const updateCep = useCallback(async (newCep: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const fullAddress = await locationService.getAddressByCep(newCep);
      if (fullAddress) {
        setAddress(fullAddress);
        setCep(fullAddress.cep);
        setCity(fullAddress.city);
        setState(fullAddress.state);
        localStorage.setItem('multideal_cep', fullAddress.cep);
        return true;
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const detectAndSetLocation = useCallback(async () => {
    setIsLoading(true);
    try {
      const loc = await locationService.detectLocation();
      if (loc) {
        setCity(loc.city);
        setState(loc.state);
        if (loc.cep) {
          const sanitized = loc.cep.replace(/\D/g, '');
          if (sanitized.length === 8) {
            updateCep(sanitized);
          }
        }
      }
    } finally {
      setIsLoading(false);
    }
  }, [updateCep]);

  // Carregar endereço inicial ou detectar automaticamente
  useEffect(() => {
    const savedCep = localStorage.getItem('multideal_cep');
    if (savedCep) {
      updateCep(savedCep);
    } else {
      detectAndSetLocation();
    }
  }, [updateCep, detectAndSetLocation]);

  return (
    <LocationContext.Provider value={{
      cep,
      address,
      city,
      state,
      isLoading,
      updateCep,
      detectAndSetLocation
    }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
