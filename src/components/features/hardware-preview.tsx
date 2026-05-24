import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ClipboardList, DatabaseZap, ShieldCheck } from "lucide-react";

const implementationAreas = [
    {
        title: "Diagnóstico operativo",
        description: "Identificamos cuellos de botella, datos dispersos y tareas manuales que pueden convertirse en sistemas.",
        icon: ClipboardList,
    },
    {
        title: "Automatización e IA",
        description: "Diseñamos flujos con reglas, asistentes, documentos inteligentes y alertas para acelerar el trabajo diario.",
        icon: DatabaseZap,
    },
    {
        title: "Adopción del equipo",
        description: "Capacitamos usuarios clave y documentamos procesos para que la solución se use correctamente desde el inicio.",
        icon: CheckCircle2,
    },
    {
        title: "Base tecnológica",
        description: "Preparamos nube, redes, seguridad, respaldos y soporte para que la operación no dependa de improvisaciones.",
        icon: ShieldCheck,
    },
];

export function HardwarePreview() {
    return (
        <section id="implementation" className="relative overflow-hidden border-t border-cyan-300/20 bg-[#0d111b] py-24">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_82%_42%,rgba(249,115,22,0.12),transparent_28%)]" />
            <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                            Método de trabajo
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                            Implementación completa, no solo desarrollo
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Acompañamos desde el análisis del proceso hasta la puesta en marcha. El objetivo es que la tecnología quede integrada a la operación, con responsables, datos claros y soporte posterior.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {implementationAreas.map((category) => (
                                <div key={category.title} className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                                        <category.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{category.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Button size="lg" asChild>
                                <Link href="#contact">Solicitar diagnóstico</Link>
                            </Button>
                        </div>
                    </div>
                    <div id="ai" className="relative overflow-hidden rounded-lg border border-white/10 bg-[#081f35] p-8 text-secondary-foreground shadow-2xl shadow-cyan-950/30 lg:p-10">
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_85%_12%,rgba(249,115,22,0.18),transparent_28%)]" />
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-primary to-transparent" />
                        <div className="relative">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            IA y capacitación
                        </p>
                        <h3 className="mt-4 text-3xl font-bold tracking-tight">
                            Ayuda práctica para adoptar IA en tu entorno de trabajo
                        </h3>
                        <p className="mt-5 text-base leading-7 text-gray-200">
                            Evaluamos casos de uso, seleccionamos herramientas, definimos políticas de uso y capacitamos a tu equipo para aplicar IA en tareas reales: atención, ventas, administración, reportes, documentación y soporte.
                        </p>
                        <div className="mt-8 space-y-4">
                            {[
                                "Talleres para equipos administrativos y operativos",
                                "Asistentes internos conectados a procesos y documentos",
                                "Automatización de reportes, correos, seguimientos y captura de datos",
                                "Lineamientos para uso seguro de IA con información empresarial",
                            ].map((item) => (
                                <div key={item} className="flex gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <p className="text-sm leading-6 text-gray-100">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Button variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10" asChild>
                                <Link href="#contact">Pedir apoyo con IA</Link>
                            </Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
