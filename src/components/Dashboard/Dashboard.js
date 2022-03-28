import React, { Component } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import Properties from "./Properties";
import Profile from "./Profile";
import Settings from "./Settings";
import Hero from "../Globals/Hero";
import smallhero from "../../assets/img/11.png";
//import the agents and get one agent for now
import agents from "../../data/agents";
import Spinner from "../Globals/Spinner";
import styled from "@emotion/styled";
import UploadProperty from "../Forms/UploadProperty";

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
        <Hero img={smallhero} dashboard="true"></Hero>

        {agent === undefined ? (
          <Spinner />
        ) : (
          <>
            <DashboardWrapper>
              <div className="mb-5 d-flex justify-content-between">
                {/* can include agent's name */}
                <h1>Agent Dashboard</h1>
                <UploadProperty />
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
                      style={{ paddingLeft: "15rem", height: "50px" }}
                    >
                      <Tab
                        className="text-center"
                        mr={24}
                        bg="transparent"
                        border="0"
                        _focus={{ outline: "none" }}
                        _selected={{
                          bg: "#71675A",
                          color: "#fff",
                        }}
                        fontSize={14}
                        fontWeight={600}
                        style={{ height: "50px", width: "12rem" }}
                        textAlign={["center"]}
                        color=" #000"
                      >
                        My Properties
                      </Tab>
                      <Tab
                        mr={24}
                        bg="transparent"
                        border="0"
                        _focus={{ outline: "none" }}
                        _selected={{
                          bg: "#71675A",
                          color: "#fff",
                        }}
                        fontSize={14}
                        fontWeight={600}
                        style={{ height: "50px", width: "12rem" }}
                        textAlign={["center"]}
                        color=" #000"
                      >
                        Profile
                      </Tab>

                      <Tab
                        bg="transparent"
                        border="0"
                        _focus={{ outline: "none" }}
                        _selected={{
                          bg: "#71675A",
                          color: "#fff",
                        }}
                        fontSize={14}
                        fontWeight={600}
                        style={{ height: "50px", width: "12rem" }}
                        textAlign={["center"]}
                        color=" #000"
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
