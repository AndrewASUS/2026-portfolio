import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lighting-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring to ideas to life",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

function About() {
  return (
    <section id="about" className="p-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                One component at a a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software developer with over 2 years of
                experience building and hosting my full stack projects. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep understanding of modern full
                stack technologies.
              </p>
              <p>
                I specialise in React, Express.js, Node.js, and MongoDB,
                building everything from sleek frontend styling to building
                backend API's and CRUD functionality. My approach combines
                technical excellence with a keen eye for design and user
                experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                researching all things tech nerds like, or talking about
                knowledge with the developer community.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to work in the world of software development, as
                a developer collaborating with other tech nerds and learning
                continuously to create innovative, high-quality software."
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN -HIGHLIGHTS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <highlight.icon className="w-6 h6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
