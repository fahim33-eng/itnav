import HeroCarousel from '@/components/HeroCarousel';
import MessageSection from '@/components/MessageSection';
import InterviewSection from '@/components/InterviewSection';
import GoodPointsSection from '@/components/GoodPointsSection';
import { getHomeData } from '@/lib/api';
import EntrySection from '@/components/EntrySection';
import SideText from '@/components/SideText';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const data = await getHomeData();

  return (
    <div className="pt-12 md:pt-14 lg:pt-16">
      <SideText />
      <HeroCarousel />
      <MessageSection 
        title={data.message.title}
        content={data.message.content}
        link={data.message.link}
      />
      <InterviewSection />
      <GoodPointsSection />
      <EntrySection />
    </div>
  );
}
