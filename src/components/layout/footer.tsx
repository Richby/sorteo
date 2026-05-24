import Link from "next/link";

const navigation = {
    solutions: [
        { name: "Flujos operativos", href: "#services" },
        { name: "Desarrollo web", href: "#services" },
        { name: "IA y capacitación", href: "#ai" },
        { name: "Infraestructura", href: "#implementation" },
    ],
    support: [
        { name: "Diagnóstico", href: "#contact" },
        { name: "Capacitación", href: "#ai" },
        { name: "Soporte técnico", href: "#implementation" },
        { name: "Ejemplos", href: "#examples" },
    ],
    company: [
        { name: "Servicios", href: "#services" },
        { name: "Contacto", href: "#contact" },
    ],
    legal: [
        { name: "Reclamos", href: "#" },
        { name: "Privacidad", href: "#" },
        { name: "Términos", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712] text-secondary-foreground" aria-labelledby="footer-heading">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            <h2 id="footer-heading" className="sr-only">
                Pie de página
            </h2>
            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold tracking-tight text-primary">
                                SOFTEC
                            </span>
                            <span className="text-2xl font-semibold text-white">
                                TECHNOLOGIES
                            </span>
                        </div>
                        <p className="text-sm leading-6 text-gray-300">
                            Implementamos software, flujos operativos, IA e infraestructura para empresas que necesitan operar mejor.
                        </p>
                        <div className="flex space-x-6">
                            {/* Social links would go here */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Soluciones</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Soporte</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Compañía</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} Softec Technologies. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
