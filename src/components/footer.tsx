import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-5">
      <p className="mb-4">Developer by Jhon Breno &copy; 2025</p>
      {/* contatos */}
      <div className="flex flex-col gap-3 items-start justify-center">
        <Link
          className="flex gap-2 items-center justify-center"
          href="https:www.github.com/jhonbreno"
          target="_blank"
        >
          <Github size={24} /> Github
        </Link>
        <Link
          className="flex gap-2"
          href="https://www.linkedin.com/in/jhon-breno-0b1b3b1b3/"
          target="_blank"
        >
          <Linkedin size={24} />
          Linkedin
        </Link>
        <Link
          className="flex gap-2"
          href="https://www.instagram.com/jhonbrenocosta/"
          target="_blank"
        >
          <Instagram size={24} />
          Instagram
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
