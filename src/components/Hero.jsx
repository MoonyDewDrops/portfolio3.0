import profilePhoto from "../assets/images/profile.png";

export default function Hero({ t }) {
    return (
        <section className="pf-hero" id="home">
            <div className="pf-hero-content">
                <p className="pf-eyebrow">{t.hero.eyebrow}</p>

                <h1 className="pf-name">
                    {t.hero.title1}<br />
                    <em>{t.hero.title2}</em><br />
                    {t.hero.title3}
                </h1>

                <p className="pf-role">{t.hero.subtitle}</p>

                <div className="pf-cta-row">
                    <a href="#projects" className="pf-btn pf-btn-fill">
                        {t.hero.ctaWork}
                    </a>

                    <a href="#contact" className="pf-btn">
                        {t.hero.ctaContact}
                    </a>
                </div>
            </div>

            <div className="pf-hero-photo">
                <img src={profilePhoto} alt="Julia Brouwer" />
            </div>
        </section>
    );
}