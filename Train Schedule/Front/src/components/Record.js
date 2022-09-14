import React from "react";

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

export default Record;
