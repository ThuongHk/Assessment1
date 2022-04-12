import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat from "dateformat";


class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStaffs: null,
      columDefault: "col-12 col-md-6 col-lg-4 mt-3"
    };
    this.selectStaff = this.selectStaff.bind(this);
    this.numberColumns = this.numberColumns.bind(this);
    this.outputStaff = this.outputStaff.bind(this);
    
  }

  selectStaff(staff) {    
    this.setState({
      listStaffs: staff
    });
  }

  numberColumns(col) {
    this.setState({
      columDefault: col
    });
  }

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
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.columDefault}>
          <Card style={{backgroundColor: '#C6E5EE', cursor: 'pointer'}} key={staff.id} onClick={() => this.selectStaff(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

        
       return (
      <div className="container">
           <div className="row m-3">

                <div className ='col-sm-2 col-md-2'>
                <button
                  onClick={() => this.numberColumns("col-md-2 mt-1")}
                  className="btn btn-info mr-3"
                >
                  6 cột
                </button>
                </div>

                <div className ='col-sm-2  col-md-2'>
                <button
                  onClick={() => this.numberColumns("col-md-3 mt-1")}
                  className="btn btn-info mr-3"
                >
                  4 cột
                </button>
                </div>

                <div className ='col-sm-2  col-md-2'>
                <button
                  onClick={() => this.numberColumns("col-md-4 mt-1")}
                  className="btn btn-info mr-3"
                >
                  3 cột
                </button>
                </div>

                <div className ='col-sm-2  col-md-2'>
                <button
                  onClick={() => this.numberColumns("col-md-6 mt-1")}
                  className="btn btn-info mr-3"
                >
                  2 cột
                </button>
                </div>

                <div className ='col-sm-2 col-md-2'>
                <button
                  onClick={() => this.numberColumns("col-md-12 mt-1")}
                  className="btn btn-info mr-3"
                >
                  1 cột
                </button>
                </div>

</div>
        <div className="row">{staffList}</div>
        <div className="row mt-5">
          {this.outputStaff(this.state.listStaffs)}
        </div>
      </div>
    );
  }
}


export default StaffList;
