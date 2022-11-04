import { Tab } from "@headlessui/react";
import "./TableScore.css";
import TableDifficult from "@components/TableDifficult";
import EasyTable from "@components/TableEasy";
import { useState } from "react";

export default function MyTabs() {
  const [isEasyActive, setIsEasyActive] = useState(true);
  const [isDifficultActive, setIsDifficultActive] = useState(false);

  const handleEasyActive = () => {
    setIsEasyActive(true);
    setIsDifficultActive(false);
  };

  const handleDifficultActive = () => {
    setIsEasyActive(false);
    setIsDifficultActive(true);
  };

  return (
    <Tab.Group>
      <Tab.List className="selectlevel">
        <Tab
          onClick={handleEasyActive}
          className={isEasyActive ? "levelisActive" : "level"}
        >
          Facile
        </Tab>
        <Tab
          onClick={handleDifficultActive}
          className={isDifficultActive ? "levelisActive" : "level"}
        >
          Difficile
        </Tab>
      </Tab.List>
      <Tab.Panels className="tablescores">
        <Tab.Panel>
          <EasyTable />
        </Tab.Panel>
        <Tab.Panel>
          <TableDifficult />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
