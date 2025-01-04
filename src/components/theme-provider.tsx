"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Toaster } from "./ui/sonner";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemedToaster() {
  const { theme } = useTheme();
  return (
    <Toaster
      richColors
      theme={theme as "light" | "dark" | "system" | undefined}
    />
  );
}