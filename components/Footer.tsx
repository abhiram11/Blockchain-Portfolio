import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

import {BsStackOverflow} from "react-icons/bs"
import {SiHashnode} from "react-icons/si"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Abhiram Satpute<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/abhiram11" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/abhiram_satpute"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/abhiram-satpute/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/@abhiramsatpute"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://stackoverflow.com/users/8185479/abhiram-satput%c3%a9"
            rel="noreferrer"
            target="_blank"
          >
            <BsStackOverflow
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={24}
            />
          </a>
          <a
            href="https://abhiramsatpute.hashnode.dev/"
            rel="noreferrer"
            target="_blank"
          >
            <SiHashnode
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
