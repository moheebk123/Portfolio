import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";
import { Wrapper, TiltImage, ContactForm, ContactLink, SocialLink } from "../components";
import { contactLinks, socialLinks } from "../data/links";
import contact from "../assets/img/contact/contact.png";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <Wrapper classes="text-white">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center mb-20">
        <div className="md:w-1/2 text-center md:text-left mb-6 lg:mb-0">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-4xl font-bold mb-4"
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 200 / 1000 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-lg text-gray-300"
          >
            If you want to connect, talk, or work on any project, feel free to
            reach out. I&apos;m always happy to help!
          </motion.p>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="md:w-1/2"
        >
          <TiltImage imgUrl={contact} alt="Connect" className="w-full" />
        </motion.div>
      </div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-5">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="md:w-1/2 w-full bg-white p-8 rounded-lg shadow-lg"
        >
          <ContactForm />
        </motion.div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-start gap-4">
          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 300 / 1000,
              duration: 300 / 1000,
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-3xl font-bold mb-4 text-center lg:text-left"
          >
            Connect with me
          </motion.h3>
          {contactLinks.map((contactLink) => (
            <ContactLink key={contactLink.id} contactLink={contactLink} />
          ))}
          <div className="w-full flex gap-4 items-center justify-center pt-3 border-t">
            {socialLinks.map((socialLink) => (
              <SocialLink key={socialLink.id} socialLink={socialLink} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
