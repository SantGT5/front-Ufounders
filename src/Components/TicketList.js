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
import { useEffect } from "react";
import { loadPosts } from "../store/posts";
import UserInfo from "./GlobalComponents/UserInfo";

const TicketList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.list);
  console.log(posts);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="list">
      <ul style={{ padding: "0px" }}>
        {posts.map((post, i) => {
          const initial = post.birthdate.split(/\//);

          let MyDate = new Date([initial[1], initial[0], initial[2]].join("/"));

          const dd = String(MyDate.getDate()).padStart(2, "0");
          const mm = String(MyDate.getMonth() + 1).padStart(2, "0");
          const yyyy = MyDate.getFullYear();

          const date = dd + "/" + mm + "/" + yyyy;

          return (
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
                  <span className="userName">
                    {post.firstName} {post.lastName}
                  </span>
                  <p className="presentList">
                    {post.present === true ? "Ha entrado" : "No ha entrado"}
                  </p>
                </div>

                <div className="id">
                  <div className="verticalHR p-2 bd-highlight">
                    <div style={{ height: "3.5em" }}>
                      <span className="idList">ID</span>
                      <p className="subInfoID">12345678901234</p>
                    </div>
                  </div>
                </div>

                <div className="ticket">
                  <div className="ticketBox p-2 bd-highlight">
                    <div style={{ height: "3.5em" }}>
                      <span className="ticketList">N° de ticket</span>
                      <p className="subInfoTicket">12345678901234</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="ms-auto p-2 bd-highlight"
                >
                  <UserInfo
                    firstName={post.firstName}
                    present={post.present}
                    lastName={post.lastName}
                    _id="12345678901234"
                    birthdate={date}
                    email={post.email}
                    phone={post.phone}
                    address={post.address}
                  />
                </div>
              </div>
              <hr className="horizontalHR" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TicketList;
