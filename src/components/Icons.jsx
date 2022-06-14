import React from 'react';
import {
  FaGithub, FaInstagram, FaTwitter, FaLinkedin,
} from 'react-icons/fa';

export default function Icons() {
  return (
    <>
      <div className="flex mt-[16px] text-3xl gap-8 text-slate-700">
        <a
          href="https://github.com/FabioBellaver"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover:text-blue-700 ease-in-out duration-300">
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.instagram.com/bellaverf/"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover:text-blue-700 ease-in-out duration-300">
            <FaInstagram />
          </div>
        </a>
        <a
          href="https://twitter.com/bellaver_fabio"
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover:text-blue-700 ease-in-out duration-300">
            <FaTwitter />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/fabio-bellaver/"
          aria-label="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover:text-blue-700 ease-in-out duration-300">
            <FaLinkedin />
          </div>
        </a>
      </div>
      <p className="text-sm font-normal text-slate-400 mt-[16px]">developed by Fábio Bellaver</p>
    </>
  );
}
