import React from 'react'
import "./Footer.css"
import logo from '../images/download (2)-modified.png'
import facebook from '../images/icons/facebook.png'
import instagram from '../images/icons/instagram.png'
import linkedin from '../images/icons/linkedin.png'
import location from '../images/icons/location.png'
import phone from '../images/icons/phone.png'
import gmail from '../images/icons/gmail.png'
function Footer() {
  return (
    <div>
      <footer class="footer-distributed">

        <div class="footer-left">
          <img src={logo} alt="logo here" />




          <p class="footer-company-name">الشركة المصرية لنقل الكهرباء</p>
        </div>

        <div class="footer-center">

          <div className='x'>
            <img src={location} alt="" />
            <p> فرع عباسية
              ش امتداد رمسيس
              عباسية - القاهرة</p>
          </div>

          <div className='y'>
            <img src={phone} alt="" />
            <p>0222618579 - 0222616486</p>
          </div>

          <div className='z'>
            <img src={gmail} alt="" />
            <p>Transmission co@gmail.com</p>
          </div>

        </div>

        <div class="footer-right">

          <p class="footer-company-about">
            <span>عن شركة الكهرباء</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">

            <a href="https://www.linkedin.com" target="_blank"> <img src={linkedin} alt="" /></a>
            <a href="https://www.instagram.com" target="_blank"> <img src={instagram} alt="" /></a>
            <a href="https://www.facebook.com" target="_blank"> <img src={facebook} alt="" /></a>
            <a href="https://www.google.com/maps/dir//El-Abaseya+%26+Ramses+El-Abaseya+El-Bahareya+El+Weili+Cairo+Governorate+4390044/@30.0736549,31.2847804,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14583f97e80eeead:0x3c86efbd655c3a5f" target="_blank"> <img src={location} alt="" /></a>

          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer