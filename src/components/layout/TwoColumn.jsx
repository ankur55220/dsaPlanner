export function TwoColumn({ left, right }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-12">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
