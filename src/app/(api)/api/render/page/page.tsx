import Canvas from "./_components/canvas";

export default function Page({
  searchParams,
}: {
  searchParams: { seed: string };
}) {
  const seed = searchParams.seed || undefined;

  if (!seed || seed.length !== 42) return null;

  return (
    <div className="" id="canvas">
      <Canvas seed={seed} />
    </div>
  );
}
