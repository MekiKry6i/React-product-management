import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
//import Products from './products';
import Products, {ProductModel, Categories} from './products'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Product from './Components/ProductsList/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation'
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

class App extends Component {

    constructor(props) {
        super(props);
        this.dateInput = React.createRef();
        this.idInput =React.createRef();
    }
    name = '';
    fullProductList = Products;

    state = {
        products: Products,
        showProducts: false,
        selectedProduct: null,
        filtered: false,
        filteredProducts: null,
        searchById: ''
    };

    componentDidMount() {
        //place products here;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    // }

    showProducts = () => {
        //const doesShow = this.state.showProducts;
        const {showProducts} = this.state;
        this.setState({
            showProducts: !showProducts,
        });
    }

    createProduct = () => {
        this.setState({
            showProducts: false,
        });

        this.setState({selectedProduct: ProductModel});
    }

    openProductDetails = (id) => {
        const productIndex = this.state.products.findIndex(product => {
            return product.id === id;
        });
        if (productIndex !== -1) {
            const product = {
                ...this.state.products[productIndex]
            }
            this.setState({selectedProduct: product});
        }

    }
    filterProductsHandler = (event) => {
        if (this.state.showProducts && this.state.products.length > 0) {
            const filterBy = event.target.value;
            const currentProductsList = [...this.state.products];
            const foundProducts = currentProductsList.filter((product) => {
                return product.category === filterBy;
            });
            const fullList = this.fullProductList;

            if (foundProducts.length > 0) {
                this.setState({
                    products: foundProducts,
                    filtered: true,
                });
            } else {
                //No products found
            }
            console.log(foundProducts);
        }
    }
    productSearchByName = (event) => {

        if (this.state.products.length > 0) {
            const filterBy = event.target.value;
            const currentProductsList = [...this.state.products];
            let foundProducts = [];
            currentProductsList.map((product) => {
                if (product.title.toLowerCase().search(filterBy.toLowerCase()) > -1) {
                    foundProducts.push(product);
                }
            });
            if (foundProducts.length > 0) {
                this.setState({
                    products: foundProducts,
                    filtered: true,
                });
            }
        }
    }

    productSearchById = (event) => {
        if (this.state.products.length > 0) {
            const iD = event.target.value;
            this.setState({searchById: iD})
            const currentProductsList = [...this.state.products];
            let foundProducts = [];
            currentProductsList.map((product) => {

                if (product.id === +iD) {
                    foundProducts.push(product);
                }
            });
            if (foundProducts.length > 0) {
                this.setState({
                    products: foundProducts,
                    filtered: true,
                });
            } else {
                this.setState({
                    products: {},
                    filtered: true,
                });
            }
        }
    }

    compareDates = (event) => {

        const date = Date.parse(event.target.value);
        if (this.state.products.length > 0) {
            const filterBy = event.target.value;
            const currentProductsList = [...this.state.products];
            let foundProducts = [];
            currentProductsList.map((product) => {
                const productDate = Date.parse(product.creationDate);
                    if (productDate > date) {
                        foundProducts.push(product);
                    }
            });
            if (foundProducts.length > 0) {
                this.setState({
                    products: foundProducts,
                    filtered: true,
                });
            } else {
                this.setState({
                    products: {},
                    filtered: true,
                });
            }
        }
    }



    deleteProduct = (index) => {
        console.log('delete product');

        const currentProducts = [...this.state.products];
         currentProducts.splice(index, 1);

        this.setState(state => {
            return {
                products: currentProducts,
                selectedProduct: null
            }
        });
    }

    onEditHandler = (editedProduct) => {
        const { products } = this.state;
        const productIndex = this.state.products.findIndex(product => {
            return product.id === editedProduct.id;
        });
        products[productIndex] =  editedProduct;

        this.setState({
            selectedProduct: editedProduct,
            ...this.state.products, editedProduct
        });
        console.log('updated', this.state.products);
    }

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

    resetFilters = () => {
        this.setState({products: this.fullProductList});
        this.dateInput.current.value = '';
        this.idInput.current.value = '';
        this.setState(state =>({ searchById: ''}));
        console.log(this.idInput.current.value);
    }

    onCreateProductHandler = (product) => {
        const newProduct = product
        if (!this.state.showProducts) {
            this.showProducts();
        }
        this.setState({selectedProduct: newProduct});
    }

    nameChangedHandler = (event) => {
        this.name = event.target.value;
        console.log(event, this.name);
    }

    render() {
        let products = null;
        let classes = [];
        let categories = Categories;
        let filters =
            (
                <div className="filters-wrapper">

                    {/*{*/}
                    {/*    Object.keys(ProductModel).map(property => {*/}
                    {/*        //return <Navigation className="filters" key={property} onClick={() => this.filterBy(property)}> {property} </Navigation>*/}
                    {/*        return <li className="filters" key={property}*/}
                    {/*                   onClick={() => this.filterBy(property)}> {property}:</li>;*/}
                    {/*    })*/}
                    {/*}*/}
                    <TextField id="standard-search" label="Search by Id:" type="number"
                               className='classes.textField'
                               margin="normal"
                               value={this.state.searchById}
                               ref={this.idInput}
                               onChange={this.productSearchById} disabled={!this.state.showProducts}/>

                    <TextField id="standard-search" label="Product search" type="search"
                               className={'classes.textField'}
                               margin="normal"
                               onChange={this.productSearchByName} disabled={!this.state.showProducts}/>
                    <Navigation className="test" categoriesType={categories} changed={this.filterProductsHandler}
                                disabled={!this.state.showProducts}/>

                    {/*<TextField*/}
                    {/*    id="DateFilter"*/}
                    {/*    label="Creation date:"*/}
                    {/*    type="date"*/}
                    {/*    onChange={this.compareDates}*/}
                    {/*    className="date-creation"*/}
                    {/*    InputLabelProps={{*/}
                    {/*        shrink: true,*/}
                    {/*    }}*/}
                    {/*    min="01-01-2018" max="01-01-2021"*/}
                    {/*    ref={this.dateInput}   disabled={!this.state.showProducts}*/}
                    {/*/>*/}
                    <input type="date" id="DateFilter" name="creationDate"
                           min="01-01-2018" max="01-01-2021" onChange={this.compareDates} ref={this.dateInput}   disabled={!this.state.showProducts}/>
                    <Button variant="contained" color="secondary" className='reset-btn'
                            disabled={!this.state.filtered}
                            onClick={this.resetFilters}>Reset Filters</Button>
                </div>
            );

        if (this.state.showProducts && this.state.products.length > 0) {
            classes.push('btn-secondary');
            products = (
                <div className="products-container">
                    {this.state.products.map((product, index) => {
                        return <Product title={product.title} category={product.category}
                                        clicked={() => this.deleteProduct(index)}
                                        viewDetails={() => this.openProductDetails(product.id)}
                                        key={product.id}
                        />
                    })
                    }
                </div>);
        }
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h3>Product Management with React</h3>
                </header>
                <div className="navigation">
                    {/*changed={()=> this.test()}*/}

                    <Button variant="contained" color="primary" className={'products-list ' + classes.join(' ')}
                            onClick={this.showProducts}>Product Lists</Button>
                    <Button variant="contained" color="primary" className={'create-product '}
                            onClick={this.createProduct}>Create product</Button>
                    {/*<NativeSelect>*/}
                    {/*    <option>test 1</option>*/}
                    {/*    <option>test2</option>*/}
                    {/*</NativeSelect>*/}
                </div>

                {filters}

                <div className="content">
                    {products}
                    <div className="product-details">
                        {this.state.selectedProduct ? <ProductDetails productData={this.state.selectedProduct}
                                                                      deleteProduct={this.deleteProduct}
                                                                      productEdited={this.onEditHandler}
                                                                      productCreated={this.onCreateProductHandler}
                        ></ProductDetails> : null}
                    </div>
                </div>
                {/*<p>{this.name}</p>*/}
                {/* <Person name={this.name} changed={this.nameChangedHandler}/>*/}
                {/*<UserInput changed={this.userNameChangeHandler} currentName={this.state.username}></UserInput>*/}
                {/*<UserOutput userName={this.state.username}/>*/}
            </div>
        );
    }
}

export default App;
