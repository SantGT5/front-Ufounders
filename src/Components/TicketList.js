// import { useEffect, useState } from "react";
// import axios from "axios";

// function TicketList() {
//   const [ticket, setTicket] = useState([]);
//   console.log("ticket -> ", ticket);
//   useEffect(() => {
//     async function fetchTicket() {
//       try {
//         const response = await axios.get("http://localhost:4000/tickets");
//         console.log(response.data);
//         setTicket([...response.data]);
//       } catch (err) {
//         console.log(err.response);
//       }
//     }
//     fetchTicket();
//   }, []);

//   return (
//       <div>
//     <h1>Posts</h1>
//     <ul>
//       { ticket.map(( post, i ) =>{
//         return <li key={ i }>{post.firstName}</li>
//       }) }
//     </ul>
//     </div>
//   )

// }

// export default TicketList;

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadPosts } from "../store/posts";
import UserInfo from "./GlobalComponents/UserInfo";
import img from "../imgs/Sem Título.png";
import Menu from "./GlobalComponents/Menu";

import InfiniteScroll from 'react-infinite-scroll-component';

const TicketList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.list);
  const [ list, setList ] = useState({ items: (Array.from({ length: 20 })) })
  console.log(posts);
  console.log(list)
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
console.log("posts -> ", posts[0])
      setList({
        items: posts.concat(Array.from({ length: 20 }))
      });

  };

  useEffect(() => {
async function fetchTest(){
  dispatch(loadPosts());
}
    
fetchTest()
  }, [dispatch]);

  return (
    <div>
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "4em",
          marginBottom: "5em",
        }}
      >
        <img
          style={{ width: "3em", margin: "2em" }}
          src={img}
          alt="Ufounders logo."
        />
        <div style={{ width: "100vw" }}>
          <h1>Bienvenido de nuevo, Rodrígo. &#128075;</h1>
          <span style={{ color: "gray" }}>
            Estas con las personas que han comprado entrada
          </span>
        </div>
      </div>
      <div style={{ display: "flex" }}>

        <Menu />

        <div style={{ width: "88vw", marginLeft: "9em" }}>
        
          <ul style={{ padding: "0px" }}>




            
            {posts.map((post, i) => {
              return(
                <div>
                  <div
                    key={i}
                    className="d-flex bd-highlight mb-3"
                    style={{ display: "flex" }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      className="p-2 bd-highlight"
                    >
                      <i
                        style={{
                          color: post.present === true ? "#7FBA7A" : "#E93256",
                          fontSize: "2em",
                        }}
                        className="fas fa-ticket-alt fa-rotate-90"
                      ></i>
                    </div>
                    <div
                      style={{ flexDirection: "column", alignSelf: "center" }}
                      className="verticalHR p-2 bd-highlight"
                    >
                      <span>
                        {post.firstName} {post.lastName}
                      </span>
                      <p style={{ color: "gray", margin: "0em" }}>
                        {post.present === true ? "Ha entrado" : "No ha entrado"}
                      </p>
                    </div >
                    <div style={{ flexDirection: "column", alignItems: "center" }} className="verticalHR p-2 bd-highlight">
                      <span>ID</span>
                      <p style={{ color: "gray", margin:"0em" }}>12345678901234</p>
                    </div>
                    <div className="p-2 bd-highlight">
                      <span>N° de ticket</span>
                      <p style={{ color: "gray", margin:"0em" }}>12345678901234</p>
                    </div>

                    <div className="ms-auto p-2 bd-highlight">
                      <UserInfo
                        firstName={post.firstName}
                        present={post.present}
                        lastName={post.lastName}
                        _id="12345678901234"
                        birthdate={post.birthdate}
                        email={post.email}
                        phone={post.phone}
                        address={post.address}
                      />
                    </div>
                  </div>
                  <hr className="horizontalHR" />
                </div>
              )
                      })}
 
          </ul>
          
        </div>
      </div>
      
    </div>
  );
};

export default TicketList;
