import logo from "./logo.svg";
import "./App.css";
import readXlsxFile from "read-excel-file/browser";
import { useRef } from "react";
import _ from "lodash";
import { Link } from "react-router";
import { useGlobalContext } from './GlobalContext';
import moment from "moment";
function App() {
  const { data, updateData } = useGlobalContext();

  const readFile = (event) => {
    readXlsxFile(event).then((rows) => {
   
      const newArr = _.drop(rows, 1);
    
      updateData(  _.map(newArr, (item) => {
        return [item[0], item[1], item[2], item[4], item[5], item[6], item[10], item[11], item[12], item[13], item[15], item[17], item[18], item[19], moment(item[20]).format("MM/DD/YYYY"), moment(item[22]).format("MM/DD/YYYY"), item[23], item[24], item[25]];
      }));

    });
  };
  return (
    <div className="App">
      <input
        type="file"
        id="input"
        onChange={(event) => {
          readFile(event.target.files[0]);
        }}
      />

      <table>
        {_.map(data, (item, index) => {
          return (
            <tr>
              <td>
                <Link to={`/${index}`}>View</Link>
              </td>
              {_.map(item, (cell) => {
                return <td>{String(cell||"-")}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
