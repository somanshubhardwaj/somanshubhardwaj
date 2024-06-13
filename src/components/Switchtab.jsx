"use client";
import "./switchtab.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const tabs = [
    {
      label: " Burgers",
      icon: "🍔",
    },
    {
      label: " Fries",
      icon: "🍟",
    },
    {
      label: " Ice Cream",
      icon: "🍦",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="tabsbody">
      <div className="window">
        <nav className="tabnav">
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
