import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    StyledPhoto,
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    ProfilBody,
    Fieldset,
    Input,
    Icon,
    OptionsNote,
    Options,
    OptionsItem,
    SignButton,
    CardLink,

} from "./StyledLogin"

const LoginPage = (props) => {
    const [user, setUser] = useState({ username: "", password: "" });
    const [isLogin,setIsLogin]=useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify({
            "avatarUrl": "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
            "username": "kubra",
            "password": "1234",
            "socials": {
                "twitter": "https://twitter.com/",
                "instagram": "https://www.instagram.com/"
            },
            "seenList": {
                "seenFilms": [
                ],
                "totalCount": 0
            },
            "favorites": {
                "favoriteFilms": [
                ],
                "totalCount": 0
            },
            "joinDate": "December 2021"
        }
        ))
    }, []);

    function handleLogin(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("userData"));
        console.log("target", e.target.username.value);

        if (user.username === e.target.username.value && user.password === e.target.password.value) {

            console.log("girildi", user);
            navigate("/profile");
            setIsLogin(true);
        }
        else{
            navigate("/loginerror");
        }

    }

    return (
        <>
            <CardWrapper>
                <CardHeader>
                    <CardHeading>Sign in</CardHeading>
                </CardHeader>

                <CardBody>
                    <form onSubmit={handleLogin}>
                        <Fieldset>
                            <Input placeholder="Username" type="text" required name="username" onChange={() => { }} />
                        </Fieldset>
                        <Fieldset>
                            <Input placeholder="Password" type="password" required name="password" />
                            <Icon />
                        </Fieldset>

                        <Fieldset>
                            <Options>
                                <OptionsItem>
                                    <Icon />
                                </OptionsItem>

                                <OptionsItem>
                                    <Icon />
                                </OptionsItem>

                                <OptionsItem>
                                    <Icon />
                                </OptionsItem>
                            </Options>
                        </Fieldset>

                        <Fieldset>
                            <SignButton type="submit" >Sign In</SignButton>
                        </Fieldset>
                    </form >
                    <Fieldset>
                        <OptionsNote>Or sign up with</OptionsNote>
                        {/* <CardLink>I already have an account</CardLink> */}
                    </Fieldset>
                </CardBody>
            </CardWrapper>
        </>
    );
};

export default LoginPage;
