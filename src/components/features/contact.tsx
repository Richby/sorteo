import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container px-4 md:px-8 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                            Contáctanos
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10">
                            ¿Listo para transformar tu empresa? Ponte en contacto con nuestro equipo de expertos para discutir tus necesidades tecnológicas.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Correo Electrónico</h3>
                                    <p className="text-muted-foreground mt-1">contacto@softec.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                                    <p className="text-muted-foreground mt-1">+52 (55) 1234-5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Ubicación</h3>
                                    <p className="text-muted-foreground mt-1">
                                        Av. Tecnológico 123<br />
                                        Monterrey, NL, México
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="juan@empresa.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="¿Cómo podemos ayudarte?"
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
