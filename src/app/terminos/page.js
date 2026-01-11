import Header from "../../components/Header";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";

export const metadata = {
  title: "Términos",
  description:
    "Términos de uso del archivo editorial Mitos de Colombia.",
};

const terms = [
  {
    title: "Uso del contenido",
    detail:
      "Los textos e imágenes están destinados a difusión cultural y educativa. Si deseas reutilizar contenidos, cita la fuente.",
  },
  {
    title: "Aportes de usuarios",
    detail:
      "Los aportes enviados pueden ser editados con fines de claridad y curaduría, manteniendo su sentido original.",
  },
  {
    title: "Disponibilidad",
    detail:
      "El sitio puede cambiar o pausarse temporalmente para mantenimiento o mejoras.",
  },
  {
    title: "Responsabilidad",
    detail:
      "Trabajamos por la precisión del archivo, pero algunas narrativas pueden variar según la tradición local.",
  },
];

export default function TerminosPage() {
  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-12 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-12 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <main className="relative min-h-screen pb-24">
        <section className="container-shell mt-12 space-y-10">
          <SectionHeader
            eyebrow="Términos de uso"
            title="Un acuerdo para cuidar la memoria colectiva."
            description="Estas condiciones rigen el uso del sitio y sus contenidos."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {terms.map((item) => (
              <GlassCard key={item.title} className="p-6 space-y-3">
                <h3 className="font-display text-xl text-ink-900">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {item.detail}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
