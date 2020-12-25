import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: "center",
        padding: theme.spacing(2),
        margin: theme.spacing(2),
    }
}));

export default useStyles