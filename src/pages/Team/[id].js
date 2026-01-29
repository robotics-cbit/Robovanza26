import Image from "next/image";
import Link from "next/link";

export default function TeamMember({ member }) {
    if (!member) {
        return null; // or <div className="animate-pulse">Loading...</div>
    }
    const baseDiv =
        "flex justify-between bg-[url(/card-bg.png)] bg-cover text-white p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300";

    const layoutClass =
        member.position === "President"
            ? "flex-col items-center w-full sm:w-[90%] md:flex-row md:justify-around md:w-[90%] lg:w-[80%] xl:w-[47%]"
            : member.position === "Vice President"
            ? "flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[28%] xl:w-[24%]"
            : ["Joint Secretary", "General Secretary", "Treasurer"].includes(member.position)
            ? "flex-col items-center w-full sm:w-[45%] md:flex-row md:w-[48%] lg:w-[32%] xl:w-[31.4%]"
            : member.position === "Head"
            ? "justify-evenly flex-col items-center w-full sm:w-[90%] md:flex-row md:w-[48%] lg:w-[48%] xl:w-[48.5%]"
            : member.position === "Deputy Head 1"
            ? "flex-col items-center w-full sm:w-[45%] md:w-[23%] lg:w-[20%] xl:w-[18%]"
            : "flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[28%] xl:w-[23%]";

    const imgSize =
        member.position === "President"
            ? { w: 160, h: 160 }
            : ["Joint Secretary", "General Secretary", "Treasurer", "Head"].includes(member.position)
            ? { w: 140, h: 140 }
            : { w: 120, h: 120 };

    return (
        <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseDiv} ${layoutClass}`}
        >
            <Image
                src={member.photo}
                alt={member.name}
                width={imgSize.w}
                height={imgSize.h}
                className="object-cover mb-3 sm:mb-4 rounded-full"
            />

            <div className="flex flex-col items-center text-center">
                <h1 className="orbitron-bold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl mb-1">
                    {member.name}
                </h1>
                <h2 className="exo-2-regular text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-gray-300">
                    {(member.position === "Deputy Head 1" || member.position === "Deputy Head 2"
                        ? "Deputy Head"
                        : member.position
                    ).toUpperCase()}
                </h2>
            </div>
        </Link>
    );
}
