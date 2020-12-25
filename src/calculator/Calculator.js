import {
    AppBar,
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Icon,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import DialpadIcon from "@material-ui/icons/Dialpad";
import React from "react";
import useStyles from "../Styles";

const Header = () => (
    <AppBar position={"static"}>
        <Toolbar>
            <Icon edge={"start"} color={"inherit"} aria-label="Home">
                <DialpadIcon/>
            </Icon>
            <Box ml={3}>
                <Typography variant={"h6"}>Simple React Calculator</Typography>
            </Box>
        </Toolbar>
    </AppBar>
)

const Result = (props) => {
    const classes = useStyles()

    return (
        <Grid container justify="center">
            <Grid item xs={10} md={6}>
                <Paper className={classes.paper} elevation={10}>
                    <Typography variant={"h4"}>Result:</Typography>
                    <Typography variant={"h2"}>{props.result}</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

const Form = (props) => {
    const classes = useStyles();

    return (<form autoComplete={"off"}>
        <Box mt={4}>
            <Grid container justify="center">
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={4}>
                        <TextField
                            name={"numberOne"}
                            label={"First number"}
                            variant={"outlined"}
                            type={"number"}
                            defaultValue={"0"}
                            onChange={props.handler}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={4}>
                        <FormControl component={"fieldset"}>
                            <FormLabel component={"legend"}>Operation</FormLabel>
                            <RadioGroup aria-label={"operation"} name={"operation"} value={props.operationValue}
                                        onChange={props.handler}>
                                <FormControlLabel value={"+"} control={<Radio/>} label="+"/>
                                <FormControlLabel value={"-"} control={<Radio/>} label="-"/>
                                <FormControlLabel value={"*"} control={<Radio/>} label="×"/>
                                <FormControlLabel value={"/"} control={<Radio/>} label={"÷"}/>
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={4}>
                        <TextField name={"numberTwo"}
                                   label={"Second number"}
                                   variant={"outlined"}
                                   type={"number"}
                                   defaultValue={"0"}
                                   onChange={props.handler}/>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </form>)
}

const Calculator = () => {
    const [values, setValues] = React.useState({'numberOne': '0', 'numberTwo': '0', 'operation': '+'})
    const [result, setResult] = React.useState('')

    // Update values object when any field is updated
    const handleChange = (event) => {
        const {name, value} = event.target
        setValues(prevState => ({...prevState, [name]: value}))
    }

    // Watch for change in values and update answer
    React.useEffect(() => {
        const numberOne = Number(values.numberOne)
        const numberTwo = Number(values.numberTwo)

        switch (values.operation) {
            case "+":
                setResult((numberOne + numberTwo).toString())
                break
            case "-":
                setResult((numberOne - numberTwo).toString())
                break
            case "*":
                setResult((numberOne * numberTwo).toString())
                break
            case "/":
                setResult((numberOne / numberTwo).toString())
                break
            default:
                setResult("Error")
                break
        }
    }, [values.numberOne, values.numberTwo, values.operation])

    return (
        <main>
            <Header/>
            <Form handler={handleChange} operationValue={values.operation}/>
            <Result result={result}/>
        </main>
    );
}

export default Calculator