"use client";
import { useState } from "react";

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

export default function HomeTabs({ projects, experience }) {
  const [active, setActive] = useState("projects");
  const panels = { projects, experience };

  return (
    <section className="mt-14">
      <div role="tablist" aria-label="Portfolio sections" className="flex gap-2">
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-5 py-2 font-medium text-sm transition-colors ${
                selected
                  ? "bg-foreground text-background"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="mt-8"
      >
        {panels[active]}
      </div>
    </section>
  );
}
