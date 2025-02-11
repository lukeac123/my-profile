import { List, ListItem } from "@mantine/core";
import { Title, Text } from "../../../components";

import { makePrefixer } from "../../../utils";
import "./page.css";

const withBaseName = makePrefixer("careerPage");

export default function AudioPage() {
  return (
    <div className={withBaseName()}>
      <Title order={1}>Luke Atkinson-Coyle</Title>
      <>
        <Title order={2}>
          Software Engineer, Salt Design System, JPMorgan — 2022-2024
        </Title>
        <Title order={3}>
          Skills: React - Typescript - Cypress - CSS - Figma
        </Title>
        <List>
          <ListItem>
            Developed reusable, themeable components, for use across the firm,
            in React and Typescript including Dialog, Overlay, Slider, Parent
            Child Layout.
          </ListItem>
          <ListItem>
            Collaborated with designers to ensure components were accessible
            according to WAG standards.
          </ListItem>
          <ListItem>
            Compatibility with Desktop, Mobile and Web using CSS Media queries
            as well as custom hooks to modify components.
          </ListItem>
          <ListItem>
            Implemented Cypress for testing per change or addition of a feature
            as well as and Chromatic visual regression testing.
          </ListItem>
          <ListItem>
            Implemented theming solutions for internal teams to override the
            components styles to their specific design specs, including
            Tailwind, Vanilla Extract and vanilla CSS Variables.
          </ListItem>
        </List>
      </>
      <>
        <Title order={2}>
          Software Engineer, Cloud Deployment, JPMorgan — 2022-2022
        </Title>
        <Title order={3}>Skills: AWS CLI + Console - Terraform - Docker</Title>
        <Text>
          Migrated the Digital Platform NextJS website from private to public
          cloud AWS ECS for dev, test and prod environments. Provisioned AWS ECS
          cluster using Terraform and the AWS console. Establish continuous
          integration and deployment pipelines for each of the infrastructure
          terraform modules as well as the front and back end applications,
          utilising the internal build tooling and Spinnaker for integration.
          Containerised the NextJS front end and NodeJS backend in separate
          stand alone containers using Docker. Established a local connection
          within the cluster between the two containers. Implemented ACM
          firewall requests to enable egress out of the cluster back to onPrem
          IP addresses. Added secure passwords to AWS Secrets manager, making
          fetch calls within the application to retrieve the passwords when
          needed.
        </Text>
      </>
      <>
        <Title order={2}>
          Graduate Program, JPMorgan (Product Manager, Unity Platform / Product
          Manager, Digital Search) 2020-2022
        </Title>
        <Text>
          Detailed customer requirements and translated into technical
          specifications to be executed by the developers. Managed and
          reprioritised Jira stories according the customer requirements and
          team capacity. Defined OKRS and assigned KPIs to align with the wider
          team’s objectives Led daily stand ups. Coordinated feedback sessions
          between the customers, design and dev teams.
        </Text>
      </>
    </div>
  );
}
