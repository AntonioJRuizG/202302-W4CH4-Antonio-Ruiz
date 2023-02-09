/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Actions } from "../../../features/actions/component/actions";
import { Display } from "../../../features/display/component/display";
import { Info } from "../../../features/info/component/info";
import { Keyboard } from "../../../features/keyboard/component/keyboard";

export function App() {
  return (
    <div className="container">
      <Info></Info>
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <Keyboard></Keyboard>
          </ol>
        </div>
        <div className="actions">
          <Display></Display>
          <Actions></Actions>
        </div>
      </main>
    </div>
  );
}
