import type { Contribution } from "@/types";

export const contributions: Contribution[] = [
  {
    id: "docsgpt",
    project: "DocsGPT",
    description:
      'Built a "What\'s New" notification component in React with environment variable configuration and localStorage persistence.',
    pullRequestUrl: "https://github.com/arc53/DocsGPT/pull/2033",
  },
  {
    id: "openhands",
    project: "OpenHands",
    description:
      "Fixed global state conflicts in the conversation store by decoupling UI loading states from global action panels.",
    pullRequestUrl: "https://github.com/OpenHands/OpenHands/pull/12041",
  },
  {
    id: "carbon",
    project: "IBM Carbon Design System",
    description:
      "Standardized readonly and disabled states for Select components across React and Web Component libraries, with updated unit tests.",
    pullRequestUrl: "https://github.com/carbon-design-system/carbon/pull/20808",
  },
];
