"use client";

import { Reveal } from "./reveal";

export default function About() {
  const techStack = {
    frontend: [
      "react.png",
      "next.png",
      "reactnative.png",
      "expo.png",
      "tailwind.png",
      "bootstrap.png",
    ],
    backend: [
      "node.png",
      "express.png",
      "nest.png",
      "electron.png",
    ],
    databases: ["mongodb.png", "firebase.png", "supabase.png", "postgresql.png", "mysql.png"],
    cloudPlatforms: ["heroku.png", "azure.png", "render.jpg", "cyclic.jpg", "vercel.png"],
    otherTechnologies: ["c-plus.png", "c-sharp.png", "espressif.png"],
  }
  return (
    <section id="about" className="min-h-screen pt-20 bg-secondary/60 text-enter">
      <div className="container mx-auto  px-2 py-12 xs:max-w-xs md:max-w-3xl lg:max-w-6xl">
        <Reveal> 
          <div className="flex gap-3 mb-8  w-full">
            <h1  className="w-3/6 lg:text-4xl font-bold text-2xl mb-4 text-highlight">About Me<span className="text-5xl text-foreground">.</span></h1>
            <hr
              className="w-5/6 h-1 mt-9 bg-background border-background rounded-full"

          />
          </div>
          </Reveal>
          <div className="prose prose-lg dark:prose-invert">
            <Reveal><h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Empowering Tunisia through Technology</h2></Reveal>
            <Reveal>
            <p className="mb-6 sm:text-base lg:text-2xl text-muted-foreground">
            As a seasoned full stack engineer with a unique blend of experiences, I&apos;m driven by a passion to harness
            technology for real-world impact. Growing up in Tunisia, I&apos;ve always been fascinated by the human experience –
            from the entrepreneurial spirit of family-run businesses to the intricate web of global connections forged while
            working abroad.
            </p>
            </Reveal>
            {/* <p className="mb-6 lg:text-2xl sm:text-sm text-muted-foreground">
              With extensive experience in modern web technologies including Node.js, React.js,
               Express.js, and various databases like MongoDB and PostgreSQL, I've developed 
               a strong foundation in both frontend and backend development.
            </p> */}
            <Reveal><h2 className="text-2xl font-semibold mt-8 mb-4 text-background/80">A Diverse Background</h2></Reveal>
            <Reveal><ul className="list-disc pl-6 mb-6 text-muted-foreground">
              <li>Business and Commerce : Understanding customer needs and delivering solutions drove my success in family
              business ventures (2013-2018).</li>
              <li>Device Maintenance : This experience taught me the importance of scalability, hosting machines, and hardware
              limitations – valuable insights that continue to inform my engineering work.</li>
              <li>International Experience : As an ex-truck driver working between Dubai and Oman, I developed a global
                perspective, honed my interpersonal skills, and discovered the power of connecting diverse cultures and
                traditions.</li>
            </ul></Reveal>
            <Reveal><h2 className="text-2xl font-semibold mt-8 mb-4 text-background/80">The Code Connection</h2></Reveal>
            <Reveal><p className="mb-6 sm:text-base lg:text-2xl text-muted-foreground">
              It was through coding that I found my true calling – unlocking the potential to merge seemingly disparate fields
              and deliver innovative solutions. I now see the world as a complex software system, with every challenge an
              opportunity for creative problem-solving. My passion is to share this vision with others and collaborate on
              projects that make a meaningful difference in Tunisia and beyond.
            </p></Reveal>
            <Reveal><h2 className="text-2xl font-semibold mt-8 mb-4 text-background/80">Technical Expertise</h2></Reveal>
            <Reveal><ul className="list-disc pl-6 mb-6 text-muted-foreground">
              <li>Frontend Development:<br/> {techStack.frontend.map((tech, index) => (
                <img key={index} src={`/${tech}`} alt={`${tech}`} className="h-10 inline-block rounded-lg m-1" />
              ))}</li>
              <li>Backend Development: <br/>{techStack.backend.map((tech, index) => (
                <img key={index} src={`/${tech}`} alt={`${tech}`} className="h-10 inline-block rounded-lg m-1" />
              ))}</li>
              <li>Databases: <br/>{techStack.databases.map((tech, index) => (
                <img key={index} src={`/${tech}`} alt={`${tech}`} className="h-10 inline-block rounded-lg m-1" />
              ))}</li>
              <li>Cloud Platforms:<br/>{techStack.cloudPlatforms.map((tech, index) => (
                <img key={index} src={`/${tech}`} alt={`${tech}`} className="h-10 inline-block rounded-lg m-1" />
              ))}</li>
              <li>Other Technologies:<br/>{techStack.otherTechnologies.map((tech, index) => (
                <img key={index} src={`/${tech}`} alt={`${tech}`} className="h-10 inline-block rounded-lg m-1" />
              ))}</li>
            </ul></Reveal>
            {/* <Reveal><h2 className="text-2xl font-semibold mt-8 mb-4">Professional Journey</h2></Reveal>
            <Reveal><p className="mb-6 text-muted-foreground">
              Throughout my career, I've worked on diverse projects ranging from IoT solutions
               (SmartX) to transportation platforms (L9ITLOUAGE) and enterprise productivity tools. 
               Each project has enhanced my problem-solving abilities and technical skills while teaching me 
               valuable lessons about creating user-centric solutions.
            </p></Reveal>
            <Reveal><p className="text-muted-foreground">
              I'm always eager to take on new challenges and contribute to projects that push the boundaries of what's possible with modern web technologies. If you're interested in collaboration or would like to discuss a project, feel free to reach out!
            </p></Reveal> */}
          </div>
        
      </div>
    </section>
  );
}