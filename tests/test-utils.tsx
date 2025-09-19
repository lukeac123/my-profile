import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";

export function customRender(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider>{children}</MantineProvider>
    ),
  });
}
export * from "@testing-library/react";
export { customRender as render };
