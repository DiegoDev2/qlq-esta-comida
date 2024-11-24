import Image from 'next/image';
export default function Pepsi() {
  return (
    <main className="h-screen max-w-screen-2xl flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-40 max-w-screen-2xl -left-32 w-auto h-full">
        <Image
          src="/doodle2.svg"
          alt="Lines"
          width={500}
          height={500}
          className="object-cover opacity-30"
          style={{
            maskImage: 'linear-gradient(black 60%, transparent)',
          }}
        />
      </div>
        <div className="container max-w-screen-xl mx-auto px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-3xl md:text-5xl font-bold">
           Ganador Premios Pepsi 2023
          </h1>
        </div>
        <div className="mt-6 relative md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/PremiosPepsi.jpg"
            alt="Premios Pepsi"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
      
      
    </main>
  );
}