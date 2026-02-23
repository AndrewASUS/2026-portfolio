import { Github, ArrowUpRight, ChevronDown } from "lucide-react";

const projects = [
  {
    title: "Netflix Clone",
    description:
      "A fully functional full-stack Netflix clone built with the MERN stack, featuring secure authentication and using an API from TMDB.",
    image: "netflix.svg",
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "jwt",
      "Tailwindcss",
      "DaisyUI",
      "axios",
    ],
    link: "https://mern-netflix-4kds.onrender.com",
    github: "https://github.com/AndrewASUS/mern-netflix",
  },
  {
    title: "Messenger",
    description:
      "A fully functional full-stack Netflix clone built with the MERN stack, featuring secure authentication and real time live updates.",
    image: "messenger.svg",
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "jwt",
      "Tailwindcss",
      "DaisyUI",
      "axios",
    ],
    link: "https://wizard-chat-app.onrender.com/",
    github: "https://github.com/AndrewASUS/wizard-chat-app",
  },
  {
    title: "E-commerce store",
    description:
      "A fully functional full-stack Netflix clone built with the MERN stack, featuring secure authentication and Stripe payments.",
    image: "online-store.svg",
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "jwt",
      "Tailwindcss",
      "DaisyUI",
      "axios",
      "Stripe",
    ],
    link: "https://mern-ecomm-store2.onrender.com/",
    github: "https://github.com/AndrewASUS/mern-ecomm-store2",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden min-h-screen flex flex-row justify-center items-center">
      {/* BG GLOW */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>
          <h2 className="text-xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
            My top three
            <span className="font-serif italic font-normal text-white">
              {" "}
              favourite projects.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A selection of my favourite projects that showcase my skills as a
            full stack developer.
          </p>
        </div>

        {/* PROJECTS CARD */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* OVERLAY LINKS */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5 lg:h-8 md: lg:w-8" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5 lg:h-8 md: lg:w-8" />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#contact"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary/75 transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
