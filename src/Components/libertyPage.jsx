import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import { ReactSVG } from 'react-svg'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import OutlinedFlagTwoToneIcon from '@material-ui/icons/OutlinedFlagTwoTone';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import './libertyPage.css'


const theme = createMuiTheme({
    overrides: {
        "MuiBox": {
            "root": {
               width:"100%"
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
                <div>
                <Box
                    boxShadow={3}
                >
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

                            <img src={require('../assets/profile.png')} alt="Logo" width="25" height="25"/>

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
                                <OutlinedFlagTwoToneIcon style={{ color: "#814eff" }}/>
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
                                <AcUnitOutlinedIcon style={{ color: "#814eff" }}/>
                                <div style={{ marginLeft: "1em", fontSize: "15px", marginTop: "0.2em" }}>APPS</div>
                                <ArrowDropDownOutlinedIcon />
                            </div>
                        </div>
                     
                    </div>
                </Box>
                </div>
                   </MuiThemeProvider>


                <div>
                    {/* <Card>
                        <Card>abc</Card>
                        <Card>xyz</Card>
                    </Card> */}
                </div>



            </div>
        )
    }
}
export default libertyPage