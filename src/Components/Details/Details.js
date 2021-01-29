import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addItemInCart } from "../../Redux/Actions";
import Api from "../../Api";
import Item from "../Item/Item";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { showCartDlg} from "../../Redux/Actions";
import Paper from '@material-ui/core/Paper';

import './Detail.css';

//import watchImg1200 from '../../Images/podocarpus-kamenny-tis-324_730_8065.jpg';

class ConnectedDetails extends Component {
    constructor(props) {
        super(props);
    
        this.isCompMounted = false;
    
        this.state = {
          relatedItems: [],
          quantity: 1,
          item: null,
          itemLoading: false
        };
      }
    
    get srcSet() {
        return [
            //`${watchImg1200} 1200w`,
        ].join(', ');
    }

    async fetchProductAndRelatedItems(productId) {
        this.setState({ itemLoading: true });
    
        let item = await Api.getItemUsingID(productId);
    
        let relatedItems = await Api.searchItems({
          category: item.category
        });
    
        // Make sure this component is still mounted before we set state..
        if (this.isCompMounted) {
          this.setState({
            item,
            quantity: 1,
            relatedItems: relatedItems.data.filter(x => x.id !== item.id),
            itemLoading: false
          });
        }
      }
    
      componentDidUpdate(prevProps, prevState, snapshot) {
        // If ID of product changed in URL, refetch details for that product
        if (this.props.match.params.id !== prevProps.match.params.id) {
          this.fetchProductAndRelatedItems(this.props.match.params.id);
        }
      }
    
      componentDidMount() {
        this.isCompMounted = true;
        this.fetchProductAndRelatedItems(this.props.match.params.id);
       
      }
    

    render() {
        if (this.state.itemLoading) {
            return <CircularProgress className="circular" />;
        }
    
        if (!this.state.item) {
            return null;
        }
        
        return (
            <div>
            
            <div className="main">

            <div>
                <h1>{this.state.item.name}</h1>
            </div>

            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                         smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: '../'+ this.state.item.imageUrls[0],
                            srcSet: '../'+ this.state.item.imageUrls[0] + ' 1200w',// this.srcSet,
                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: '../'+ this.state.item.imageUrls[0],
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerStyle: {
                            zIndex: "1500"
                          },
                        enlargedImageContainerDimensions: {
                            width: '200%',
                            height: '100%',
                        }
                    }} />
                </div>
                <div className="fluid__instructions">
                    
                    <div
                        style={{
                        flex: 1,
                        marginLeft: 20,
                        display: "flex",
                        flexDirection: "column"
                        }}
                    >

                        <div
                            style={{
                                fontSize: 16
                            }}>
                            Cena : {this.state.item.price} Kč   
                        </div>
                        {this.state.item.popular && (
                            <div style={{ fontSize: 14, marginTop: 5, color: "#228B22" }}>
                                (Doporučujeme)
                            </div>
                        )}
                        <div>
                            <TextField
                                type="number"
                                value={this.state.item.quantity}
                                style={{ marginTop: 20, marginBottom: 10, width: 70 }}
                                label="Množství"
                                inputProps={{ min: 1, max: 10, step: 1 }}
                                onChange={e => {
                                    this.setState({ quantity: parseInt(e.target.value) });
                                }}
                            />
                        </div>
                        <div>
                            <Button

                                variant="outlined" 
                                onClick={e => {
                                    e.stopPropagation();
                                    this.props.dispatch(
                                    addItemInCart({ ...this.state.item,//...this.props.item,
                                         //imageUrls: '../' + this.state.item.imageUrls[0],
                                         //price: this.state.item.price,   
                                         //name: this.state.item.name,
                                         quantity: this.state.quantity 
                                        }));
                                    this.props.dispatch(showCartDlg(true));
                                }}
                                color="primary"
                                aria-label="Add to shopping cart"

                                // style={{ width: 170, marginTop: 5 }}
                                // color="primary"
                                // variant="outlined"
                                // onClick={() => {
                                //     this.props.dispatch(addItemInCart({...this.state.item, quantity: this.state.quantity}));
                                //     this.props.dispatch(showCartDlg(true));
                                //   }}
                                >
                                Vložit do košíku <AddShoppingCartIcon style={{ marginLeft: 5 }} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
                {/* Product description */}
                <div className="describe">
                    Popis:
                </div>

                <div className="description">
                    {this.state.item.description
                        ? this.state.item.description
                        : "Not available"}
                </div>
            </div>
        </div>
        );
    }
}

let Details = connect()(ConnectedDetails);
export default Details;