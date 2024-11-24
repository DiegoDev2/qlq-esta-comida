export default function Header() {
    return (
      <header className=" flex flex-col sm:flex-row items-center justify-between py-4 px-8 sm:px-12 lg:px-24 ">
        {/* Logo */}
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <img
            src="/LogoQLQ.jpg"
            alt="Logo QLQ"
            className="h-14 w-auto object-contain rounded-md opaci"
          />
        </div>
  
        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4  text-sm sm:text-base">
          {[
            { href: "https://qlqestacomida.shop/", label: "MERCH" },
            { href: "https://www.youtube.com/@qlqestacomida", label: "YOUTUBE" },
            { href: "https://www.instagram.com/qlqestacomida/", label: "INSTAGRAM" },
            { href: "https://www.tiktok.com/@qlqestacomida?lang=es", label: "TIKTOK" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-[#f7eedc] hover:underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    );
  }
  