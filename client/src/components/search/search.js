import React from "react";
import "./search.css";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import { Card } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

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
              <input type="text" className="ui-input" placeholder="ค้นหา" />

              <button className="search-bt">ค้นหา</button>
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
          <label className="check1" style={{ color: "black" }}>
            <h2> มูลนิธิ </h2>
          </label>

          <Checkbox
            className="box2"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <label className="check2" style={{ color: "black" }}>
            <h2> ตู้ปันใจ</h2>
          </label>
        </div>
      </center>

      <div className="bg2">
        <center className="head">
          <h3> มูลนิธิ</h3>
        </center>

        <div className="row m-0">
          <div className="column col-4">
            <Card className="foundat">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnmt84Z13XWVUnKhEhuKpf18Kzy190Yz-7g&usqp=CAU"
              />
              <Card.Body>
                <Link className="Tfound">ชื่อโครงการ</Link>
                <div className="information">ต้องการรับบริจาค :</div>
                <div className="information">จำนวน :</div>
                <div className="information-1">วันที่ลง :</div>
                <Link className="CardTitle">อ่านเพิ่มเติม</Link>
              </Card.Body>
            </Card>
          </div>

          <div className="column col-4">
            <Card className="foundat">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnmt84Z13XWVUnKhEhuKpf18Kzy190Yz-7g&usqp=CAU"
              />
              <Card.Body>
                <Link className="Tfound">ชื่อโครงการ</Link>
                <div className="information">ต้องการรับบริจาค :</div>
                <div className="information">จำนวน :</div>
                <div className="information-1">วันที่ลง :</div>
                <Link className="CardTitle">อ่านเพิ่มเติม</Link>
              </Card.Body>
            </Card>
          </div>

          <div className="column col-4">
            <Card className="foundat">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnmt84Z13XWVUnKhEhuKpf18Kzy190Yz-7g&usqp=CAU"
              />
              <Card.Body>
                <Link className="Tfound">ชื่อโครงการ</Link>
                <div className="information">ต้องการรับบริจาค :</div>
                <div className="information">จำนวน :</div>
                <div className="information-1">วันที่ลง :</div>
                <Link className="CardTitle">อ่านเพิ่มเติม</Link>
              </Card.Body>
            </Card>
          </div>
        </div>

        <center className="head">
          <h3> ตู้ปันใจ </h3>{" "}
        </center>

        <div className="row m-0">
          <div className="column col-4">
            <Card className="foundat">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnmt84Z13XWVUnKhEhuKpf18Kzy190Yz-7g&usqp=CAU"
              />
              <Card.Body>
                <Link className="Tfound">บริจาคอะไร</Link>
                <div className="information">ผู้สร้าง :</div>
                <div className="information">จังหวัด :</div>
                <div className="information-1">วันที่ลง :</div>
              <div className="pum">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="want" // จำเป็น
                >
                  ขอรับ
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className="fav"
                >
                  ถูกใจ
                </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="column col-4">
            <Card className="foundat">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnmt84Z13XWVUnKhEhuKpf18Kzy190Yz-7g&usqp=CAU"
              />
              <Card.Body>
                <Link className="Tfound">บริจาคอะไร</Link>
                <div className="information">ผู้สร้าง :</div>
                <div className="information">จังหวัด :</div>
                <div className="information-1">วันที่ลง :</div>
              <div className="pum">
                <Button 
                  variant="contained"
                  color="primary"
                  size="small"
                  className="want" // จำเป็น
                >
                  ขอรับ
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className="fav"
                >
                  ถูกใจ
                </Button>
              </div>
              </Card.Body>
            </Card>
          </div>

          {/* <div className="column col-4">
            <Card className="foundat">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnmt84Z13XWVUnKhEhuKpf18Kzy190Yz-7g&usqp=CAU"
              />
              <Card.Body>
                <Link className="Tfound">บริจาคอะไร</Link>
                <div className="information">ผู้สร้าง :</div>
                <div className="information">จังหวัด :</div>
                <div className="information-1">วันที่ลง :</div>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="want" // จำเป็น
                >
                  ขอรับ
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className="fav"
                >
                  ถูกใจ
                </Button>
              </Card.Body>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  );
}
