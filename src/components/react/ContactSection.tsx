import FadeIn from "./FadeIn";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

interface Props {
  title: string;
  subtitle: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  emailCta: string;
}

const links = [
  {
    key: "email" as const,
    href: "mailto:leandro@example.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M2 4l8 6 8-6" />
      </svg>
    ),
  },
  {
    key: "linkedin" as const,
    href: "https://linkedin.com/in/leandroalonso",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5.04 7.27H2.02v10.2h3.02V7.27zM3.53 5.97c.97 0 1.57-.65 1.57-1.46C5.08 3.67 4.5 3.04 3.55 3.04S2 3.67 2 4.51c0 .81.6 1.46 1.51 1.46h.02zM10.8 7.27H7.79v10.2h3.02v-5.7c0-.3.02-.6.11-.82.24-.61.8-1.24 1.72-1.24 1.22 0 1.71.93 1.71 2.29v5.47h3.02v-5.86c0-3.13-1.67-4.59-3.9-4.59-1.83 0-2.63 1.02-3.07 1.72h.02V7.27h-.02z" />
      </svg>
    ),
  },
  {
    key: "github" as const,
    href: "https://github.com/leandroalonso",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1.63C5.18 1.63 1.27 5.54 1.27 10.36c0 3.86 2.5 7.14 5.98 8.3.44.08.6-.19.6-.42 0-.21-.01-.76-.01-1.49-2.43.53-2.95-1.17-2.95-1.17-.4-1.01-.97-1.28-.97-1.28-.79-.54.06-.53.06-.53.88.06 1.34.9 1.34.9.78 1.33 2.04.95 2.54.72.08-.56.3-.95.55-1.17-1.94-.22-3.98-.97-3.98-4.32 0-.96.34-1.74.9-2.35-.09-.22-.39-1.11.09-2.32 0 0 .73-.23 2.4.9a8.36 8.36 0 014.38 0c1.67-1.13 2.4-.9 2.4-.9.48 1.21.18 2.1.09 2.32.56.61.9 1.39.9 2.35 0 3.36-2.05 4.1-4 4.31.31.27.6.81.6 1.63 0 1.18-.01 2.13-.01 2.42 0 .24.16.51.6.42a8.73 8.73 0 005.97-8.3c0-4.82-3.91-8.73-8.73-8.73z" />
      </svg>
    ),
  },
];

const labelMap = {
  email: "emailLabel",
  linkedin: "linkedinLabel",
  github: "githubLabel",
} as const;

export default function ContactSection({
  title,
  subtitle,
  emailLabel,
  linkedinLabel,
  githubLabel,
  emailCta,
}: Props) {
  const labels: Record<string, string> = {
    emailLabel,
    linkedinLabel,
    githubLabel,
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="text-display-sm font-bold text-content-primary mb-3">
            {title}
          </h2>
          <p className="text-body-lg text-content-secondary mb-16 max-w-2xl">
            {subtitle}
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-3 gap-4">
          {links.map((link) => (
            <StaggerItem key={link.key}>
              <a
                href={link.href}
                target={link.key === "email" ? undefined : "_blank"}
                rel={link.key === "email" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 p-6 rounded-2xl border border-border-secondary hover:border-border-primary hover:bg-surface-secondary transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-surface-secondary group-hover:bg-accent/10 flex items-center justify-center text-content-secondary group-hover:text-accent transition-all duration-300">
                  {link.icon}
                </div>
                <div>
                  <p className="text-body-sm font-medium text-content-primary">
                    {labels[labelMap[link.key]]}
                  </p>
                  <p className="text-caption text-content-tertiary">
                    {link.key === "email"
                      ? emailCta
                      : link.href.replace("https://", "")}
                  </p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
