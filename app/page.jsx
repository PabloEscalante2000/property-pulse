import Hero from "@/components/hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";

export default async function Home() {

  return (
    <>
      <Hero/>
      <InfoBoxes/>
      <HomeProperties/>
    </>
  );
}
