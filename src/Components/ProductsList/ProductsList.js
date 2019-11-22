import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import './ProductsList.css';
import './productsList.less';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";



const useStyles1 = makeStyles(theme => ({
    // success: {
    //     backgroundColor: green[600],
    // },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    // warning: {
    //     backgroundColor: amber[700],
    // },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const Product = (props) => {
    const classes = useStyles1();

    return (
        <div className="Product">
            {/*<div className="close"title="Delete Product">x</div>*/}
            <Tooltip title="Delete"  placement="top" onClick={props.clicked} className="close">
                {/*<CloseIcon  aria-label="delete" className="" />*/}
                <IconButton aria-label="delete">x</IconButton>
            </Tooltip>
            <div className="title">{props.title}</div>
            <div className="category">{props.category}</div>
            <div>
                <Button variant="contained" color="default" className={'details-btn'} onClick={props.viewDetails}>View Details</Button>
            </div>
        </div>
    )
};

export default Product;
