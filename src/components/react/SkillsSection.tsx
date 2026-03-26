import FadeIn from "./FadeIn";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

interface Props {
  title: string;
  subtitle: string;
}

const skills: Skill[] = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Astro", icon: "🚀", category: "Frontend" },
  { name: "TypeScript", icon: "🔷", category: "Languages" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "Git", icon: "📦", category: "Tools" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "Figma", icon: "🎯", category: "Design" },
  { name: "Framer Motion", icon: "✨", category: "Animation" },
  { name: "Vercel", icon: "▲", category: "Deployment" },
];

export default function SkillsSection({ title, subtitle }: Props) {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="text-display-sm font-bold text-content-primary mb-3">
            {title}
          </h2>
          <p className="text-body-lg text-content-secondary mb-16 max-w-2xl">
            {subtitle}
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <StaggerItem key={skill.name}>
              <div className="group flex items-center gap-3 p-4 rounded-2xl border border-border-secondary hover:border-border-primary hover:bg-surface-secondary transition-all duration-300">
                <span className="text-xl" role="img" aria-hidden="true">
                  {skill.icon}
                </span>
                <div>
                  <p className="text-body-sm font-medium text-content-primary">
                    {skill.name}
                  </p>
                  <p className="text-caption text-content-tertiary">
                    {skill.category}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
