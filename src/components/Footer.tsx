import siteLogo from "../assets/istqb-logo.png";
import { Container } from "./Container";

export const Footer = () => (
  <footer className="mt-auto border-t-red-700 border-t">
    <Container>
      <div className="flex flex-col md:flex-row md:items-center py-4 md:py-5 gap-4 ">
        <a
          className="w-16 md:w-20 md:mr-auto"
          href="https://www.istqb.org/"
          target="_blank"
        >
          <img
            src={siteLogo}
            width={113}
            height={65}
            alt="ISTQB not-for-profit association"
          />
        </a>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-5 text-sm">
          <li>
            <a
              className="hover:underline"
              href="https://www.istqb.org/about-us/why-istqb"
              target="_blank"
            >
              Why ISTQB® Certification
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="https://www.istqb.org/certifications/find-an-exam-provider"
              target="_blank"
            >
              Find an Exam Provider
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);
