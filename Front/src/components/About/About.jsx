import React from "react";
import styles from "./About.module.css";

function AboutInfo(props) {
  return (
    <section>
      <div className={styles.firstContainer}>
        <h1 className="text-white text-center font-weight-bold">
          Welcome to SkaLe Ratings!
        </h1>
        <h6 className="text-white text-center mt-3">
          Here's how we help you find the stuff you love
        </h6>
        <img
          className="img-fluid mt-5"
          src="https://github.com/SkaLe3/KPI-Web-labs/blob/main/assets/about_pic.png?raw=true"
        />
      </div>

      <section id="home" className="ssc-bg-primary">
        <div className={styles.secondContainer}>
          <h2 class="text-white text-center font-weight-bold pt-3">About Us</h2>
          <p class="text-white font-regular font-md">
            Welcome to SkaLe Ratings, your ultimate destination for
            comprehensive and unbiased game reviews! Here, we're passionate
            about gaming and committed to providing gamers with the most
            reliable and informative reviews to help them make informed
            decisions about which games to play.
          </p>
          <h2 class="text-white text-center font-weight-bold pt-5">
            Our Mission
          </h2>
          <p class="text-white font-regular font-md">
            Our mission at SkaLe Ratings is to create a platform where gamers
            can discover, explore, and discuss their favorite games with fellow
            enthusiasts. We aim to deliver high-quality reviews from trusted
            sources and our users, aggregated in one convenient location, to
            make it easier for gamers to find the perfect game for their
            preferences.
          </p>
          <h2 class="text-white text-center font-weight-bold pt-5">
            What We Offer
          </h2>
          <p class="text-white font-regular font-md">
            Comprehensive Reviews: We gather reviews from a variety of reputable
            sources, including gaming publications, critics, and users, to
            provide a comprehensive overview of each game's strengths,
            weaknesses, and overall appeal. User Interaction: We encourage user
            engagement through user reviews, comments, and discussions, allowing
            gamers to share their opinions and experiences with the community.
            Personalized Recommendations: Our platform offers personalized game
            recommendations based on your gaming preferences, helping you
            discover new games that match your interests.
          </p>
          <h2 class="text-white text-center font-weight-bold pt-5">
            Why Choose Us
          </h2>
          <p class="text-white font-regular font-md">
            Unbiased Reviews: We prioritize transparency and objectivity in our
            reviews, ensuring that you receive unbiased and honest assessments
            of each game. User-Friendly Interface: Our website features a
            user-friendly interface designed to make it easy to browse, search,
            and explore reviews for your favorite games. Community Engagement:
            Join a vibrant community of gamers who share your passion for gaming
            and engage in lively discussions about the latest releases, industry
            trends, and gaming news.
          </p>
          <h2 class="text-white text-center font-weight-bold pt-5">
            Get in Touch
          </h2>
          <p class="text-white font-regular font-md pb-5">
            Have questions, feedback, or suggestions? We'd love to hear from
            you! Feel free to contact us with any inquiries or comments, and our
            team will be happy to assist you. Thank you for choosing SkaLe
            Ratings as your go-to destination for all things gaming. We're
            excited to embark on this gaming journey with you!
          </p>
        </div>
      </section>
    </section>
  );
}

export default AboutInfo;
