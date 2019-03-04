import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import './components/nav.css';

const Nav = props =>{
    return(
        <>
            <Navbar bg="light">
                <Navbar.Brand>Trello Remake</Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Nav;

// class Nav extends Components {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             currentUser: '',
//             listOfUsers: []
//         }
//     }
//     activeUser = e => {
//         this.state.username.map((name, i) => {
//             let activeClass = "";
//             if (name === this.state.currentUser) activeClass = "active"
//             return <li key={i} className={"list-group-item " + activeClass} onClick={(e) => this.clickingUser(e, i)} style={{ backgroundColor: this.state.bgColor }}>{name} </li>;
//         })
//     }
//     render() {
//         return (
//             <>
//                 < Navbar>
//                     <Navbar.Brand>Trello Remake</Navbar.Brand>
//                     <Navbar.Toggle />
//                     <Navbar.Collapse className="justify-content-end">
//                         <Navbar.Text>
//                             Signed in as: <Link to={this.state.currentUser}></Link>
//                         </Navbar.Text>
//                     </Navbar.Collapse>
//                 </Navbar>
//             </>
//         )
//     }
// }
// export default Nav;