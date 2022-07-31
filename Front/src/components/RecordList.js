import React, { useEffect, useState } from "react";
import "./recordList.css";

const Record = (props) => (
  <tr>
    <td>{props.record.number}</td>
    <td>{props.record.route}</td>
    <td>{props.record.arrivalDate}</td>
    <td>{props.record.arrivalTime}</td>
    <td>
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [searchTerm, setSearchTerm] = useState("");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...records].sort((a, b) => {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      });
      setRecords(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...records].sort((a, b) => {
        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
      });
      setRecords(sorted);
      setOrder("ASC");
    }
  };

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  function recordList() {
    return records
      .filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.number.includes(searchTerm)) {
          return val;
        }
      })
      .map((record) => {
        return (
          <Record
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
          />
        );
      });
  }

  return (
    <div className="wrap">
      <h3>Train Schedule</h3>
      <input
        type="text"
        placeholder="Search train number"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => sorting("number")}>Number</th>
            <th onClick={() => sorting("route")}>Route</th>
            <th onClick={() => sorting("arrivalDate")}>Arrival Date</th>
            <th onClick={() => sorting("arrivalTime")}>Arrival Time</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
