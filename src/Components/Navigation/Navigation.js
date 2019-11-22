import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from "react";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

let navigation = (props) => {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');

    const inputLabel = React.useRef(null);
   // const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        //setLabelWidth(inputLabel.current);
        //debugger
        console.log(111111);
    }, [props.disabled]);

    let handleChange = (event) => {
        setCategory(event.target.value);
        const currentCattegory = event.target.value;
        props.changed = currentCattegory;
    };

    let items = props.categoriesType.map((categorie) => {
        return  <MenuItem key={categorie} value={categorie}>categorie</MenuItem>;
    })


    return (
        <div className="navigation">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category:</InputLabel>
                <Select
                    labelId=""
                    id="demo-simple-select"
                    disabled = {props.disabled}
                    onChange={props.changed}>
                   <MenuItem value={'notebooks'} selected>Notebooks</MenuItem>
                   <MenuItem value={'smartphones'}>Smartphones</MenuItem>
                   <MenuItem value={'tablets'}>Tablets</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
/*    return (
        <div>
            <input
                type="text"
                style={inputStyle}
                onChange={props.changed}
                value={props.currentName}/>
        </div>
    );*/
}
export default navigation;
