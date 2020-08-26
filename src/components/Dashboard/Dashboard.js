import React, { Component } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import Properties from "./Properties";
import Profile from "./Profile";
import Settings from "./Settings";
import Hero from "../Globals/Hero";
import smallhero from "../../assets/img/11.png";
//import the agents and get a random agent for now
import agents from "../../data/agents";
import Spinner from "../Globals/Spinner";

class Dashboard extends Component {
  state = {
    agents: [],
  };

  componentDidMount() {
    this.setState({ agents });
  }
  render() {
    const id = 3;

    const agent = this.state.agents.find((agent) => agent.id === id);

    return (
      <>
        <Hero img={smallhero}></Hero>

        {agent === undefined ? (
          <Spinner />
        ) : (
          <>
            <section>
              <div>
                {/* can include agent's name */}
                <h1>Agent Dashboard</h1>
                <article>
                  <div>
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
                  </div>
                </article>
              </div>
            </section>
          </>
        )}
      </>
    );
  }
}

export default Dashboard;
