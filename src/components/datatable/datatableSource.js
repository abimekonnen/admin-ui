export const userColumns =[
    { field: 'id', headerName: 'ID', width: 70 },
    {   field: "user", 
        headerName:"User",
        width: 230,
        renderCell:(params)=>{
            return(
                <div className = "cellWidthImage">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            );

    }}
     
];
export const userRows =[
    {
        id:1,
        username: "snow",
        img: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg",
        status: "active",
        email: "snw@gmail.com",
        age: 35,
    },
    {
        id:2,
        username: "snow",
        img: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg",
        status: "active",
        email: "snw@gmail.com",
        age: 35,
    },
    {
        id:3,
        username: "snow",
        img: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg",
        status: "active",
        email: "snw@gmail.com",
        age: 35,
    },
    {
        id:4,
        username: "snow",
        img: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg",
        status: "active",
        email: "snw@gmail.com",
        age: 35,
    },
    {
        id:5,
        username: "snow",
        img: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg",
        status: "active",
        email: "snw@gmail.com",
        age: 35,
    },
    {
        id:6,
        username: "snow",
        img: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg",
        status: "active",
        email: "snw@gmail.com",
        age: 35,
    }
];