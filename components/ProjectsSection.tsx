import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Lottery dApp",
    description:
      "(in progress) - Has entry fee and truly random winner selection on Blockchain. Developed using Solidity, Hardhat, Chainlink, and Next.js.",
    image: "/lotto.png",
    github: "https://github.com/abhiram11/Lottery-dApp-using-Hardhat-IPFS-NextJS",
    link: "https://github.com/abhiram11/Lottery-dApp-using-Hardhat-IPFS-NextJS",
  },
  {
    name: "Node App with full CI/CD",
    description: "This app has DevOps CI/CD pipeline built using Terraform, AWS (S3, SSH), Docker and Github Actions/Workflows.",
    image: "/cicd.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://www.youtube.com/watch?v=jhDv3G2nRNQ&ab_channel=AbhiramSatpute",
  },
  {
    name: "Tinder Clone",
    description:
      "This Mobile app has SignUps, Swiping and Matching, and Real-time Chatting with great UI and useMemo. Tech: React Native, Expo, Firebase, Tailwind.",
    image: "/tinder.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://www.youtube.com/watch?v=PdPoZLLXtUY&ab_channel=AbhiramSatpute",
  },
  {
    name: "Blockchain: Kudos Giver",
    description:
      "This smart contract aims to give official, tamper-proof and immutable kudos/testimonials, similar to LinkedIn Recommendations.",
    image: "/kudos.png",
    github: "https://github.com/abhiram11/Simple-Concepts-and-Insights/blob/master/kudos.sol",
    link: "https://www.youtube.com/watch?v=sarcae80h04&ab_channel=AbhiramSatpute",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
