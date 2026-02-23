import Button from "./Button";
import { Github, Mail, Linkedin, ChevronDown, Download } from "lucide-react";
import AnimatedBorderButton from "./AnimatedBorderButton";

const skills = [
  "React",
  "Rails",
  "Express.js",
  "Node.js",
  "PostgresSQL",
  "MongoDB",
  "Postman",
  "Stripe",
  "Render",
  "Redis",
  "Clerk",
  "Cloudinary",
  "Tailwindcss",
  "Chakra",
  "Daisy UI",
  "Git",
  "Github",
];

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-32 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" />
      </div>

      {/* GREEN DOTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - TEXT CONTENT */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-prinmary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-100" />
                Full Stack ● Software Developer
              </span>
            </div>

            {/* HEADLINE */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                Building <span className="text-primary glow-text">digital</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  Solutions.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg text-balance animate-fade-in animation-delay-300">
                With over a decade in finance, I bring a unique combination of
                analytical thinking and logic-driven problem-solving to software
                development. Currently transitioning to full stack software
                development, I design and build full stack web applications that
                deliver intuitive user experiences and efficient, scalable
                functionality.
              </p>
            </div>

            {/* CALL TO ACTION */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <Button
                size="lg"
                onClick={() => {
                  // Scroll to the element with id="contact"
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Me <Mail className="w-5 h-5 cursor-pointer" />
              </Button>

              {/* ANIMATED SVG BORDER */}
              <AnimatedBorderButton>
                <Download className="w-5 h-5" /> Download CV
              </AnimatedBorderButton>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/AndrewASUS",
                  target: "_blank",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/andrew-walton-859a70336",
                  target: "_blank",
                },
              ].map((social, index) => (
                <a
                  href={social.href}
                  key={index}
                  target={social.target}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* RIGHT COLUMN - PROFILE IMAGE */}

          <div className="relative animate-fade-in animation-delay-300">
            {/* PROFILE IMAGE */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via transparent to-primary/1- blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Andrew Walton"
                  className="w-full object-cover rounded-2xl"
                />

                {/* FLOATING BADGE */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-sm font-medium">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-20 animate-fade-in animtion-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary/75 transition-colors"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
