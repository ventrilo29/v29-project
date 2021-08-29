import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import FoodList from './components/news_list';
import Footer from './components/footer';
import JSON_Food from './db.json';

class App extends Component {
    
    state = {
        food: JSON_Food,
        footermu: "IKI FOOTER"
    }

    render(){
        const {food, footermu} = this.state;
        return( 
            <div>
                <Header />
                <FoodList makanan = {food}>
                    <div>
                        <h3>YUHU</h3>
                    </div>
                </FoodList>
                <Footer
                    sikil = {footermu}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));