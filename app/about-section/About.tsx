import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import Image from "next/image";


const APropos = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-20 md:pt-20 md:pb-28 lg:pt-20 lg:pb-36"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "J’AIME CRÉER, DESIGNER, DÉVELOPPER ET DONNER VIE À DES EXPÉRIENCES."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "Le monde du web est un espace d'innovation et de découverte. Chaque projet est une nouvelle aventure, chaque code une opportunité de création. "
              }
            />
            <AnimatedBody
              text={
                "Mon attrait pour Internet et la technologie a toujours guidé mon chemin. "
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "Le web et le design, c’est avant tout ma façon de créer et d’innover. J’adore imaginer des interfaces simples, esthétiques et efficaces, tout en plongeant dans le code pour leur donner vie."
              }
            />
            <AnimatedBody
              text={
                "Le design, pour moi, c’est bien plus que des visuels : c’est raconter une histoire, créer une expérience qui marque."
              }
            />
            <AnimatedBody
              text={
                "Lorsque je ne suis pas en train de créer, designer ou développer, j’aime passer du temps à jouer au volley, regarder des animes. Ce sont ces moments qui nourrissent mon inspiration et ma créativité au quotidien."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Design"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Photoshop, Illustrator, Adobe XD, Wordpress, UX/UI Design, Prototypage."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Développement web"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "HTML/CSS, Javascript, ThreeJS, React, VueJS, Python, PHP, SQL, Git/Github, Docker."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Librairies"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "SASS, GSAP, Bulma, Tailwind CSS, Framer Motion, Bootstrap."
                }
              />
            </div>
            <div className=" flex justify-center">
          <Image
            src="/bananacat.png"
            alt="beeeeeeeeeecat"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default APropos;
