"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type FontSize = "medium" | "large" | "extra-large"

type ThemeContextType = {
  fontSize: FontSize
  adjustFontSize: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    if (typeof window !== "undefined") {
      const savedFontSize = localStorage.getItem("fontSize")
      return (savedFontSize && (savedFontSize === "medium" || savedFontSize === "large" || savedFontSize === "extra-large")
        ? savedFontSize
        : "medium") as FontSize
    }
    return "medium"
  })

  useEffect(() => {
    const root = window.document.documentElement
    // This is a simple way to handle it. In a real app, you might use CSS variables.
    if (fontSize === 'large') {
      root.style.fontSize = '18px';
    } else if (fontSize === 'extra-large') {
      root.style.fontSize = '20px';
    } else {
      root.style.fontSize = '16px';
    }
  }, [fontSize])

  const adjustFontSize = () => {
    const sizes: FontSize[] = ['medium', 'large', 'extra-large'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    const newSize = sizes[nextIndex];
    localStorage.setItem("fontSize", newSize)
    setFontSize(newSize)
  };

  const value: ThemeContextType = {
    fontSize,
    adjustFontSize,
  }

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
