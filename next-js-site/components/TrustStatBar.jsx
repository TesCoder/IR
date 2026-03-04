export default function TrustStatBar({ stats }) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-8 py-8 px-6">
      {stats.map(({ icon, value, label, note }) => (
        <div key={label} className="flex flex-col items-center text-center min-w-[120px]">
          {icon && <span className="text-2xl mb-1" aria-hidden="true">{icon}</span>}
          <span className="text-2xl font-bold text-ivy-blue leading-tight">{value}</span>
          <span className="text-sm font-medium text-gray-800 mt-0.5">{label}</span>
          {note && (
            <span className="text-xs text-gray-500 mt-0.5">{note}</span>
          )}
        </div>
      ))}
    </div>
  );
}
