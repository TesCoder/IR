export default function ImpactTable({ data = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-xl shadow-sm bg-white">
        <thead className="bg-ivy-blue text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide">University</th>
            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide">Baseline Acceptance Rate</th>
            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide">Ivy Ready Acceptance Rate</th>
            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide">Ivy Ready Impact</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map(({ name, acceptanceRate, ivyReadyRate, ivyReadyImpact }) => (
            <tr key={name} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-gray-900 font-semibold">{name}</td>
              <td className="px-4 py-3 text-gray-700">{acceptanceRate}</td>
              <td className="px-4 py-3 text-gray-700">{ivyReadyRate}</td>
              <td className="px-4 py-3 text-gray-700">{ivyReadyImpact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

