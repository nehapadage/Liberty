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
// import Navbar from 'reactstrap';
import './libertyPage.css'




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
        return (
            <div className="main">


                {/* id="appMain" */}
                <MuiThemeProvider theme={theme}>
                    <div >
                        <Navbar className="shadow-box-example z-depth-5" expand="lg" style={{ backgroundColor: "white" }}>
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


                <div className="d-flex flex-column ">

                    <div style={{
                        width: '80%', backgroundColor: 'white',
                        marginLeft: '11%', marginTop: '2em',

                    }} id='boxes'>

                        <Card style={{ width: '25%', padding: '3%', border: '1px solid #d5dcec', display: 'flex', flexDirection: 'row' }}>
                            <PeopleIcon color="primary" fontSize="large" />
                            <div style={{ marginLeft: '2em' }}>
                                <Card.Body id='text'>New Users</Card.Body>
                                <Card.Body id="num">65,650</Card.Body>
                            </div>
                        </Card>

                        <Card style={{ width: '25%', padding: '3%', border: '1px solid #d5dcec', display: 'flex', flexDirection: 'row' }}>
                            <CheckCircleOutlinedIcon color="primary" fontSize="large" />
                            <div style={{ marginLeft: '2em' }}>
                                <Card.Body id='text'>New Feedbacks</Card.Body>
                                <Card.Body id="num">32,604</Card.Body>
                            </div>
                        </Card>



                        <Card id='boxes' style={{ width: '25%', padding: '3%', border: '1px solid #d5dcec', display: 'flex', flexDirection: 'row' }}>
                            <img src={require("../assets/trophy.svg")} alt="" width="25" />
                            <div style={{ marginLeft: '2em' }}>
                                <Card.Body id='text'>Employees</Card.Body>
                                <Card.Body id="num">17,583</Card.Body>
                            </div>
                        </Card>

                        <Card style={{ width: '25%', padding: '3%', border: '1px solid #d5dcec', display: 'flex', flexDirection: 'row' }}>
                            <GpsFixedIcon color="primary" fontSize="large" />
                            <div style={{ marginLeft: '2em' }}>
                                <Card.Body id='text'>Total Sales</Card.Body>
                                <Card.Body id="num">61,119</Card.Body>
                            </div>
                        </Card>

                    </div>

                </div>

                <div id="cards">
                    <Card style={{ margin: '1em', width: '22%', padding: '3%', border: '1px solid #d5dcec', display: 'flex', justifyContent: 'center', color: '#354168' }}>
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
                    <Card style={{ margin: '1em', width: '22%', padding: '3%', border: '1px solid #d5dcec', display: 'flex', color: '#354168' }}>
                        <div className="d-flex flex-column">
                            <Card.Body id="name3">Top Products</Card.Body>
                            <Card.Body id="name4">598,486</Card.Body>
                            <Card.Body id="name11">6.5% change from today</Card.Body>

                            <Card.Body id="bar1"></Card.Body>

                            <Card.Body id="name3">Support Cases</Card.Body>
                            <Card.Body id="name4">323,360</Card.Body>
                            <Card.Body id="name11">2.5% change from yesterday</Card.Body>

                        </div>
                    </Card>
                    <Card style={{ margin: '1em', width: '23%', padding: '3%', border: '1px solid #d5dcec', display: 'flex', color: '#354168' }}>
                        <div className="d-flex flex-column">
                            <div style={{
                                display: 'flex',
                                flexdirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <h3>6,256</h3>
                                <h3 style={{ marginLeft: '7.5em' }}>8569</h3>

                            </div>
                            <div style={{
                                display: 'flex',
                                flexdirection: 'row',
                                // justifyContent: 'space-around',
                                fontSize: '12px'
                            }}>
                                <div>Total sales</div>
                                <div style={{ marginLeft: '9.5em' }}>Open Campaign</div>

                            </div>



















                            <div style={{
                                display: 'flex',
                                flexdirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <h3>5136</h3>
                                <h3 style={{ marginLeft: '7.5em' }}>4596</h3>

                            </div>
                            <div style={{
                                display: 'flex',
                                flexdirection: 'row',
                                // justifyContent: 'space-around',
                                fontSize: '12px'
                            }}>
                                <div>Online Sales</div>
                                <div style={{ marginLeft: '10.5em' }}>Store Sales</div>

                            </div>

                        </div>
                    </Card>
                </div>


                <div id="cards1">
                    <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex',flexDirection:'row',justifyContent:'space-between', color: '#354168' }}>
                        <Card.Body id="name13">ID</Card.Body>
                        <Card.Body id="name13">Assignee</Card.Body>
                        <Card.Body id="name13">Task Details</Card.Body>
                        <Card.Body id="name13">Payment Method</Card.Body>
                        <Card.Body id="name13">Payment Status</Card.Body>
                        <Card.Body id="name13">Amount</Card.Body>
                        <Card.Body id="name13">Tracking Number</Card.Body>                       
                    </Card>
                    <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex',flexDirection:'row',justifyContent:'space-between', color: '#354168',marginTop: '-1em' }}>
                        <Card.Body id="name12">#320</Card.Body>
                        <Card.Body id="name12">Mark C.Diaz</Card.Body>
                        <Card.Body id="name12">Support of thteme</Card.Body>
                        <Card.Body id="name12">Credit card</Card.Body>
                        <Button id='but'>Approved</Button>
                        <Card.Body id="name14">$12,245</Card.Body>
                        <Card.Body id="name12">JPBBN435893458</Card.Body>                       
                    </Card>
                    <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex',flexDirection:'row',justifyContent:'space-between', color: '#354168',marginTop: '-1em' }}>
                        <Card.Body id="name12">#321</Card.Body>
                        <Card.Body id="name12">Jose D</Card.Body>
                        <Card.Body id="name12">Verify your email address !</Card.Body>
                        <Card.Body id="name12">Internet banking</Card.Body>
                        <Button id='but1'>Pending</Button>
                        <Card.Body id="name14">$12,245</Card.Body>
                        <Card.Body id="name12">BDYBN435893325</Card.Body>                       
                    </Card>
                    <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex',flexDirection:'row',justifyContent:'space-between', color: '#354168',marginTop: '-1em' }}>
                        <Card.Body id="name12">#322</Card.Body>
                        <Card.Body id="name12">Philips T</Card.Body>
                        <Card.Body id="name12">Item support message send</Card.Body>
                        <Card.Body id="name12">Credit card</Card.Body>
                        <Button id='but'>Approved</Button>
                        <Card.Body id="name14">$12,245</Card.Body>
                        <Card.Body id="name12">JSNTN435884258</Card.Body>                       
                    </Card>
                    <Card style={{ margin: '1em', width: '89%', padding: '1%', border: '1px solid #d5dcec', display: 'flex',flexDirection:'row',justifyContent:'space-between', color: '#354168',marginTop: '-1em' }}>
                        <Card.Body id="name12">#323</Card.Body>
                        <Card.Body id="name12">Luke Pixel</Card.Body>
                        <Card.Body id="name12">New submission on website</Card.Body>
                        <Card.Body id="name12">Cash on delivery</Card.Body>
                        <Button id='but2'>Rejected</Button>
                        <Card.Body id="name14">$12,245</Card.Body>
                        <Card.Body id="name12">JPABT435893678</Card.Body>                       
                    </Card>
                </div>


                <div id="cards">
                    <Card style={{ margin: '1em', width: '40%', padding: '2%', border: '1px solid #d5dcec', display: 'flex',flexDirection:'column', color: '#354168',textAlign:'left' }}>
                    <h4>The Current Chart</h4>  

                  








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
                                <Card.Body style={{ marginTop:'3em',color: '#636363',marginLeft:'0.5em' }}>PCS</Card.Body>

                            </div>
                    

                    </Card>
                    <Card style={{ margin: '1em', width: '40%', padding: '2%', border: '1px solid #d5dcec', display: 'flex',flexDirection:'row',justifyContent:'space-between', color: '#354168' }}>
                     pqr                  
                    </Card>
                    </div>



            </div >
        )
    }
}
export default libertyPage