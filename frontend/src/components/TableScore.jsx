import { Tab } from "@headlessui/react";
import "./TableScore.css";
import EasyScores from "@components/Scores";

export default function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List class="selectlevel">
        <Tab class="level">Facile</Tab>
        <Tab class="level">Difficile</Tab>
      </Tab.List>
      <Tab.Panels class="tablescores">
        <Tab.Panel>
          <EasyScores />
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
