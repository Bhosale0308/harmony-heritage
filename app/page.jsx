 "use client";

import { useState, useRef, useEffect } from "react";


export function ArchitectureInMotion() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="motion-world"
      id="amenities"
      ref={sectionRef}
    >
      <div className="motion-topline">
        <span>HARMONY HERITAGE</span>
        <span>DESIGNED FOR THE WAY YOU LIVE</span>
        <span>01 — 04</span>
      </div>

      <div className="motion-heading" data-reveal>
        <p className="motion-eyebrow">
          THE ART OF EVERYDAY LIVING
        </p>

        <h2>
          Space to live.
          <br />
          <span>Room to feel.</span>
        </h2>

        <div className="motion-side-note">
          Thoughtful details.
          <br />
          A different perspective.
        </div>
      </div>

      <div className="motion-stage">
        <div className="motion-image-wrap">
          <img
            src="/images/harmony-project.jpg"
            alt="Harmony Heritage architectural project"
            className="motion-main-image"
          />

          <div className="motion-image-shade" />

          <div className="motion-image-caption">
            <span>HARMONY HERITAGE</span>
            <span>RAVET, PUNE</span>
          </div>

          <div className="motion-orbit" aria-hidden="true">
            <div className="motion-orbit-inner">
              <span>H</span>
            </div>
          </div>

          <div className="motion-floating-label">
            <span className="motion-dot" />
            A MORE OPEN WAY OF LIVING
          </div>
        </div>

        <div className="motion-intro" data-reveal>
          <span className="motion-number">01 / THE IDEA</span>
          <p>
            Good design is not only what you see.
            It is how a space makes everyday life feel.
          </p>
        </div>
      </div>

      <div className="motion-features">
        <div className="motion-feature-heading" data-reveal>
          <span>CONSIDERED DETAILS</span>
          <h3>
            The little things
            <br />
            <i>change everything.</i>
          </h3>
        </div>

        <article className="motion-feature" data-reveal>
          <span className="motion-feature-index">01</span>
          <div className="motion-feature-icon">↗</div>
          <h4>Open-sided living</h4>
          <p>
            Explore the 3 &amp; 4 side-open flat configurations
            offered at Harmony Heritage.
          </p>
          <span className="motion-feature-rule" />
        </article>

        <article className="motion-feature" data-reveal>
          <span className="motion-feature-index">02</span>
          <div className="motion-feature-icon">⌂</div>
          <h4>Podium parking</h4>
          <p>
            A dedicated parking feature considered as part
            of the project design.
          </p>
          <span className="motion-feature-rule" />
        </article>

        <article className="motion-feature" data-reveal>
          <span className="motion-feature-index">03</span>
          <div className="motion-feature-icon">✳</div>
          <h4>Rooftop garden</h4>
          <p>
            A rooftop garden that brings greenery into
            the project's shared spaces.
          </p>
          <span className="motion-feature-rule" />
        </article>

        <article className="motion-feature" data-reveal>
          <span className="motion-feature-index">04</span>
          <div className="motion-feature-icon">☼</div>
          <h4>Solar energy</h4>
          <p>
            A solar grid supports electricity for common
            areas of the project.
          </p>
          <span className="motion-feature-rule" />
        </article>
      </div>

      <div className="motion-bottom" data-reveal>
        <span>HARMONY HERITAGE · RAVET</span>
        <a href="#enquire">
          FIND YOUR SPACE <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const interest = form.get("interest");
    const subject = encodeURIComponent("Harmony Heritage — Property Enquiry");
    const body = encodeURIComponent(
      `Hello, I would like to know more about Harmony Heritage.\nName: ${name}\nPhone: ${phone}\nInterested in: ${interest}`
    );
    setSubmitted(true);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      
<header className="site-header">
  <a className="brand" href="#home" aria-label="Harmony Heritage home">
    <img
      src="/images/harmony-heritage-logo.png"
      alt="Harmony Heritage"
      className="brand-logo"
    />
  </a>

  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
    aria-expanded={menuOpen}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  <nav className={menuOpen ? "nav-links open" : "nav-links"}>
    <a href="#about" onClick={() => setMenuOpen(false)}>The Project</a>
    <a href="#amenities" onClick={() => setMenuOpen(false)}>Amenities</a>
    <a href="#residences" onClick={() => setMenuOpen(false)}>Residences</a>
    <a href="#location" onClick={() => setMenuOpen(false)}>Location</a>
    <a
      className="nav-cta"
      href="#enquire"
      onClick={() => setMenuOpen(false)}
    >
      Enquire Now <span>↗</span>
    </a>
  </nav>
