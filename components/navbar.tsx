
'use client'
import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Facebook, Youtube, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`fixed z-20 top-1/2 right-0 transform -translate-y-1/2 transition-all duration-300 ${isOpen ? "w-16" : "w-10 "} bg-background border-2 border-foreground backdrop-blur-lg shadow-lg rounded-l-lg p-2`}>
      <div className="flex flex-col items-center space-y-4">
        {/* Collapse Button */}
        <Button variant="link" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>

        {/* Social Links */}
        {isOpen && (
          <>
            <Link href="https://github.com/louamlemjid" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/louam-lemjid-466435206/" target="_blank">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.facebook.com/louen.mjid.1" target="_blank">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.youtube.com/@louamacademie5837" target="_blank">
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:louam.lemjid@ensi-uma.tn">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="tel:+21650144403">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </Link>

            {/* Resume Download */}
            {/* <Button variant="outline">
              <a download="louam_lemjid.pdf" href="https://drive.google.com/uc?export=download&id=1Wrfk5hcGx_2TLmQEMA6T1of4btyrNUDJ">CV</a>
            </Button> */}
          </>
        )}
      </div>
    </div>
  );
}
