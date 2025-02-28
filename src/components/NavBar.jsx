import '../components/navBar.css'

function NavBar() {
    return (
        <>
        <nav>
            <a href="#LandingPage">
                <img width="37" height="37" src="https://img.icons8.com/pulsar-line/48/engagement-ring.png" alt="engagement-ring"/>
            </a>
            <a href="#PrayPage">
                <img width="37" height="37" src="https://img.icons8.com/windows/64/two-hearts.png" alt="two-hearts"/>
            </a>
            <a href="#GiftPage">
                <img width="33" height="33" src="https://img.icons8.com/pulsar-line/48/gift.png" alt="gift"/>
            </a>
            <a href="#RsvpPage">
                <img width="29" height="29" src="https://img.icons8.com/material-outlined/48/comments--v1.png" alt="comments--v1"/>
            </a>
        </nav>
        </>
    )
}

export default NavBar