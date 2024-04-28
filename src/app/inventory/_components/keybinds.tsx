"use client";

import { useBuilderContext } from "./builder-context";

const Keybinds = () => {
  const { editMode } = useBuilderContext();

  // correct icon for os
  const isMac =
    typeof navigator !== "undefined" &&
    /Mac|iPod|iPhone|iPad/.test(navigator.platform);

  if (!editMode) return null;

  return (
    <div className="gap-1 top-0 left-0 p-4 absolute flex flex-col">
      <div className="text-sm font-mono text-muted-foreground flex items-center gap-2">
        Fill
        <kbd className="text-forground border-forground bg-secondary pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs border-foreground">
            {isMac ? "⌘" : "Ctrl"}
          </span>
          Shift Click
        </kbd>
      </div>
      <div className="text-sm font-mono text-muted-foreground flex items-center gap-2">
        Next
        <kbd className="text-forground border-forground bg-secondary pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs border-foreground">
            {isMac ? "⌘" : "Ctrl"}
          </span>
          {`<`}
        </kbd>
      </div>
      <div className="text-sm font-mono text-muted-foreground flex items-center gap-2">
        Prev
        <kbd className="text-forground border-forground bg-secondary pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs border-foreground">
            {/* right arrow */}
            {isMac ? "⌘" : "Ctrl"}
          </span>
          {`>`}
        </kbd>
      </div>
    </div>
  );
};

export { Keybinds };
