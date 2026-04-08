// components/contact/contact-hero-section.tsx
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionContainer } from "@/components/ui/section-container";

export function ContactHeroSection() {
  return (
    <section className="bg-white pt-20 pb-14 sm:pt-28 sm:pb-20">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          {/* Left: big editorial heading */}
          <div>
            <SectionEyebrow className="mb-5">
              Conecte-se conosco
            </SectionEyebrow>
            <h1 className="font-serif text-6xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-7xl">
              Fale{" "}
              <span className="font-serif italic text-wine-600">
                Conosco
              </span>
            </h1>
          </div>

          {/* Right: supporting text */}
          <div className="lg:pb-2">
            <p className="max-w-md text-base leading-relaxed text-gray-500">
              Um santuário dedicado à sua essência. Estamos à disposição para
              transformar sua visão de beleza em realidade — entre em contato e
              venha nos conhecer.
            </p>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-12 h-px w-full bg-wine-100" />
      </SectionContainer>
    </section>
  );
}
