function Navbar() {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur p-4 flex justify-between">
      <h1 className="font-bold">TechMinds</h1>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Abba</h1>
        <p className="mt-4 text-lg text-gray-400">
          Mechatronics Engineer + Software Developer
        </p>
      </section>

      {/* ABOUT */}
      <section className="p-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I build intelligent systems combining hardware and software.
          Passionate about robotics, automation, and scalable applications.
        </p>
      </section>

      {/* SKILLS */}
      <section className="p-10 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li>React</li>
          <li>Python</li>
          <li>C++</li>
          <li>Embedded Systems</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="p-10">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-5 rounded-xl">
            <h3 className="text-xl font-bold">PDF to Image Converter</h3>
            <p className="text-gray-400">Built with React + Node.js</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: gamaabba7@gmail.com</p>
      </section>

    </div>
  );
}