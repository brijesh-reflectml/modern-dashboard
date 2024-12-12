import Image from "next/image";

const DashboardHero = () => {
  return (
    <div>
      <section className="container mx-auto px-4 lg:px-8 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl lg:text-8xl font-bold text-white mb-6">
            Unlock your
            <br />
            potential
          </h1>
          <p className="text-3xl text-white my-12">
            'Success is not final, failure is not fatal. it is the courage to
            continue that counts.'
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors uppercase">
              HED CNENT HER
            </button>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Starts from</span>
              <span className="font-medium">95$$ Cure</span>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="absolute -right-40 -top-12 w-[150%] h-[133%] bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-xl opacity-10" />
          <Image
            src="/images/person.png"
            alt="Fitness Trainer"
            width={800}
            height={800}
            className="relative z-10 rounded-2xl w-full h-auto object-cover"
          />
        </div>
      </section>

     
    </div>
  );
};

export default DashboardHero;
