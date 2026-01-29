import Layout from "../layout/Layout";
import Link from "next/link";

export default function AboutUs() {
    return (
        <Layout>
            <div className="bg-darkblue text-white p-5">
                <div className="px-2 sm:px-5 py-3">
                    <div className="mb-6">
                        <span className="orbitron-bold text-lg sm:text-3xl border-b-5 border-b-blue-900">
                            About Us
                        </span>
                    </div>

                    {/*video*/}
                    <div className="">
                        <div className="flex justify-center items-center">
                            <video
                                src="/about-us-video.mp4"
                                controls
                                width="70%"
                                autoPlay
                                muted
                                loop
                                className="rounded max-sm:w-[90vw]"
                            />
                        </div>

                        <div className="w-full space-y-4">
                        <p className="exo-2-regular text sm:text-xl py-2">
                            The Robotics and Innovation Club of Chaitanya Bharathi Institute
                            of Technology (CBIT) was founded in 2011 with a clear mission—to
                            explore and advance the field of robotics from its very
                            fundamentals. From its inception, the club has served as a hub for
                            curious minds passionate about technology, engineering, and
                            innovation. Built on the belief that robotics is not just a
                            technical discipline but also a platform for creativity and
                            problem-solving, the club strives to inspire students to push the
                            boundaries of what machines and human ingenuity can achieve
                            together.
                        </p>
                        <p className="exo-2-regular text sm:text-xl py-2">
                            Central to our mission is the promotion of hands-on learning. The
                            club regularly organizes workshops, training sessions, and
                            interactive demonstrations that provide members with both
                            theoretical foundations and practical experience. These sessions
                            cover a wide range of topics, from basic electronics and
                            programming to advanced concepts such as autonomous navigation,
                            computer vision. By encouraging active
                            participation, we aim to transform classroom knowledge into
                            tangible skills that prepare students for real-world challenges.
                        </p>
                        <p className="exo-2-regular text sm:text-xl py-2">
                            Beyond skill development, the club fosters a spirit of
                            collaboration and healthy competition. Our members regularly
                            represent CBIT in inter-college events and have consistently
                            earned accolades, securing medals at prestigious national
                            institutions. These achievements not only reflect the talent and
                            dedication of our members but also highlight our ability to work
                            as cohesive teams under pressure—an essential quality in the field
                            of robotics. Every victory strengthens our resolve to keep
                            learning, innovating, and aiming higher.
                        </p>
                        <p className="exo-2-regular text sm:text-xl py-2">
                            One of our proudest achievements has been the launch of Robovanza,
                            our own national-level robotics fest. Conceived as a platform to
                            bring together the brightest robotics enthusiasts from across the
                            country, Robovanza has grown into a flagship event of CBIT. The
                            fest features a variety of competitions, workshops, and
                            exhibitions, offering participants the chance to showcase their
                            skills, exchange ideas, and learn from each other. Over the years,
                            it has become a landmark event that celebrates innovation,
                            creativity, and the future of robotics.
                        </p>
                        <p className="exo-2-regular text sm:text-xl py-2">
                            Looking ahead, the Robotics and Innovation Club remains committed
                            to nurturing the next generation of roboticists and innovators.
                            With every workshop, competition, and fest we organize, our aim is
                            to spark curiosity, encourage critical thinking, and inspire a
                            lifelong passion for technological advancement. We believe that by
                            empowering students today, we contribute to shaping a future where
                            robotics plays an integral role in solving some of the world's
                            most pressing challenges.
                        </p>
                        </div>

                        {/* ensure the following content starts below the floated image */}
                        <div className="clear-both" />

                    </div>
                    <div className="flex items-center space-x-3 mt-10 group">
                        <Link
                            href="/Team"
                            className="orbitron-bold text-lg sm:text-3xl border-b-5 border-b-blue-900"
                        >
                            Meet the Team
                        </Link>
                        {/* <img
                            src="about-us-arrow.svg"
                            alt="arrow"
                            className="h-7 w-auto opacity-0 transform translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        /> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
