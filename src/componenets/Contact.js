import image from "../images/undraw.svg";
const Contact = () => {
  return (
    <div className="contact">
      <img className='header' src={image} alt="man">
      </img>
      <h1>Matt Davis</h1>
      <h4>Frontend Developer</h4>
      <span className='web'>matthewaadavis.com</span>
      <div className="links">
        <button>Email</button>
        <button>Linkedin</button>
      </div>
    </div>
  );
};

export default Contact;
