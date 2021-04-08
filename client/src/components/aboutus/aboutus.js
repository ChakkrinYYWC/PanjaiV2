import React, { Component, useEffect, useState } from 'react';
import './aboutus.css'
import { Card, Button } from 'react-bootstrap';

class aboutus extends Component{

    render() {
        return (
            <span className='bg'>
                <div className='bg1'>
               {/* <div class='"row m-0'> */}
               {/* <div className="column col-4"> */}
               <div class="grid-container">
                <img
                        className="pic"
                        src="/nonateToopunjai.png"
                    />
                {/* </div>  */}
                {/* <div className="column col-4">    */}
                <span className='topic'>
                ปันใจ
                </span>
               
                <span className='text'>
                    
                     มีจุดประสงค์ที่จัดทำเว็บนี้ขึ้นเพื่อช่วยเหลือมูลนิธิต่าง ๆ 
                    <br/>ที่ต้องการรับความช่วยเหลือและช่วยให้คนที่อยากบริจาคสามารถ
                    <br/>บริจาคของได้อย่างง่ายขึ้น ซึ่งเป็นองค์กรที่ไม่แสวงหากำไร
                    <br/>เป็นกิจกรรมเพื่อสังคม 
                </span>
                {/* </div> */}
                {/* </div> */}
                </div>
                
                


                
                
                <span className='topic1'>
               เกณฑ์การคัดเลือกโครงการ
                </span>
               
                <span className='text1'>
                <br/>1. เป็นโครงการที่สร้างประโยชน์ต่อสังคม วัดผลได้จริงและมีประสิทธิภาพ
                    <br/>2. เป็นโครงการที่เน้นความคิดสร้างสรรค์ สร้างประโยชน์แก่ชุมชนและสังคมในแง่มุมใหม่ มีความยั่งยืน 
                    <br/>3. เป็นโครงการที่สามารถจัดโครงการได้จริงและมีความก้าวหน้าของโครงการได้อย่างดี
                     
                </span>
                
                
                </div>
                
                </span>
                 
        )
    }
}
export default aboutus