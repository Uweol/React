import React, { Component } from 'react';
import DaumPostcode from 'react-daum-postcode';

class Postcode extends Component {
    onCompletePost=(data)=>{
        // console.log(data.address)
        this.props.onChangeAddress1(data.address)
    }
    render() {
        const postStyle = {
            position: 'fixed', top: '50%', left: '50%', width: '400px', height: '500px', background: '#fff', marginLeft: '-200px', marginTop: '-250px', border: '1px solid #ccc', zIndex: 2
        }
        return (
            <div>
                <DaumPostcode style={postStyle} autoClose onComplete={this.onCompletePost}/>
            </div>
        );
    }
}

export default Postcode;