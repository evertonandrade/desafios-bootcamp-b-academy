import Heading4 from './Heading4';
import Button from './Button';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Heading4>Contact Form</Heading4>
      <br />
      <label htmlFor="name-contact">Name</label> <br />
      <input type="text" id="name-contact" placeholder="Your Name" /> 
      <br /> <br />
      <label htmlFor="email-contact">Email</label> <br />
      <input type="email" id="email-contact" placeholder="Your Email" /> 
      <br /> <br />
      <label htmlFor="message-contact">Message</label> <br />
      <textarea cols="23" rows="10" id="message-contact" placeholder="Your Message"></textarea> 
      <br /> <br />
      <Button kind="secondary">Cancel</Button>
      <Button kind="primary">Send</Button>
    </aside>
  );
}

export default Sidebar;
