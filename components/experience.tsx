"use client"

import { ExperienceCard } from "./experience-card";
import { Reveal } from "./reveal";

const experiences = [
        {
        company:"HorizonLux",
        position:"Full Stack Developer",
        projectTitle:"Notification On The Horizon",
        bulletPoints: [
            "Executed a real-time notification system ahead of schedule, integrating seamlessly with existing workflows and improving workplace engagement for 300+ employees.",
            "Achieved a 40% improvement in production time by standardizing notifications company-wide.",
            "Engineered a robust and user-friendly alert system using .NET Win-Form, Node.js, and React.js, increasing task resolution speed by 25%.",
            "Enhanced awareness among employees by increasing daily logins on the corporate platform by 1,500 sessions per week with a screensaver technology."
        ],
        techStack: ["node.png","react.png","electron.png","express.png","mongodb.png","c-sharp.png","vite.png"],
        github: "https://github.com/louamlemjid/horizon-bolt-backend.git",
    },
    {
        company:"RobotX",
        position:"Co-Founder & Software Engineer",
        projectTitle:"SmartX",
        bulletPoints: [
            "Architected and launched web and mobile platforms to control smart home technologies, achieving a 70% reduction in rental properties’ electricity consumption.",
            "Boosted product sale success by selling more than 100 units within six months, illustrating effective marketing strategies and confirming strong consumer interest in advanced smart home technologies.",
            "Cut electricity consumption by 70% for house rental companies with a remote-controlled device for AC units.",
            "Implemented backend services using Node.js, Express.js, JWT, and MongoDB. Integrated Firebase and IoT hardware (ESP8266) using C++ for real-time control and monitoring."
        ],
        techStack: ["node.png","express.png","mongodb.png","reactnative.png","expo.png","firebase.png","c-plus.png","espressif.png"],
        github: "https://github.com/louamlemjid/smart-home.git",
        youtube: "https://youtube.com/shorts/ZAD5bm67ZEo?si=j6RNWVa9XUeck_o6",
        preview: "https://push-y2lq.onrender.com/",
    },
    {
        company:"Robocare",
        position:"Data Science Intern",
        projectTitle:"Collect and prepare Savera Tomato dataset",
        bulletPoints: [
            "Cleaning and annotating plant data using JSON and web tools, improving dataset quality by 40% for disease detection model training.",
	"Implemented data collection workflows with Python and GitHub, automating image processing and reducing manual effort by 30%."
        ],
        techStack: ["Python.png","JSON.png"],
        github: "",
    },
    {
        company:"Eagle Projects Tunisia",
        position:"AI & Robotics Intern",
        projectTitle:"Humanoid Hand Reinforcement Learning",
        bulletPoints: [
            "Developed reinforcement learning models for humanoid hand manipulation tasks including reaching, grasping, and lifting.",
            "Used MuJoCo physics simulator to train and evaluate robotic hand control strategies.",
            "Implemented Stable-Baselines3 algorithms in Python to improve control accuracy and stability."
        ],
        techStack: ["Python.png","banner.svg","NumPy.png"],
        github: "",
    }
]
export function Experience() {
return (
        <section id="experiences" className="min-h-screen py-20 bg-gradient-to-b from-secondary/70 to-background">
  <div className="container mx-auto xs:max-w-xs md:max-w-3xl lg:max-w-6xl px-2">
  <Reveal><div className="flex gap-3 mb-8 ">
            <h1  className="w-3/6 lg:text-4xl font-bold text-2xl mb-4 text-highlight">Experience<span className="text-5xl text-foreground">.</span></h1>
            <hr
              className="w-5/6 h-1 mt-9 bg-background border-background/30 rounded-full"

          />
          </div></Reveal>
    <Reveal><h6 className="text-lg text-muted-foreground mb-12">
    A collection of projects I've worked on.
    </h6></Reveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {experiences.reverse().map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  </div>
</section>
    );
}
