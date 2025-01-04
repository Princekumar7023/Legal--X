"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
export default function ThemeTogglebutton({
  className,
}: {
  className?: string;
}) {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size="icon"
      className={cn("rounded-full bg-background/30", className)}
      variant="outline"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <Sun
        className="size-5 scale-100 transition-all dark:scale-0"
        color="#F9802D"
      />
      <Moon className="absolute size-5 scale-0 transition-all dark:scale-100" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
