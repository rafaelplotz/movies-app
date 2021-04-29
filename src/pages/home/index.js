import React from 'react';
import { Link } from  'react-router-dom';
import './styles.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            users: [],
        }
    }

    componentDidMount() {
        const users = [
            {
                id: 1,
                login: 'nomadland',
                name: 'Nomadland 🏆️'
            },
            {
                ide: 2,
                login: 'the father',
                name: 'The Father'
            },
            {
                ide: 3,
                login: 'judas and the black messiah',
                name: 'Judas and the Black Messiah'
            },
            {
                ide: 4,
                login: 'mank',
                name: 'Mank'
            },
            {
                ide: 5,
                login: 'minari',
                name: 'Minari'
            },
            {
                ide: 6,
                login: 'promising young woman',
                name: 'Promising Young Woman'
            },
            {
                ide: 7,
                login: 'sound of metal',
                name: 'Sound of Metal'
            },
            {
                ide: 8,
                login: 'the trial of the chicago 7',
                name: 'The Trial of the Chicago 7'
            },



        ];

        this.setState({ users: users, isLoading: false })
    }


    render() {
        const { isLoading, users } = this.state;
        
        return (
        <div className="app">
            <div className="app-body">
                <h2>Indicados a Melhor Filme do Oscar 2021</h2>
                <ul>
                     {isLoading ? <RenderLoader /> : users.map(item => <RenderUserLine key={item.id} login={item.login} name={item.name} />)} 
                </ul>
            </div>
        </div>
        )
    }
}

function RenderLoader() {
    return (
        <li>Carregando...</li>
    )
}

function RenderUserLine({ login, name }) {
    return (
        <li>
            <Link to={`movie/${login}`}>{name}</Link>
        </li>
    )


}

export default Home;