import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";
import photo from "@/public/images/image.png"

const links = [
  { label: "Erectile Dysfunction", href: "/mens-health/erectile-dysfunction" },
  { label: "Hair Loss", href: "/mens-health/hair-loss" },
  { label: "Premature Ejaculation", href: "/mens-health/premature-ejaculation" },
  { label: "Testosterone", href: "/mens-health/testosterone" },
];

export default function MensHealthCard() {
  return (
    <div className="relative w-full max-w-96.25 aspect-425/539 overflow-hidden rounded-2xl bg-slate-900">
      {/* Background Image */}
      <Image
        src={photo}
        alt="Mens Health"
        fill
        className="object-cover"
        
      />

      {/* Responsive Floating White Card */}
      <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5 rounded-[10px] bg-white p-5 shadow-md">
        <div className="flex flex-col gap-4">
          <h3 className="text-[20px] font-semibold text-main">
            Mens Health
          </h3>
          <ul className="flex flex-col gap-2">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between text-[14px] font-normal text-main transition-colors hover:text-[#7DC22B]"
                >
                  <span>{item.label}</span>
                  <ArrowRight  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
