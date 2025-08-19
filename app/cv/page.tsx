import { List, ListItem } from "@mantine/core";
import { Title, Text, Divider } from "../../components";

import { makePrefixer } from "../../utils";
import "./page.css";

const withBaseName = makePrefixer("careerPage");

export default function AudioPage() {
  return (
    <div className={withBaseName()}>
      <Title order={1}>Education</Title>
      <Title order={2}>University of Warwick</Title>
      <List>
        <ListItem>
          BEng, Mechanical Engineering & Manufacturing 2.1 (Sep 2017 - May 2020)
        </ListItem>
        <ListItem>
          Dissertation: “Life Cycle Analysis Comparing Electric and Diesel Buses
          in Urban Environments” (Grade:1st)
        </ListItem>
      </List>
      <Divider />
      <Title order={1}>Technical Experience</Title>
      <Title order={2}>
        Software Engineer, Salt Design System JPMorgan (March 2023 - Sep 2024)
      </Title>
      <Title order={3}>
        Skills: React - Typescript - Cypress - CSS - Figma - Storybook
      </Title>
      <List>
        <ListItem>
          Developed re-usable and extendable React / Typescript components, used
          across internal applications within JPM, including Execute (the lead
          trading platform for FX and Commodity Traders across JPM).
        </ListItem>
        <ListItem>
          Collaborated with designers to ensure components aligned with Web
          Content Accessibility Guidelines (WCAG) including, keyboard
          navigation, appropriate labelling for screen readers and using
          semantic html where possible.
        </ListItem>
        <ListItem>
          Implemented Cypress End-to-End and Chromatic Visual Regression testing
          to enhance bug detection and ensure design consistency across the
          component library.
        </ListItem>
        <ListItem>
          Authored comprehensive documentation for the website explaining new
          component functionality for effective application integration, user
          adoption and accessibility.
        </ListItem>
      </List>
      <Title order={2}>
        Software Engineer, Cloud Deployment JPMorgan (Sep 2022 - March 2023)
      </Title>
      <Title order={3}>
        Skills: AWS CLI + Console - Terraform - Docker - Jenkins
      </Title>
      <List>
        <ListItem>
          Migrated Digital Platform NextJS Website to AWS ECS across dev, test,
          and prod environments, resulting in scalable infrastructure and
          monthly savings of approximately £2000.
        </ListItem>
        <ListItem>
          Developed Docker and Terraform templates for containerising NextJS
          apps, enhancing compatibility with Kubernetes, AWS, and internal
          tools, reducing migration times by 40% for subsequent applications.
        </ListItem>
        <ListItem>
          Implemented security measures following AWS Shared Responsibility
          Model, like AWS Secrets Manager, to safeguard sensitive company and
          personal data.
        </ListItem>
        <ListItem>
          Established automated CI/CD pipelines with Jenkins for seamless
          deployment across all environments.
        </ListItem>
        <ListItem>
          Generated cost evaluations using AWS Cost Calculator, showcasing cost
          reductions to senior management and offering future cost projections.
        </ListItem>
      </List>
      <Title order={2}>Graduate Program, JPMorgan (Sep 2020 - Sep 2022)</Title>
      <Title order={3}>
        Skills: Jira - Requirements Gathering - Roadmapping - Defined OKR's
      </Title>
      <List>
        <ListItem>
          Selected for JPMorgan’s graduate program, rotating through product
          roles to drive innovation and collaboration across technology
          platforms.
        </ListItem>
        <ListItem>
          Led the integration of the trade booking API into the work management
          platform (Unity), reducing trade consolidation time by 20%.
          Collaborated with UX on user journeys, MVP creation, and developers on
          implementation and testing.
        </ListItem>
        <ListItem>
          Increased adoption by 200 users in 3 months through onboarding
          sessions, enhancing functionality, and organising feedback sessions
          with users, design, and product teams to boost engagement and trust in
          platform development.
        </ListItem>
        <ListItem>
          Coordinated a multidisciplinary team (Developers, Designers, QA
          Testing, Business Analysts) as Agile lead. Conducted Scrum meetings,
          managed backlog prioritisation, defined OKRs, aligned with
          stakeholders, and enhanced team efficiency.
        </ListItem>
      </List>
      <Divider />
      <Title order={1}>Diversity and Inclusion</Title>
      <List>
        <ListItem>
          Launched an EMEA-wide PRIDE mentorship program, supporting new joiners
          and aiding professional growth for LGBTQ+ employees.
        </ListItem>
        <ListItem>
          Hosted weekly PRIDE coffee mornings to foster connection, culture and
          a sense of community for LGBTQ+ people across the London offices
        </ListItem>
      </List>
      <Divider />
      <Title order={1}>Skills and Interests</Title>
      <List>
        <ListItem>Certifications: AWS Practitioner, Harvard CS50</ListItem>
        <ListItem>
          English (Native), Spanish (Conversational), Portuguese (Basic)
        </ListItem>
        <ListItem>
          Music: Clarinet (Grade 8), Piano (Grade 5), Music Production
          (Ableton),
        </ListItem>
        <ListItem>
          Interests: Sustainable Fashion, Hiking, Touch Designer, LGBTQ+ Rights,
          Salsa Dancing
        </ListItem>
      </List>
    </div>
  );
}
