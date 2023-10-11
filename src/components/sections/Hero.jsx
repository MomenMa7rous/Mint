import Container from "../utils/Container"
import hero from '../../assets/hero.png'
import LinkButton from "../utils/LinkButton"

const Hero = () => {
  return (
    <>
      <section>
        <Container className="flex flex-col lg:flex-row justify-between gap-10 items-center">
          <div className="flex-2 text-center lg:text-start">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl 2xl:leading-[1.2] xl:leading-[1.2] font-extrabold leading-[1.2] mb-4 xl:mb-8">
              Hello!<br />
              We Are Creative Digital Agency.
            </h1>
            <p className="leading-[2] mb-4 text-xs sm:text-sm sm:leading-[2]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, soluta. Sunt tempore quasi deleniti nisi totam impedit illo id fuga!
            </p>
            <LinkButton href="#contact" className="m-auto lg:m-0">Send Message</LinkButton>
          </div>
          <img src={hero} alt="Hero" className="flex-1" />
        </Container>
      </section>
    </>
  )
}

export default Hero