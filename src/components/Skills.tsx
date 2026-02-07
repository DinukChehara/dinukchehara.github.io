import { useEffect, useRef, useState, useCallback } from "react"; // Added useCallback
import skillsData from "@/data/skills.json";
import { Skill } from "@/types/skill";

const skills: Skill[] = skillsData;

// New component to handle conditional text display and scrolling
interface SkillNameDisplayProps {
  name: string;
}

const SkillNameDisplay: React.FC<SkillNameDisplayProps> = ({ name }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the wrapper div
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // To manage hover state

  const checkOverflow = useCallback(() => {
    if (textRef.current && containerRef.current) {
      // Use clientWidth of the container to check against scrollWidth of the span
      setIsOverflowing(textRef.current.scrollWidth > containerRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    checkOverflow(); // Check on mount
    window.addEventListener('resize', checkOverflow); // Re-check on resize
    return () => window.removeEventListener('resize', checkOverflow); // Cleanup
  }, [checkOverflow]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      ref={containerRef} // Attach ref to the wrapper div
      className={`relative overflow-hidden w-full h-fit flex items-center text-ellipsis ${isOverflowing ? 'justify-start' : 'justify-center'}`} 
      style={{maxWidth: '80px', minHeight: '1.25rem'}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span 
        ref={textRef} // Attach ref to the span for measuring intrinsic width
        className={`font-medium text-sm whitespace-nowrap ${isOverflowing && isHovered ? 'animate-marquee' : ''}`}
      >
        {name}{isOverflowing ? '\u00A0' : ''} {/* Changed &nbsp; to \u00A0 */}
      </span>
    </div>
  );
};


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Skills
        </h2>

        {/* Compact skill display (flexbox) */}
        <div className="flex flex-wrap justify-center gap-4"> {/* Using flexbox for centering and wrapping */}
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`skill-item flex flex-col items-center justify-between p-4 rounded-lg bg-card/30 border border-border/50 w-28 h-28 text-center transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-muted/30 shrink-0 mt-2"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Skill name */}
              <SkillNameDisplay name={skill.name} />
            </div>
          ))}
        </div>      </div>
    </section>
  );
};

export default Skills;
