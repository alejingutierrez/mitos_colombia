import Header from "../../components/Header";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";

export const metadata = {
  title: "Privacidad",
  description:
    "Política de privacidad de Mitos de Colombia y uso responsable de datos.",
};

const sections = [
  {
    title: "Datos que recopilamos",
    detail:
      "Solo almacenamos la información que envías en formularios de contacto o comentarios: nombre, email y contenido del mensaje.",
  },
  {
    title: "Uso de la información",
    detail:
      "Utilizamos estos datos únicamente para responder solicitudes, verificar aportes y mejorar la calidad editorial del archivo.",
  },
  {
    title: "Cookies y analítica",
    detail:
      "Podemos usar cookies esenciales para el funcionamiento del sitio y analítica agregada sin identificar personas.",
  },
  {
    title: "Tus derechos",
    detail:
      "Puedes solicitar la eliminación o corrección de tus datos escribiendo a través del formulario de contacto.",
  },
];

export default function PrivacidadPage() {
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
            eyebrow="Privacidad"
            title="Protegemos la memoria y los datos de quienes la comparten."
            description="Esta política explica qué datos recopilamos y cómo los usamos."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <GlassCard key={section.title} className="p-6 space-y-3">
                <h3 className="font-display text-xl text-ink-900">
                  {section.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {section.detail}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