</header>


<section className="hh-hero" id="home">
  <div className="hh-hero-image" />
  <div className="hh-hero-shade" />

  <div className="hh-hero-content">
    <div className="hh-eyebrow">
      <span className="hh-eyebrow-line" />
      <span>A THOUGHTFUL ADDRESS IN RAVET</span>
    </div>

    <h1 className="hh-title">
      Where modern
      <br />
      living meets
      <br />
      <em>timeless values.</em>
    </h1>

    <p className="hh-description">
      Thoughtfully designed residences, landscaped
      spaces and modern amenities — all in a
      connected and growing neighbourhood.
    </p>

    <a href="#about" className="hh-discover">
      <span className="hh-discover-icon">↗</span>
      <span>Discover Harmony</span>
    </a>
  </div>

  <div className="hh-hero-details">
    <div className="hh-detail">
      <span className="hh-detail-icon">⌂</span>
      <div>
        <strong>2 &amp; 3 BHK</strong>
        <span>Thoughtful Residences</span>
      </div>
    </div>

    <div className="hh-detail">
      <span className="hh-detail-icon">♧</span>
      <div>
        <strong>Green Spaces</strong>
        <span>For a Healthier Tomorrow</span>
      </div>
    </div>

    <div className="hh-detail">
      <span className="hh-detail-icon">◎</span>
      <div>
        <strong>Ravet, Pune</strong>
        <span>A Connected Lifestyle</span>
      </div>
    </div>
  </div>

  <a href="#about" className="hh-scroll">
    <span>SCROLL</span>
    <i />
  </a>
</section>


{/* HARMONY HERITAGE — PROJECT SECTION */}
<section className="project-story" id="about">
  <div className="project-story-inner">

    {/* Left: Project imagery */}
    <div className="project-visual">
      <div className="project-image-main">
        <img
          src="/images/harmony-project.jpg"
          alt="Harmony Heritage residential project in Ravet"
        />
        <div className="project-image-overlay" />
        <span className="project-image-label">
          A NEW CHAPTER IN RAVET
        </span>
      </div>

     <div className="project-image-note">
  <img
    src="/images/harmony-heritage-logo.png"
    alt="Harmony Heritage logo"
    className="hh-brand-logo"
  />
  <div>
    <strong>Harmony Heritage</strong>
    <span>Thoughtfully planned. Made for living.</span>
  </div>
</div>

      <div className="project-vertical-label">
        VASUDHA GROUP · RAVET, PUNE
      </div>
    </div>

    {/* Right: Project introduction */}
    <div className="project-story-content">
      <div className="project-eyebrow">
        <span />
        THE PROJECT
      </div>

      <h2>
        More than a home.
        <br />
        <em>A way of living.</em>
      </h2>

      <p className="project-intro">
        Welcome to Harmony Heritage — a thoughtfully planned
        residential and commercial development near DMart,
        Ravet. Designed to bring everyday convenience and
        comfortable living together in one connected address.
      </p>

      <div className="project-divider" />

      <div className="project-stats">
        <div className="project-stat">
          <strong>42</strong>
          <span>Residential Units</span>
        </div>

        <div className="project-stat">
          <strong>12</strong>
          <span>Commercial Units</span>
        </div>
      </div>

      <div className="project-location">
        <span className="project-location-icon">↗</span>
        <div>
          <span className="project-location-label">FIND YOUR PLACE</span>
          <strong>Near DMart, Ravet, Pune</strong>
        </div>
      </div>

      <a href="#amenities" className="project-explore-link">
        EXPLORE THE DIFFERENCE
        <span>↗</span>
      </a>
    </div>
  </div>

  {/* Feature strip */}
  <div className="project-feature-strip">
    <div className="project-feature-heading">
      <span>DESIGNED AROUND YOU</span>
      <p>Details that make everyday living better.</p>
    </div>

    <div className="project-feature">
      <span className="project-feature-number">01</span>
      <div>
        <h3>Open-Side Living</h3>
        <p>3 &amp; 4 side-open flats</p>
      </div>
    </div>

    <div className="project-feature">
      <span className="project-feature-number">02</span>
      <div>
        <h3>Podium Parking</h3>
        <p>Planned parking convenience</p>
      </div>
    </div>

    <div className="project-feature">
      <span className="project-feature-number">03</span>
      <div>
        <h3>Rooftop Garden</h3>
        <p>Garden and rooftop amenities</p>
      </div>
    </div>

    <div className="project-feature">
      <span className="project-feature-number">04</span>
      <div>
        <h3>Solar Power</h3>
        <p>Solar grid for common areas</p>
      </div>
    </div>
  </div>
