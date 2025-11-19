import { Cpu, Server, Settings, Users } from "lucide-react";

const services = [
    {
        title: "Automatización",
        description: "Soluciones inteligentes para optimizar procesos industriales y comerciales, aumentando la eficiencia y reduciendo costos operativos.",
        icon: Settings,
    },
    {
        title: "Infraestructura",
        description: "Diseño e implementación de redes robustas, servidores y centros de datos que garantizan la continuidad de tu negocio.",
        icon: Server,
    },
    {
        title: "Hardware",
        description: "Venta, configuración y mantenimiento de equipos de cómputo y periféricos de alto rendimiento para tu empresa.",
        icon: Cpu,
    },
    {
        title: "Consultoría",
        description: "Asesoramiento experto para la transformación digital de tu organización, alineando la tecnología con tus objetivos.",
        icon: Users,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-muted/50">
            <div className="container px-4 md:px-8 mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Nuestras Soluciones
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Ofrecemos un ecosistema completo de servicios tecnológicos diseñados para impulsar el crecimiento de tu empresa.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="relative group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
