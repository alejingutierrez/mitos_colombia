import Header from "../../components/Header";
import { SectionHeader } from "../../components/ui/SectionHeader";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contacto",
  description:
    "Escríbenos para compartir mitos, correcciones o colaboraciones editoriales.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-16 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-12 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <main className="relative min-h-screen pb-24">
        <section className="container-shell mt-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Contacto editorial"
                title="Hablemos del territorio, los relatos y la memoria."
                description="Si conoces un mito, una tradición oral o una corrección necesaria, este es el lugar para escribirnos."
              />

              <div className="glass-card p-6 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                    Qué recibimos
                  </p>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    Historias locales, referencias bibliográficas, aportes de
                    comunidades y sugerencias para mejorar la experiencia del
                    archivo.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                    Tiempo de respuesta
                  </p>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    Respondemos en un plazo de 3 a 5 días hábiles.
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
