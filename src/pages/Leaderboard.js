import Layout from "../layout/Layout"


export default function Home(){
    return(
        <div className="w-full">
            <Layout>
            {/* ROBOWARS */}
            <section className="bg-darkblue text-white px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-8 lg:py-12 xl:px-12 xl:py-16 w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-b-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 pb-3 sm:pb-4 md:pb-6 lg:pb-8">
                        <h1 className="exo-2-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide">ROBOWARS</h1>
                    </div>
                    
                    <div className="rounded-md sm:rounded-lg shadow-md sm:shadow-lg md:shadow-xl">
                        <table className="w-full border-collapse table-fixed">
                            <thead>
                                <tr className="bg-white/20">
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[15%] sm:w-[12%]">Match No.</th>
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[28%]">Team A</th>
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[28%]">Team B</th>
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[29%] sm:w-[32%]">Winning Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td colSpan={4} className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-xl text-center">Awaiting Match Results</td>
                                </tr>
                                {/* <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Team A1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Team B1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Team A1</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ROBOSOCCER */}
            <section className="bg-darkblue text-white px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-8 lg:py-12 xl:px-12 xl:py-16 w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-b-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 pb-3 sm:pb-4 md:pb-6 lg:pb-8">
                        <h1 className="exo-2-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide">ROBOSOCCER</h1>
                    </div>
                    
                    <div className="rounded-md sm:rounded-lg shadow-md sm:shadow-lg md:shadow-xl">
                        <table className="w-full border-collapse table-fixed">
                            <thead>
                                <tr className="bg-white/20">
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[15%] sm:w-[12%]">Match No.</th>
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[28%]">Team A</th>
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[28%]">Team B</th>
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[29%] sm:w-[32%]">Winning Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td colSpan={4} className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-xl text-center font-bold">Round 1</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Phantom Bots</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Kasukabe Defense Force</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Phantom Bots</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrabotz-Arnav</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Gigacrushers</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Hydrabotz-Arnav</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">3</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Triobotx</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Dracobotz</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Triobotx</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">4</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Imec</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">ESC</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Imec</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">5</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">DS Robotics</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrabotz-Venkat</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">DS  Robotics</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">6</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Mech Fusion</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Titanbotz</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Mech Fusion</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td colSpan={4} className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-xl text-center font-bold">Round 2</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">6</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Imec-2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Mech Fusion</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Mech Fusion</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">7</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Imec-1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrobotz-Achyuth</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Hydrobotz-Achyuth</td>
                                </tr>
                                
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td colSpan={4} className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-xl text-center font-bold">Round 3</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">8</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Mech Fusion</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrobotz-Achyuth</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Hydrobotz-Achyuth</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">9</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">DS Robotics</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Triobotx</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">DS Robotics</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td colSpan={4} className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-xl text-center font-bold">Finals</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">10</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">DS Robotics</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrabotz-Achyuth</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">DS Robotics</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ROBOSUMO */}
            <section className="bg-darkblue text-white px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-8 lg:py-12 xl:px-12 xl:py-16 w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-b-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 pb-3 sm:pb-4 md:pb-6 lg:pb-8">
                        <h1 className="exo-2-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide">ROBOSUMO</h1>
                    </div>
                    
                    <div className="rounded-md sm:rounded-lg shadow-md sm:shadow-lg md:shadow-xl">
                        <table className="w-full border-collapse table-fixed">
                            <thead>
                                <tr className="bg-white/20">
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[15%] sm:w-[12%]">Match No.</th>
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[28%]">Team A</th>
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[28%]">Team B</th>
                                    <th className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold w-[29%] sm:w-[32%]">Winning Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td colSpan={4} className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-xl text-center font-bold">Round 1</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Imec-2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Draco botz</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Imec-2</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Triobotx</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Ese</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Triobotx</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">3</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Sudharshan Chakra</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Phantom Botz</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Phantom Botz</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">4</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Giga Crushers</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Titan Botz</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Titan Botz</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">5</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Mech Fusion</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrobotz-Arnav</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Mech Fusion</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">6</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrobotz-Venkat</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Titan Botz - 2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Titan Botz - 2</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">7</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrobotz-Prashanth</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Imec-1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Imec-1</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">8</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrobotz-Arjun</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Technobotz</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Technobotz</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">9</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">ESC-2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">DS Robotics-2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">DS Robotics-2</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">10</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrabotz-Naveen</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Tribotz-2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Hydrabotz-Naveen</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">11</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrabotz-Anudeep</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">DS Robotics-1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Hydrabotz-Anudeep</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">12</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">DS Robotics-1 </td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrabotz-Anudeep</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Hydrabotz-Anudeep</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td colSpan={4} className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-xl text-center font-bold">Round 2</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">13</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Imec-1 </td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Technobots</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Imec-1</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">14</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Mech Fusion </td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Titanbotz</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Titanbotz</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">15</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrobotz-Anudeep</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Titanbotz-2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Titanbotz-2</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">16</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">DS robotics</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrobotz-Naveen</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">DS robotics</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">17</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Imec-2</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Phantom Botz</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Imec-2</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td colSpan={4} className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-xl text-center font-bold">Round 3</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">18</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Triobotz</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrabotz-Achyuth</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Hydrabotz-Achyuth</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">19</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Imec-1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Hydrabotz-Achyuth</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Imec-1</td>
                                </tr>
                                <tr className="hover:bg-white/10 active:bg-white/15 transition-colors duration-200">
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">19</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">DS Robotics</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Titanbotz-1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Titanbotz-1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ROBOROVER */}
            {/* <section className="bg-darkblue text-white px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-8 lg:py-12 xl:px-12 xl:py-16 min-h-screen w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-5 border-b-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 pb-3 sm:pb-4 md:pb-6 lg:pb-8">
                        <h1 className="exo-2-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide">ROBOROVER</h1>
                    </div>
                </div>
            </section> */}
            </Layout>
        </div>
    )
}