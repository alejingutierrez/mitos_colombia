import Header from "../../components/Header";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";

export const metadata = {
  title: "Metodología",
  description:
    "Cómo investigamos, organizamos y presentamos los mitos colombianos.",
};

const steps = [
  {
    title: "Investigación",
    detail:
      "Revisamos fuentes orales y escritas, priorizando testimonios comunitarios y referencias culturales.",
  },
  {
    title: "Catalogación",
    detail:
      "Estructuramos cada mito por región, comunidad, motivos narrativos y contexto histórico.",
  },
  {
    title: "Curaduría editorial",
    detail:
      "Editamos los relatos para mejorar su lectura sin alterar su esencia ni su identidad original.",
  },
  {
    title: "Visualización",
    detail:
      "Creamos atmósferas visuales contemporáneas inspiradas en la estética del territorio.",
  },
];

export default function MetodologiaPage() {
  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-16 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-12 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <main className="relative min-h-screen pb-24">
        <section className="container-shell mt-12 space-y-10">
          <SectionHeader
            eyebrow="Metodología editorial"
            title="De la memoria oral a un archivo accesible."
            description="Cada mito pasa por un proceso de investigación, organización y cuidado editorial."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <GlassCard key={step.title} className="p-6 space-y-3">
                <h3 className="font-display text-xl text-ink-900">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {step.detail}
                </p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-8">
            <h2 className="font-display text-2xl text-ink-900">
              Ética y respeto cultural
            </h2>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">
              Trabajamos para mantener el significado cultural de los relatos,
              evitando la exotización o la pérdida de contexto. Cuando es posible,
              registramos las fuentes y el vínculo con la comunidad.
            </p>
          </GlassCard>
        </section>
      </main>
    </>
  );
}
