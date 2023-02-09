import { useContext } from "react";
import { AppContext } from "../../../core/context/app.context";

export function Keyboard() {
  const { handlerClick, handlerClickDelete } = useContext(AppContext);

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <button className="key" onClick={() => handlerClick("1")}>
            1
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handlerClick("2")}>
            2
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handlerClick("3")}>
            3
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handlerClick("4")}>
            4
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handlerClick("5")}>
            5
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handlerClick("6")}>
            6
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handlerClick("7")}>
            7
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handlerClick("8")}>
            8
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handlerClick("9")}>
            9
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handlerClick("0")}>
            0
          </button>
        </li>
        <li>
          <button className="key big" onClick={() => handlerClickDelete()}>
            delete
          </button>
        </li>
      </ol>
    </div>
  );
}
