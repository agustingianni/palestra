import ClientList from "../components/client"

function DashBoard() {
    return (
        <div>
            <section className='heading'>
                <p>DashBoard</p>
            </section>

            <section className='content'>
                <ClientList />
            </section>
        </div>
    )
}

export default DashBoard