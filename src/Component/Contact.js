import React from 'react'
import contact1 from "./img/contact-left (1).webp"
import "./Contact.css"
function Contact() {
  return (
    <div className='con'>
  <div class="grid-container1">
    <div className='contact1'>
        <img 
        className='img143'
        src={contact1}/>
    </div>
    <div>
    <div class="r1">
        <div class="text-center blog-wrap-h2">
            <p5 class="mt">CONTACT US </p5><br/>
            </div><div><p>Just pack and go! Let leave your travel plan to travel experts!</p></div>
            <p class="text-success"></p><br/>
            <form novalidate="" class="ng-pristine ng-invalid ng-touched">
                <input class="p" name="yourName" placeholder="Your Name" required="" type="text" pattern="/^[a-zA-Z][a-zA-Z ]{2,30}$/"></input>
             <br/>
                    <input class="p" name="emailId" placeholder="Your Email" required="" type="text" pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,20})+$/"></input>
                        <br/>
                        <input class="p" name="phoneNo" placeholder="Your Phone" required="" type="text" pattern="/^\d{10,12}$/"></input>
                            <br/>
                            <input class="p" name="poo" placeholder="Place Of Origin" required="" type="text"></input>
                                <br/>
                                <textarea class="p" maxlength="10000" name="message" placeholder="Message"></textarea>
                                
    <div class="text-center">
        <button class="btn" type="submit">Send Now </button>
    </div>
    </form>
    </div>
   
</div>
   </div>
   
    </div>
  )
}

export default Contact