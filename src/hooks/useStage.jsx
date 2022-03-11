import { useState } from "react";
import { createStage } from "../components/gameHelpers";

export function useStage() {
  const [stage, setStage] = useState(createStage());
  return { stage, setStage };
}
