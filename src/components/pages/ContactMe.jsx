import "./ContactMe.css";

export default function () {
  return (
    <>
      <div id="contact" className="contact__me__main__section">
        <h1 className="contact__me__main__heading">Contact Me</h1>
        <hr className="contact__me__heading__underline-1" />
        <hr className="contact__me__heading__underline-2" />
        <section>
          <p className="contact__me__form__description">
            Feel free to reach out for collaboration, queries, or just a coding
            conversation. I’m always eager to connect with fellow developers and
            tech enthusiasts. Drop me a message, and let’s embark on a coding
            journey together.
          </p>
        </section>
        <section>
          <div className="contact__me__flex__container">
            <form className="contact__me__form__layout" action="">
              <input type="text" placeholder="I'm excited to know your name!" />
              <div className="contact__me__form__layout__customize">
                <input type="text" placeholder="Emain ID" />
                <input type="text" placeholder="Organization's Name (Optional)" />
              </div>
              <input type="text" placeholder="Tell me about yourself." />
            </form>
            <button className="contact__me__submit__button">Submit</button>
          </div>
        </section>
      </div>
    </>
  );
}
