import TeamMember from './[id]'
import team from '../../data/team.json'
import Layout from '../../layout/Layout'

export default function TeamPage() {
        return (
                <Layout>
                        <div className="bg-darkblue text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 min-h-screen">
                                {Object.entries(team).map(([department, members]) => (
                                        <section key={department} className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
                                                <h2 className="exo-2-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 tracking-wide">
                                                        {department.toUpperCase()}
                                                </h2>
                                
                                                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                                                        {members.map((member, idx) => (
                                                                <TeamMember key={idx} member={member} />
                                                        ))}
                                                </div>
                                        </section>
                                ))}
                        </div>
                </Layout>
        )
}
