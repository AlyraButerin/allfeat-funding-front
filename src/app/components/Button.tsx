import ButtonSvg from "../assets/svg/ButtonSvg"

export interface IButton { 
	children: React.ReactNode
  white?: boolean
	className?: string
	href?: string
	onClick?: () => void
	px?: string
}

const Button = ({ children, white = false, className, href, onClick, px }: IButton) => {
  const classes = `button relative inline-flex items-center 
    justify-center h-11 transition-colors hover:text-color-1 
    ${px || "px-7"} 
    dark:text-gray-500 text-gray-950
    
    ${className || ""}
    `

  const spanClasses = `relative z-10`

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg({white})}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg({white})}
    </a>
  );

  return href ? renderLink() : renderButton();
};
 
export default Button