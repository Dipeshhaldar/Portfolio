//import { useState } from "react";
//import axios from "axios";
import "./ContactMe.css";

export default function () {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [organization, setOrganization] = useState();
  // const [description, setDescription] = useState();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("", { name, email, organization, description })
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));
  // };

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
            <form
              //onSubmit={handleSubmit}
              className="contact__me__form__layout"
              action=""
            >
              <input
                type="text"
                placeholder="I'm excited to know your name!"
                autoComplete="off"
                name="username"
                //onChange={(e) => setName(e.target.value)}
              />
              <div className="contact__me__form__layout__customize">
                <input
                  type="text"
                  placeholder="Emain ID"
                  autoComplete="off"
                  name="email"
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Organization's Name (Optional)"
                  autoComplete="off"
                  name="organization"
                  // onChange={(e) => setOrganization(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Tell me about yourself."
                name="description"
                // onChange={(e) => setDescription(e.target.value)}
              />
              <div className="contact__me__submit__button__style">
                <button className="contact__me__submit__button">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