</section>

{/* COMPACT LIFESTYLE SECTION */}
<section className="hh-lifestyle" id="lifestyle">
  <div className="hh-lifestyle-inner">

    <div className="hh-lifestyle-heading">
      <span className="hh-lifestyle-eyebrow">
        THE HARMONY LIFESTYLE
      </span>
      <h2>Designed for <em>better living.</em></h2>
      <p>Thoughtful details. Everyday comfort.</p>
    </div>

    <div className="hh-lifestyle-feature">
      <div className="hh-lifestyle-image">
        <img
          src="/images/harmony-project.jpg"
          alt="Harmony Heritage residential project"
          loading="lazy"
        />
        <div className="hh-lifestyle-image-overlay" />
        <div className="hh-lifestyle-image-caption">
          <span>HARMONY HERITAGE · RAVET</span>
          <h3>A place to<br />feel at home.</h3>
        </div>
      </div>

      <div className="hh-lifestyle-list">
        <div className="hh-lifestyle-item">
          <span className="hh-lifestyle-number">01</span>
          <div>
            <h3>Open-Side Living</h3>
            <p>3 &amp; 4 side-open flats</p>
          </div>
          <span className="hh-lifestyle-symbol">↗</span>
        </div>

        <div className="hh-lifestyle-item">
          <span className="hh-lifestyle-number">02</span>
          <div>
            <h3>Podium Parking</h3>
            <p>Convenience in everyday living</p>
          </div>
          <span className="hh-lifestyle-symbol">↗</span>
        </div>

        <div className="hh-lifestyle-item">
          <span className="hh-lifestyle-number">03</span>
          <div>
            <h3>Rooftop Garden</h3>
            <p>A space to relax and unwind</p>
          </div>
          <span className="hh-lifestyle-symbol">↗</span>
        </div>

        <div className="hh-lifestyle-item">
          <span className="hh-lifestyle-number">04</span>
          <div>
            <h3>Solar Power</h3>
            <p>For common-area electricity</p>
          </div>
          <span className="hh-lifestyle-symbol">↗</span>
        </div>
      </div>
    </div>

    <div className="hh-lifestyle-footer">
      <span>HARMONY HERITAGE · RAVET, PUNE</span>
      <a href="#enquire">ENQUIRE NOW ↗</a>
    </div>

  </div>
</section>

{/* LOCATION — HARMONY HERITAGE */}
<section className="hh-location" id="location">
  <div className="hh-location-inner">

    <div className="hh-location-heading">
      <span className="hh-location-eyebrow">
        A PLACE THAT FEELS RIGHT
      </span>

      <h2>
        Find your place
        <br />
        in <em>Ravet.</em>
      </h2>

      <p>
        A thoughtfully planned address near DMart,
        Ravet, Pune.
      </p>
    </div>

    <div className="hh-location-content">

      <div className="hh-location-map">
        <iframe
          title="Map showing Ravet, Pune"
          src="https://maps.google.com/maps?q=DMart%20Ravet%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className="hh-location-map-tag">
          <span className="hh-location-pulse" />
          NEAR DMART · RAVET
        </div>
      </div>

      <div className="hh-location-details">
        <span className="hh-location-index">YOUR NEXT CHAPTER</span>

        <div className="hh-location-pin">↗</div>

        <img
  src="/images/harmony-heritage-logo.png"
  alt="Harmony Heritage Logo"
  className="hh-location-logo"
