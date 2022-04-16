import React, { Component } from 'react';

class Columns extends Component {
    constructor(props) {
        super(props);
   
    }

  

    render() {
        return (
                    <div className="row m-3">

                    <div className ='col-sm-2 col-md-2'>
                        <button
                        onClick={() => this.props.onClickBtn("col-md-2 mt-1")}
                        className="btn btn-info mr-3"
                        >
                        6 cột
                        </button>
                    </div>

                    <div className ='col-sm-2  col-md-2'>
                        <button
                        onClick={() => this.props.onClickBtn("col-md-3 mt-1")}
                        className="btn btn-info mr-3"
                        >
                        4 cột
                        </button>
                    </div>

                    <div className ='col-sm-2  col-md-2'>
                        <button
                        onClick={() => this.props.onClickBtn("col-md-4 mt-1")}
                        className="btn btn-info mr-3"
                        >
                        3 cột
                        </button>
                    </div>

                    <div className ='col-sm-2  col-md-2'>
                        <button
                        onClick={() => this.props.onClickBtn("col-md-6 mt-1")}
                        className="btn btn-info mr-3"
                        >
                        2 cột
                        </button>
                    </div>

                    <div className ='col-sm-2 col-md-2'>
                        <button
                        onClick={() => this.props.onClickBtn("col-md-12 mt-1")}
                        className="btn btn-info mr-3"
                        >
                        1 cột
                        </button>
                    </div>

                    </div>
        );
    }
}

export default Columns;