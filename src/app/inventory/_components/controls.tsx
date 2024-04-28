"use client";

import { Button } from "@/components/ui/button";
import { useBuilderContext } from "./builder-context";
import { CheckCircle, Undo2 } from "lucide-react";

const Controls = () => {
  const { editMode } = useBuilderContext();

  return editMode ? <EditMode /> : <ViewMode />;
};

const EditMode = () => {
  const { setEditMode, resetLinkOrder } = useBuilderContext();

  return (
    <div className="w-full px-4 z-10 flex gap-2 justify-center items-center absolute bottom-4 left-1/2 -translate-x-1/2">
      <Button className="w-full sm:w-auto flex gap-2 items-center" onClick={resetLinkOrder}>
        <Undo2 className="size-5" />
        RESET
      </Button>
      <Button onClick={() => setEditMode(!true)}>VIEW MODE</Button>
      <Button
        disabled
        className="w-full sm:w-auto flex gap-2 items-center"
        onClick={resetLinkOrder}
      >
        <CheckCircle className="size-5" />
        MINT
      </Button>
    </div>
  );
};

const ViewMode = () => {
  const { setEditMode } = useBuilderContext();
  return (
    <div className="z-10 flex gap-2 items-center absolute bottom-4 left-1/2 -translate-x-1/2">
      <Button onClick={() => setEditMode(!false)}>EDIT MODE</Button>
    </div>
  );
};

export { Controls };
