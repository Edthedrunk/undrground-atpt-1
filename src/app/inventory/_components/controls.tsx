"use client";

import { Button } from "@/components/ui/button";
import { useBuilderContext } from "./builder-context";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  CheckCircle,
  Undo2,
} from "lucide-react";
import { useEffect } from "react";

const Controls = () => {
  const { editMode } = useBuilderContext();

  return editMode ? <EditMode /> : <ViewMode />;
};

const EditMode = () => {
  const { editMode, setEditMode, resetLinkOrder, nextLink, prevLink } =
    useBuilderContext();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && (e.metaKey || e.ctrlKey) && editMode) {
        e.preventDefault();
        prevLink();
      } else if (
        e.key === "ArrowLeft" &&
        (e.metaKey || e.ctrlKey) &&
        editMode
      ) {
        e.preventDefault();
        nextLink();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode]);

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center">
      <div className="flex sm:hidden w-full gap-2">
        <Button className="w-full" onClick={nextLink}>
          <ArrowLeftCircle className="mr-auto" />
        </Button>
        <Button className="w-full" onClick={prevLink}>
          <ArrowRightCircle className="ml-auto" />
        </Button>
      </div>
      <div className="flex w-full gap-2">
        <Button className="w-full hidden sm:block" onClick={nextLink}>
          <ArrowLeftCircle className="mr-auto" />
        </Button>
        <Button
          className="w-full sm:w-auto flex gap-2 items-center"
          onClick={() => resetLinkOrder()}
        >
          <Undo2 className="size-5" />
          RESET
        </Button>
        <Button onClick={() => setEditMode(!true)}>VIEW MODE</Button>
        <Button disabled className="w-full sm:w-auto flex gap-2 items-center">
          <CheckCircle className="size-5" />
          MINT
        </Button>
        <Button className="w-full hidden sm:block" onClick={prevLink}>
          <ArrowRightCircle className="ml-auto" />
        </Button>
      </div>
    </div>
  );
};

const ViewMode = () => {
  const { setEditMode } = useBuilderContext();
  return (
    <div className="w-full flex justify-center">
      <Button onClick={() => setEditMode(!false)}>EDIT MODE</Button>
    </div>
  );
};

export { Controls };
