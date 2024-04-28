"use client";

import { Button } from "@/components/ui/button";
import { useBuilderContext } from "./builder-context";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  CheckCircle,
  Undo2,
} from "lucide-react";

const Controls = () => {
  const { editMode } = useBuilderContext();

  return editMode ? <EditMode /> : <ViewMode />;
};

const EditMode = () => {
  const { setEditMode, nextLink, prevLink, resetLinkOrder } =
    useBuilderContext();

  return (
    <div className="z-10 flex flex-col gap-2 items-center absolute bottom-4 left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-2">
        <Button onClick={nextLink}>
          <ArrowLeftCircle />
        </Button>
        <Button onClick={() => setEditMode(!true)}>EDIT MODE</Button>
        <Button onClick={prevLink}>
          <ArrowRightCircle />
        </Button>
      </div>
      <div className="flex gap-2">
        <Button className="flex gap-2 items-center" onClick={resetLinkOrder}>
          <Undo2 className="size-5" />
          RESET
        </Button>
        <Button
          disabled
          className="flex gap-2 items-center"
          onClick={resetLinkOrder}
        >
          <CheckCircle className="size-5" />
          MINT
        </Button>
      </div>
    </div>
  );
};

const ViewMode = () => {
  const { setEditMode } = useBuilderContext();
  return (
    <div className="z-10 flex gap-2 items-center absolute bottom-4 left-1/2 -translate-x-1/2">
      <Button onClick={() => setEditMode(!false)}>VIEW MODE</Button>
    </div>
  );
};

export { Controls };
