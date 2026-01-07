import {
  Navigation,
  Hero,
  Services,
  Portfolio,
  About,
  Process,
  Testimonials,
  Contact,
  Footer,
} from "@/components";

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

