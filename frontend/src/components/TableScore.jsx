import { Tab } from "@headlessui/react";
import "./TableScore.css";
import TableDifficult from "@components/TableDifficult";
import EasyTable from "@components/TableEasy";
import { useState } from "react";

export default function MyTabs() {
  const [active, setIsActive] = useState();

  const handleClickActive = () => {
    setIsActive(!active);
  };

  return (
    <Tab.Group>
      <Tab.List className="selectlevel">
        <Tab
          onClick={handleClickActive}
          className={active ? "levelisActive" : "level"}
        >
          Facile
        </Tab>
        <Tab
          onClick={handleClickActive}
          className={active ? "levelisActive" : "level"}
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
