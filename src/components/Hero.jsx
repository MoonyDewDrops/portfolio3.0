export default function Hero({ t }) {
    return (
        <section className="pf-hero" id="home">
            {/* LEFT SIDE */}
            <div>
                <p className="pf-eyebrow">{t.hero.eyebrow}</p>

                <h1 className="pf-name">
                    Creatieve <br />
                    <em>Backend</em> <br />
                    Developer.
                </h1>

                <p className="pf-role">{t.hero.subtitle}</p>

                <div className="pf-cta-row">
                    <button className="pf-btn pf-btn-fill">
                        {t.hero.ctaWork}
                    </button>

                    <button className="pf-btn">
                        {t.hero.ctaContact}
                    </button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="pf-hero-photo">
                <div className="pf-photo-icon">
                    {/* simple icon (same as your original) */}
                    <svg viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                </div>

                <span className="pf-photo-label">
                    {t.hero.photo}
                </span>
            </div>
        </section>
    );
}