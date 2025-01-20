import React from 'react'
import styled from 'styled-components'
import { menuItems } from '../../utils/menuitems';
import { signout, user } from '../../utils/icons';

function Navigation({active, setActive}) {
    return (
    <NavigationStyled>
        <div className="user-container">
            <div className="user-icon">
                {user}
            </div>
            <div className="text">
                <h2>Pieter</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className="menu-items">
            {menuItems.map((item) => {
                return <li
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={active === item.id ? 'active' : ''}
                >
                    {item.icon}
                    <span>{item.title}</span>
                </li>
            })}
        </ul>
        <div className="bottom-nav">
            <li>
                {signout} Sign Out
            </li>
        </div>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 300px;
    height: 100%;
    background:rgb(245, 102, 146, 0.1);
    // border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-container{
        padding-left: 0.7rem;
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        .user-icon{
            padding-left: 4px;
            padding-right: 4px;
            padding-top: 1px;
            padding-bottom: 1px;
            border-radius: 100%;
            scale:200%;
            object-fit: cover;
            background: #FCF6F9;
            border: 2px circle #FFFFFF;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.1);
        }
        h2{
            margin-left: 4px;
        }
        p{
            margin-left: 4px;
            opacity: 70%;
        }
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 35px auto;
            align-items: center;
            margin: .4rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out
            opacity: 60%;
            position: relative;
            i{
                opacity: 60%;
                font-size: 1.1rem;
                transition: all .4s ease-in-out
            }
        }
    }
    .active{
        color: rgba(34, 34, 96, 1);
        i{
            color: rgba(34, 34, 96, 1);
        }
    }
`;

export default Navigation
