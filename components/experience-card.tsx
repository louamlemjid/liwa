import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Github, Youtube} from "lucide-react";
import { Reveal } from "./reveal";
interface ExperienceCardProps {
    company: string;
    position: string;
    projectTitle: string;
    bulletPoints: string[];
    techStack: string[];
    github: string;
    youtube?: string;
    preview?: string;
  }
export function ExperienceCard({
    company,
    position,
    projectTitle,
    bulletPoints,
    techStack,
    github,
    youtube,
    preview,
  }: ExperienceCardProps): JSX.Element {
    return (
        <div className="border-sky-950 rounded-lg shadow-xl bg-secondary/60  shadow-secondary/50 border-radius-6 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-third/50">
            <Reveal>
            <div className="p-4">
                <h3 className="text-highlight text-3xl font-semibold mb-2">{company}</h3>
                <h4 className="text-third/70 text-xl font-semibold mb-2">{position}</h4>
                <h5 className="text-third/50 text-xs font-semibold mb-2">{projectTitle}</h5>
                <ul>
                    {bulletPoints.map((bullet, index) => (
                        <li key={index} className="text-muted-foreground text-xs mb-4 line-clamp-2">- {bullet}</li>
                    ))}
                </ul>
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
                                Preview
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
            </Reveal>
        </div>

    )
}