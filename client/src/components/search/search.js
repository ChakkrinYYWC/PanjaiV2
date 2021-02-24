import React from "react";
import "./search.css";
import Checkbox from "@material-ui/core/Checkbox";


export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <center>
        <div className="search-bar">
          <form className="ui-form">
            <div className="field">
              <input type="text" className="ui-input" placeholder="Search" />

              <label style={{ color: "green" }}>Search</label>
            </div>
          </form>
        </div>
      

      <div>
        <Checkbox
          className="box1" 
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <label className="check1" style={{ color: "black" }}>มูลนิธิ</label>
  
        <Checkbox
          className="box2" 
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <label className="check2" style={{ color: "black" }}>ตู้ปันใจ</label>
      </div> </center>



   


    </div>
   
  );
}
