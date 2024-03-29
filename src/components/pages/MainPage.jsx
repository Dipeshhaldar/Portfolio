import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <main className="main__homepage_description">
        <h4 className="hello_world">Hello World! My name is</h4>
        <h1 className="owner__name">Dipesh Haldar</h1>
        <h1 className="owner__description">A Developer who Develops!</h1>
        <p className="owner__detail__description">
          I am an undergraduate at <a className="college__name__link" href="https://www.sbjit.edu.in/" target="_blank">SBJITMR Nagpur</a> pursuing B.Tech in Computer<br></br>
          Science and Engineering who is immersed in the realms of Web<br></br>
          Development and DevOps.
        </p>
        <p>
          <button className="contact-me__button_mainpage">Contact Me</button>
        </p>
      </main>
    </>
  );
}
