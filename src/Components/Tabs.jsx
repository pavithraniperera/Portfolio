import React from "react";
import { motion } from "framer-motion";
const Tabs = ({ tabList, activeTab, onchange }) => {
  const getActiveStyle =(value)=>{
         return activeTab===value
         ?"text-white  sm:bg-gradient-to-r from-[#f4a44f] to-[#ac573f] bg-[#f4a44f]"
         :"text-[#ac573f] bg-transparent"
  }
  return( 
<div className="flex items-center justify-center my-10">
  <div className="bg-[#fff6eb] rounded-full flex flex-wrap sm:flex-nowrap overflow-x-auto p-2">
    {tabList.map((tab) => (
      <motion.button
        initial={{ opacity: 0.8, scale: 1 }}
        animate={{
          opacity: activeTab == tab.value ? 1 : 0.8,
          scale: activeTab == tab.value ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
        key={tab.id}
        className={`text-sm md:text-[15px] ${getActiveStyle(tab.value)} rounded-full 
        px-3 md:px-6 py-2 md:py-3 whitespace-nowrap`}
        onClick={() => onchange(tab.value)}
      >
        {tab.label}
      </motion.button>
    ))}
  </div>
</div>
  )
};

export default Tabs;
