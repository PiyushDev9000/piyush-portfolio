import React from "react";
import {
  AuthButton,
  EcomButton,
  AppButton,
  WeatherButton,
  NextjsblogButton,
  AiSummerizer,
} from "./MyButton";

import "./Works.css";

const Projects = () => {
  return (
    <div className="pcontainer" id="projects">
      <h1 className="ballheading">PROJECTS</h1>
      <div className="projects">
        <div className="projectcard">
          <div className="card">
            <div className="card2">
              <div className="card3">
                <img className="cardimg" src="/img/ecom.png" alt="" />
              </div>
            </div>
          </div>

          <p className="pdesc">
            I built an ecommerce website using MongoDB, Express.js, React, and
            Node.js. The website lets customers browse and buy products online.
            Key features include a product catalog, shopping cart, checkout
            process, and secure payment gateway. Modern web technologies and
            best practises are used to build the website.
          </p>
          <div>
            <EcomButton />
          </div>
        </div>

        <div className="projectcard">
          <div className="card">
            <div className="card2">
              <div className="card3">
                <img className="cardimg" src="./img/nextjs.png" alt="" />
              </div>
            </div>
          </div>

          <p className="pdesc">
            Developed a cutting-edge full-stack application using Next.js,
            MongoDB, and React. Leveraged the power of server-side rendering,
            providing optimal performance and SEO benefits. Integrated MongoDB
            to create a scalable and reliable database solution, ensuring
            efficient data storage and retrieval.
          </p>
          <div>
            <NextjsblogButton />
          </div>
        </div>

        <div className="projectcard">
          <div className="card">
            <div className="card2">
              <div className="card3">
                <img className="cardimg" src="./img/aisum.png" alt="" />
              </div>
            </div>
          </div>

          <p className="pdesc">
            I created an AI summarizer web app using React, Tailwind, and
            RapidAPI to automatically summarize long texts. By quickly
            extracting key points from lengthy documents or articles, It's a
            really handy tool that can help you quickly digest large amounts of
            information and make the most out of your time. I'm really proud of
            what I've built and I hope you find it useful too!.
          </p>
          <div>
            <AiSummerizer />
          </div>
        </div>

        <div className="projectcard">
          <div className="card">
            <div className="card2">
              <div className="card4">
                <img className="cardimg" src="/img/reactapp.jpg" alt="" />
              </div>
            </div>
          </div>

          <p className="pdesc">
            I created a job search app using React Native and Expo. The app lets
            users search, apply, and manage their applications. Expo technology
            lets the app support multiple platforms, making it widely
            accessible.
            <br />
            <mark>
              {" "}
              "Download Expo from the Play Store, scan the QR code, and click
              "Go Back" to see this app. "
            </mark>
          </p>
          <div>
            <AppButton />
          </div>
        </div>

        <div className="projectcard">
          <div className="card">
            <div className="card2">
              <div className="card3">
                <img className="cardimg" src="/img/weatherapp.png" alt="" />
              </div>
            </div>
          </div>

          <p className="pdesc">
            I made a real-time weather app using Open Weather API. This
            responsive and user-friendly web app provides real-time weather
            updates, including temperature, humidity, wind speed, and
            precipitation, for any location worldwide. Users can quickly access
            weather information with the app's simple interface.
          </p>
          <div>
            <WeatherButton />
          </div>
        </div>

        <div className="projectcard">
          <div className="card">
            <div className="card2">
              <div className="card3">
                <img className="cardimg" src="/img/auth.png" alt="" />
              </div>
            </div>
          </div>

          <p className="pdesc">
            I used MongoDB, Express, React, and Node.js. The app's interface
            makes it easy to register, login, and update personal information.
            The app also protects user data with strong authentication. This
            project allowed me to demonstrate my MERN development skills and
            create a useful app.
            <br />
            <mark> "Allow 10-15 seconds to load"</mark>
          </p>
          <div>
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
