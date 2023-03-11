import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import PinterestIcon from '@mui/icons-material/Pinterest'

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='wrapper'>
                <span>IKUTI BERITA KAMI:</span>
                <div className='mail'>
                    <input type='text' placeholder='masukan e-mail...' />
                    <button>GABUNG</button>
                </div>
                <div className='icons'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <GoogleIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>
    )
}