/>
        <p className="hh-location-address">
          Near DMart,<br />
          Ravet, Pune, Maharashtra
        </p>

        <div className="hh-location-divider" />

        <div className="hh-location-note">
          <span className="hh-location-note-icon">⌖</span>
          <p>
            Explore the location and find your way
            to Harmony Heritage.
          </p>
        </div>

        <a
          className="hh-location-button"
          href="https://www.google.com/maps/search/?api=1&query=DMart+Ravet+Pune"
          target="_blank"
          rel="noopener noreferrer"
        >
          EXPLORE ON MAP <span>↗</span>
        </a>
      </div>

    </div>

  </div>
</section>

{/* PREMIUM ARCHITECTURE — HARMONY HERITAGE */}
<section className="lux-architecture" id="residences">
  <div className="lux-arch-top">
    <span className="lux-arch-kicker">
      <i /> ARCHITECTURE · HARMONY HERITAGE
    </span>
    <span className="lux-arch-edition">RAVET, PUNE — EST. IN EVERY DETAIL</span>
  </div>

  <div className="lux-arch-layout">
    <div className="lux-arch-copy">
      <span className="lux-arch-index">01 / A DIFFERENT PERSPECTIVE</span>

      <h2>
        Space that<br />
        inspires <em>living.</em>
      </h2>

      <p className="lux-arch-description">
        A thoughtful address where considered design,
        everyday comfort and a connected neighbourhood
        come together.
      </p>

      <div className="lux-arch-rule">
        <span />
      </div>

      <div className="lux-arch-quote">
        <span>“</span>
        <p>Not simply a place to live.<br />
          A place to make your own.</p>
      </div>

      <a href="#enquire" className="lux-arch-cta">
        <span>DISCOVER YOUR HOME</span>
        <span className="lux-arch-arrow">↗</span>
      </a>
    </div>

    <div className="lux-arch-visual">
      <div className="lux-arch-image-frame">
        <img
          src="/images/harmony.jpg"
          alt="Harmony Heritage residential architecture in Ravet"
        />
        <div className="lux-arch-image-overlay" />
        <span className="lux-arch-image-caption">
          HARMONY HERITAGE <i>·</i> RAVET
        </span>
      </div>

      <div className="lux-arch-floating-card">
       <div className="logo-mark">
  <img
    src="/images/harmony-heritage-logo.png"
    alt="Harmony Heritage Logo"
  />
</div>
        <div>
          <small>YOUR ADDRESS</small>
          <strong>Harmony Heritage</strong>
          <span>Near DMart, Ravet, Pune</span>
        </div>
        <span className="lux-arch-card-arrow">↗</span>
      </div>

      <div className="lux-arch-vertical">
        THOUGHTFULLY CONSIDERED · DISTINCTIVELY HARMONY
      </div>

      <div className="lux-arch-image-number">H<span>/</span>H</div>
    </div>
  </div>

  <div className="lux-arch-bottom">
    <div className="lux-arch-bottom-intro">
      <span>THE HARMONY DIFFERENCE</span>
      <p>Considered details.<br /><em>Everyday possibilities.</em></p>
    </div>

    <div className="lux-arch-stat">
      <span>01 — RESIDENTIAL</span>
      <strong>42</strong>
      <p>Residential units</p>
    </div>

    <div className="lux-arch-stat">
      <span>02 — COMMERCIAL</span>
      <strong>12</strong>
      <p>Commercial units</p>
    </div>

    <a href="#location" className="lux-arch-location">
      <span className="lux-arch-location-icon">↗</span>
      <span>
        <small>EXPLORE THE NEIGHBOURHOOD</small>
        <strong>Find us in Ravet</strong>
      </span>
    </a>
  </div>
</section>



{/* HARMONY HERITAGE — EDITORIAL AMENITIES */}
<section className="hh-amenities-v2" id="amenities">
  

  <div className="amenity-v2-hero">
    <div className="amenity-v2-title">
      <p><span /> A HOME IS MORE THAN FOUR WALLS</p>
      
<h2 className="amenity-v2-animated-title">
  LIVE
  <br />
  <i>WELL.</i>
