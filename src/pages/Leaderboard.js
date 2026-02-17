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
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base text-center">1</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Phantom Bots</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base truncate">Kasukabe Defense Force</td>
                                    <td className="border border-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-yellow-400 truncate">Phantom Bots</td>
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