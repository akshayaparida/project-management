"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LockIcon } from "lucide-react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
        transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
      `;

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            AkshayaParidaList
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col gap-3 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          {/* Logo and Team Name */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <div>
              <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
                AkshayaParida Team
              </h3>
              {/* Lock and Private */}
              <div className="mt-2 flex items-center gap-2">
                <LockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-xs text-gray-500">Private</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
