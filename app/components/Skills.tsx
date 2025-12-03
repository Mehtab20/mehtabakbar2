interface Skill {
  name: string;
  level: number;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 85 },
    { name: "Flutter", level: 70 },
    { name: "AI/ML", level: 60 },
  ];

  return (
    <section className="bg-black py-20">
      <h2 className="text-4xl text-center font-bold text-white mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-10">
        {skills.map((s, i) => (
          <div key={i} className="text-center text-white">
            <div className="relative w-28 h-28 mx-auto">
              <svg className="absolute inset-0" viewBox="0 0 36 36">
                <path
                  className="text-gray-700"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-red-500"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  strokeDasharray={`${s.level}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <p className="mt-4 text-xl">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