</h2>

      <div className="amenity-v2-title-bottom">
        <span>THOUGHTFULLY PLANNED</span>
        <p>
          Everyday conveniences.
          <br />
          Spaces to pause.
          <br />
          Details that matter.
        </p>
      </div>
    </div>

    <div className="amenity-v2-main-visual">
      <img
        src="/images/harmony-rooftop-amenity-detail.jpg"
        alt="Rooftop amenity shown in the Harmony Heritage brochure"
        loading="lazy"
      />
      <div className="amenity-v2-image-shade" />
      <div className="amenity-v2-image-top">
        <span>01 / SHARED SPACES</span>
        <span>↗</span>
      </div>
      <div className="amenity-v2-image-bottom">
        <span>ROOM TO BREATHE.</span>
       
<h3 className="amenity-v2-rooftop-title">
  Rooftop
  <br />
  <i>living.</i>
</h3>

      </div>
      <div className="amenity-v2-image-stamp">
       
<div className="amenity-v2-image-stamp">
  <img
    src="/images/harmony-heritage-logo.png"
    alt="Harmony Heritage"
  />
</div>


        <small>HARMONY<br />HERITAGE</small>
      </div>
    </div>

    <div className="amenity-v2-side-note">
      <span className="amenity-v2-side-number">01—04</span>
      <p>
        A considered collection of features
        for the rhythm of everyday life.
      </p>
      <a href="#enquire">EXPLORE THE PROJECT ↗</a>
    </div>
  </div>

  <div className="amenity-v2-divider">
    <span>THE HARMONY DIFFERENCE</span>
    <span>SMALL DETAILS. EVERYDAY VALUE.</span>
  </div>

  <div className="amenity-v2-feature">
    <div className="amenity-v2-feature-heading">
      <span>02 / DESIGNED AROUND YOU</span>
      <h3>Everyday ease.<br /><i>Considered.</i></h3>
    </div>

    <div className="amenity-v2-index">
      <article>
        <span>01</span>
        <div>
          <h4>Open-sided homes</h4>
          <p>Explore the side-open flat configurations specified for the project.</p>
        </div>
        <b>↗</b>
      </article>

      <article>
        <span>02</span>
        <div>
          <h4>Podium parking</h4>
          <p>A planned parking feature for everyday convenience.</p>
        </div>
        <b>↗</b>
      </article>

      <article>
        <span>03</span>
        <div>
          <h4>Security features</h4>
          <p>CCTV surveillance and video doorbell provisions.</p>
        </div>
        <b>↗</b>
      </article>

      <article>
        <span>04</span>
        <div>
          <h4>EV-ready thinking</h4>
          <p>EV charging point listed among the project amenities.</p>
        </div>
        <b>↗</b>
      </article>
    </div>
  </div>

<div className="amenity-v2-energy redesigned-energy">
  <div className="redesigned-energy-image">
    <img
      src="/images/harmony-solar-amenity.jpg"
      alt="Solar energy feature at Harmony Heritage"
      loading="lazy"
    />
    <div className="energy-image-label">
      <span>03</span>
      <p>A MORE CONSIDERED TOMORROW</p>
    </div>
    <div className="energy-image-caption">
      <span>HARMONY HERITAGE</span>
      <span>RAVET, PUNE</span>
    </div>
  </div>

  <div className="amenity-v2-energy-copy redesigned-energy-copy">
    <span className="amenity-v2-gold-line" />

    <p className="energy-eyebrow">
      ENERGY <span>·</span> GREENERY <span>·</span> EVERYDAY LIFE
    </p>

    <h3>
      Thoughtful
      <br />
      today.
      <br />
      <i>Ready for tomorrow.</i>
    </h3>

    <p className="amenity-v2-energy-description">
      Solar power for common-area electricity, rainwater
      harvesting, and rooftop garden amenities bring
      practical and environmental considerations into
      the project.
    </p>

    <a className="energy-cta" href="#enquire">
      <span>KNOW MORE ABOUT HARMONY</span>
      <b>↗</b>
    </a>

    <div className="energy-bottom-note">
      <span>DESIGNED FOR EVERYDAY LIVING</span>
      <span>03 — 04</span>
    </div>
  </div>
</div>

</section>

