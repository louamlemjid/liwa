"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Github, Youtube, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  youtube?: string;
  preview?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  techStack,
  github,
  youtube,
  preview,
}: ProjectCardProps) {
  return (
    <Reveal>
      <Card className="bg-gradient-to-b from-secondary to-background/40 border-sky-950 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 w-50">
        <Image
          src={"/"+image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-highlight">{title}</h3>
        <p className="text-muted-foreground text-xs mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <img key={index} src={`/${tech}`} alt={tech} className="h-10 rounded-lg" />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Link href={github} target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            {youtube && (
              <Link href={youtube} target="_blank">
                <Button variant="ghost" size="icon">
                  <Youtube className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
          {preview && (
          <Link href={preview} target="_blank">
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </Link>
        )}
        </div>
      </div>
    </Card>
    </Reveal>
  );
}