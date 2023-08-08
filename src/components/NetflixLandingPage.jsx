import React from "react";

const NetflixLandingPage = () => {
  return (
    <div>
      <div class="header">
        <nav>
          <img class="logo" src="./Assets/logo.png" alt="logo" />
          <div>
            <button class="lang-btn">
              <i class="fa-solid fa-globe"></i> English{" "}
              <img src="./Assets/down-icon.png" />
            </button>
            <button>Sign In</button>
          </div>
        </nav>
        <div class="header-content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form action="#" class="email-signup">
            <input type="email" placeholder="Email address" required />
            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NetflixLandingPage;
