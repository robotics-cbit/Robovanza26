import Layout from "../layout/Layout";
import Link from "next/link";
import Image from "next/image";

export default function RoboRover() {
  return (
    <Layout>
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[83vh] lg:min-h-[86vh] bg-[url('/Roborover.png')] bg-cover bg-center flex flex-col">
        <Link
          href="/"
          className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-10 exo-2-bold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-black bg-white/60 backdrop-blur border border-white/30 rounded-full"
        >
          ← Back to Home
        </Link>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="bg-white/35 backdrop-blur-s px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-7 lg:px-10 lg:py-8 rounded-full text-center min-w-[80vw] sm:min-w-[70vw] md:min-w-[60vw] lg:min-w-[50vw] max-w-4xl">
            <h1 className="exo-2-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3">
              ROBO ROVER
            </h1>
            <p className="exo-2-regular text-sm sm:text-lg md:text-xl lg:text-2xl">
              CONQUER TERRAIN THROUGH INTELLIGENCE AND INNOVATION
            </p>
          </div>
        </div>

        <div className="flex justify-center pb-6 sm:pb-8 md:pb-10 px-4">
          <Link
            href="/register"
            className="exo-2-bold bg-darkblue text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-md hover:bg-blue-800 transition"
          >
            REGISTRATIONS OPEN SOON →
          </Link>
        </div>
      </section>

      <section className="bg-black text-white py-2 sm:py-2.5 md:py-3 overflow-hidden">
        <p className="exo-2-bold text-center tracking-widest text-xs sm:text-sm md:text-base">
          ADAPT • OVERCOME • ADVANCE <span className="max-sm:hidden">• ADAPT • OVERCOME • ADVANCE</span><span className="max-xl:hidden"> • ADAPT • OVERCOME • ADVANCE • ADAPT • OVERCOME • ADVANCE</span>
        </p>
      </section>

      <section className="bg-[url(/EventsBg.png)] bg-cover py-16 text-white">
        <h2 className="exo-2-bold text-2xl sm:text-3xl md:text-4xl text-center ">
          TOTAL PRIZE POOL : ₹ 12,000
        </h2>

        {/* <div className="flex flex-col md:flex-row gap-20 justify-center items-end">
          <div className="relative">
              <Image
                src="/weight1.png"
                alt="30 lbs category"
                width={380}
                height={380}
                className="object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <p className="exo-2-bold mt-20 text-5xl">30 lbs</p>
                <p className="exo-2-regular text-4xl mb-4">category</p>
                <p className="exo-2-bold text-6xl">₹ 80,000</p>
              </div>
          </div>
          <div className="relative">
              <Image
                src="/weight2.png"
                alt="15 lbs category"
                width={280}
                height={280}
                className="object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <p className="exo-2-bold mt-15 text-3xl">15 lbs</p>
                <p className="exo-2-regular text-2xl mb-3">category</p>
                <p className="exo-2-bold text-4xl">₹ 40,000</p>
              </div>
          </div> 
        </div>*/}
      </section> 

      <section className="bg-black text-white py-2 sm:py-2.5 md:py-3 overflow-hidden">
        <p className="exo-2-bold text-center tracking-widest text-xs sm:text-sm md:text-base">
          ADAPT • OVERCOME • ADVANCE <span className="max-sm:hidden">• ADAPT • OVERCOME • ADVANCE</span><span className="max-xl:hidden"> • ADAPT • OVERCOME • ADVANCE • ADAPT • OVERCOME • ADVANCE</span>
        </p>
      </section> 

      <section className="bg-[url(/EventsBg.png)] bg-cover py-8 sm:py-12 md:py-14 lg:py-16 text-white px-4 sm:px-6">
        <h2 className="exo-2-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12">
          Quick Details
        </h2>
        <ul className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl exo-2-regular list-disc list-inside bg-darkblue-20 p-4 sm:p-6 md:p-8 rounded-lg border-2 sm:border-3 md:border-4 lg:border-5 border-white/30">
          <li>FORMAT: Free for all</li>
          <li>TEAM SIZE: 2 members per side</li>
          <li>TERRAIN: A mix of slopes, obstacles, curves, etc.</li>
          <li>WIN CONDITION: Traverse through the course in the lowest time period</li>
          <li>DRONES: Not allowed (only rovers are permitted)</li>
        </ul>
      </section>

      <section className="bg-black text-white py-2 sm:py-2.5 md:py-3 overflow-hidden">
        <p className="exo-2-bold text-center tracking-widest text-xs sm:text-sm md:text-base">
          ADAPT • OVERCOME • ADVANCE <span className="max-sm:hidden">• ADAPT • OVERCOME • ADVANCE</span><span className="max-xl:hidden"> • ADAPT • OVERCOME • ADVANCE • ADAPT • OVERCOME • ADVANCE</span>
        </p>
      </section>

      <section className="bg-[url(/EventsBg.png)] bg-cover py-8 sm:py-12 md:py-14 lg:py-16 text-white px-4 sm:px-6">
        <h2 className="exo-2-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 md:mb-16">
          KEY SPECIFICATIONS
        </h2>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-14 lg:gap-16 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <Image src="/controller.png" alt="controller" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]" />
                <p className="exo-2-regular text-sm sm:text-base md:text-lg lg:text-xl max-w-sm">
                  CONTROL: Wired or Wireless
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <Image src="/weapons.png" alt="weapons" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]" />
                <p className="exo-2-regular text-sm sm:text-base md:text-lg lg:text-xl max-w-sm">
                  WEAPONS/GRIPPERS: Not allowed
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <Image src="/human.png" alt="human" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]" />
                <p className="exo-2-regular text-sm sm:text-base md:text-lg lg:text-xl max-w-sm">
                  HUMAN INTERVENTION: Must be minimum
                </p>
              </div>
            </div>

            {/* CENTER BOT */}
            <div className="flex justify-center order-first lg:order-none">
              <Image
                src="/center-combact-bot.png"
                alt="combat bot in center"
                width={1000}
                height={1000}
                className="drop-shadow-[0_0_30px_rgba(0,0,0,0.7)] w-64 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] h-auto"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-row lg:flex-row-reverse text-left lg:text-right">
                <Image src="/dimensions.png" alt="size" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]" />
                <p className="exo-2-regular text-sm sm:text-base md:text-lg lg:text-xl max-w-sm">
                  SIZE: 30cm x 30cm x 30cm
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-row lg:flex-row-reverse text-left lg:text-right">
                <Image src="/weight.png" alt="weight" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]" />
                <p className="exo-2-regular text-sm sm:text-base md:text-lg lg:text-xl max-w-sm">
                  WEIGHT: 5kg maximum
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-row lg:flex-row-reverse text-left lg:text-right">
                <Image src="/voltage.png" alt="battery" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]" />
                <p className="exo-2-regular text-sm sm:text-base md:text-lg lg:text-xl max-w-sm">
                  VOLTAGE: ≤ 12.56V DC (3S)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-2 sm:py-2.5 md:py-3 overflow-hidden">
        <p className="exo-2-bold text-center tracking-widest text-xs sm:text-sm md:text-base">
          ADAPT • OVERCOME • ADVANCE <span className="max-sm:hidden">• ADAPT • OVERCOME • ADVANCE</span><span className="max-xl:hidden"> • ADAPT • OVERCOME • ADVANCE • ADAPT • OVERCOME • ADVANCE</span>
        </p>
      </section>

      <section className="bg-[url(/EventsBg.png)] bg-cover bg-center py-10 sm:py-14 md:py-16 lg:py-20 text-white px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Title */}
          <h2 className="exo-2-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">
            DOWNLOAD RULEBOOK
          </h2>

          {/* Description */}
          <p className="exo-2-regular text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10 px-2">
            COMPLETE TECHNICAL SPECIFICATIONS, SAFETY RULES AND COMPETITION
            GUIDELINES CAN BE FOUND IN RULEBOOK
          </p>

          {/* Download button */}
          <a
            href="/Robo-Rover-Rulebook.pdf"
            download
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#000C5C] border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-lg md:text-xl
                      exo-2-regular hover:bg-white hover:text-blue-900 transition"
          >
            Download Rulebook
          </a>

        </div>
      </section>
    </Layout>
  );
}
