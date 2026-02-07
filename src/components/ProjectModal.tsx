import { useEffect, useState, FC, ReactNode } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const getIcon = (icon?: string): ReactNode => {
  switch (icon) {
    case "github":
      return <Github className="w-4 h-4" />;
    default:
      return <ExternalLink className="w-4 h-4" />;
  }
}

const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
      setShowFull(false);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isLongContent = project.content.length > 500;
  const displayContent = showFull ? project.content : project.content.slice(0, 500);

  // Simple markdown rendering
  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      // Headers
      if (line.startsWith("### ")) {
        return <h3 key={i} className="text-lg font-medium mt-4 mb-2">{line.slice(4)}</h3>;
      }
      if (line.startsWith("## ")) {
        return <h2 key={i} className="text-xl font-semibold mt-5 mb-2">{line.slice(3)}</h2>;
      }
      if (line.startsWith("# ")) {
        return <h1 key={i} className="text-2xl font-bold mt-6 mb-3">{line.slice(2)}</h1>;
      }
      // Lists
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return <li key={i} className="ml-4 text-muted-foreground">{line.slice(2)}</li>;
      }
      // Code blocks (simple)
      if (line.startsWith("```")) {
        return null;
      }
      // Empty lines
      if (line.trim() === "") {
        return <br key={i} />;
      }
      // Regular text
      return <p key={i} className="text-muted-foreground mb-1">{line}</p>;
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-card border border-border overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-primary/10 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors shrink-0"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links */}
          <div className="flex gap-2 mt-4">
            {project.links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm"
              >
                {getIcon(link.icon)}
                {link.icon === "github" ? "Source" : "Link"}
              </a>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          <div className="prose prose-invert prose-sm max-w-none">
            {renderMarkdown(displayContent)}
          </div>
          
          {isLongContent && !showFull && (
            <button
              onClick={() => setShowFull(true)}
              className="mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              View full README →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
