import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
// import Card from "@material-ui/core/Card";
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import { ReactSVG } from 'react-svg'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import OutlinedFlagTwoToneIcon from '@material-ui/icons/OutlinedFlagTwoTone';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Navbar from 'react-bootstrap/Navbar'
import PeopleIcon from '@material-ui/icons/People';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

// import Navbar from 'reactstrap';
import './libertyPage.css'
// import CanvasJSReact from  '.';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import CanvasJSReact from '../assets/graph/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;




const theme = createMuiTheme({
    overrides: {
        "MuiBox": {
            "root": {
                width: "100%"
            }
        }
    }
})




class libertyPage extends Component {

    constructor(props) {
        super(props);
        // console.log("Props are====>",this.props);

        this.state = {

        };

    }

    render() {
        //         var CanvasJSReact = require('./canvasjs.react');
        // var CanvasJS = CanvasJSReact.CanvasJS;
        // var CanvasJSChart = CanvasJSReact.CanvasJSChart;



        // const options = {
        //     theme: "light2",
        //     animationEnabled: true,
        //     exportEnabled: true,
        //     title: {
        //         text: "Number of iPhones Sold"
        //     },
        //     axisY: {
        //         title: "Number of iPhones ( in Million )",
        //         includeZero: false,
        //     },
        //     data: [
        //         {
        //             type: "area",
        //             xValueFormatString: "YYYY",
        //             yValueFormatString: "#,##0.## Million",
        //             color: "red",
        //             dataPoints: [
        //                 { x: new Date(2017, 0), y: 7.6 },
        //                 { x: new Date(2016, 0), y: 7.3 },
        //                 { x: new Date(2015, 0), y: 6.4 },
        //                 { x: new Date(2014, 0), y: 5.3 },
        //                 { x: new Date(2013, 0), y: 4.5 },
        //                 { x: new Date(2012, 0), y: 3.8 },
        //                 { x: new Date(2011, 0), y: 3.2 }
        //             ]
        //         }
        //     ]
        // }


        const options = {
            // theme: "light2",
            // animationEnabled: true,
            // title: {
            // 	text: "Comparison of Exchange Rates - 2017"
            // },
            // subtitles: [{
            // 	text: "GBP & USD to INR"
            // }],
            // axisY: {
            // 	includeZero: false,
            // 	prefix: "₹"
            // },
            toolTip: {
                shared: true
            },
            axisY: {
                labelFontSize: 0,
                gridColor: "transparent",
                tickLength: 0,
                lineThickness: 0,
                // labelFormatter: function () {
                //             return " ";  
                //       } 
                // labelFontColor: "dimGrey"
            },
            axisX: {
                // labelAngle: -30,
                labelFontSize: 0,
                lineThickness: 0,

                gridColor: "transparent",
                tickLength: 0,
                //       labelFormatter: function () {
                //         return " ";  
                //   } 
            },
            // width:280,
            height: 200,
            backgroundColor: 'transparent',
            data: [
                {
                    type: "area",
                    color: '#bfaeea',
                    // name: "GBP",
                    // showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    // yValueFormatString: "₹#,##0.##",
                    dataPoints: [
                        { x: new Date("2017- 01- 01"), y: 2 },
                        { x: new Date("2017- 02- 01"), y: 2.25 },
                        { x: new Date("2017- 03- 01"), y: 2 },
                        { x: new Date("2017- 04- 01"), y: 2.29 },
                        { x: new Date("2017- 05- 01"), y: 3.1 },
                        { x: new Date("2017- 06- 01"), y: 3.92 },
                        { x: new Date("2017- 07- 01"), y: 4.2 },
                        // { x: new Date("2017- 08- 01"), y: 18.671},
                        // { x: new Date("2017- 09- 01"), y: 18.496},
                        // { x: new Date("2017- 10- 01"), y: 16.007},
                        // { x: new Date("2017- 11- 01"), y: 18.233},
                        // { x: new Date("2017- 12- 01"), y: 16.276}
                    ]
                },
                {
                    type: "area",
                    color: '#857bff',
                    // name: "USD",
                    // showInLegend: true,
                    // xValueFormatString: "MMM YYYY",
                    // yValueFormatString: "₹#,##0.##",
                    dataPoints: [
                        { x: new Date("2017- 01- 01"), y: 1 },
                        { x: new Date("2017- 02- 01"), y: 1.25 },
                        { x: new Date("2017- 03- 01"), y: 1 },
                        { x: new Date("2017- 04- 01"), y: 1.29 },
                        { x: new Date("2017- 05- 01"), y: 2.1 },
                        { x: new Date("2017- 06- 01"), y: 2.2 },
                        { x: new Date("2017- 07- 01"), y: 3.2 },
                        // { x: new Date("2017- 08- 01"), y: 3.935},
                        // { x: new Date("2017- 09- 01"), y: 5.31},
                        // { x: new Date("2017- 10- 01"), y: 4.75},
                        // { x: new Date("2017- 11- 01"), y: 6.49},
                        // { x: new Date("2017- 12- 01"), y: 3.84}
                    ]
                }
            ]
        }




        const options1 = {
            animationEnabled: true,
            title: {
                // text: "Number of New Customers"
            },
            axisY: {
                labelFontSize: 0,
                gridColor: "transparent",
                tickLength: 0,
                lineThickness: 0,
                // labelFormatter: function () {
                //             return " ";  
                //       } 
                // labelFontColor: "dimGrey"
            },
            axisX: {
                // labelAngle: -30,
                //   labelFontSize:0,

                gridColor: "transparent",
                tickLength: 0,
                lineThickness: 0,
                //       labelFormatter: function () {
                //         return " ";  
                //   } 
            },
            // width:280,
            height: 200,
            showInLegend: false,
            backgroundColor: 'transparent',
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "2016",
                showInLegend: false,
                color: '#ae98e4',
                dataPoints: [
                    // { y: 155, label: "" },
                    { y: 0, label: "2007" },
                    { y: 75, label: "" },
                    { y: 20, label: "2009" },
                    { y: 50, label: "" },
                    { y: 100, label: "" },
                    { y: 75, label: "2011" },
                    // { y: 149, label: "" },
                    // { y: 153, label: "" },
                    // { y: 158, label: "" },
                    // { y: 154, label: "" },
                    // { y: 150, label: "2011" }
                ]
            },
            {
                type: "spline",
                name: "2017",
                showInLegend: false,
                color: '#857bff',
                dataPoints: [
                    // { y: 172, label: "" },
                    { y: 50, label: "2007" },
                    { y: 75, label: "" },
                    { y: 30, label: "" },
                    { y: 28, label: "" },
                    { y: 70, label: "" },
                    { y: 84, label: "2011" },
                    // { y: 168, label: "" },
                    // { y: 175, label: "" },
                    // { y: 170, label: "" },
                    // { y: 165, label: "" },
                    // { y: 169, label: "2011" }
                ]
            }]
        }



        const options2 = {
            title: {
                // text: "Basic Column Chart"
            },
            animationEnabled: true,
            axisY:
            {
                enabled: false,
                labelFontSize: 0,
                gridColor: "transparent",
                tickLength: 0,

                // title: "",
                // title: "",
                // gridThickness: 0,
                // tickLength: 0,
                lineThickness: 0,
                // labelFormatter: function(){
                //   return " ";
                // }   

                // labelFormatter: function () {
                //             return " ";  
                //       } 
                // labelFontColor: "dimGrey"
            },
            axisX: {
                // labelAngle: -30,
                //   labelFontSize:0,
                lineThickness: 0,
                gridColor: "transparent",
                tickLength: 0,
                //       labelFormatter: function () {
                //         return " ";  
                //   } 
            },
            // width: 280,
            height: 200,
            backgroundColor: 'transparent',
            // canvasjsChartCredit:function(){

            // },

            dataPointWidth: 20,
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    width: 10,
                    color: '#464de4',
                    dataPoints: [
                        { label: "Mon", y: 40, },
                        { label: "Tue", y: 50 },
                        { label: "Wed", y: 10 },
                        { label: "Thu", y: 55 },
                        { label: "Fri", y: 20 },
                        { label: "Sat", y: 80 },
                        { label: "Sun", y: 30 }
                    ]
                }
            ]
        }

        return (
            <div className="main">

                {/* <h1>React Area Chart</h1> */}
                {/* <CanvasJSChart options={options}/> */}


                {/* id="appMain" */}
                <MuiThemeProvider theme={theme}>
                    <div >
                        <Navbar className="shadow-box-example z-depth-5" expand="lg" style={{ backgroundColor: "white", boxShadow: "10px -1px 13px 0px rgba(0,0,0,0.75)" }}>
                            {/* <Paper> */}
                            {/* <Box
                    boxShadow={3}
                > */}
                            <div id="main1">
                                <div id="title">
                                    <IconButton size="small"><img src={require("../assets/statue.svg")} alt="" width="25" /></IconButton>
                                    <div id="title1">Liberty</div>
                                    <div id="title2">UI</div>
                                </div>
                                {/* <div id="title"> */}
                                <div className="d-flex flex-row justify-content-end">

                                    <SearchIcon />

                                    <InputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                        id="input"
                                    />

                                    <img src={require('../assets/remind.svg')} alt="Logo" />

                                    <img src={require('../assets/profile.png')} alt="Logo" width="25" height="25" />

                                    <MenuIcon className="menu" />

                                </div>
                            </div>


                            <div id="main2">

                                <div variant="contained" style={{ color: "white" }} id="buton">
                                    <div id="title">
                                        <DesktopWindowsIcon />
                                        <div style={{ marginLeft: "1em", fontSize: "15px" }}>DASHBOARD</div>
                                    </div>
                                </div>
                                <div variant="contained" style={{ color: "black" }} id="buton1">
                                    <div id="title">

                                        <ExploreOutlinedIcon style={{ color: "#814eff" }} />
                                        <div style={{ marginLeft: "1em", fontSize: "15px" }}>WIDGETS</div>
                                    </div>
                                </div>
                                <div variant="contained" style={{ color: "black" }} id="buton1">
                                    <div id="title">
                                        <img src={require("../assets/react.svg")} alt="" width="25" />
                                        {/* <ExploreOutlinedIcon style={{color:"#814eff"}}/> */}
                                        {/* <link rel="icon" href="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" /> */}
                                        {/* <ReactSVG src="svg.svg" />, document.getElementById('root') */}
                                        <div style={{ marginLeft: "1em", fontSize: "15px", marginTop: "0.2em" }}>UI ELEMENTS</div>
                                        <ArrowDropDownOutlinedIcon />
                                    </div>
                                </div>
                                <div variant="contained" style={{ color: "black" }} id="buton1">
                                    <div id="title">
                                        <OutlinedFlagTwoToneIcon style={{ color: "#814eff" }} />
                                        <div style={{ marginLeft: "1em", fontSize: "15px", marginTop: "0.2em" }}>PAGES</div>
                                        <ArrowDropDownOutlinedIcon />
                                    </div>
                                </div>
                                <div variant="contained" style={{ color: "black" }} id="buton1">
                                    <div id="title">
                                        <img src={require("../assets/compass.svg")} alt="" width="25" />
                                        <div style={{ marginLeft: "1em", fontSize: "15px", marginTop: "0.2em" }}>FORMS</div>
                                        <ArrowDropDownOutlinedIcon />
                                    </div>
                                </div>
                                <div variant="contained" style={{ color: "black" }} id="buton1">
                                    <div id="title">
                                        <AcUnitOutlinedIcon style={{ color: "#814eff" }} />
                                        <div style={{ marginLeft: "1em", fontSize: "15px", marginTop: "0.2em" }}>APPS</div>
                                        <ArrowDropDownOutlinedIcon />
                                    </div>
                                </div>

                            </div>
                            {/* </Box> */}
                            {/* </Paper> */}
                        </Navbar>
                    </div>
                </MuiThemeProvider>


                <div id='col'>

                    {/* <div style={{
                        width: '80%', backgroundColor: 'white',
                        marginLeft: '11%', marginTop: '2em',

                    }} id='boxes'> */}
                    <div id='boxes1'>

                        <Card id='card' >
                            <PeopleIcon color="primary" fontSize="large" />
                            <div style={{ marginLeft: '2em' }}>
                                <Card.Body id='text'>New Users</Card.Body>
                                <Card.Body id="num">65,650</Card.Body>
                            </div>
                        </Card>

                        <Card id='card'>
                            <CheckCircleOutlinedIcon color="primary" fontSize="large" />
                            <div style={{ marginLeft: '2em' }}>
                                <Card.Body id='text'>New Feedbacks</Card.Body>
                                <Card.Body id="num">32,604</Card.Body>
                            </div>
                        </Card>

                    </div>

                    <div id='boxes'>
                        <Card id='card'>
                            <img src={require("../assets/trophy.svg")} alt="" width="25" />
                            <div style={{ marginLeft: '2em' }}>
                                <Card.Body id='text'>Employees</Card.Body>
                                <Card.Body id="num">17,583</Card.Body>
                            </div>
                        </Card>

                        <Card id='card'>
                            <GpsFixedIcon color="primary" fontSize="large" />
                            <div style={{ marginLeft: '2em' }}>
                                <Card.Body id='text'>Total Sales</Card.Body>
                                <Card.Body id="num">61,119</Card.Body>
                            </div>
                        </Card>
                    </div>



                </div>

                <div id="cards">
                    <Card id="cardTest">
                        <div className="d-flex flex-column">
                            {/* <div className="d-flex"> */}
                            <img src={require('../assets/statue-of-liberty.svg')} alt="Logo" width="100" height="80" />
                            {/* </div> */}
                            <h3>Maria Johnson</h3>
                            <Card.Body id="name">Developer</Card.Body>
                            <Card.Body id="name1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem</Card.Body>
                            <h5 id="name2">Follow</h5>
                            <Card.Body id="bar"></Card.Body>
                            <div style={{
                                display: 'flex',
                                flexdirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <h3>5896</h3>
                                <h3>1596</h3>
                                <h3>7896</h3>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexdirection: 'row',
                                justifyContent: 'space-between', fontSize: '12px'
                            }}>
                                <div>Posts</div>
                                <div>Followers</div>
                                <div>Likes</div>
                            </div>
                        </div>
                    </Card>
                    <Card id="cardTest1">
                        <div className="d-flex flex-column" style={{ width: "100%" }}>
                            <Card.Body id="name3">Top Products</Card.Body>
                            <Card.Body id="name4">598,486</Card.Body>
                            <Card.Body id="name11">6.5% change from today</Card.Body>

                            <Card.Body id="bar1"></Card.Body>

                            <Card.Body id="name3">Support Cases</Card.Body>
                            <Card.Body id="name4">323,360</Card.Body>
                            <Card.Body id="name11">2.5% change from yesterday</Card.Body>

                            <div id='graph'>
                                <CanvasJSChart options={options} />
                            </div>

                        </div>
                    </Card>
                    <Card id="cardTest2" >
                        <div className="d-flex flex-column" style={{ width: "100%" }}>
                            <div id='justify'>
                                <h3>6,256</h3>
                                <h3 style={{ marginLeft: '7.5em' }}>8569</h3>

                            </div>
                            <div id='justify1'
                            >
                                <div>Total sales</div>
                                <div style={{ marginLeft: '9.5em' }}>Open Campaign</div>

                            </div>

                            <div id='graph'>
                                <CanvasJSChart options={options1} />
                            </div>



                            <div id='justify'>
                                <h3>5136</h3>
                                <h3 style={{ marginLeft: '7.5em' }}>4596</h3>

                            </div>
                            <div id='justify1'>
                                <div>Online Sales</div>
                                <div style={{ marginLeft: '10.5em' }}>Store Sales</div>

                            </div>

                        </div>
                    </Card>
                </div>

                <div>
                    <div id="cards1">
                        <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#354168', width: '845px', marginLeft: '0%' }}>
                            <Card.Body id="name13">ID</Card.Body>
                            <Card.Body id="name13">Assignee</Card.Body>
                            <Card.Body id="name13">Task Details</Card.Body>
                            <Card.Body id="name13">Payment Method</Card.Body>
                            <Card.Body id="name13">Payment Status</Card.Body>
                            <Card.Body id="name13">Amount</Card.Body>
                            <Card.Body id="name13">Tracking Number</Card.Body>
                        </Card>
                        <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#354168', marginTop: '-1em', width: '845px', marginLeft: '0%' }}>
                            <Card.Body id="name12">#320</Card.Body>
                            <Card.Body id="name12">Mark C.Diaz</Card.Body>
                            <Card.Body id="name12">Support of thteme</Card.Body>
                            <Card.Body id="name12">Credit card</Card.Body>
                            <Button id='but'>Approved</Button>
                            <Card.Body id="name14">$12,245</Card.Body>
                            <Card.Body id="name12">JPBBN435893458</Card.Body>
                        </Card>
                        <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#354168', marginTop: '-1em', width: '845px', marginLeft: '0%' }}>
                            <Card.Body id="name12">#321</Card.Body>
                            <Card.Body id="name12">Jose D</Card.Body>
                            <Card.Body id="name12">Verify your email address !</Card.Body>
                            <Card.Body id="name12">Internet banking</Card.Body>
                            <Button id='but1'>Pending</Button>
                            <Card.Body id="name14">$12,245</Card.Body>
                            <Card.Body id="name12">BDYBN435893325</Card.Body>
                        </Card>
                        <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#354168', marginTop: '-1em', width: '845px', marginLeft: '0%' }}>
                            <Card.Body id="name12">#322</Card.Body>
                            <Card.Body id="name12">Philips T</Card.Body>
                            <Card.Body id="name12">Item support message send</Card.Body>
                            <Card.Body id="name12">Credit card</Card.Body>
                            <Button id='but'>Approved</Button>
                            <Card.Body id="name14">$12,245</Card.Body>
                            <Card.Body id="name12">JSNTN435884258</Card.Body>
                        </Card>
                        <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#354168', marginTop: '-1em', width: '845px', marginLeft: '0%' }}>
                            <Card.Body id="name12">#323</Card.Body>
                            <Card.Body id="name12">Luke Pixel</Card.Body>
                            <Card.Body id="name12">New submission on website</Card.Body>
                            <Card.Body id="name12">Cash on delivery</Card.Body>
                            <Button id='but2'>Rejected</Button>
                            <Card.Body id="name14">$12,245</Card.Body>
                            <Card.Body id="name12">JPABT435893678</Card.Body>
                        </Card>
                    </div>
                </div>

                <div id="cards">
                    <Card id='bottomCard1' >
                        <h4>The Current Chart</h4>

                        <CanvasJSChart options={options2} />


                        <Card.Body id="bar2"></Card.Body>
                        <Card.Body id="names">Projects Status</Card.Body>
                        {/* <div id='row'>
                    <Card.Body  id='num1'>76,533</Card.Body><Card.Body>PCS</Card.Body>
                    </div> */}

                        <div style={{
                            display: 'flex',
                            flexdirection: 'row',

                        }}>
                            <h3 id='num1'>76,533</h3>
                            <Card.Body style={{ marginTop: '3em', color: '#636363', marginLeft: '0.5em' }}>PCS</Card.Body>

                        </div>


                    </Card>
                    <Card id='bottomCard1'>
                        <h4>Updates</h4>
                        <div id='bullet'>
                            <div id='verbar'>
                                {/* <RadioButtonUncheckedOutlinedIcon style={{color:'#464de4',fontSize: 'larger',marginLeft: '-0.5em'}}/> */}
                                <img src={require("../assets/circle.svg")} alt="" width="20" style={{ marginLeft: '-0.6em' }} />
                                <img src={require("../assets/circle.svg")} alt="" width="20" style={{ marginLeft: '-0.6em' }} />
                                <img src={require("../assets/circle.svg")} alt="" width="20" style={{ marginLeft: '-0.6em' }} />
                            </div>

                            <div id='infos'>
                                <div id='infos1'>
                                    <h4>User confirmation</h4>
                                    <div id='name123'>Donec rutrum congue leo eget malesuada.</div>
                                    <div id='watch'>
                                        <WatchLaterOutlinedIcon fontSize='small' />
                                        <div id='name12' style={{ color: '#A8ABAD', marginTop: '0.26em' }}> 7 months ago.</div>
                                    </div>
                                </div>

                                <div id='infos12'>
                                    <h4>Continuous evaluation</h4>
                                    <div id='name123'>Vivamus suscipit tortor eget felis porttitor volutpat.</div>
                                    <div id='watch'>
                                        <WatchLaterOutlinedIcon fontSize='small' />
                                        <div id='name12' style={{ color: '#A8ABAD', marginTop: '0.26em' }}> 7 months ago.</div>
                                    </div>
                                </div>

                                <div id='infos13'>
                                    <h4>Promotion</h4>
                                    <div id='name123'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</div>
                                    <div id='watch'>
                                        <WatchLaterOutlinedIcon fontSize='small' />
                                        <div id='name12' style={{ color: '#A8ABAD', marginTop: '0.26em' }}> 7 months ago.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>


                <div>
                    <Card id='bottomCard2'>
                        <h3>Manage Tickets</h3>
                        <div id='cols'>
                            <img src={require('../assets/statue-of-liberty.svg')} alt="Logo" width="50" height="50" />

                            <div id='colText'>
                                <div id='rows'>
                                    <div id='name13'>James : </div>
                                    <div id='name1234'>[#23047] Donec rutrum congue leo eget malesuada.</div>
                                </div>
                                <div id='name12345'>Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim vivamus.</div>
                                <div id='name123456'>
                                    <div>Last responded : 3 hours ago</div>
                                    <div>Due in : 2 Days</div>
                                </div>
                            </div>
                            <div style={{marginRight:'1em'}}>
                            {/* <Button >Manage</Button> */}
                            <h5 id="manage">Manage</h5>
                            </div>
                        </div>

                        <div id='bar3'></div>

                        <div id='cols'>
                            <img src={require('../assets/statue-of-liberty.svg')} alt="Logo" width="50" height="50" />

                            <div id='colText'>
                                <div id='rows'>
                                    <div id='name13'>Stella : </div>
                                    <div id='name1234'>[#23135] Curabitur aliquet quam id dui posuere blandit.</div>
                                </div>
                                <div id='name12345'>Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl.</div>
                                <div id='name123456'>
                                    <div>Last responded : 3 hours ago</div>
                                    <div>Due in : 2 Days</div>
                                </div>
                            </div>
                            <div style={{marginRight:'1em'}}>
                            {/* <Button >Manage</Button> */}
                            <h5 id="manage">Manage</h5>
                            </div>
                        </div>

                        <div id='bar3'></div>

                        <div id='cols'>
                            <img src={require('../assets/statue-of-liberty.svg')} alt="Logo" width="50" height="50" />

                            <div id='colText'>
                                <div id='rows'>
                                    <div id='name13'>John Doe :</div>
                                    <div id='name1234'>[#23246] Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.</div>
                                </div>
                                <div id='name12345'>Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Lorem ipsum dolor sit amet.</div>
                                <div id='name123456'>
                                    <div>Last responded : 3 hours ago</div>
                                    <div>Due in : 2 Days</div>
                                </div>
                            </div>
                            <div style={{marginRight:'1em'}}>
                            {/* <Button >Manage</Button> */}
                            <h5 id="manage">Manage</h5>
                            </div>
                        </div>
                    </Card>
                </div>



            </div >
        )
    }
}
export default libertyPage