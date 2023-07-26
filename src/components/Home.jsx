import React from "react";
import "../style/home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <h3>Home</h3>
        <p>It's an demo page</p>
      </div>
      <div className="text-formate">
        <h1>text formatting</h1>
        <p>
          This text is styled with some of the text formatting properties. The
          heading uses the text-align, text-transform, and color properties. The
          paragraph is indented, aligned, and the space between characters is
          specified. The underline is removed from this colored
          <a target="_blank" href="tryit.asp?filename=trycss_text">
            "Try it Yourself"
          </a>{" "}
          link.
        </p>
      </div>
      <div>
        <ul class="a">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ul>

        <ul class="b">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ul>

        <p>Example of ordered lists:</p>
        <ol class="c">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ol>

        <ol class="d">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ol>
      </div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
          <td>$150</td>
        </tr>
        <tr>
          <td>Joe</td>
          <td>Swanson</td>
          <td>$300</td>
        </tr>
        <tr>
          <td>Cleveland</td>
          <td>Brown</td>
          <td>$250</td>
        </tr>
      </table>
      <div class="clearfix">
        <img
          className="img2"
          src="https://www.w3schools.com/css/pineapple.jpg"
          alt="Pineapple"
          style={{ width: "170px", height: "170px", marginLeft: "15px" }}
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet...
      </div>
      <div class="clearfix">
        <div class="box">
          <p>Some text inside the box.</p>
        </div>
        <div class="box">
          <p>Some text inside the box.</p>
        </div>
        <div class="box">
          <p>Some text inside the box.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
