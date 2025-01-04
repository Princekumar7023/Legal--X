import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About LegalX</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for all legal services. Professional
              solutions tailored to your needs.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about-us#contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://youtube.com/@legalxonline?si=A7kZTCfhmNz13QPV"
                className="hover:text-primary"
              >
                <Youtube className="size-5" />
              </Link>
              <Link
                href="https://x.com/LegalXOfficial?t=DpQitERWkI3wU3lhefkJsA&s=09"
                className="hover:text-primary"
              >
                <Twitter className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/legalx-942083326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="hover:text-primary"
              >
                <Linkedin className="size-5" />
              </Link>
              <Link
                href="https://www.instagram.com/legalx.official/profilecard/?igsh=NzB3aTJwOW11cDI2"
                className="hover:text-primary"
              >
                <Instagram className="size-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LegalX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
