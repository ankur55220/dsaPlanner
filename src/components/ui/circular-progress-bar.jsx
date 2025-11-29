export function CircularProgress({ size = 40, progress = 0 }) {
  const radius = size / 2 - 4;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="transform -rotate-90"
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#E2E8F0" /* slate-200 */
        strokeWidth="6"
        fill="none"
      />

      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="var(--color-primary)"
        strokeWidth="6"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-500"
      />
    </svg>
  );
}
