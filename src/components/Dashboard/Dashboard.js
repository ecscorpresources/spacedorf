import React, { Component } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import Properties from "./Properties";
import Profile from "./Profile";
import Settings from "./Settings";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              pl={0}
              bg="transparent"
              border="0"
              _focus={{ outline: "none" }}
            >
              My Properties
            </Tab>
            <Tab
              pl={0}
              bg="transparent"
              border="0"
              _focus={{ outline: "none" }}
            >
              Profile
            </Tab>

            <Tab
              pl={0}
              bg="transparent"
              border="0"
              _focus={{ outline: "none" }}
            >
              Settings
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Properties />
            </TabPanel>

            <TabPanel>
              <Profile />
            </TabPanel>

            <TabPanel>
              <Settings />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    );
  }
}
