"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { fetchBirthdayData, BirthdayData } from "@/lib/api";

interface BirthdayDataState {
  data: BirthdayData | null;
  error: string | null;
}

const BirthdayDataContext = createContext<BirthdayDataState | null>(null);

export function BirthdayDataProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BirthdayDataState>({ data: null, error: null });

  useEffect(() => {
    fetchBirthdayData()
      .then((data) => setState({ data, error: null }))
      .catch((err) => setState({ data: null, error: err.message }));
  }, []);

  return <BirthdayDataContext.Provider value={state}>{children}</BirthdayDataContext.Provider>;
}

export function useBirthdayDataState(): BirthdayDataState {
  const ctx = useContext(BirthdayDataContext);
  if (!ctx) {
    throw new Error("useBirthdayDataState must be used within a BirthdayDataProvider");
  }
  return ctx;
}

export function useBirthdayData(): BirthdayData {
  const { data } = useBirthdayDataState();
  if (!data) {
    throw new Error("useBirthdayData called before data finished loading");
  }
  return data;
}
