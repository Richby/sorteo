import {
    ArrowRight,
    BarChart3,
    Bot,
    BrainCircuit,
    CloudCog,
    Code2,
    CreditCard,
    FileText,
    Gauge,
    MessageSquareText,
    Network,
    ShoppingCart,
    Workflow,
} from "lucide-react";

const services = [
    {
        title: "Operación diaria",
        description: "Flujos por WhatsApp, correo, formularios, aprobaciones, recordatorios y seguimiento de solicitudes.",
        icon: Workflow,
        href: "#example-daily-operations",
    },
    {
        title: "Sitios, e-commerce y pagos",
        description: "Sitios sencillos, catálogos, tiendas en línea, cotizadores, formularios y pasarelas de pago.",
        icon: ShoppingCart,
        href: "#example-commerce",
    },
    {
        title: "Microsoft 365, Azure y Google",
        description: "Integraciones con SharePoint, Teams, Outlook, Google Workspace, calendarios, archivos y permisos.",
        icon: CloudCog,
        href: "#example-cloud-tools",
    },
    {
        title: "Dashboards administrativos",
        description: "Paneles para ventas, inventario, clientes, operaciones, reportes e indicadores de negocio.",
        icon: Gauge,
        href: "#example-dashboards",
    },
    {
        title: "IA, chatbots y agentes",
        description: "Asistentes internos, chatbots, clasificación de solicitudes, análisis documental y apoyo operativo.",
        icon: Bot,
        href: "#example-ai-agents",
    },
    {
        title: "Desarrollo a medida",
        description: "Productos digitales, portales, sistemas internos e integraciones con equipos, datos y herramientas existentes.",
        icon: Code2,
        href: "#example-custom-development",
    },
];

const implementationExamples = [
    {
        id: "example-daily-operations",
        intent: "whatsapp-workflows",
        title: "Operación diaria y flujos por WhatsApp",
        summary: "Recepción de solicitudes, pedidos, recordatorios, aprobaciones y seguimiento desde herramientas que el equipo ya usa todos los días.",
        icon: Workflow,
        tools: ["WhatsApp", "correo", "formularios", "notificaciones"],
        outcomes: ["menos seguimiento manual", "responsables claros", "historial consultable"],
    },
    {
        id: "example-commerce",
        intent: "ecommerce",
        title: "Sitios, e-commerce y pasarelas de pago",
        summary: "Sitios informativos, landing pages, catálogos, tiendas, cotizadores y pagos en línea para validar o vender sin grandes inversiones iniciales.",
        icon: CreditCard,
        tools: ["sitio web", "catálogo", "Stripe/Mercado Pago", "cotizador"],
        outcomes: ["presencia comercial", "captura de leads", "ventas o pagos en línea"],
    },
    {
        id: "example-cloud-tools",
        intent: "office365",
        title: "Integraciones con Microsoft 365, Azure y Google",
        summary: "Automatización e integración de documentos, calendarios, correos, carpetas, permisos y datos en ecosistemas empresariales existentes.",
        icon: CloudCog,
        tools: ["SharePoint", "Teams", "Outlook", "Google Workspace"],
        outcomes: ["mejor colaboración", "datos ordenados", "menos doble captura"],
    },
    {
        id: "example-dashboards",
        intent: "dashboard",
        title: "Dashboards administrativos para negocios",
        summary: "Paneles para revisar ventas, inventario, clientes, operaciones, solicitudes y métricas clave desde un solo lugar.",
        icon: BarChart3,
        tools: ["dashboard", "base de datos", "reportes", "exportaciones"],
        outcomes: ["decisiones rápidas", "indicadores claros", "seguimiento directivo"],
    },
    {
        id: "example-ai-agents",
        intent: "ai-agents",
        title: "Chatbots y agentes de IA",
        summary: "Agentes configurados para responder, clasificar solicitudes, consultar documentos y apoyar procesos internos cuando IA realmente aporta valor.",
        icon: BrainCircuit,
        tools: ["chatbots", "agentes IA", "base documental", "automatizaciones"],
        outcomes: ["atención más rápida", "menos captura manual", "soporte interno 24/7"],
    },
    {
        id: "example-custom-development",
        intent: "custom-product",
        title: "Productos y sistemas a medida",
        summary: "Desarrollo de herramientas internas, portales, productos digitales e integraciones con equipos o sistemas propios del negocio.",
        icon: Code2,
        tools: ["aplicaciones web", "APIs", "bases de datos", "integración con equipos"],
        outcomes: ["solución alineada al proceso", "escalabilidad", "control del producto"],
    },
    {
        id: "example-aws-infrastructure",
        intent: "aws-infra",
        title: "AWS, infraestructura y continuidad",
        summary: "Diseño e implementación de servicios en nube, respaldos, monitoreo, seguridad y bases técnicas para operar con estabilidad.",
        icon: Network,
        tools: ["AWS", "servidores", "backups", "monitoreo"],
        outcomes: ["continuidad", "seguridad", "crecimiento ordenado"],
    },
    {
        id: "example-training",
        intent: "training",
        title: "Capacitación y adopción",
        summary: "Sesiones prácticas para que los equipos usen nuevas herramientas, flujos digitales, sistemas internos e IA cuando aplique.",
        icon: MessageSquareText,
        tools: ["talleres", "guías", "protocolos", "casos reales"],
        outcomes: ["adopción gradual", "uso correcto", "mejores hábitos digitales"],
    },
];

export function Services() {
    return (
        <>
            <section id="services" className="relative overflow-hidden border-t border-white/10 bg-[#071625] py-24">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                            Qué podemos implementar
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Soluciones para operar mejor
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Selecciona una solución para revisar ejemplos: flujos por WhatsApp, integraciones con Microsoft 365, Google o AWS, sitios, e-commerce, pagos, dashboards, IA y productos a medida.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <a
                                key={service.title}
                                href={service.href}
                                className="relative group block overflow-hidden rounded-lg border border-white/10 bg-slate-950/55 p-8 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-sky-300/40 hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400/80 via-primary/80 to-transparent opacity-70" />
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300 ring-1 ring-sky-300/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                                    Ver ejemplos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section id="examples" className="relative overflow-hidden border-t border-white/10 bg-[#08111f] py-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_82%_38%,rgba(249,115,22,0.12),transparent_30%)]" />
                <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-14 max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Ejemplos de implementación
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Casos que podemos aterrizar en tu operación
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-muted-foreground">
                            Estos ejemplos sirven como punto de partida. Cada proyecto se adapta a tus procesos, herramientas actuales, equipo y nivel de adopción tecnológica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {implementationExamples.map((example) => (
                            <article
                                id={example.id}
                                key={example.id}
                                className="scroll-mt-24 rounded-lg border border-white/10 bg-slate-950/65 p-6 shadow-lg shadow-sky-950/20 backdrop-blur md:p-8"
                            >
                                <div className="flex flex-col gap-5 sm:flex-row">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/25">
                                        <example.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-foreground">
                                            {example.title}
                                        </h3>
                                        <p className="mt-3 leading-7 text-muted-foreground">
                                            {example.summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-sky-300">
                                            <FileText className="h-4 w-4" />
                                            Herramientas
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {example.tools.map((tool) => (
                                                <span key={tool} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                                            <ArrowRight className="h-4 w-4" />
                                            Resultado esperado
                                        </div>
                                        <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                                            {example.outcomes.map((outcome) => (
                                                <li key={outcome}>• {outcome}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <a
                                    href={`/?intent=${example.intent}#contact`}
                                    className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                >
                                    Solicitar diagnóstico sobre esto <ArrowRight className="h-4 w-4" />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
