import React from 'react'
import "./Header.css"
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import BUYMEACOFFEE from '../Assets/buymeacoffee.png'

const Header = () => {

    const GITHUB_REPO_LINK = 'https://github.com/garadiya0/task-master';

    const BUY_ME_A_COFFEE_LINK = 'https://www.buymeacoffee.com/garadiya0';

    const BUYMEACOFFEE_btn_handler = () => {
        window.open("https://www.buymeacoffee.com/garadiya0", "_blank");
    }

    return (
        <section className='header-section'>
            <Button
                variant="contained"
                className='github-btn shineEff'
                href={GITHUB_REPO_LINK}
                target='_blank'
                startIcon={<GitHubIcon />}>
                github
            </Button>

            <div
                className="buymeacoffee-btn shineEff"
                onClick={BUYMEACOFFEE_btn_handler}
                href={BUY_ME_A_COFFEE_LINK}
            >
                <img src={BUYMEACOFFEE} height={'30'} alt="buymeacoffee-img" />
                <span>buy me a coffee</span>
            </div>

        </section>
    )
}

export default Header;
