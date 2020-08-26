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
import styled from "@emotion/styled";

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
    console.log(agent);

    return (
      <>
        <Hero img={smallhero}></Hero>

        {agent === undefined ? (
          <Spinner />
        ) : (
          <>
            <DashboardWrapper>
              <div className="mb-5">
                {/* can include agent's name */}
                <h1>Agent Dashboard</h1>
              </div>
              <article className="d-flex">
                <div className="mr-5">
                  <img
                    style={{ width: "160px" }}
                    src={agent.img}
                    alt="agent banner"
                  />
                </div>
                <div className="flex-grow-1">
                  <Tabs variant="unstyled">
                    <TabList
                      bg="#f7f7f7"
                      style={{ padding: "1rem 0 1rem 15rem" }}
                    >
                      <Tab
                        mr={24}
                        pl={0}
                        bg="transparent"
                        border="0"
                        _focus={{ outline: "none" }}
                        style={{ fontSize: "1.7rem" }}
                      >
                        My Properties
                      </Tab>
                      <Tab
                        mr={24}
                        pl={0}
                        bg="transparent"
                        border="0"
                        _focus={{ outline: "none" }}
                        style={{ fontSize: "1.7rem" }}
                      >
                        Profile
                      </Tab>

                      <Tab
                        pl={0}
                        bg="transparent"
                        border="0"
                        _focus={{ outline: "none" }}
                        style={{ fontSize: "1.7rem" }}
                      >
                        Settings
                      </Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <Properties agent={agent} />
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
              </article>
            </DashboardWrapper>
          </>
        )}
      </>
    );
  }
}

const DashboardWrapper = styled.section`
  width: 75vw;
  margin: 4rem auto;
`;

export default Dashboard;
