import Link from "next/link";

export default function SuccessStoryCard({ story }) {
  const { student, primaryOutcome, strategicFocus, slug } = story;

  const studentLabel = `${student.firstName} ${student.lastInitial} — ${student.highSchoolType}, ${student.region}`;
  const strategicDescriptor = strategicFocus[0];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl px-6 py-7 flex flex-col gap-4">
      <div>
        <p className="text-2xl font-bold text-gray-900 leading-snug">
          {primaryOutcome.school}
        </p>
        <p className="mt-1 text-sm text-gray-500">{primaryOutcome.program}</p>
      </div>

      <p className="text-sm text-gray-600">{studentLabel}</p>

      <p className="text-sm text-gray-700 leading-relaxed">{strategicDescriptor}</p>

      {primaryOutcome.scholarship && (
        <span className="inline-block self-start text-xs font-medium text-red-800 bg-red-50 border border-red-100 rounded-full px-3 py-1">
          {primaryOutcome.scholarship} {primaryOutcome.scholarshipType ? `— ${primaryOutcome.scholarshipType}` : ""}
        </span>
      )}

      <Link
        href={`/stories/${slug}`}
        className="mt-auto inline-flex items-center text-sm font-medium text-indigo-700 hover:text-indigo-900 transition-colors"
      >
        Read the Story
        <span aria-hidden="true" className="ml-1">→</span>
      </Link>
    </div>
  );
}
