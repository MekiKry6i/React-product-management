import './ProductDetails.css';
import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Products from "../../products";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import {productsList} from "../../services/ProductsService";

// const useStyles = makeStyles(theme => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));

class ProductDetails extends Component {

    state = {
        selectedProduct: this.props.productData,
        edit: true
    };

    changeHandler = (event) => {
        const name = event.target.name;
            this.setState({
               ...this.state, selectedProduct: {
                   ...this.state.selectedProduct,
                       [name]: event.target.value
                }
        });
        console.log(this.state);
    }

    productService = productsList;



    // '' is the initial state value;

    // handleCategoryChange = (event) => {
    //     setCategory(event.target.value);
    //     const currentCattegory = event.target.value;
    //     props.changed = currentCattegory;
    // };

    generateId = () => {
        return Math.floor(Math.random() * 1000);
    };

    handleDateChange = date => {
        //setSelectedDate(date);
    };
    editDetails =() => {
        //this.setState({selectedProduct: selectedProduct});
    }

    saveEditHandler = (event) => {
        console.log(this.props, this.props.productData, this.state.selectedProduct);
        debugger
        const currentProduct = this.state.selectedProduct;

        if (this.state.selectedProduct.id) {
            //TODO: getProductById service
            let currentProductsList = Products;
            const foundProduct = currentProductsList.find((product) => {
                return product.id === this.state.selectedProduct.id;
            });
            if (foundProduct) {
                currentProductsList = [...Products, this.state.selectedProduct];
            }
            console.log('updating');
        } else {
            let createdProduct = this.state.selectedProduct;
            createdProduct.id = this.generateId();
            console.log('creating....');
            Products.push(createdProduct);
            this.setState({selectedProduct: {}});
        }

    };
    deleteHandler = ()=> {

    }


    displeyValue = (<input type="text" id="Category" name="category" placeholder={this.props.productData.category}/>);

    render() {
        console.log('render', this.state);
        // const classes = useStyles();

        let handleCategoryChange = (event) => {
            //setCategory(event.target.value);
            const currentCattegory = event.target.value;
            //props.changed = currentCattegory;
        };


        // let items = props.categoriesType.map((categorie) => {
        //     return  <MenuItem key={categorie} value={categorie}>categorie</MenuItem>;
        // })

        if (Object.keys(this.props.productData).length < 1) {
            return <div className="select-product">
                        <h4>Please select a product!</h4>
                    </div>
        };

        if (!this.props.productData.id) {
            return (
                <div className="ProductDetails form-control">
                    <form className='test' noValidate autoComplete="off">
                        <div className="title form-control product-info">
                            <label htmlFor="Title">Title: </label>
                            <input type="text" id="Title" name="title" placeholder={this.props.productData.title}  onChange={this.changeHandler}/>
                        </div>
                        <div className="category form-control product-info">
                            <label htmlFor="category">Category:</label>
                            <FormControl className={'classes.formControl'}>
                                <Select
                                    labelId=""
                                    name="category"
                                    id="demo-simple-select"
                                    onChange={this.changeHandler}>
                                    <MenuItem value={'notebooks'} selected>Notebooks</MenuItem>
                                    <MenuItem value={'smartphones'}>Smartphones</MenuItem>
                                    <MenuItem value={'tablets'}>Tablets</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="quantity form-control product-info">
                            <label htmlFor="quantity"> Quantity:</label>
                            <input name="quantity" type="number" min="1" id="Quantity" value={this.props.productData.quantity} onChange={this.changeHandler}/>
                        </div>
                        <div className="creationDate form-control product-info">
                            <label>Creation Date: </label>
                            <input type="date" id="start" name="creationDate"
                                   defaultValue="2018-07-22"
                                   min="2018-01-01" max="2020-12-31" onChange={this.changeHandler}/>
                        </div>
                        <div className="description form-control product-info">
                            <label htmlFor="">Description:</label>
                            {/*<TextField*/}
                            {/*    required*/}
                            {/*    id="standard-required"*/}
                            {/*    label="Description"*/}
                            {/*    defaultValue={this.props.productData.description}*/}
                            {/*    className={'classes.textField'}*/}
                            {/*    margin="normal"*/}
                            {/*/>*/}
                            <input type="text" id="Description" name="description" placeholder={this.props.productData.description} onChange={this.changeHandler}/>
                        </div>
                            {/*<TextField id="date" type="date" defaultValue="2019-11-20" className=""/>*/}
                        <Button variant="contained" color="primary" className={'save-edit-btn'} onClick={this.saveEditHandler}>Save Details</Button>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="ProductDetails edit-mode form-control">
                    {/*<div>{this.props.productData.id}</div>*/}
                    <div className="delete-btn">
                        <Tooltip title="Delete"  placement="top" className="close">
                            <IconButton aria-label="" onClick={this.props.deleteProduct}>
                                <DeleteForeverIcon aria-label="delete" className="delete-icon"></DeleteForeverIcon>
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className="title form-control"><h4>{this.props.productData.title}</h4></div>
                    <div className="category form-control">
                        <label>Category: </label>
                        <div className="info">{this.props.productData.category}</div>
                     </div>
                    <div className="quantity form-control">
                        <label> Quantity:</label>
                        <div className="info">{this.props.productData.quantity}</div>
                    </div>
                    <div className="creationDate form-control">
                        <label>Creation Date: </label>
                        <div className="info">{this.props.productData.creationDate}</div>
                    </div>
                    <div className="description form-control">
                        <label>Description:</label>
                        <div className="info">{this.props.productData.description}</div>
                    </div>
                    <Button variant="contained" color="primary" className={'save-edit-btn'} onClick={this.editDetails}>Edit Details</Button>
                </div>
            );
        }
    }
};

export default ProductDetails;
