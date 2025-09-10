"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Braces } from "lucide-react";
import { motion } from "framer-motion";
// import { setTimeout } from "timers/promises";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [profileSwtich, setProfileSwitch] = useState(true);
  // Function to update the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = 0; // Adjust offset based on header height or UI needs
        if (rect.top <= offset && rect.bottom >= offset) {
          currentSection = section.getAttribute("id") || "";
        }
      });
  
      setActiveSection(currentSection);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => { 
     setTimeout(() => {
      setProfileSwitch(!profileSwtich);
    }, 4000)
  }, []);

  // Framer Motion variants for collapsing/expanding

  return (
    <div className="w-[30rem] md:w-[5rem]">
      <motion.div
      className="fixed left-0 top-0 h-full bg-secondary w-0 w-10"
      variants={{
        expanded: { width: "10rem" },
        collapsed: { width: "5rem" },
      }}
      animate={collapsed ? "collapsed" : "expanded"}
      transition={{ duration: 0.6 }}
    >
      {/* Toggle Button */}
    <div
      onClick={() =>
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
  }
      className=""
    >
      <div className={`cursor-pointer p-4 flex items-center ${activeSection === "home" ? "bg-third" : ""}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            src={profileSwtich ? "/profile.png" : "/tennis-tennis-ball.gif"}
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
        </motion.div>
      </div>
    </div>

      {/* Navigation Items */}
      <nav className="flex flex-col mt-8 pb-10 gap-20 md:gap-10 items-center">
  {[
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Exp .", id: "experiences" },
    { name: "Contact", id: "contact" },
  ].map((item, index) => (
    <motion.div
      key={item.id}
      className="group flex items-center px-4 py-2 rounded-md cursor-pointer"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
    >
      <div
       // Adjust this based on your layout
        className={`text-xs md:text-sm font-bold transform rotate-90 
          whitespace-nowrap hover:border-t-4 border-t-2 border-highlight px-6 py-8 ${
            activeSection === item.id ? "bg-highlight text-secondary border-t-4 border-t border-foreground" : ""
          }`}
           onClick={() =>
    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
      >
        {item.name}
      </div>
    </motion.div>
  ))}
</nav>
    </motion.div>
    </div>
  );
}