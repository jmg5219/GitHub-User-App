import React from "react"
import UserCardList from "./UserCardList"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userName: this.props.initialText || '' };
        this.state = { users: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //Helper function to fetch data from API
    loadData = async () => {
        const response = await fetch(`https://api.github.com/users/${this.state.userName}`);
        const data = await response.json();
        return data;
    };
    
    handleChange(event) {
        this.setState({ userName: event.target.value });
    }

    async handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.userName);
        event.preventDefault();
        const userData = await this.loadData();
        console.log(userData)

        this.setState({
            users: [...this.state.users, userData]
        });



    }

    render() {
        return (
            <>

                <Router>
                    <Route path="/" exact>

                        <h1>Search for a GitHub User:</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Name:
            <input type="text" value={this.state.userName} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>

                        <UserCardList users={this.state.users} />

                    </Route>
                    <Route path="/user/:userName?">
                        <Link to="/">Home</Link>
                        <UserProfile users={this.state.users}/>
                    </Route>                    
                    
                </Router>




            </>

        );
    }
}

export default SearchForm;