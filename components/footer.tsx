"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Github,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://github.com/louamlemjid" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/louam-lemjid-466435206/"
              target="_blank"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="tel:+21650144403">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Louam Lemjid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}