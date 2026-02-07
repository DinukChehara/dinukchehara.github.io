import { useEffect, useRef, useState } = "react";
import skillsData from "@/data/skills.json";
import { Skill } from "@/types/skill";

const skills: Skill[] = skillsData;

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
              <div className="relative overflow-hidden w-full h-fit flex justify-center items-center text-ellipsis" style={{maxWidth: '80px', minHeight: '1.25rem'}}> {/* Re-added justify-center */}
                <span 
                  className="skill-name-scroll font-medium text-sm whitespace-nowrap"
                >
                  {skill.name}&nbsp;
                </span>
              </div>
            </div>
          ))}
        </div>      </div>
    </section>
  );
};

export default Skills;
