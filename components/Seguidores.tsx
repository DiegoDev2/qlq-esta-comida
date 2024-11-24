import { Inter } from 'next/font/google';
import NumberTicker from "@/components/ui/number-ticker";
const inter = Inter({ subsets: ['latin'] });

export default function Seguidores() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Seguidores</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-center">
            <div className={`text-6xl font-extrabold ${inter.className}`}>+<NumberTicker value={381} className='text-[#fceccb]'/>K</div>
            <div className="text-lg text-white">Instagram</div>
          </div>
          <div className="text-center">
            <div className={`text-6xl font-extrabold ${inter.className}`}>+<NumberTicker decimalPlaces={1.2} className='text-[#fceccb]' value={1.2}/>M</div>
            <div className="text-lg text-white">TikTok</div>
          </div>
          <div className="text-center">
            <div className={`text-6xl font-extrabold ${inter.className}`}>+<NumberTicker value={52} className='text-[#fceccb]'/>K</div>
            <div className="text-lg text-white">YouTube</div>
          </div>
        </div>
      </div>
    </section>
  );
}
