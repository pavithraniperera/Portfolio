import React, { useState } from "react";
import { SKILL_TABS, SKILLS } from "../utils/data";
import Tabs from "../Components/Tabs";
import SkillCard from "../Components/SkillCard";
import {motion} from 'framer-motion'

const TechNoicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");
  const handleTab = (value) => {
    if (value == "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }
    const updatedList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList);
    setActiveTab(value);
  };
  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>
          <p className="text-md text-center mt-4 leading-6">
            A versatile developer with hands on experience in modern
            technologies, tools, and frameworks ,dedicated to building
            efficient, scalable,and user-centeric solutions.
          </p>
        </div>
        <div>
          <Tabs
            tabList={SKILL_TABS}
            activeTab={activeTab}
            onchange={handleTab}
          />
          <div className="custom-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px] max-h-[450px] overflow-y-auto">
          {tabData?.map((skill, index) => (
            <motion.div key={skill.id}
             initial={{opacity:0,y:20}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.4,delay:index*0.1}}
            >
              <SkillCard
                icon = {<skill.icon className="w-6 h-6 text-[#ac573f]"/>}
                skillName = {skill.skill}
                description ={skill.description}
                progress = {skill.progress}
              />
              </motion.div>
          ))}
          </div>

         
        </div>
      </div>
    </section>
  );
};
export default TechNoicalProficiency;
