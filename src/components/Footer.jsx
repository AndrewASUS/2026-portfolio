import { Github, Linkedin } from "lucide-react"


const socialLinks = [
  { icon: Github, href: "https://github.com/AndrewASUS", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/andrew-walton-859a70336", label: "LinkIn" }
]

// const footerLinks = [
//   { href: "#hero", label: "Home" },
//   { href: "#about", label: "About" },
//   { href: "#projects", label: "Projects" },
//   { href: "#contact", label: "Contact" }
// ]

function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LOGO & COPYRIGHT*/}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              AW<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Andrew Walton. All rights reserved.
            </p>
          </div>

          {/* LINKS */}
          {/* <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav> */}

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer