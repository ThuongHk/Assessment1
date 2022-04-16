import React, { Component } from 'react';
import dateFormat from "dateformat";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

class OutputStaff extends Component {


    outputStaff(staff){    
        if (staff != null) {
          return (
            
            <div className="col-sm-4 col-md-4 mb-4">
              <Card>
                <CardImg width="50%" src={staff.image} alt={staff.name} />
                <CardBody>
                  <CardTitle>Họ và tên: {staff.name}</CardTitle>
                  <CardText>
                    Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                  </CardText>
                  <CardText>
                    Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                  </CardText>
                  <CardText>Phòng ban: {staff.department.name}</CardText>
                  <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                  <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                </CardBody>
              </Card>
            </div>
          );
        } else {
          return <div></div>;
        }
      }


    render() {
        return (
            <div>
                {this.outputStaff(this.props.staff)}
            </div>
        );
    }
}

export default OutputStaff;