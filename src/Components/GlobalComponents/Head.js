function Head() {
  const currentUser = "Rodrígo";

  return (
    <div>
      <i className="navBar fas fa-bars"></i>
      <div className="head">
        {/* <img className="logoIMG" alt="Ufounders logo." src={img} /> */}
        <div>
          <h1 className="title">
            Bienvenido de nuevo, {currentUser}. &#128075;
          </h1>
          <span className="subTitle">
            Estas con las personas que han comprado entrada
          </span>
        </div>
      </div>
    </div>
  );
}

export default Head;
