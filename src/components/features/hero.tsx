"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const slides = [
    {
        title: "Convertimos procesos operativos en",
        highlight: "sistemas digitales",
        description: "Diseñamos flujos de trabajo, tableros, automatizaciones e integraciones para que tu empresa opere con menos fricción y más control.",
        ctaPrimary: { text: "Agendar diagnóstico", href: "/?intent=whatsapp-workflows#contact" },
        ctaSecondary: { text: "Ver servicios", href: "#services" },
        image: "/hero/data-center.png",
    },
    {
        title: "Implementa IA donde realmente",
        highlight: "mejora la operación",
        description: "Aterrizamos asistentes, automatización documental, reportes inteligentes y capacitación para equipos que necesitan adoptar IA con seguridad.",
        ctaPrimary: { text: "Explorar IA", href: "/?intent=ai-agents#contact" },
        ctaSecondary: { text: "Ver ejemplo IA", href: "#example-ai-agents" },
        image: "/hero/control-room.png",
    },
    {
        title: "Sitios, portales y soluciones",
        highlight: "a la medida",
        description: "Creamos plataformas web, formularios, CRM ligeros, cotizadores, portales internos y herramientas conectadas a tus datos.",
        ctaPrimary: { text: "Iniciar proyecto", href: "/?intent=custom-product#contact" },
        ctaSecondary: { text: "Ver ejemplos", href: "#examples" },
        image: "/hero/software-lab.png",
    },
    {
        title: "Infraestructura preparada para",
        highlight: "crecer",
        description: "Diseñamos redes, servidores, nube, seguridad y soporte técnico para sostener tus sistemas críticos con continuidad.",
        ctaPrimary: { text: "Agendar diagnóstico", href: "/?intent=aws-infra#contact" },
        ctaSecondary: { text: "Ver servicios", href: "#services" },
        image: "/hero/network-cloud.png",
    },
];

const capabilities = [
    {
        title: "Operación",
        description: "procesos, reportes y automatización",
        metric: "24/7",
    },
    {
        title: "IA aplicada",
        description: "implementación y capacitación interna",
        metric: "IA",
    },
    {
        title: "Infraestructura",
        description: "redes, nube, seguridad y soporte",
        metric: "99%",
    },
];

