import {AppBar, Container, Grid, Icon, Tab, Tabs, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import AppsIcon from "@material-ui/icons/Apps";


const TopBar = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Icon edge="start" color="inherit">
                    <AppsIcon/>
                </Icon>
                <Grid container justify="space-around" alignItems="center">
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h6">{props.text}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {props.tabs}
                    </Grid>
                    <Grid item xs={0} sm={2}/>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

const NavTabs = (props) => {
    const tabs = props.tabs

    return (
        <Tabs
            variant="fullWidth"
            value={props.value}
            onChange={props.handleChange}
            aria-label="navigation tabs"
        >
            {tabs.map((data, index) => {
                return <Tab label={data.label} value={index}/>
            })}
        </Tabs>
    );
}

const Navigation = (props) => {
    const [currentTab, setCurrentTab] = React.useState(0);

    const handleTabChange = (event, value) => {
        setCurrentTab(value);
    };

    const tabs = props.tabs
    return (
        <>
            <TopBar tabs={<NavTabs tabs={tabs} handleChange={handleTabChange} value={currentTab}/>}
                    text={"Simple React Projects"}/>
            <Container>{tabs[currentTab].body}</Container>
        </>
    );
}

export default Navigation