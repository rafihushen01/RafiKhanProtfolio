import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { type ReactNode, useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { personalInfo, socialLinks, type SocialIcon } from "../data/portfolioData";

const iconMap: Record<SocialIcon, ReactNode> = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  facebook: <FaFacebookF />,
  whatsapp: <FaWhatsapp />,
};

const floatingSocials = socialLinks.filter((item) =>
  ["GitHub", "LinkedIn", "Facebook", "WhatsApp"].includes(item.name)
);

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;

    const cleanups: Array<() => void> = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      let rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let frameId = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        frameId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX = x;
        mouseY = y;
      };

      const onMouseLeave = () => {
        mouseX = rect.width / 2;
        mouseY = rect.height / 2;
      };

      elem.addEventListener("mousemove", onMouseMove);
      elem.addEventListener("mouseleave", onMouseLeave);
      updatePosition();

      cleanups.push(() => {
        cancelAnimationFrame(frameId);
        elem.removeEventListener("mousemove", onMouseMove);
        elem.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        {floatingSocials.map((item) => (
          <span key={item.name}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {iconMap[item.icon]}
            </a>
          </span>
        ))}
      </div>
      <a className="resume-button" href={personalInfo.cvPath} download>
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
