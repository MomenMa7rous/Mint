const SectionTitle = ({ title, children }) => {
  return (
    <>
      <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-extrabold uppercase text-center lg:text-start mb-5">{title}</h1>
      <p className="mb-11 text-sm indent-2">
        {children}
      </p>
    </>
  )
}

export default SectionTitle