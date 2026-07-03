// Latar ambient "Coastal Light" (Design System §5.4) — panggung untuk permukaan kaca.
export default function AmbientBackground() {
  return (
    <div className="bg-ambient" aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
    </div>
  );
}
