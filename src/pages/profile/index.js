import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/userService';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {},
            isLoading: true
        }
    }

    async componentDidMount() {
       const { params: { userLogin }} = this.props.match;

       const userService = new UserService();

       const profileData = await userService.getUserProfile(userLogin);
       
       this.setState({profile: profileData, isLoading: false})
    }

    render() {
        const { isLoading, profile } = this.state;
        return (
            <div className="app">
                <div className="app-body">
                    <h2>Ficha do filme</h2>
                    <p>{isLoading ? 'Carregando...' : <RenderProfile profile={profile} />}</p>
                    <Link to="/" className="backhome"> ‹ Voltar</Link>
                </div>
            </div>
        )
    }
};

function RenderProfile({profile}) {
    return (
        <>
            <img src={profile.Poster} />
            <p>{profile.Title}</p>
            <p>{profile.Director}</p>            
            <p>{profile.Country}</p>
            <p>{profile.Plot}</p>
            <p>{profile.Genre}</p>
            <p>{profile.Awards}</p>
            <p>⭐ {profile.imdbRating}</p>
        </>
    )
}

export default Profile;