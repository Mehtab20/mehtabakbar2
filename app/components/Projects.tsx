interface Project {
  title: string;
  desc: string;
  link: string;
  github: string;
  img: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "AI Referral Agent",
      desc: "ML-based medical specialist recommender.",
      link: "#",
      github: "#",
      img: "/project1.jpg"
    },
    {
      title: "Smart Hostel Expense Tracker",
      desc: "C# WinForms + MySQL-based expense manager.",
      link: "#",
      github: "#",
      img: "/project2.jpg"
    },
  ];

  return (
    <section id="projects" className="bg-black py-20">
      <h2 className="text-4xl text-center font-bold text-white mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10 px-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600/50 transition-all"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
            />

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all p-6 flex flex-col justify-end">
              <h3 className="text-red-500 text-2xl font-bold">{p.title}</h3>
              <p className="text-gray-300">{p.desc}</p>

              <div className="mt-4 flex gap-3">
                <a
                  href={p.link}
                  className="text-white px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  className="text-white px-4 py-2 border border-white/40 rounded-lg hover:bg-white hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
