import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="h-9 w-9 rounded-xl overflow-hidden bg-white inline-flex items-center justify-center">
                <img src={logo} alt="Stack Crafts Studio logo" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-lg font-semibold">
                Stack Crafts <span className="text-gradient">Studio</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              We build smart digital solutions for ambitious businesses — websites, web apps,
              payments, SEO and institution systems.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#portfolio" className="hover:text-foreground">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold mb-4">Legal</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms & Conditions</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Stack Crafts Studio. All rights reserved.</div>
          <div>Crafted with care in Nairobi · stackcraftsstudio@gmail.com</div>
        </div>
      </div>
    </footer>
  );
}
