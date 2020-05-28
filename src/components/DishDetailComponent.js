import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super (props);

        this.state = {
            dish:null
        };
    }

    renderComments(dish){
        if(dish != null){
            const comments = dish.comments.map((comments) => {
                let date = new Intl.DateTimeFormat('en-US', {
                    year:'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comments.date)))
                
                return (
                        <ul key={comments.id} className="list-unstyled">
                            <li className="comment">{comments.comment}</li>
                            <li className="author">-- {comments.author}, {date}</li>
                        </ul>
                    );
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments}
                </div>
                
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle><h5>{dish.name}</h5></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}
export default DishDetail;