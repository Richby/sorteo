import { Button } from "@/components/ui/button";

export default function DesignSystemPage() {
    return (
        <div className="p-10 space-y-8">
            <h1 className="text-3xl font-bold">Design System Verification</h1>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Buttons</h2>
                <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">Icon</Button>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="h-20 rounded bg-primary text-primary-foreground flex items-center justify-center">Primary</div>
                    <div className="h-20 rounded bg-secondary text-secondary-foreground flex items-center justify-center">Secondary</div>
                    <div className="h-20 rounded bg-accent text-accent-foreground flex items-center justify-center">Accent</div>
                    <div className="h-20 rounded bg-destructive text-destructive-foreground flex items-center justify-center">Destructive</div>
                    <div className="h-20 rounded bg-muted text-muted-foreground flex items-center justify-center">Muted</div>
                    <div className="h-20 rounded bg-card text-card-foreground border flex items-center justify-center">Card</div>
                    <div className="h-20 rounded bg-popover text-popover-foreground border flex items-center justify-center">Popover</div>
                </div>
            </section>
        </div>
    );
}
