import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        //console.log("the prop data set ", this.props.chartDataset);
     
        return (<div>
            <Bar
            data={this.props.chartDataset}
            options = { {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Color Value'
                          },
                        gridLines: {
                          display: false
                        },
                        ticks: {
                            beginAtZero:true,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number'
                          },
                        gridLines: {
                          display: true
                        },
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }} 
        />
       </div>);
    }
}

export default Chart;