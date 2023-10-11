const LinkButton = ({ children, href, className }) => {
  return (
    <a className={`block py-2 px-4 bg-secondary w-fit font-semibold text-sm sm:py-3 sm:px-5 sm:text-base ${className || ''}`} href={href}>{children}</a>
  )
}

export default LinkButton