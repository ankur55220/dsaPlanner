import { motion as Motion } from "framer-motion";

export default function PatternProgressRing({ solved, total }) {
  const percentage =
    total > 0 ? Math.round((solved / total) * 100) : 0;

  return (
    <div className="relative w-28 h-28">
      {/* Background Circle */}
      <svg className="w-full h-full rotate-[-90deg]">
        <circle
          cx="56"
          cy="56"
          r="50"
          stroke="#334155"
          strokeWidth="10"
          fill="transparent"
        />
      </svg>

      {/* Animated Progress Bar */}
      <Motion.svg
        className="w-full h-full absolute top-0 left-0 rotate-[-90deg]"
      >
        <Motion.circle
          cx="56"
          cy="56"
          r="50"
          stroke="#818cf8"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={314}
          strokeDashoffset={314 - (314 * percentage) / 100}
          strokeLinecap="round"
          initial={{ strokeDashoffset: 314 }}
          animate={{ strokeDashoffset: 314 - (314 * percentage) / 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </Motion.svg>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-semibold text-indigo-300">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
