// import StartFunctionOnClick from "./on_click";

const PostCard = (
    {
        card =   {
            "id": 123,
            "username": "SpaceX",
            "email": "testEmail@gmail.com",
            "password": 123456,
            "confirmPassword": 123456,
            "gender": "nonbinary",
            "bio": "This is a sample biography of the user",
            "avatar": "spacex.png",
            "following": true,
            "folloers": 520,
            "role": "designer/developer",
            "postImage": "starship.jpg",
          }
    }
) => {    

    return (
        <div>
            <p> Post Card test</p>
        </div>
    );
}