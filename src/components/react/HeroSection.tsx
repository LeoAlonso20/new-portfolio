import FadeIn from "./FadeIn";

interface Props {
  greeting: string;
  name: string;
  role: string;
  description: string;
  company: string;
  ctaLabel: string;
  contactLabel: string;
  ctaHref: string;
  contactHref: string;
}

export default function HeroSection({
  greeting,
  name,
  role,
  description,
  company,
  ctaLabel,
  contactLabel,
  ctaHref,
  contactHref,
}: Props) {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-body-md text-accent font-medium mb-4">
              {greeting}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-display-xl font-bold text-content-primary mb-6">
              {name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-display-sm text-content-secondary font-medium mb-6">
              {role}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-body-lg text-content-secondary max-w-2xl mb-10 leading-relaxed">
              {description}{" "}
              <span className="text-content-primary font-medium">
                {company}
              </span>
              .
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-content-primary text-surface-primary rounded-full text-body-sm font-medium hover:opacity-90 transition-opacity"
              >
                {ctaLabel}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href={contactHref}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border-primary rounded-full text-body-sm font-medium text-content-primary hover:bg-surface-secondary transition-colors"
              >
                {contactLabel}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
    </section>
  );
}
