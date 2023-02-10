/* eslint-disable no-lone-blocks */
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

{
  /* <App>
  <Info></Info> -- estado llamada desde el context
  <Display></Display> -- numero que recibe del context
  <Actions>
    <Action x={n1} label={} handle={handleCall}></Action>
    <Action x={n2} label={} handle={handleHang}></Action>
  </Actions>
  <Keyboard>

    11* <Key></Key>
  </Keyboard>
</App>

[a1, a2].map((item) => <Action x={item}></Action>);*/
}
