// import Carousel from 'react-material-ui-carousel'; // npm i react-material-ui-carousel
import { Parallax } from "react-parallax"; //npm i react-parallax
import backgroundimg from '../images/background.jpg';
// import { Paper } from '@mui/material';
// import { AppContext } from "../AppContext.js";

// const insideStyles = {
//     background: "transparent",
//     padding: 20,
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
// };

// const {
//     productList,
// } = useContext(AppContext);

// function Item(props) {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>
//             <img src={props.item.icon_url} alt="alt" height="100" width="100"></img>
//         </Paper>
//     )
// }

function Home() {

    return (
        <div className="Home">
            <Parallax
                // bgImage={backgroundimg}
                bgImageAlt='DarkAcademia'
                // strength={600}
                // renderLayer={(percentage) => (
                //     <>
                //     </>
                // )}
                style={{
                    backgroundColor:'#131414',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    width: '100%',
                    height: '100vh', // Adjust this value to control the height of the parallax section
                }}
                >
                {/* <div style={{ height: 500 }}>
                    <div style={insideStyles}></div>
                </div> */}
            </Parallax>
            {/* <Carousel >
                {
                productList.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel> */}
        </div>
    );
}

export default Home;