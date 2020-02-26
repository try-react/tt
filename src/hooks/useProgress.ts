/**
 * 遷移中の progress
 */
import { progressService } from "~/state";
import { useService } from "@xstate/react";
import { useNProgress } from "@tanem/react-nprogress";

export const useProgress = () => {
  const { value } = useService(progressService)[0];

  return useNProgress({
    isAnimating: value === "transitioning",
  });
};
