"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="container lg:sticky bottom-0 bg-white z-30">
      <div className="flex flex-col-reverse lg:flex-row justify-between h-15 mx-auto pt-2 text-center border-t-2 border-gray background-white pb-2">
        <div className="mx-4 my-4 lg:my-1 lg:my-auto">
          &copy;2024 Steven Trotter - All Rights Reserved
        </div>
        <div className="flex justify-center mx-4 my-4 lg:my-1">
          <a
            href="mailto:stevetrot@gmail.com"
            className="border border-blue text-blue rounded-md py-1 px-2 mx-1 hover:bg-blue hover:text-white"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://www.linkedin.com/in/dr-steven-trotter-11b2294/"
            className="border border-blue text-blue rounded-md py-1 px-2 mx-1 hover:bg-blue hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com/strottos/"
            className="border border-blue text-blue rounded-md py-1 px-2 mx-1 hover:bg-blue hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}
