"use client";

import { Button } from "@/components/ui/Button";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container text-center md:max-w-3xl lg:max-w-6xl mx-auto px-4 pt-60">
        <h2 className="text-6xl font-semibold mb-4 text-highlight">
          Contact
          <span className="text-6xl text-background">.</span>
        </h2>
        <p className="text-lg mb-4">
          Shoot me an email if you want to connect!</p>
          <Reveal><p>
          <Link href="mailto:louam.lemjid@ensi-uma.tn" className="text-third">
          <Button variant="ghost" size="icon" className="text-third">
            <Mail className="h-5 w-5" />
            
          </Button>louam.lemjid@ensi-uma.tn
        </Link> </p>
        </Reveal>
        <p> You can also find me on LinkedIn 
          if that's more your speed.
        </p>
        
        <Reveal><div className=" space-x-4">
          <Link href="https://www.linkedin.com/in/louam-lemjid-466435206/" target="_blank">
            <Button variant="ghost" size="icon" className="text-third">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          
        </div></Reveal>
      </div>
    </section>
  );
}
