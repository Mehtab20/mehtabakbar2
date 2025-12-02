export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold mb-4">Mehtab Akbar</h1>
      <h2 className="text-xl text-gray-300 mb-8">
        Software Engineer • Web Developer • AI Enthusiast
      </h2>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </div>
            {/* About Section */}
      <section id="about" className="mt-20 max-w-2xl text-center">
        <h3 className="text-4xl font-bold mb-4">About Me</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m Mehtab Akbar, a passionate Software Engineering student and
          a growing developer who loves building modern web applications,
          exploring AI technologies, and creating digital solutions that truly
          make an impact.  
          <br />  
          With experience in web development, app development, and academic
          projects like Hostel Expense Tracker & AI Medical Referral System,
          I aim to become a top-level engineer in today’s advancing AI world.
        </p>
      </section>
      {/* Skills Section */}
      <section id="skills" className="mt-20 text-center">
        <h3 className="text-4xl font-bold mb-6">Technical Skills</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {/* Skill Cards */}
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Flutter",
            "Dart",
            "C#",
            "MySQL",
            "Git & GitHub"
          ].map((skill) => (
            <div
              key={skill}
              className="border border-gray-700 rounded-xl py-4 px-4 bg-gray-900/60 hover:bg-gray-800 transition shadow-md"
            >
              <p className="text-white font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="mt-24 text-center px-4">
        <h3 className="text-4xl font-bold mb-10">Projects</h3>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Project 1 */}
          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 hover:bg-gray-800 transition shadow-lg">
            <h4 className="text-2xl font-bold mb-3">Hostel Expense Tracker</h4>
            <p className="text-gray-300 mb-4">
              A C# WinForms-based application designed to help hostel students
              track expenses, manage transactions, and visually analyze their 
              spending patterns.
            </p>
            <a
              href="#"
              className="inline-block mt-2 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              View Details
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 hover:bg-gray-800 transition shadow-lg">
            <h4 className="text-2xl font-bold mb-3">AI Medical Referral Agent (FYP)</h4>
            <p className="text-gray-300 mb-4">
              A machine learning-powered system that analyzes symptoms and 
              recommends the correct medical specialist using intelligent models.
            </p>
            <a
              href="#"
              className="inline-block mt-2 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              View Details
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="mt-24 text-center px-4 mb-20">
        <h3 className="text-4xl font-bold mb-6">Contact Me</h3>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          If you want to collaborate, hire me for a project, or just talk about tech —
          feel free to reach out anytime.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:mehtabakbar@example.com"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Send Email
          </a>

          <a
            href="https://wa.me/923000000000"
            target="_blank"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            WhatsApp Me
          </a>
        </div>
      </section>

    </main>
  );
}
