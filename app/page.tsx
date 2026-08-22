import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Advantages } from "@/components/sections/Advantages";
import { HomeOverview } from "@/components/sections/HomeOverview";
import { ArchDivider } from "@/components/ArchDivider";
import { Timeline } from "@/components/sections/Timeline";
import { HomeGuides } from "@/components/sections/HomeGuides";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { KeyDates } from "@/components/sections/KeyDates";

// The landing page answers, in order: what is this, who are you, why you, what
// exactly do I get and for how much, why does this matter now, what do parents
// usually ask, and what do I do next. The guides and the FAQ appear here in
// preview — enough to answer a parent who will not click, and enough text for a
// crawler to see what the page is about — with the full versions on /guides and
// /program. Chrome (nav + WeChat footer) comes from the root layout.
export default function Page() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Advantages num="01" />
      <HomeOverview num="02" />
      <ArchDivider className="py-4" />
      <Timeline num="03" />
      <HomeGuides num="04" />
      <HomeFaq num="05" />
      <KeyDates num="06" />
    </>
  );
}
