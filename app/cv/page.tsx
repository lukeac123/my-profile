import { List, ListItem } from "@mantine/core";
import { Title, Text } from "../../components";

import { makePrefixer } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("careerPage");

export default function AudioPage() {
  return (
    <div className={withBaseName()}>
      <Title order={1}>Luke Atkinson-Coyle</Title>
      <>
        <Title order={2}>
          Software Engineer, Salt Design System JPMorgan - (18 Months)
        </Title>
        <Title order={3}>
          Skills: React - Typescript - Cypress - CSS - Figma
        </Title>
        <List>
          <ListItem>
            Developed reusable, themeable React Components, used by over 50
            internal teams within the firm. Including Dialog, Overlay, Slider,
            Parent Child Layout.
          </ListItem>
          <ListItem>
            Facilitated design system adoption and achieved team objectives by
            ensuring compatibility across Desktop, Mobile, and Web platforms.
          </ListItem>
          <ListItem>
            Implemented Cypress testing per change or addition of a feature as
            well as and Chromatic visual regression testing.
          </ListItem>
          <ListItem>
            Collaborated with designers to ensure components were accessible
            according to Web Content Accessibility Guidelines.
          </ListItem>
          <ListItem>
            Enhanced NextJS Website requiring Dynamic Routing, Server Side
            Components
          </ListItem>
          <ListItem>
            Contracted for internal teams enabling a applying a custom theme to
            match their unique design specs, including Tailwind, Vanilla Extract
            and vanilla CSS Variables.
          </ListItem>
        </List>
      </>
      <>
        <Title order={2}>
          Software Engineer, Cloud Deployment JPMorgan - (6 months)
        </Title>
        <Title order={3}>Skills: AWS CLI + Console - Terraform - Docker</Title>
        <List>
          <ListItem>
            Migrated the Digital Platform NextJS Website from onPrem to AWS ECS
            for dev, test and prod environments in line with the company wide
            cloud migration objectives.
          </ListItem>
          <ListItem>
            Provisioned AWS ECS cluster using Terraform and the AWS console.
          </ListItem>
          <ListItem>
            Establish continuous integration and deployment pipelines utilising
            the internal build tooling and Spinnaker.
          </ListItem>
          <ListItem>
            Containerised the NextJS front end and NodeJS backend in separate
            stand alone containers using Docker. Established a local connection
            within the cluster between the two containers.
          </ListItem>
          <ListItem>
            Implemented firewall requests to enable egress out of the cluster
            back to onPrem IP addresses and to the external internet.
          </ListItem>
          <ListItem>
            Added secure passwords to AWS Secrets manager, making fetch calls
            within the application to retrieve the passwords when needed.
          </ListItem>
        </List>
      </>
      <>
        <Title order={2}>
          Graduate Program, JPMorgan (Product Manager, Unity Platform / Product
          Manager, Digital Search) - (2 Years)
        </Title>
        <Title order={3}>
          Skills: Jira - Requirements Gathering - Roadmapping - Prioritisation
        </Title>
        <List>
          <ListItem>
            Digital Search - Led the development of a standardised schema for
            global search across multiple applications, collaborating with
            product and tech teams to ensure seamless integration.
          </ListItem>
          <ListItem>
            Unity - managed the build out of a new platform that consolidated
            work prioritisation and multiple applications into a single
            interface. Including requirement gathering, prioritisation.
          </ListItem>
          <ListItem>
            Defined OKRS and assigned KPIs to align with the wider team’s
            objectives.
          </ListItem>
          <ListItem>
            Led daily stand ups, scrums and coordinated feedback sessions
            between customers, design and dev teams.
          </ListItem>
        </List>
      </>
      <>
        <Title order={2}>
          Mechanical And Manufacturing Engineering, Warwick University (BEng
          Hons)
        </Title>
        <Title order={3}>
          Skills: AutoDesk Fusion - Engineering Drawings - Simulations -
          Rendering - LifeCycleAnalysis
        </Title>
        <List>
          <ListItem>
            Designed and Developed a Plywood go kart using AutoCAD and a laser
            cutter, simulating the design for stress, strain, considering
            manufacturing constraints like the radius and kerf and exporting the
            designs as DFX files.
          </ListItem>
          <ListItem>
            Created a mechanical toy from Aluminium using a CNC Milling machine,
            exporting STEP files into CAM to create projections and define the
            work volume, using AutoCAM on more intricate parts. Taking
            considerations like machining tolerances, internal corners and
            limiting the force on the drill bit.
          </ListItem>
          <ListItem>
            Redesigned an electric handheld razor according to DFMA principles,
            reducing manufacturing time and therefore costs.
          </ListItem>
          <ListItem>
            Developed renderings to be used for Advertising Purposes
          </ListItem>
          <ListItem>
            Dissertation: Life Cycle Analysis comparing the economic and
            environmental feasibility of electric and diesel buses over a 10
            year period, looking at the environmental impact of specific
            manufacturing processes.
          </ListItem>
        </List>
      </>
    </div>
  );
}
