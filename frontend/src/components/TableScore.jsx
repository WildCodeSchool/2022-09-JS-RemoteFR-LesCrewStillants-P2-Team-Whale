import { Tab } from "@headlessui/react";
import "./TableScore.css";
import TableDifficult from "@components/TableDifficult";
import EasyTable from "@components/TableEasy";

export default function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List className="selectlevel">
        <Tab className="level">Facile</Tab>
        <Tab className="level">Difficile</Tab>
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
