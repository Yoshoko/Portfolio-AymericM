import Link from "next/link";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords2
            title={"CONTACT"}
            style={
              "flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[150px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[390px]"
            }
          />
        </div>

        <div className="mt-40 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Si vous avez une question, une proposition, un projet ou vous souhaitez travailler ensemble sur quelque chose."
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <div className="bor der mt-5 flex w-[350px] items-center gap-1 md:w-[350px] md:gap-2.5">
              <Link
                href="mailto:aymericmartinez10@gmail.com"
                target="_blank"
                className="bor der mt-1 w-[300px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[300px] md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text={"N'hésitez pas à me contacter :)"}
                  className={"bor der w-[300px] pr-[40px] md:w-[300px] md:pr-0"}
                />
              </Link>
            </div>
          </div>


        <div className=" flex justify-center">
          <Image
            src="/capycanar.png"
            alt="capycanar"
            width={140}
            height={140}
            className="rounded-full"
          />
        </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/yoshoko"
              target="_blank"
            >
              <AnimatedTitle
                text={"GITHUB"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aymeric-martinez-439445358/"
              target="_blank"
              aria-label="Voir mon LinkedIn"
            >
              <AnimatedTitle
                text={"LINKEDIN"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
