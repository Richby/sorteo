"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "#services" },
    { name: "Ejemplos", href: "#examples" },
    { name: "IA y capacitación", href: "#ai" },
    { name: "Implementación", href: "#implementation" },
    { name: "Contacto", href: "#contact" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
            <nav className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto max-w-7xl">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight text-primary">
                            SOFTEC
                        </span>
                        <span className="text-xl font-semibold text-foreground">
                            TECHNOLOGIES
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Abrir menú principal</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button asChild>
                        <Link href="#contact">Agendar diagnóstico</Link>
                    </Button>
                </div>
            </nav>
            {/* Mobile menu */}
            <div
                className={cn(
                    "lg:hidden",
                    mobileMenuOpen ? "fixed inset-0 z-50 bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" : "hidden"
                )}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-xl font-bold tracking-tight text-primary">
                            SOFTEC
                        </span>
                    </Link>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Cerrar menú</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="py-6">
                            <Button className="w-full" asChild>
                                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                    Agendar diagnóstico
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
