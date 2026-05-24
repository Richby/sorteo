"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Radar } from "lucide-react";
import * as React from "react";

const CONTACT_EMAIL = "contacto@softec.com.mx";

const intentPresets = {
    "whatsapp-workflows": {
        interest: "Flujos operativos y WhatsApp",
        subject: "Solicitud sobre flujos operativos y WhatsApp",
        message: "Estoy interesado en implementar flujos de trabajo con WhatsApp, formularios, correo o recordatorios para mejorar la operación diaria de mi empresa.",
    },
    ecommerce: {
        interest: "Sitio web, e-commerce o pagos",
        subject: "Solicitud sobre sitio web, e-commerce o pasarela de pago",
        message: "Estoy interesado en crear o mejorar un sitio, catálogo, tienda en línea, cotizador o flujo de pagos para mi negocio.",
    },
    office365: {
        interest: "Microsoft 365, Azure o Google Workspace",
        subject: "Solicitud sobre integraciones con Microsoft 365, Azure o Google",
        message: "Estoy interesado en integrar herramientas como Microsoft 365, SharePoint, Teams, Outlook, Azure, Google Workspace, calendarios, archivos o permisos.",
    },
    dashboard: {
        interest: "Dashboard administrativo",
        subject: "Solicitud sobre dashboard administrativo",
        message: "Estoy interesado en implementar un dashboard para ventas, inventario, clientes, operaciones, reportes o indicadores administrativos.",
    },
    "ai-agents": {
        interest: "IA, chatbots o agentes",
        subject: "Solicitud sobre IA, chatbots o agentes para procesos",
        message: "Estoy interesado en implementar chatbots, agentes de IA, análisis documental o asistentes internos para mejorar procesos de mi empresa.",
    },
    "custom-product": {
        interest: "Desarrollo a medida",
        subject: "Solicitud sobre desarrollo de producto o sistema a medida",
        message: "Estoy interesado en desarrollar un producto digital, portal, sistema interno o integración con herramientas, datos o equipos existentes.",
    },
    "aws-infra": {
        interest: "AWS, infraestructura o redes",
        subject: "Solicitud sobre AWS, infraestructura o continuidad operativa",
        message: "Estoy interesado en revisar infraestructura, nube, AWS, respaldos, monitoreo, redes o seguridad para sostener la operación de mi empresa.",
    },
    training: {
        interest: "Capacitación tecnológica",
        subject: "Solicitud sobre capacitación y adopción tecnológica",
        message: "Estoy interesado en capacitar al equipo para adoptar herramientas digitales, nuevos flujos de trabajo, sistemas internos o IA cuando aplique.",
    },
};

type IntentKey = keyof typeof intentPresets;

const interestOptions = [
    "Flujos operativos y WhatsApp",
    "Sitio web, e-commerce o pagos",
    "Microsoft 365, Azure o Google Workspace",
    "Dashboard administrativo",
    "IA, chatbots o agentes",
    "Desarrollo a medida",
    "AWS, infraestructura o redes",
    "Capacitación tecnológica",
];

export function Contact() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [interest, setInterest] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [selectedIntent, setSelectedIntent] = React.useState<IntentKey | null>(null);

    React.useEffect(() => {
        let currentIntent: string | null = null;

        const applyIntentFromUrl = () => {
            const intent = new URLSearchParams(window.location.search).get("intent") as IntentKey | null;

            if (!intent || !(intent in intentPresets) || intent === currentIntent) return;

            const preset = intentPresets[intent];
            currentIntent = intent;
            setSelectedIntent(intent);
            setInterest(preset.interest);
            setSubject(preset.subject);
            setMessage(preset.message);
        };

        applyIntentFromUrl();

        window.addEventListener("popstate", applyIntentFromUrl);
        window.addEventListener("hashchange", applyIntentFromUrl);
        const interval = window.setInterval(applyIntentFromUrl, 250);

        return () => {
            window.removeEventListener("popstate", applyIntentFromUrl);
            window.removeEventListener("hashchange", applyIntentFromUrl);
            window.clearInterval(interval);
        };
    }, []);

    const handleInterestChange = (value: string) => {
        setInterest(value);
        setSelectedIntent(null);

        if (!subject) {
            setSubject(`Solicitud sobre ${value.toLowerCase()}`);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fullName = `${firstName} ${lastName}`.trim();
        const body = [
            `Nombre: ${fullName || "No especificado"}`,
            `Correo: ${email || "No especificado"}`,
            `Interés: ${interest || "No especificado"}`,
            "",
            "Mensaje:",
            message || "No especificado",
        ].join("\n");

        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || "Solicitud de diagnóstico Softec")}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#050b16] py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(249,115,22,0.12),transparent_28%),radial-gradient(circle_at_72%_64%,rgba(14,165,233,0.14),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.035)_50%,transparent_100%)]" />
            <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            Siguiente paso
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                            Agenda un diagnóstico
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10">
                            Cuéntanos qué proceso, sistema o reto tecnológico quieres resolver. Podemos ayudarte con flujos operativos, sitios, soluciones a la medida, IA, capacitación e infraestructura.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Correo Electrónico</h3>
                                    <p className="text-muted-foreground mt-1">{CONTACT_EMAIL}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                                    <p className="text-muted-foreground mt-1">+52 (81) 0000-0000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Ubicación</h3>
                                    <p className="text-muted-foreground mt-1">
                                        Monterrey, NL, México
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                                    <Radar className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Diagnóstico inicial</h3>
                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                        Revisamos proceso, herramientas actuales, datos disponibles y oportunidades de automatización.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/75 p-8 shadow-2xl shadow-sky-950/30 backdrop-blur">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-cyan-300 to-transparent" />
                        {selectedIntent ? (
                            <div className="mb-6 rounded-lg border border-primary/25 bg-primary/10 p-4">
                                <p className="text-sm font-semibold text-primary">Solicitud prellenada</p>
                                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                    Detectamos tu interés en “{intentPresets[selectedIntent].interest}”. Puedes editar los campos antes de enviar.
                                </p>
                            </div>
                        ) : null}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        value={firstName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Juan"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Apellido
                                    </label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        value={lastName}
                                        onChange={(event) => setLastName(event.target.value)}
                                        className="flex h-10 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Pérez"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="juan@empresa.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="interest" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    ¿Qué necesitas implementar?
                                </label>
                                <select
                                    id="interest"
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={interest}
                                    onChange={(event) => handleInterestChange(event.target.value)}
                                >
                                    <option value="" disabled>Selecciona una opción</option>
                                    {interestOptions.map((option) => (
                                        <option key={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Asunto sugerido
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={subject}
                                    onChange={(event) => setSubject(event.target.value)}
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Solicitud de diagnóstico Softec"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Describe brevemente tu proceso, problema o proyecto."
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Solicitar diagnóstico
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
