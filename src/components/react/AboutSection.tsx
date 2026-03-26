import FadeIn from "./FadeIn";
import profilePic from "../../assets/profile.webp";

interface Props {
  title: string;
  paragraphs: string[];
}

export default function AboutSection({ title, paragraphs }: Props) {
  return (
    <section id="about" className="section-spacing">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="text-display-sm font-bold text-content-primary mb-12">
            {title}
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 md:gap-16 items-center">
          <FadeIn delay={0.1}>
            <div className="relative group max-w-sm mx-auto md:mx-0">
              <div className="absolute inset-0 bg-surface-secondary rounded-3xl rotate-6 border border-border-secondary transition-transform duration-300 group-hover:rotate-3" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-border-primary bg-surface-primary shadow-xl">
                <img
                  src={profilePic.src}
                  alt="Leandro Alonso"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {paragraphs.map((text, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1}>
                <p className="text-body-lg text-content-secondary leading-relaxed">
                  {text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
