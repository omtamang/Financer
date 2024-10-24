import Header from "../Header/Header";

export default function Logout() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div class="alert alert-success w-5/12 container" role="alert">
                <h4 class="alert-heading">Logout Successful!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr/>
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
        </div>
    )
}