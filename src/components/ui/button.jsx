import React from "react";
import Link from "next/link";
import { getStrapiImage } from "../../lib/utils";

// Button variant classes
const variantClasses = {
  link: "",
  primary:
    "px-3 py-[10px] rounded-lg border-none outline-none bg-[#15AB49] text-white hover:scale-[1.02] transition-all duration-300 ease-linear",
  secondary:
    "flex gap-2 justify-center items-center bg-[#ffc107] px-4 py-3 hover:scale-[1.02] transition-all duration-500 hover:bg-[#ffc61c] max-h-[52px]  md:max-w-[180px] rounded-md",
  bordered_black:
    "flex gap-2 justify-center items-center px-3 border-[1px] border-black hover:scale-[1.02] transition-all duration-500 py-3 h-[52px] md:max-w-[260px]",
  bordered_white: "border-2 border-white px-3 py-3 sm:py-[10px] rounded-md hover:scale-[1.02] transition-all duration-500 text-center font-semibold",
};
// Button variant text classes
const variantTextClasses = {
  link: "",
  primary: "",
  secondary: "text-[16px] font-medium tracking-tight text-black ",
  bordered_black: "text-[16px] font-semibold tracking-tight",
  bordered_white: "",
};

// Single Button Component
const Button = ({
  text,
  url = "/",
  type = "internal",
  variant = "primary",
  icon,
  target = "none",
  otherClass="",
}) => {
  const isExternal = type === "external";
  const baseClass = "font-light text-[16px]";
  const variantClass = variantClasses[variant] || "";
  const buttonClass = `${baseClass} ${variantClass} ${
    icon ? "flex items-center justify-center" : ""
  } ${otherClass}`;

  // Render the button
  const renderButton = () => {
    const ButtonLink = isExternal ? (
      <a
        href={url}
        className={buttonClass}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {icon && (
          <img src={getStrapiImage(icon)} alt={text} className="w-4 h-4 mr-2" />
        )}
        <span className={variantTextClasses[variant]}>{text}</span>
      </a>
    ) : (
      <Link href={url} className={buttonClass}>
        <span className={variantTextClasses[variant]}>{text}</span>
        {icon && (
          <img src={getStrapiImage(icon)} alt={text} className="w-4 h-4 mr-2" />
        )}
      </Link>
    );
    return ButtonLink;
  };

  return renderButton();
};

// ButtonList Component for multiple buttons
const ButtonList = ({ buttons ,OtherClass} ) => {
  if (buttons) {
    if (Array.isArray(buttons)) {
      return (
        <>
          {buttons.map(({ text, url, type, variant, icon, target }, index) => (
            <Button
              key={index}
              text={text}
              url={url}
              type={type}
              variant={variant}
              icon={icon}
              target={target}
              otherClass={OtherClass}
            />
          ))}
        </>
      );
    }

    // If it's a single button object, render a single Button component
    return <Button {...buttons} />;
  }
};

export { Button, ButtonList };
