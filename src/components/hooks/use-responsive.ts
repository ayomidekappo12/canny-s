// hooks/useResponsive.ts
import { useEffect, useState } from "react";

type BreakpointFlags = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
};

export function useResponsive(): BreakpointFlags {
  const [breakpoints, setBreakpoints] = useState<BreakpointFlags>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkBreakpoints = () => {
      const width = window.innerWidth;

      setBreakpoints({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024 && width < 1280,
        isLargeDesktop: width >= 1280,
      });
    };

    // Initial check
    checkBreakpoints();

    // Listen for resize
    window.addEventListener("resize", checkBreakpoints);

    return () => window.removeEventListener("resize", checkBreakpoints);
  }, []);

  return breakpoints;
}
