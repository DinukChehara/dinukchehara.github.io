import { Github, Instagram } from "lucide-react";
import DiscordIcon from "./icons/DiscordIcon";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-1">Dinuk Chehara</h3>
          <p className="text-sm text-muted-foreground">Minecraft plugin developer</p>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://github.com/DinukChehara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/tomqnto/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://discord.com/users/905732551518322718" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            aria-label="Discord"
          >
            <DiscordIcon className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} • Built with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