function CommandCenterPreview() {
    return (
        <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-slate-950/70 p-5 shadow-2xl shadow-sky-950/40 backdrop-blur xl:p-7 2xl:p-8">
                <div className="mb-5 flex items-center justify-between xl:mb-7">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 2xl:text-sm">
                            Centro operativo
                        </p>
                        <h2 className="mt-2 text-lg font-semibold text-white xl:text-2xl 2xl:text-3xl">
                            Flujo digital en vivo
                        </h2>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 2xl:text-sm">
                        Activo
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {[
                        ["42", "tareas"],
                        ["8", "integraciones"],
                        ["3.2x", "respuesta"],
                    ].map(([value, label]) => (
                        <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-3 xl:p-4">
                            <p className="text-2xl font-bold text-white xl:text-3xl 2xl:text-4xl">{value}</p>
                            <p className="mt-1 text-xs text-slate-400 2xl:text-sm">{label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-5 space-y-3 xl:mt-7 xl:space-y-4">
                    {[
                        ["Captura de datos", "w-[92%]", "bg-sky-400"],
                        ["Validación IA", "w-[74%]", "bg-primary"],
                        ["Reporte directivo", "w-[86%]", "bg-cyan-300"],
                    ].map(([label, width, color]) => (
                        <div key={label}>
                            <div className="mb-2 flex justify-between text-xs 2xl:text-sm">
                                <span className="text-slate-300">{label}</span>
                                <span className="text-slate-500">sincronizado</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-white/10 2xl:h-2.5">
                                <div className={cn("h-full rounded-full", width, color)} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-5 rounded-md border border-sky-400/20 bg-sky-400/10 p-4 xl:mt-7 xl:p-5">
                    <p className="text-sm leading-6 text-slate-200 xl:text-base xl:leading-7 2xl:text-lg">
                        Alertas, aprobaciones, documentos y tableros conectados en un solo flujo.
                    </p>
                </div>
            </div>
        </div>
    );
}

export function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 7000, stopOnInteraction: false }),
    ]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const scrollTo = React.useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    React.useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="relative overflow-hidden bg-background">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div className="relative flex min-h-[calc(100svh-64px)] flex-[0_0_100%] items-center overflow-hidden px-4 py-16 md:px-8 md:py-20 lg:py-24 xl:min-h-[calc(100svh-72px)] xl:py-16 2xl:py-20" key={slide.image}>
                            <Image
                                src={slide.image}
                                alt=""
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                className="object-cover"
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,23,0.97)_0%,rgba(8,19,45,0.91)_48%,rgba(8,19,45,0.62)_78%,rgba(8,19,45,0.82)_100%)]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(14,165,233,0.24),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(249,115,22,0.14),transparent_32%)]" />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
                            <div className="container relative z-10 mx-auto grid max-w-7xl items-center gap-10 xl:max-w-[92rem] xl:grid-cols-[minmax(0,1fr)_500px] xl:gap-16 2xl:max-w-[104rem] 2xl:grid-cols-[minmax(0,1fr)_560px] 2xl:gap-24">
                                <div className="max-w-3xl xl:max-w-5xl">
                                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary xl:text-base 2xl:text-lg">
                                        Desarrollo, IA e infraestructura para empresas
                                    </p>
                                    <h1 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:max-w-5xl xl:text-8xl 2xl:text-[7.5rem]">
                                        {slide.title} <span className="text-primary block sm:inline">{slide.highlight}</span>
                                    </h1>
                                    <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl xl:max-w-3xl xl:text-2xl xl:leading-10 2xl:max-w-4xl 2xl:text-[1.7rem] 2xl:leading-[1.55]">
                                        {slide.description}
                                    </p>
                                    <div className="mt-10 flex flex-col gap-4 sm:flex-row xl:mt-12 xl:gap-5">
                                        <Button size="lg" className="xl:h-14 xl:px-10 xl:text-base 2xl:h-16 2xl:px-12 2xl:text-lg" asChild>
                                            <Link href={slide.ctaPrimary.href}>{slide.ctaPrimary.text}</Link>
                                        </Button>
                                        <Button variant="outline" size="lg" className="border-white/25 bg-white/5 text-foreground hover:bg-white/10 xl:h-14 xl:px-10 xl:text-base 2xl:h-16 2xl:px-12 2xl:text-lg" asChild>
                                            <Link href={slide.ctaSecondary.href}>{slide.ctaSecondary.text}</Link>
                                        </Button>
                                    </div>
                                    <div className="mt-8 rounded-lg border border-white/10 bg-slate-950/55 p-4 backdrop-blur lg:hidden">
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                                            Centro operativo
                                        </p>
                                        <div className="mt-4 grid grid-cols-3 gap-3">
                                            {["Flujos", "IA", "Nube"].map((item) => (
                                                <div key={item} className="rounded-md bg-white/[0.05] p-3 text-center">
                                                    <p className="text-sm font-semibold text-white">{item}</p>
                                                    <div className="mx-auto mt-2 h-1.5 w-full rounded-full bg-primary/70" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <CommandCenterPreview />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-y border-white/10 bg-slate-950/80">
                <div className="container mx-auto max-w-7xl px-4 py-5 md:px-8">
                    <div className="mb-5 flex justify-center gap-2 lg:justify-start">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={cn(
                                    "h-2 w-2 rounded-full transition-all duration-300",
                                    index === selectedIndex ? "bg-primary w-10" : "bg-white/35 hover:bg-white/60"
                                )}
                                onClick={() => scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        {capabilities.map((item) => (
                            <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xl font-bold text-foreground">{item.title}</p>
                                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                                    </div>
                                    <span className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                                        {item.metric}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
