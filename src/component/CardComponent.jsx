import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardHeader } from '@material-ui/core';
import { Menu, Grid } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import ChartComponent from './ChartComponent';

//const options = ['Expand', 'Remove'];
const useStyles = makeStyles({
    card: {
        minWidth: 275,
        maxWidth: "100%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    colorBox: {
        padding: 10,
        textAlign: "center",
        color: "white"
    }
});

var data = {
    labels: ['5', '10', '15'],
    datasets: [
        {
            label: 'First',
            data: [2650, 2800, 2000, 0],
            backgroundColor: 'green'

        }, {
            label: 'Second',
            data: [2300, 3100, 1700, 0],
            backgroundColor: 'red'
        },
    ]

};
export default function CardComponent ({ctitle}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isPickerVisible, setToggleState] = React.useState(false);
    const [colorPicker, setColorState] = React.useState('#ff0000');
    const [colorPicker1, setColorState1] = React.useState('#228B22');
    const [chartData, setChartData] = React.useState({});


    //console.log(isPickerVisible)
    //console.log(colorPicker)



    React.useEffect(() => {
        //colorPicker
        let mounted = true;
        //data.datasets[1].backgroundColor = colorPicker;
        //let color = data.datasets[1].backgroundColor;
        //const value =  getChartData();
        if (mounted) {
            setChartData(data)
            //console.log("the chart data in useEff ", chartData);
        }
        return () => {
            mounted = !mounted;
        }
    }, [colorPicker]);


    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        //const selected = (("Expand" === options[index]) ? "Expand" : ("Remove" === options[index]) ? "Remove" : "");
        //console.log("The value ", selected);

        setAnchorEl(null);
    }

    function selectedColor(event) {

        setColorState(event.currentTarget.value)
        data.datasets[1].backgroundColor = event.currentTarget.value;


    }
    function selectedColor1(event) {
        setColorState1(event.currentTarget.value)
        data.datasets[0].backgroundColor = event.currentTarget.value;


    }

    function handleToggle(isPickerVisibleValue) {
        setToggleState(isPickerVisibleValue)
        setAnchorEl(null);
    }


    //console.log("the chart data set ", chartData);
    return (


        <Card className={classes.card}>
            <CardHeader title={ctitle} action={

                <div>
                    <Tooltip title="options">
                        <IconButton aria-label="Settings"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />


                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}

                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={() => handleToggle(true)}>Expand</MenuItem>
                        <MenuItem onClick={() => handleToggle(false)}>Remove</MenuItem>
                    </Menu>
                </div>

            } />
            <CardContent>


                <Typography variant="body2" component="div">
                    Card Content
                    
                </Typography>
                <br />
                <Grid item md={"auto"}>
                {isPickerVisible ? " " : <div>
                        <span className={classes.colorBox} style={{ backgroundColor: colorPicker1}}>
                            First Color Picker:
                    <input type="color" name="selectedcolor" value={colorPicker1} onChange={selectedColor1}></input>
                        </span>
                        <span className={classes.colorBox} style={{ backgroundColor: colorPicker }}>
                            Second Color Picker:
                    <input type="color" name="favcolor" value={colorPicker} onChange={selectedColor}></input>
                        </span>
                    </div>}
                </Grid>
                
                
                    <Grid container spacing={3}>
                        <Grid item>
                        <ChartComponent chartDataset={chartData} />
                        </Grid>
                        <Grid item>
                        {isPickerVisible ?
                           
                           <div>
                               <div className={classes.colorBox} style={{ backgroundColor: colorPicker1 }}>
                                   First Color Picker:
               <input type="color" name="selectedcolor" value={colorPicker1} onChange={selectedColor1}></input>
                               </div>
                               <div className={classes.colorBox} style={{ backgroundColor: colorPicker }}>
                                   Second Color Picker:
               <input type="color" name="favcolor" value={colorPicker} onChange={selectedColor}></input>
                               </div>
                           </div>
                       :
                       ''
                   }
                        </Grid>

                    </Grid>

            </CardContent>
        </Card>
    );

}