import "./foundation.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";




function Foundation() {
    return (
      <div className="App">
        <div className="bg">
          <div className="head">
            <h2>
              <br />
              โครงการป้องกันและช่วยเหลือสถานการณ์แพร่ระบาดของโควิด-19
            </h2>
            <br />
          </div>
  
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                width={800}
                height={600}
                className="d-block w-100"
                src="https://www.ramafoundation.or.th/give/media/uploads/content/No%20buttom%20Website_2-01.jpg"
                alt="First slide"
              />
            </Carousel.Item>
  
            <Carousel.Item interval={500}>
              <img
                width={800}
                height={600}
                className="d-block w-100"
                src="https://www.ramafoundation.or.th/give/media/uploads/content/No%20buttom%20Website_2-01.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
  
            <Carousel.Item>
              <img
                width={800}
                height={600}
                className="d-block w-100"
                src="https://www.ramafoundation.or.th/give/media/uploads/content/No%20buttom%20Website_2-01.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <br />
  
          <div className="text">
            <div className="text-t">
                
              <div >
                <button className="button-address" >
                  ที่อยู่
                </button>
              </div>
  
              <h4 className="head-h4"><strong>มูลนิธิรามาธิบดี</strong></h4>
              <h5><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                จากสถานการณ์การแพร่ระบาดของโควิด-19 ที่เกิดขึ้นทั่วโลกนั้น คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล ตระหนักถึงความสำคัญของการรักษาพยาบาล
                และการให้ความรู้ที่ถูกต้องแก่สังคมเพื่อป้องกันการแพร่ระบาด <br/><br/>ตลอดจนการเตรียมความพร้อมของบุคลากร เครื่องมือแพทย์ ห้องผู้ป่วย เพื่อรับมือกับสถานการณ์ที่อาจเกิดขึ้นในอนาคตทั้งระยะสั้นและระยะยาว
                หากมีจำนวนผู้ป่วยเพิ่มมากขึ้นดังเช่นในประเทศกลุ่มเสี่ยงในเอเชียและยุโรป<br/>
                
                <br/>ด้วยเหตุนี้ คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี และมูลนิธิรามาธิบดีฯ จึงได้จัดตั้งกองทุนพิเศษ "โครงการป้องกันและช่วยเหลือสถานการณ์แพร่ระบาดของโควิด-19" เพื่อสร้างความพร้อมและความคล่องตัวในการบริหารจัดการด้านต่างๆ
  
                <br/><br/>ที่จำเป็นต้องใช้งบประมาณเพิ่มเติมจากที่ได้รับการสนับสนุนจากภาครัฐ เป็นที่ทราบดีว่า ในสถานการณ์เช่นนี้ ประชาชนทุกคนต่างเผชิญกับความลำบาก หากแต่น้ำใจของท่านเพียงคนละเล็กละน้อย
  
                <br/><br/>สามารถแปรเปลี่ยนเป็นพลังการให้ที่ยิ่งใหญ่เพื่อช่วยเหลือชีวิตของพี่น้องชาวไทยด้วยกันต่อไป  ดังปณิธานที่ว่า<strong>"คำว่าให้...ไม่สิ้นสุด"</strong>
  
  
                <br/><br/><strong>คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี และมูลนิธิรามาธิบดีฯ ขอเชิญทุกท่านร่วมบริจาคเงินสมทบทุนหรือช่วยบอกต่อโครงการป้องกันและช่วยเหลือสถานการณ์แพร่ระบาดของโควิด-19<br/>
  
                เพื่อผ่านวิกฤตนี้ไปด้วยกัน และเพื่อป้องกันการแพร่ระบาดขอเชิญบริจาคออนไลน์ ทางหน้าเว็บนี้</strong>
  
  
    
                <h5 className="mid"><br/>#รามาร่วมใจสู้ภัยโควิด</h5><br/>
                <h5 className="mid"><strong>คำว่าให้ไม่สิ้นสุด</strong></h5>
              </h5>
  
              
            </div>
            
          </div>


          <div className="button-donate-div" >
               <center><button className="button-donate" >
                  บริจาค
                </button> </center> 
             </div>
  
  
          
        </div>
      </div>
    );
  }
  
  export default Foundation;
  