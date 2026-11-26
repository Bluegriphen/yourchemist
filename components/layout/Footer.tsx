import Link from "next/link";
import ChevronRight from "../icons/ChevronRight";
import MapPin from "../icons/MapPin";
import Phone from "../icons/Phone";
import Mail from "../icons/Mail";
import ExternalLink from "../icons/ExternalLink";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";
import Instagram from "../icons/Instagram";
import nhs from "../../public/images/nhs.svg";
import ssl from "../../public/images/ssl.svg";
import rp from "../../public/images/registered-pharmacy.svg";
import Image from "next/image";


const legalLink = [
  "Terms & Conditions",
  "Privacy Policy",
  "Cookie Policy",
  "Complaints Procedure",
  "Accessibility Statement",
  "About Us",
];

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center bg-main">
      <div className="container-page px-10 py-5 sm:py-8 lg:py-10 lg:px-15">
        <div className="flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-col gap-10 xl:flex-row xl:gap-16">
            <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <div className="flex flex-col gap-5">
                <h2 className="text-[20px] font-normal text-concrete">
                  Legal & Safety
                </h2>
                <ul className="flex flex-col gap-3">
                  {legalLink.map((link) => (
                    <li key={link}>
                      <Link href="#" className="flex items-start">
                        <span className="mt-0.5 pr-1.25">
                          <ChevronRight />
                        </span>
                        <p className="pl-1.25 text-[14px] font-normal text-concrete">
                          {link}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-[20px] font-normal text-concrete">
                  Information
                </h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-1.25">
                    <span className="mt-0.5 shrink-0">
                      <MapPin />
                    </span>
                    <p className="text-[14px] font-normal text-concrete">
                      10 High Street, London, UK
                    </p>
                  </li>
                  <li className="flex items-start gap-1.25">
                    <span className="mt-0.5 shrink-0">
                      <Phone />
                    </span>
                    <p className="text-[14px] font-normal text-concrete">
                      +44 1234 567 890
                    </p>
                  </li>
                  <li className="flex items-start gap-1.25">
                    <span className="mt-0.5 shrink-0">
                      <Mail />
                    </span>
                    <p className="break-all text-[14px] font-normal text-concrete">
                      contact@yourpharmacy.co.uk
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-[20px] font-normal text-concrete">
                  Regulatory Information
                </h2>
                <div>
                  <p className="text-[14px] font-normal text-tertiary">
                    GPhC Registration:
                  </p>
                  <p className="font-normal text-white">Pharmacy: 1234567</p>
                  <Link href="#" className="flex items-center gap-1 text-primary">
                    Verify Registration
                    <span>
                      <ExternalLink />
                    </span>
                  </Link>
                </div>
                <div>
                  <p className="text-[14px] font-normal text-tertiary">
                    GPhC Registration:
                  </p>
                  <p className="font-normal text-white">Dr. Sarah Johnson</p>
                  <p className="font-normal text-white">GPhC Reg: 2345678</p>
                </div>
                <div>
                  <p className="text-[14px] font-normal text-tertiary">
                    Pharmacy Owner:
                  </p>
                  <p className="font-normal text-white">
                    Digital Health Pharmacy Ltd
                  </p>
                  <p className="font-normal text-white">Company No: 12345678</p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-[20px] font-normal text-concrete">
                  Opening Hours
                </h2>
                <div>
                  <p className="text-[14px] font-normal text-tertiary">
                    Monday-Friday
                  </p>
                  <p className="font-normal text-white">09:00 AM to 06:00 PM</p>
                </div>
                <div>
                  <p className="text-[14px] font-normal text-tertiary">
                    Saturday
                  </p>
                  <p className="font-normal text-white">11:00 AM to 03:00 PM</p>
                </div>
                <div>
                  <p className="text-[14px] font-normal text-tertiary">
                    Sunday
                  </p>
                  <p className="font-normal text-white">Emergency Only</p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-5 sm:max-w-md xl:max-w-71.25 xl:shrink-0">
              <p className="text-white font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the.
              </p>
              <div className="flex gap-4">
                <Facebook />
                <Twitter />
                <Instagram />
                <LinkedIn />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Image src={rp} alt="Registered pharmacy" />
                <Image src={nhs} alt="NHS" />
                <Image src={ssl} alt="SSL secure" />
              </div>
              <div className="text-[16px] font-semibold">
                <p className="text-pastel-ocean">Medical Emergency?</p>
                <p className="text-white">Call 999 or visit A&amp;E</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 border-y border-[#23588F]/50 py-7.5 md:flex-row md:items-center md:justify-between">
              <p className=" text-light-gray">
                © 2024 Digital Health Pharmacy Ltd. All rights reserved.
                <br />
                Registered in England & Wales. Company No: 12345678
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
                <Link
                  href="#"
                  className="flex items-center gap-1 text-[14px] font-normal text-light-gray"
                >
                  GPhC Website
                  <ExternalLink />
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-[14px] font-normal text-light-gray"
                >
                  NHS Website
                  <ExternalLink />
                </Link>
              </div>
            </div>
            <div className="flex justify-center text-[14px] font-normal text-light-gray">
              <span>Powered by healthya | ConX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