<section className="enquiry enquiry-luxe" id="enquire">
  <div className="luxe-topline">
    <span>HARMONY HERITAGE</span>
    <span>YOUR HOME JOURNEY / </span>
  </div>

  <div className="luxe-layout">
    <div className="luxe-intro">
      <p className="luxe-eyebrow">
        <span className="luxe-live-dot" />
        LET'S BEGIN SOMETHING BEAUTIFUL
      </p>

      <h2 className="luxe-title">
        More than
        <br />
        a place.
        <br />
        <em>A feeling.</em>
      </h2>

      <p className="luxe-description">
        Your next chapter deserves a thoughtful beginning.
        Tell us what home means to you, and discover
        life at Harmony Heritage, Ravet.
      </p>

      <div className="luxe-project">
       
        <div>
          <strong>HARMONY HERITAGE</strong>
          <p>Thoughtfully designed. Made for living.</p>
        </div>
      </div>

      <div className="luxe-bottom-note">
        <span className="luxe-note-line" />
        <span>YOUR STORY STARTS HERE</span>
      </div>
    </div>

    <div className="luxe-form-wrap">
      <div className="luxe-form-card">
        <div className="luxe-card-top">
          <div>
            <span className="luxe-card-kicker">A PERSONAL INTRODUCTION</span>
            <h3>Let's talk <em>home.</em></h3>
          </div>
         
        </div>

        <p className="luxe-form-description">
          Leave your details and our team can help you
          explore your residence options.
        </p>

        <form className="luxe-form" onSubmit={handleSubmit}>
          <label className="luxe-field">
            <span><b>01</b> FULL NAME</span>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </label>

          <label className="luxe-field">
            <span><b>02</b> PHONE NUMBER</span>
            <input
              name="phone"
              type="tel"
              placeholder="Your contact number"
              autoComplete="tel"
              required
            />
          </label>

          <label className="luxe-field">
            <span><b>03</b> YOUR PREFERRED HOME</span>
            <select name="interest" defaultValue="Both 2 BHK and 3 BHK">
              <option value="2 BHK">2 BHK Residence</option>
              <option value="3 BHK">3 BHK Residence</option>
              <option value="Both 2 BHK and 3 BHK">
                Explore both options
              </option>
            </select>
          </label>

          <button className="luxe-submit" type="submit">
            <span>START MY ENQUIRY</span>
            <span className="luxe-submit-arrow">↗</span>
          </button>

          {submitted && (
            <p className="luxe-success">
              Your email app should open with your enquiry details.
              Please send the email to complete your enquiry.
            </p>
          )}

          <p className="luxe-privacy">
            <span>✳</span> Your details are intended for project enquiries only.
          </p>
        </form>
      </div>

      <div className="luxe-card-caption">
        <span>01 — CONNECT WITH US</span>
        <span>RAVET, PUNE</span>
      </div>
    </div>
  </div>

  <div className="luxe-footer">
    <span>HARMONY HERITAGE</span>
    <span className="luxe-footer-center">A THOUGHTFUL WAY OF LIVING</span>
    <a href="#about">BACK TO THE PROJECT ↑</a>
  </div>
</section>



     
<footer className="hh-footer" id="footer">
  <div className="hh-footer-main">
    <div className="hh-footer-brand">
      <a href="#home" className="hh-footer-logo">
        <img
          src="/images/harmony-heritage-logo.png"
          alt="Harmony Heritage"
        />
      </a>

      <p className="hh-footer-tagline">
        A peaceful inside.
        <br />
        <em>Connected outside.</em>
      </p>

      <span className="hh-footer-location">
        RAVET · PUNE, MAHARASHTRA
      </span>
    </div>

    <div className="hh-footer-nav">
      <span className="hh-footer-heading">EXPLORE</span>
      <a href="#about">The Project</a>
      <a href="#amenities">Amenities</a>
      <a href="#residences">Residences</a>
      <a href="#location">Location</a>
    </div>

    <div className="hh-footer-contact">
      <span className="hh-footer-heading">GET IN TOUCH</span>
      <p>Find a place to call home.</p>
      <a className="hh-footer-enquire" href="#enquire">
        Enquire About the Project <span>↗</span>
      </a>
    </div>

    <a className="hh-footer-top" href="#home" aria-label="Back to top">
      
    </a>
  </div>

  <div className="hh-footer-bottom">
    <span>
      © {new Date().getFullYear()} Harmony Heritage
    </span>
    <span className="hh-footer-disclaimer">
      Project information subject to confirmation by the developer.
    </span>
    <a href="#home">HARMONY HERITAGE ↗</a>
  </div>
</footer>

    </main>
  );
}
