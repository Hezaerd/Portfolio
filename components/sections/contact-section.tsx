import React from "react";
import Link from "next/link";
import Image from "next/image";

import GithubIcon from "@/public/images/icons/github-icon.svg";
import LinkedInIcon from "@/public/images/icons/linkedin-icon.svg";

const Contact_Section = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
            <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="z-10">
                    <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best
                    to get back to you!
                    </p>
                    <div className="socials flex flex-row gap-2">
                        <a href="https://github.com/Hezaerd" target="_blank" rel="noopener noreferrer">
                            <Image src={GithubIcon} alt="Github Icon"/>
                        </a>
                        <Link href="https://www.linkedin.com/in/swann-rouanet-7aa979239/" target="_blank" rel="noopener noreferrer">
                            <Image src={LinkedInIcon} alt="LinkedIn Icon"/>
                        </Link>
                    </div>
                </div>
                <div>
                    <form>
                        <div className="mb-6">
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-white"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                                placeholder="jacob473@ubisoft.com"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                for="subject"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                            Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                for="subject"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                            >
                                {" "}
                                Send message{" "}
                            </button>
                        </div>
                    </form>
                </div>
        </section>
    );
}

export default Contact_Section;