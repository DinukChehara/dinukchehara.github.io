import { Github, Instagram } from "lucide-react";
import DiscordIcon from "./icons/DiscordIcon";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[600px] h-[600px] rounded-full border border-primary/10 animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[450px] h-[450px] rounded-full border border-secondary/10 animate-[spin_30s_linear_infinite_reverse]" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-accent/10 animate-[spin_20s_linear_infinite]" />
      </div>

      <div className="text-center z-10">
        {/* Name with glow */}
        <h1 
          className="text-5xl md:text-7xl font-bold mb-4 glow-text animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Dinuk Chehara
        </h1>

        {/* Title */}
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-3 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Minecraft plugin developer
        </p>

        {/* Extended description */}
        <p 
          className="text-base text-muted-foreground/80 mb-8 max-w-md mx-auto animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Crafting server experiences with Java & Paper API, automating the world with Python
        </p>

        {/* Social icons */}
        <div 
          className="flex gap-6 justify-center mb-12 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a 
            href="https://github.com/DinukChehara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 glow-border"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.instagram.com/tomqnto/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 glow-border"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://discord.com/users/905732551518322718" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon p-3 rounded-full bg-card/50 border border-border hover:border-primary/50 glow-border"
            aria-label="Discord"
          >
            <DiscordIcon className="w-6 h-6" />
          </a>
        </div>

        {/* Navigation buttons */}
        <div 
          className="flex gap-4 justify-center flex-wrap animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={() => scrollToSection("skills")}
            className="px-6 py-3 rounded-full bg-primary/20 border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 rounded-full bg-secondary/20 border border-secondary/30 hover:bg-secondary/30 hover:border-secondary/50 transition-all duration-300 font-medium"
          >
            Projects
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
