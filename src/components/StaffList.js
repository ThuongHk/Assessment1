import React, { Component } from "react";
import OutputStaff from "./OutputStaff";
import Columns from './Columns';
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";



class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStaffs: null,
      columDefault: "col-12 col-md-6 col-lg-4 mt-3"
    };
   
    // this.outputStaff = this.outputStaff.bind(this);
    
  }

  selectStaff(staff) {    
    this.setState({
      listStaffs: staff
    });
  }

  numberColumns1(col) {
    this.setState({
      columDefault: col
    });
  }

  

  render() {
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.columDefault}>
          <Card 
          style = {{backgroundColor: '#C6E5EE', cursor: 'pointer'}}
           key={staff.id}
            onClick={() => this.selectStaff(staff)}
            >
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

        
       return (
      <div className="container">
           <Columns  onClickBtn={(col)=>this.numberColumns1(col)} />
        <div className="row">{staffList}</div>
        <div className="row mt-5">
          <OutputStaff staff = {this.state.listStaffs}/>
         
        </div>
      </div>
    );
  }
}


export default StaffList;
