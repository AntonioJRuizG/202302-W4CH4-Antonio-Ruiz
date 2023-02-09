import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";
import { Actions } from "../../../features/actions/component/actions";
import { Display } from "../../../features/display/component/display";
import { Info } from "../../../features/info/component/info";
import { Keyboard } from "../../../features/keyboard/component/keyboard";

jest.mock("../../../features/actions/component/actions");
jest.mock("../../../features/display/component/display");
jest.mock("../../../features/info/component/info");
jest.mock("../../../features/keyboard/component/keyboard");

describe("Given an App component", () => {
  describe("when it is rendered", () => {
    test("then it should call actions, display, info and keyboard components", () => {
      render(<App />);
      expect(Actions).toHaveBeenCalled();
      expect(Display).toHaveBeenCalled();
      expect(Info).toHaveBeenCalled();
      expect(Keyboard).toHaveBeenCalled();
    });
  });
});
