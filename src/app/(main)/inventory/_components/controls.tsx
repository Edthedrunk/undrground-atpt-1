"use client";

import { Button } from "@/components/ui/button";
import { useBuilderContext } from "./builder-context";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  // CheckCircle,
  ImageIcon,
  Undo2,
} from "lucide-react";

const Controls = () => {
  const { editMode } = useBuilderContext();

  return editMode ? <EditMode /> : <ViewMode />;
};

const EditMode = () => {
  const { renderRef, setEditMode, resetLinkOrder, nextLink, prevLink } =
    useBuilderContext();

  const downloadImage = () => {
    const link = document.createElement("a");

    if (!renderRef.current) {
      return;
    }

    link.download = "blokchain.png";
    link.href = renderRef.current
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    link.target = "_blank";
    link.click();
    link.remove();
  };

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
        <Button onClick={() => setEditMode(!true)}>
          <span className="block sm:hidden">VIEW</span>
          <span className="hidden sm:block">VIEW MODE</span>
        </Button>
        <Button
          disabled={!renderRef.current}
          onClick={downloadImage}
          className="w-full sm:w-auto flex gap-2 items-center"
        >
          <ImageIcon className="size-5" />
          SNAP
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
