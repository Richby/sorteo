import { Hero } from "@/components/features/hero";
import { Services } from "@/components/features/services";
import { HardwarePreview } from "@/components/features/hardware-preview";
import { Contact } from "@/components/features/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HardwarePreview />
      <Contact />
    </>
  );
}
