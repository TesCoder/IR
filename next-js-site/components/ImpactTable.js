export default function ImpactTable({ data = [] }) {
  return (
    <div className="overflow-x-auto">
      <div className="max-h-[28rem] overflow-y-auto border border-gray-200 rounded-xl shadow-sm bg-white">
        <table className="w-full table-fixed">
          <thead className="bg-ivy-blue text-white text-sm sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">University</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Acceptance Rate</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Ivy Ready Acceptance Rate</th>
              <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Ivy Ready Impact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {data.map(({ name, acceptanceRate, ivyReadyRate, ivyReadyImpact }) => (
              <tr key={name} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-900 font-semibold break-words">{name}</td>
                <td className="px-4 py-3 text-gray-700 break-words">{acceptanceRate}</td>
                <td className="px-4 py-3 text-gray-700 break-words">{ivyReadyRate}</td>
                <td className="px-4 py-3 text-gray-700 break-words">{ivyReadyImpact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

