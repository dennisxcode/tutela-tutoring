import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Advantages } from "@/components/sections/Advantages";
import { HomeOverview } from "@/components/sections/HomeOverview";
import { ArchDivider } from "@/components/ArchDivider";
import { Timeline } from "@/components/sections/Timeline";
import { KeyDates } from "@/components/sections/KeyDates";

// The landing page answers, in order: what is this, who are you, why you, what
// exactly do I get and for how much, why does this matter now, and what do I do
// next. Depth (full curriculum, tutors, FAQ) lives on /program; general prep
// information lives on /guides. Chrome (nav + WeChat footer) comes from the
// root layout.
export default function Page() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Advantages num="01" />
      <HomeOverview num="02" />
      <ArchDivider className="py-4" />
      <Timeline num="03" />
      <KeyDates num="04" />
    </>
  );
}
