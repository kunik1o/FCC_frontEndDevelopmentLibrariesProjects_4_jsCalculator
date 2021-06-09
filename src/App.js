import "./App.scss";
import React from "react";
import imgUrl from "./YBtHSWh8.jpg";

function App(props) {
  let [data, modifyData] = React.useState({ current: "", res: "", fun: "" });
  React.useEffect(() => {});
  return (
    <div className="App">
      <div id="calc-container">
        <div id="screen">
          <div id="formular-container">
            <div id="formular">
              {!data.res ? 0 : data.res == 114514 ? "AHHHHH" : data.res}
            </div>
            <div id="egg" style={data.res == 114514 ? {} : { display: "none" }}>
              <img src={imgUrl} />
            </div>
          </div>
          <div id="cur-container">
            <div id="fun">{data.fun}</div>
            <div id="current">
              {!data.current
                ? 0
                : data.current.length > 10
                ? "EXCEEDED"
                : data.current}
            </div>
          </div>
        </div>
        <div id="keyboard">
          <button
            className="funcBtn"
            id="add"
            onClick={() => {
              modifyData(
                Object.assign({}, data, {
                  current: "",
                  res: data.current ? data.current : data.res,
                  fun: "+",
                })
              );
            }}
          >
            +
          </button>
          <button
            className="funcBtn"
            id="subtract"
            onClick={() => {
              modifyData(
                Object.assign({}, data, {
                  current: "",
                  res: data.current ? data.current : data.res,
                  fun: "-",
                })
              );
            }}
          >
            -
          </button>
          <button
            className="funcBtn"
            id="multiply"
            onClick={() => {
              modifyData(
                Object.assign({}, data, {
                  current: "",
                  res: data.current ? data.current : data.res,
                  fun: "*",
                })
              );
            }}
          >
            *
          </button>
          <button
            className="funcBtn"
            id="divide"
            onClick={() => {
              modifyData(
                Object.assign({}, data, {
                  current: "",
                  res: data.current ? data.current : data.res,
                  fun: "/",
                })
              );
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 1 })
              );
            }}
            id="one"
          >
            1
          </button>
          <button
            id="two"
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 2 })
              );
            }}
          >
            2
          </button>
          <button
            id="three"
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 3 })
              );
            }}
          >
            3
          </button>
          <button
            id="clear"
            onClick={() => {
              modifyData({ current: "", res: "", fun: "" });
            }}
          >
            A<br />C
          </button>
          <button
            id="four"
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 4 })
              );
            }}
          >
            4
          </button>
          <button
            id="five"
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 5 })
              );
            }}
          >
            5
          </button>
          <button
            id="six"
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 6 })
              );
            }}
          >
            6
          </button>
          <button
            id="seven"
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 7 })
              );
            }}
          >
            7
          </button>
          <button
            id="eight"
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 8 })
              );
            }}
          >
            8
          </button>
          <button
            id="nine"
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 9 })
              );
            }}
          >
            9
          </button>
          <button
            id="display"
            onClick={() => {
              !data.res
                ? modifyData({ current: "", res: data.current, fun: "" })
                : modifyData({
                    current: "",
                    fun: "",
                    res:
                      Math.round(
                        eval(data.res + data.fun + data.current) * 10e9
                      ) / 10e9,
                  });
            }}
          >
            =
          </button>
          <button
            id="zero"
            onClick={() => {
              modifyData(
                Object.assign({}, data, { current: data.current + 0 })
              );
            }}
          >
            0
          </button>
          <button
            id="decimal"
            onClick={() => {
              console.log(data.current.indexOf("."));
              modifyData(
                !data.current
                  ? Object.assign({}, data, { current: "0." })
                  : data.current.indexOf(".") === -1
                  ? Object.assign({}, data, { current: data.current + "." })
                  : data
              );
            }}
          >
            .
          </button>
        </div>
      </div>
      <footer>
        Designed by
        <br />
        <span style={{ color: "red", fontSize: "14px" }}>KUNIKLO</span>
      </footer>
    </div>
  );
}

export default App;
