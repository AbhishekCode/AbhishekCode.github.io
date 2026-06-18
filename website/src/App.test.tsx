import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("./utils/info", () => ({
  myInfo: () =>
    Promise.resolve({
      personalData: {
        name: "Abhishek Kumar Singh",
        introduction: "Test intro",
        skills: [],
        hobby: [],
      },
      projectData: [],
    }),
}));

describe("App", () => {
  it("renders loading state", () => {
    render(<App />);
    expect(screen.getByText("Loading…")).toBeTruthy();
  });
});
