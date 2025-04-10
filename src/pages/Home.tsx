
import { HOMEPAGE_INFO } from "../homepage-info"

// *** home page layout *** // 

export default function Home() {
    return (
        <main className="home-page">
            <h2>Our Mission: Your Success</h2>
            {HOMEPAGE_INFO.map((info) => {
                return (
                    <section key={info.semititle}>
                        <img src={info.img} alt={info.imgAlt} />
                        <div>
                            <h3>{info.semititle}</h3>
                            <p>{info.content}</p>
                        </div>
                    </section>
                )
            })}
        </main>
    )
}