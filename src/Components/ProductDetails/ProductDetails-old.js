import './ProductDetails.css';
import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Products from "../../products";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

let ProductDetails = (props) => {
    let productInfo = {};
    console.log(props);
    const [input, setInput] = React.useState(''); // '' is the initial state value;

    const generateId = () => { Math.floor(Math.random()*1000)};
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    React.useEffect(() => {
        debugger

        console.log(props);
    }, [props.changed]);
    let saveHandler = (event) => {
        console.log('saving....');
        const product =    {
            id: 88,
            title: 'Samsung Galaxy S102',
            category: 'smartphones',
            quantity: 20,
            description: 'Dynamic AMOLED capacitive touchscreen, 16M colors, Size 6.1 inches, 93.2 cm2 (~88.3% screen-to-body ratio, Resolution 1440 x 3040 pixels, 19:9 ratio (~550 ppi density) Protection: Corning Gorilla Glass 6',
            creationDate: '12-11-2019'
        }
        Products.push(product);
    };

    let displeyValue = ( <input type="text" id="Category" name="category" placeholder={props.productData.category}/>);

    if (Object.entries(props.productData).length < 1) {
        // productInfo = ProductModel;
        return (
            <div className="ProductDetails form-control">
                <form className='test' noValidate autoComplete="off">
                    <div className="title form-control product-info">
                        <label htmlFor="Title">Title: </label>
                        <input type="text" id="Title" name="title" placeholder={props.productData.title}/>
                        {props.productData.title}
                    </div>
                    <div className="category form-control product-info">
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="Category" name="category" placeholder={props.productData.category}/>
                    </div>
                    <div className="quantity form-control product-info">
                        <label htmlFor="quantity"> Quantity:</label>
                        <input type="number" min="1" id="Quantity" placeholder={props.productData.quantity}/>
                    </div>
                    <div className="description form-control product-info">
                        <label htmlFor="">Description:</label>
                        {/*<TextField*/}
                        {/*    required*/}
                        {/*    id="standard-required"*/}
                        {/*    label="Description"*/}
                        {/*    defaultValue={props.productData.description}*/}
                        {/*    className={'classes.textField'}*/}
                        {/*    margin="normal"*/}
                        {/*/>*/}
                        <input type="text" id="Description" name="description" value={input} onInput={e => setInput(e.target.value)}/>
                    </div>
                    <div className="creationDate form-control product-info">
                        <label>Creation Date: </label>
                        <input type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                               min="2018-01-01" max="2020-12-31"/>
                        {/*<input type="date" id="Description" name="description" placeholder={props.productData.creationDate}/>*/}
                        {/*      <TextField
                        id="date"
                        type="date"
                        defaultValue="2019-11-20"
                        className=""
                    />*/}
                    </div>
                    <Button variant="contained" color="primary" className={'save-edit-btn'} onClick={saveHandler}>Save Details</Button>
                    {/*<button className="btn btn-secondary save-edit-btn" type="button" onClick={props.editDetails}>Edit details</button>*/}
                </form>
            </div>
        );
    } else {
        return (
            <div className="ProductDetails form-control">
                {/*<div>{props.productData.id}</div>*/}
                <Tooltip title="Delete"  placement="top" onClick={props.clicked} className="close">
                    {/*<CloseIcon  aria-label="delete" className="" />*/}
                    <IconButton aria-label="delete">x</IconButton>
                </Tooltip>
                <div className="title form-control"><h4>{props.productData.title}</h4></div>
                <div className="category form-control"><label>Category: </label>{props.productData.category}</div>
                <div className="quantity form-control"><label> Quantity:</label> {props.productData.quantity}</div>
                <div className="description form-control"><label>Description: </label>{props.productData.description}</div>
                <div className="creationDate form-control"><label>Creation Date: </label>{props.productData.creationDate}</div>
                <Button variant="contained" color="primary" className={'save-edit-btn'} onClick={saveHandler}>Edit Details</Button>
            </div>
        );
    }
};

export default ProductDetails;
