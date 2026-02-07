import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Project } from "@/types/project";
import { FC, ReactNode } from "react";

interface ProjectCardProps {
  project: Project;
  onViewMore: (project: Project) => void;
  index: number;
  isVisible: boolean;
}

const getIcon = (icon?: string): ReactNode => {
  switch (icon) {
    case "github":
      return <Github className="w-4 h-4" />;
    default:
      return <ExternalLink className="w-4 h-4" />;
  }
}

const ProjectCard: FC<ProjectCardProps> = ({ project, onViewMore, index, isVisible }) => {
  const ThumbnailContent = () => (
    <>
      {project.thumbnail ? (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/30 blur-xl" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      {project.featured && (
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/80 text-xs font-medium text-primary-foreground">
          Featured
        </div>
      )}
    </>
  );

  return (
    <div
      className={`group relative rounded-xl overflow-hidden bg-card/50 border border-border card-hover backdrop-blur-sm transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        {project.banner?.link ? (
          <a href={project.banner.link} target="_blank" rel="noopener noreferrer">
            <ThumbnailContent />
          </a>
        ) : (
          <ThumbnailContent />
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                aria-label="View project"
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          <button
            onClick={() => onViewMore(project)}
            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors group/btn"
          >
            More Info
            <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

