import { cn } from "../../lib/utils"
import * as React from "react";

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium",
        "bg-primary text-white hover:bg-primary-light",
        "transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}
