export default function Header() {
  return (
    <div className="inline-grid gap-1 p-1">
      <h1 className="px-2 text-white text-4xl font-work-sans font-semibold">
        Create a Collection
      </h1>
      <p className="px-2 text-white font-space-mono text-xs">
        <span className="px-1 text-red-500">*</span>
        Required Fields
      </p>
    </div>
  );
}
