import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";
import { Cta } from "@/components/Cta";
import { Cta2 } from "@/components/Cta2";
import WhatWeOffer from "@/components/WhatWeOffer";
import { HowItWork } from "@/components/HowItWorks/HowItWork";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionTitle
        // preTitle="Nextly Benefits"
        title=" What we Offer?"
      >
        in virtual space through communication platforms. Durable relations that
        extend beyond immediate genealogical ties.
      </SectionTitle>
      <WhatWeOffer />
      <HowItWork />
      <SectionTitle title="Our plans scale with your product">
        in virtual space through communication platforms.
      </SectionTitle>
      <Pricing />

      <SectionTitle title="What Our Clients Say About Us">
        Community devlopment is often linked with community work or community
        planning, and may involve stakeholders, foundations,
      </SectionTitle>
      <Testimonials />
      <Cta />
    </div>
  );
}
