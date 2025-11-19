import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cpu, HardDrive, Monitor, Server } from "lucide-react";

const hardwareCategories = [
    {
        title: "Servidores y Redes",
        description: "Racks, switches, routers y servidores de alto rendimiento para centros de datos.",
        icon: Server,
    },
    {
        title: "Estaciones de Trabajo",
        description: "PCs y workstations optimizadas para ingeniería, diseño y tareas intensivas.",
        icon: Monitor,
    },
    {
        title: "Periféricos Industriales",
        description: "Pantallas táctiles, sensores, lectores y equipos rugerizados para entornos exigentes.",
        icon: HardDrive,
    },
    {
        title: "Componentes",
        description: "Procesadores, memoria RAM, almacenamiento SSD y tarjetas gráficas empresariales.",
        icon: Cpu,
    },
];

export function HardwarePreview() {
    return (
        <section className="py-24 bg-background border-t border-border/40">
            <div className="container px-4 md:px-8 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                            Hardware de Alto Rendimiento
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Suministramos el equipamiento tecnológico que tu empresa necesita para operar sin interrupciones. Desde servidores empresariales hasta estaciones de trabajo personalizadas.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {hardwareCategories.map((category) => (
                                <div key={category.title} className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
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
                                <Link href="#contact">Solicitar Cotización</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden bg-muted aspect-square lg:aspect-auto lg:h-full min-h-[400px] flex items-center justify-center">
                        {/* Placeholder for a hardware image - using a gradient/pattern for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10" />
                        <div className="relative z-10 text-center p-8">
                            <Server className="h-32 w-32 mx-auto text-muted-foreground/20 mb-4" />
                            <p className="text-muted-foreground font-medium">Imagen de Hardware</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
