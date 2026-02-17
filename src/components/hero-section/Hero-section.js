import Link from "next/link"
import Image from "next/image"
import LetterGlitch from "./LetterGlitch"
import CountdownTimer from "./CountdownTimer"
import Particles from "./Particles"
import RippleGrid from "./RippleGrid"
import LightRays from "./LightRays"
import LiveMarquee from "@/components/LiveMarquee";

export default function Hero(){
    

    return(
        <div className="bg-darkblue text-white">
            <section className="w-full h-full relative">
                <div className="absolute inset-0 w-full h-full">
                    {/* <LetterGlitch 
                        glitchSpeed={50}
                        centerVignette={true}
                        outerVignette={true}
                        smooth={true}
                    /> */}
                    {/* <LetterGlitch 
                        glitchSpeed={50}
                        centerVignette={true}
                        outerVignette={true}
                        smooth={true}
                    /> */}
                    <div className="w-screen h-[90vh] md:h-[1080px] relative">
                        <LightRays
                            raysOrigin="top-center"
                            raysColor="#ffffff"
                            raysSpeed={0.7}
                            lightSpread={0.6}
                            rayLength={2.1}
                            pulsating={false}
                            fadeDistance={1.5}
                            saturation={1.1}
                            followMouse={false}
                            mouseInfluence={0}
                            noiseAmount={0}
                            distortion={0}
                        />
                    </div>
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center h-[90vh] text-white bg-darkblue/60">
                    <div className="max-sm:text-4xl max-md:text-5xl md:text-6xl text-bold text-center bruno-ace-sc">ROBOVANZA 9.0</div>
                    <div className="text-2xl text-center font-Exo2  font-light font-stretch-ultra-expanded">17th and 18th February 2026</div>
                    
                    {/* Countdown Timer */}
                    {/* <CountdownTimer targetDate="2026-02-17T00:00:00" /> */}

                    <div className="text-lg sm:text-2xl text-center mt-5 mb-5 uppercase font-Exo2">Flagship event by Robotics and Innovation Club CBIT</div>
                    {/* <hr className="border-2 border-white"></hr> */}
                    <div className="flex font-Exo2 flex-row justify-between text-base sm:text-xl mt-3 mb-3 uppercase border-t-3 border-white p-5 pb-30">
                        <div className="sm:ml-14 max-sm:text-center border-r-3 border-white pr-3 transition-transform duration-200 ease-in-out hover:scale-105">
                            <Link href='https://forms.gle/nyHcV1cd6skRVfBNA' target="_blank">Register Now</Link>
                        </div>
                        <div className="sm:mr-14 max-sm:text-center border-l-3 border-white pl-3 transition-transform duration-200 ease-in-out hover:scale-105">
                            <Link href='#Events'>Explore Events</Link>
                        </div>
                    </div>
                    <LiveMarquee/>
                </div>
            </section>
            <div className="p-5 px-5 py-2 relative">
                <div className="absolute inset-0 w-full h-full">
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={2000}
                        particleSpread={10}
                        speed={0.2}
                        particleBaseSize={100}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="m-2 px-4 lg:pl-10 lg:pr-10 w-full lg:w-1/2 pl-0">
                        <div className="text-xl font-Exo2 font-bold text-center p-2">What is Robovanza?</div>
                        <div className="text-sm md:text-base text-justify leading-relaxed p-2 ">
                            <p>
                            ROBOVANZA is the flagship event of CBIT, organized by the Robotics and
                            Innovation Club. As a part of SUDHEE – The Annual Technical Fest of CBIT,
                            ROBOVANZA is one of the most anticipated technical events that celebrates
                            creativity, problem-solving, and innovation in the field of robotics.
                            The fest brings together students from various colleges to compete, collaborate,
                            and showcase their engineering skills through exciting events like Robo Sumo,
                            Robo Soccer, Line Follower, and many more. Each competition challenges
                            participants to design and build robots that test their technical expertise and
                            teamwork.
                            The spirit of ROBOVANZA lies in its mission to promote innovation, technical
                            learning, and hands-on experience among budding engineers.
                            With every edition, the fest continues to grow, inspiring students to explore the
                            world of robotics while creating an environment that blends learning, competition,
                            and fun.
                            </p>
                        </div>
                    </div>
                    <div className="m-2 px-4 lg:pl-10 lg:pr-10 w-full lg:w-1/2 pl-0">
                        <div className="text-xl font-Exo2 font-bold text-center p-2">About us</div>
                        {/* <hr className="border-2 border-white"></hr> */}
                        <div className="text-sm md:text-base text-justify leading-relaxed p-2">
                            <p>
                                The Robotics and Innovation (R&I) Club of CBIT is one of the most active and
                                respected technical clubs on campus. It provides students with a platform to
                                explore robotics through creativity, teamwork, and hands-on learning. The club
                                encourages members to experiment with ideas, design innovative prototypes, and
                                develop real-world engineering solutions. By bringing students from
                                various branches, it fosters collaboration and continuous learning while keeping
                                members updated with the latest trends and technologies in the field.
                                In recent years, the club has made significant strides in combat robotics, earning
                                top positions at prestigious national-level fests such as BITS ATMOS, SNIST
                                (2023), and several other intercollegiate competitions. With
                                expert mentorship and a focus on practical experience, the R&I Club continues to
                                inspire students to push boundaries and take confident steps toward impactful
                                careers in robotics and automation.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="Events">
                <div className="uppercase bruno-ace-sc text-3xl text-center font-bold pb-10 pt-10"> 
                    <span className="border-b-5 border-b-blue-900">Our Events</span>
                </div>

                {/* RoboWars */}
                <div className="">
                    <div className="font-Exo2 text-2xl text-center m-3 mt-5">1. ROBOWARS</div>
                    <div>
                        <div className="h-[250px] sm:h-[250px] md:h-[300px] xl:h-[500px] relative w-full">
                            <Image
                            src={'/Robowars.png'}
                            alt=''
                            fill
                            className="object-cover"/>
        
                            <div className="sm:p-7 xl:p-14 z-40 pb-3 sm:pt-6 relative w-full h-full items-center text-xs md:text-sm">
                                <div className="flex flex-row justify-between">
                                <div className="border-white border-2 bg-darkblue-20 max-sm:m-3 max-sm:mt-10">
                                    <div className="p-2 sm:p-5 ">
                                        <p className="m-2">
                                            RoboWars is the ultimate arena where power, strategy, and innovation collide. Teams design, build, and unleash remote-controlled combat robots into the battleground where precision, control, and raw engineering determine survival. Every match is a test of endurance, intelligence, and mechanical dominance.
                                        </p>
                                        <p className="m-2 hidden sm:block lg:hidden xl:block">
                                            The goal is relentless—outthink, overpower, and disable your opponent to be the last robot standing. In the heat of combat, participants must react instantly, adapt strategies on the fly, and push their machines beyond their limits.
                                        </p>
                                        <p className="m-2 max-xl:hidden">
                                            RoboWars brings together multiple engineering disciplines, from mechanical design and electronics to control systems and tactical planning. Every bolt, circuit, and line of code matters. More than a fight between robots, RoboWars is a clash of ideas, creativity, and determination—may the boldest designs and sharpest minds emerge victorious.
                                        </p>
                                    </div>
                                    <div className="flex flex-row max-lg:hidden justify-between gap-4 p-4  pt-0 text-sm sm:text-base">
                                        <div className="pl-5">
                                            <div className="pb-1 font-semibold">Prize Pool:</div>
                                            <div>₹ 50,000</div>
                                        </div>

                                        <div>
                                            <div className="pb-1 font-semibold">Team Size:</div>
                                            <div>No limit (3 near arena)</div>
                                        </div>

                                        <div className="pr-5">
                                            <div className="pb-1 font-semibold">Robot Specifications:</div>
                                            <div>
                                                Dimensions are unrestricted<br />
                                                3lbs weight<br />
                                                <span className="max-xl:hidden">Wired/Wireless</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex justify-center sm:justify-end">
                                    <Link href={'/RoboWars'}>
                                        <div className="flex flex-row z-40 sm:m-5 font-bold items-center">
                                            <svg width="79.5" height="18.5" viewBox="0 0 159 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M157.768 20.1774C158.744 19.2011 158.744 17.6182 157.768 16.6419L141.858 0.731998C140.882 -0.244312 139.299 -0.244312 138.322 0.731998C137.346 1.70831 137.346 3.29122 138.322 4.26753L152.464 18.4097L138.322 32.5518C137.346 33.5281 137.346 35.111 138.322 36.0873C139.299 37.0636 140.882 37.0636 141.858 36.0873L157.768 20.1774ZM0 18.4097V20.9097H156V18.4097V15.9097H0V18.4097Z" fill="white"/>
                                            </svg>
                                            <p className="pl-2 text-lg font-Exo2 ">LEARN MORE</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Robosoccer */}
                <div className="">
                    <div className="font-Exo2 text-2xl text-center m-3 mt-5">2. ROBOSOCCER</div>
                    <div>
                        <div className="h-[250px] sm:h-[250px] md:h-[300px] xl:h-[500px] relative w-full">
                            <Image
                            src={'/Robosoccer.png'}
                            alt=''
                            fill
                            className="object-cover"/>
        
                            <div className="sm:p-7 xl:p-14 z-40 pb-3 sm:pt-6 relative w-full h-full items-center text-xs md:text-sm">
                                <div className="flex flex-row justify-between">
                                <div className="border-white border-2 bg-darkblue-20 max-sm:m-3 max-sm:mt-10">
                                    <div className="p-2 sm:p-5 ">
                                        <p className="m-2">
                                            The thrilling fusion of speed, strategy and precision is Robosoccer. Teams design and control agile robots to compete in an intense game of robotic football, where every pass, block, and goal demands flawless coordination and control. In this fast-paced arena, with quick reflexes and smart tactics decide the outcome.
                                        </p>
                                        <p className="m-2 hidden sm:block lg:hidden xl:block">
                                            The objective is simple but challenging—outmaneuver the opposition, dominate the field, and score decisive goals. Success depends on sharp control, robust mechanical design, and the ability to adapt strategies in real time.
                                        </p>
                                        <p className="m-2 max-xl:hidden">
                                            RoboSoccer blends mechanical engineering, electronics, and control systems with tactical gameplay. From rapid movement and accurate ball handling to reliable communication and control, every element matters. More than just a game, RoboSoccer is a thrilling test of teamwork, innovation, and engineering skill—where precision meets passion on the field.
                                        </p>
                                    </div>
                                    <div className="flex flex-row max-lg:hidden justify-between gap-4 p-4  pt-0 text-sm sm:text-base">
                                        <div className="pl-5">
                                            <div className="pb-1 font-semibold">Prize Pool:</div>
                                            <div>₹ 20,000</div>
                                        </div>

                                        <div>
                                            <div className="pb-1 font-semibold">Team Size:</div>
                                            <div>No limit (4 near arena)</div>
                                        </div>

                                        <div className="pr-5">
                                            <div className="pb-1 font-semibold">Robot Specifications:</div>
                                            <div>
                                                30cm x 30cm x 30cm<br />
                                                5kg maximum<br />
                                                <span className="max-xl:hidden">Wired/Wireless</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex justify-center sm:justify-end">
                                    <Link href={'/RoboSoccer'}>
                                        <div className="flex flex-row z-40 sm:m-5 font-bold items-center">
                                            <svg width="79.5" height="18.5" viewBox="0 0 159 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M157.768 20.1774C158.744 19.2011 158.744 17.6182 157.768 16.6419L141.858 0.731998C140.882 -0.244312 139.299 -0.244312 138.322 0.731998C137.346 1.70831 137.346 3.29122 138.322 4.26753L152.464 18.4097L138.322 32.5518C137.346 33.5281 137.346 35.111 138.322 36.0873C139.299 37.0636 140.882 37.0636 141.858 36.0873L157.768 20.1774ZM0 18.4097V20.9097H156V18.4097V15.9097H0V18.4097Z" fill="white"/>
                                            </svg>
                                            <p className="pl-2 text-xl font-Exo2 ">LEARN MORE</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Robosumo */}
                <div className="">
                    <div className="font-Exo2 text-2xl text-center m-3 mt-5">3. ROBOSUMO</div>
                    <div>
                        <div className="h-[250px] sm:h-[250px] md:h-[300px] xl:h-[500px] relative w-full">
                            <Image
                            src={'/Robosumo.png'}
                            alt=''
                            fill
                            className="object-cover"/>
        
                            <div className="sm:p-7 xl:p-14 z-40 pb-3 sm:pt-6 relative w-full h-full items-center text-xs md:text-sm">
                                <div className="flex flex-row justify-between">
                                <div className="border-white border-2 bg-darkblue-20 max-sm:m-3 max-sm:mt-10">
                                    <div className="p-2 sm:p-5 ">
                                        <p className="m-2">
                                            RoboSumo is the ultimate test of strength, balance, and control, where engineering power meets endurance. Teams design compact, high-torque robots to battle within the arena, aiming to push or force their opponent out of the ring.
                                        </p>
                                        <p className="m-2 hidden sm:block lg:hidden xl:block">
                                            Winning demands optimized torque, flawless control, and strategic use of mass and motion. Every match challenges participants to think quickly, react instantly, and adapt their strategy under pressure.
                                        </p>
                                        <p className="m-2 max-xl:hidden">
                                            RoboSumo emphasizes on traction optimization, motor control, and efficient power management. From chassis design and weight distribution to grip and responsiveness, every design choice plays a critical role. More than a contest of force, RoboSumo is a battle of intelligent design, resilience, and precision.
                                        </p>
                                    </div>
                                    <div className="flex flex-row max-lg:hidden justify-between gap-4 p-4  pt-0 text-sm sm:text-base">
                                        <div className="pl-5">
                                            <div className="pb-1 font-semibold">Prize Pool:</div>
                                            <div>₹ 20,000</div>
                                        </div>

                                        <div>
                                            <div className="pb-1 font-semibold">Team Size:</div>
                                            <div>No limit (3 near arena)</div>
                                        </div>

                                        <div className="pr-5">
                                            <div className="pb-1 font-semibold">Robot Specifications:</div>
                                            <div>
                                                30cm x 30cm x 30cm<br />
                                                5kg maximum<br />
                                                <span className="max-xl:hidden">Wired/Wireless</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex justify-center sm:justify-end">
                                    <Link href={'/RoboSumo'}>
                                        <div className="flex flex-row z-40 sm:m-5 font-bold items-center">
                                            <svg width="79.5" height="18.5" viewBox="0 0 159 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M157.768 20.1774C158.744 19.2011 158.744 17.6182 157.768 16.6419L141.858 0.731998C140.882 -0.244312 139.299 -0.244312 138.322 0.731998C137.346 1.70831 137.346 3.29122 138.322 4.26753L152.464 18.4097L138.322 32.5518C137.346 33.5281 137.346 35.111 138.322 36.0873C139.299 37.0636 140.882 37.0636 141.858 36.0873L157.768 20.1774ZM0 18.4097V20.9097H156V18.4097V15.9097H0V18.4097Z" fill="white"/>
                                            </svg>
                                            <p className="pl-2 text-xl font-Exo2 ">LEARN MORE</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Roborover */}
                <div className="">
                    <div className="font-Exo2 text-2xl text-center m-3 mt-5">4. ROBOROVER</div>
                    <div>
                        <div className="h-[250px] sm:h-[250px] md:h-[300px] xl:h-[480px] relative w-full">
                            <Image
                            src={'/Roborover.png'}
                            alt=''
                            fill
                            className="object-cover"/>
        
                            <div className="sm:p-7 xl:p-14 z-40 pb-3 sm:pt-6 relative w-full h-full items-center text-xs md:text-sm">
                                <div className="flex flex-row justify-between">
                                <div className="border-white border-2 bg-darkblue-20 max-sm:m-3 max-sm:mt-3">
                                    <div className="p-2 sm:p-5 ">
                                        <p className="m-2">
                                            RoboRover is a true test of autonomy and intelligent navigation. Teams design rugged robotic rovers capable of traversing challenging terrains, overcoming obstacles, and performing tasks in unpredictable environments where precision and adaptability are critical.
                                        </p>
                                        <p className="m-2 hidden sm:block lg:hidden xl:block">
                                            The challenge demands more than movement alone—success depends on accurate sensing, efficient control, and strategic decision-making. Participants must navigate rough surfaces, steep inclines, and complex paths while maintaining stability and control under real-world constraints.
                                        </p>
                                        <p className="m-2 max-xl:hidden">
                                            RoboRover emphasizes core robotics engineering principles, including sensor integration, motor control, power management, and path planning. From robust mechanical design and traction optimization to responsive control systems and reliable communication, every component plays a vital role. More than a race, RoboRover is a demonstration of resilience, adaptability, and engineering ingenuity.
                                        </p>
                                    </div>
                                    <div className="flex flex-row max-lg:hidden justify-between gap-4 p-4  pt-0 text-sm sm:text-base">
                                        <div className="pl-5">
                                            <div className="pb-1 font-semibold">Prize Pool:</div>
                                            <div>₹ 12,000</div>
                                        </div>

                                        <div>
                                            <div className="pb-1 font-semibold">Team Size:</div>
                                            <div>No limit (2 near arena)</div>
                                        </div>

                                        <div className="pr-5">
                                            <div className="pb-1 font-semibold">Robot Specifications:</div>
                                            <div>
                                                31cm x 31cm x 31cm <br />
                                                4kg maximum<br />
                                                <span className="max-xl:hidden">Wired/Wireless</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex justify-center sm:justify-end">
                                    <Link href={'/RoboRover'}>
                                        <div className="flex flex-row z-40 sm:m-5 font-bold items-center">
                                            <svg width="79.5" height="18.5" viewBox="0 0 159 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M157.768 20.1774C158.744 19.2011 158.744 17.6182 157.768 16.6419L141.858 0.731998C140.882 -0.244312 139.299 -0.244312 138.322 0.731998C137.346 1.70831 137.346 3.29122 138.322 4.26753L152.464 18.4097L138.322 32.5518C137.346 33.5281 137.346 35.111 138.322 36.0873C139.299 37.0636 140.882 37.0636 141.858 36.0873L157.768 20.1774ZM0 18.4097V20.9097H156V18.4097V15.9097H0V18.4097Z" fill="white"/>
                                            </svg>
                                            <p className="pl-2 text-xl font-Exo2 ">LEARN MORE</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Line follower */}
                <div className="">
                    <div className="font-Exo2 text-2xl text-center m-3 mt-5">5. LINE FOLLOWER</div>
                    <div>
                        <div className="h-[250px] sm:h-[250px] md:h-[300px] xl:h-[435px] relative w-full">
                            <Image
                            src={'/Linefollower.png'}
                            alt=''
                            fill
                            className="object-cover"/>
        
                            <div className="sm:p-7 xl:p-14 z-40 pb-3 sm:pt-6 relative w-full h-full items-center text-xs md:text-sm">
                                <div className="flex flex-row justify-between">
                                <div className="border-white border-2 bg-darkblue-20 max-sm:m-3 max-sm:mt-10">
                                    <div className="p-2 sm:p-5 ">
                                        <p className="m-2">
                                            Line Follower is a battle of precision, speed, and control.Teams design autonomous robots capable of sensing, interpreting, and responding to the line in real time while maintaining stability at high speeds.
                                        </p>
                                        <p className="m-2 hidden sm:block lg:hidden xl:block">
                                            Success depends on efficient sensor calibration, optimized control algorithms, and precise motor coordination. Participants must balance speed with accuracy, making split-second adjustments to navigate curves, intersections and sharp turns.
                                        </p>
                                        <p className="m-2 max-xl:hidden">
                                            Line Follower emphasizes fundamental robotics principles such as sensor integration, feedback control, and algorithm optimization. From tuning PID controllers to refining mechanical alignment and weight distribution, every detail matters. Beyond speed, Line Follower rewards precision, control, and flawless execution.
                                        </p>
                                    </div>
                                    <div className="flex flex-row max-lg:hidden justify-between gap-4 p-4  pt-0 text-sm sm:text-base">
                                        <div className="pl-5">
                                            <div className="pb-1 font-semibold">Prize Pool:</div>
                                            <div>₹ 12,000</div>
                                        </div>

                                        <div>
                                            <div className="pb-1 font-semibold">Team Size:</div>
                                            <div>No limit (2 near arena)</div>
                                        </div>

                                        <div className="pr-5">
                                            <div className="pb-1 font-semibold">Robot Specifications:</div>
                                            <div>
                                                30cm x 30cm x 30cm<br />
                                                Autonomous only
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex justify-center sm:justify-end">
                                    <Link href={'/LineFollower'}>
                                        <div className="flex flex-row z-40 sm:m-5 font-bold items-center">
                                            <svg width="79.5" height="18.5" viewBox="0 0 159 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M157.768 20.1774C158.744 19.2011 158.744 17.6182 157.768 16.6419L141.858 0.731998C140.882 -0.244312 139.299 -0.244312 138.322 0.731998C137.346 1.70831 137.346 3.29122 138.322 4.26753L152.464 18.4097L138.322 32.5518C137.346 33.5281 137.346 35.111 138.322 36.0873C139.299 37.0636 140.882 37.0636 141.858 36.0873L157.768 20.1774ZM0 18.4097V20.9097H156V18.4097V15.9097H0V18.4097Z" fill="white"/>
                                            </svg>
                                            <p className="pl-2 text-xl font-Exo2 ">LEARN MORE</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Project Expo */}
                <div className="">
                    <div className="font-Exo2 text-2xl text-center m-3 mt-5">6. PROJECT EXPO</div>
                    <div>
                        <div className="h-[250px] sm:h-[250px] md:h-[300px] xl:h-[435px] relative w-full">
                            <Image
                            src={'/ProjectExpo.jpeg'}
                            alt=''
                            fill
                            className="object-cover"/>
        
                            <div className="sm:p-7 xl:p-14 z-40 pb-3 sm:pt-6 relative w-full h-full items-center text-xs md:text-sm">
                                <div className="flex flex-row justify-between">
                                <div className="border-white border-2 bg-darkblue-20 max-sm:m-3 max-sm:mt-10">
                                    <div className="p-2 sm:p-5 ">
                                        <p className="m-2">
                                        The Robotics Project Expo is a platform designed to showcase innovation, creativity, and technical excellence in the field of robotics and automation. It provides young innovators with the opportunity to transform ideas into impactful technological solutions.
                                        </p>
                                        <p className="m-2 hidden sm:block lg:hidden xl:block">
                                            This event brings together aspiring engineers and creators to present original robotic projects aimed at solving real-world problems. Participants demonstrate their work in a competitive yet collaborative environment that encourages learning and knowledge sharing.
                                        </p>
                                        <p className="m-2 max-xl:hidden">
                                            Participants will showcase their projects before a panel of expert judges, engage with fellow robotics enthusiasts, and receive valuable feedback. The expo not only highlights technical skill but also fosters innovation, confidence, and growth within the robotics community.
                                        </p>
                                    </div>
                                    <div className="flex flex-row max-lg:hidden justify-between gap-4 p-4  pt-0 text-sm sm:text-base">
                                        <div className="pl-5">
                                            <div className="pb-1 font-semibold">Prize Pool:</div>
                                            <div>₹ 7,500</div>
                                        </div>

                                        <div>
                                            <div className="pb-1 font-semibold">Team Size:</div>
                                            <div>2-4 members</div>
                                        </div>

                                        
                                    </div>
                                    </div>
                                </div>
                                <div className="flex justify-center sm:justify-end">
                                    <Link href={'/ProjectExpo'}>
                                        <div className="flex flex-row z-40 sm:m-5 font-bold items-center">
                                            <svg width="79.5" height="18.5" viewBox="0 0 159 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M157.768 20.1774C158.744 19.2011 158.744 17.6182 157.768 16.6419L141.858 0.731998C140.882 -0.244312 139.299 -0.244312 138.322 0.731998C137.346 1.70831 137.346 3.29122 138.322 4.26753L152.464 18.4097L138.322 32.5518C137.346 33.5281 137.346 35.111 138.322 36.0873C139.299 37.0636 140.882 37.0636 141.858 36.0873L157.768 20.1774ZM0 18.4097V20.9097H156V18.4097V15.9097H0V18.4097Z" fill="white"/>
                                            </svg>
                                            <p className="pl-2 text-xl font-Exo2 ">LEARN MORE</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


                </div>


            </div>
        </div>
    )
}
