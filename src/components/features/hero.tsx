"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const slides = [
    {
        title: "Liderando el Futuro de la",
        highlight: "Automatización",
        description: "Empoderando empresas con sistemas de automatización inteligente diseñados para la escalabilidad y el rendimiento.",
        ctaPrimary: { text: "Cotizar Ahora", href: "#contact" },
        ctaSecondary: { text: "Más Información", href: "#services" },
    },
    {
        title: "Infraestructura Tecnológica",
        highlight: "Robusta",
        description: "Diseño e implementación de redes y centros de datos que garantizan la continuidad y seguridad de tu negocio.",
        ctaPrimary: { text: "Ver Soluciones", href: "#services" },
        ctaSecondary: { text: "Contáctanos", href: "#contact" },
    },
    {
        title: "Soluciones de Hardware de",
        highlight: "Alto Rendimiento",
        description: "Venta, configuración y mantenimiento de equipos de cómputo especializados para maximizar la productividad.",
        ctaPrimary: { text: "Catálogo", href: "#services" },
        ctaSecondary: { text: "Soporte", href: "#contact" },
    },
    {
        title: "Consultoría Estratégica para tu",
        highlight: "Transformación Digital",
        description: "Asesoramiento experto para alinear la tecnología con tus objetivos comerciales y optimizar tus procesos.",
        ctaPrimary: { text: "Agendar Cita", href: "#contact" },
        ctaSecondary: { text: "Conócenos", href: "#about" },
    },
];

export function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 7000, stopOnInteraction: false }),
    ]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const scrollTo = React.useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onSelect = React.useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    React.useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-32 pb-16 md:pb-20 lg:pb-32">
            <div className="container px-4 md:px-8 mx-auto max-w-7xl relative z-10">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <div className="flex-[0_0_100%] min-w-0 relative px-4" key={index}>
                                <div className="mx-auto max-w-3xl text-center">
                                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 min-h-[1.2em]">
                                        {slide.title} <span className="text-primary block sm:inline">{slide.highlight}</span>
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-muted-foreground min-h-[3em]">
                                        {slide.description}
                                    </p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <Button size="lg" asChild>
                                            <Link href={slide.ctaPrimary.href}>{slide.ctaPrimary.text}</Link>
                                        </Button>
                                        <Button variant="outline" size="lg" asChild>
                                            <Link href={slide.ctaSecondary.href}>{slide.ctaSecondary.text}</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                "h-2 w-2 rounded-full transition-all duration-300",
                                index === selectedIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            )}
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[500px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 blur-3xl rounded-full mix-blend-multiply animate-blob" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/30 blur-3xl rounded-full mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/30 blur-3xl rounded-full mix-blend-multiply animate-blob animation-delay-4000" />
            </div>
        </section>
    );
}
