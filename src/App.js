import "./App.css";
import img from "./images/pic.webp";

function App() {
  return (
    <main className="cvBody">
      <section className="section-first_page">
        <div className="head-section">
          <div className="img_designation_section">
            <div className="image">
              <img src={img} alt="Md. Moinul Hossain" className="myImg" />
            </div>
            <div className="name_designation">
              <h2>MD.MOINUL HOSSAIN</h2>
              <span>Web Developer (Full Stack)</span>
            </div>
          </div>
          <div className="links">
            <table className="table">
              <tbody>
                <tr>
                  <td className="td_border-right">
                    <i class="bi bi-telephone-fill"></i>
                  </td>
                  <td>+880 168189-4386</td>
                </tr>
                <tr>
                  <td className="td_border-right">
                    <i class="bi bi-envelope-fill"></i>
                  </td>
                  <td>mdmoinulhossain100@gmail.com</td>
                </tr>
                <tr>
                  <td className="td_border-right">
                    <i class="bi bi-linkedin"></i>
                  </td>
                  <td>/in/mmoinulh/</td>
                </tr>
                <tr>
                  <td className="td_border-right">
                    <i class="bi bi-globe"></i>
                  </td>
                  <td>https://mdmoinulhossain.github.io/</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="info">
          <aside className="info-left">
            <span className="info_headline">
              <h3>Profile</h3>
              <i class="bi bi-person-bounding-box"></i>
            </span>
            <p>
              I am passionate about Full Stack Software Development and DevOps.
              I completed my post-graduation in finance and banking. But my
              passion is Software Development since I was completing my
              graduation.
            </p>
            <span className="info_headline">
              <h3>Professional Experience</h3>
              <i class="bi bi-person-workspace"></i>
            </span>
            <h5>Web Developer</h5>
            <h6>Unicon Solution Limited | Dhaka, Bangladesh | 2021-present</h6>
            <b>Responsibilities:</b>
            <ul>
              <li>Work as Front-end and as well as backend developer.</li>
              <li>Work with CSM(WordPress).</li>
              <li>Software technical Support.</li>
              <li>Graphics design related works.</li>
              <li>Multitask as they required.</li>
            </ul>
            <p>
              <b>Unicon solution limited</b> is a country distributor of{" "}
              <b>eScan antivirus</b> in Bangladesh. Here I works as a technical
              support engineer.
            </p>
          </aside>
          <aside className="info-right">
            <span className="info_headline">
              <h3>Skills</h3>
              <i class="bi bi-stars"></i>
            </span>
            <p>
              Currently, I am flexible in Frontend technologies (HTML, CSS,
              Bootstrap, SASS, Material UI, Tailwindcss), php with mysql,
              codeIgniter, WordPress with 2 years of experience. Limited work
              proficiency in React js, angular, laravel, Magento.
            </p>
            <ul>
              <li>PHP(Raw)- Laravel, CodeIgniter</li>
              <li>MySQL, MongoDB, firebase.</li>
              <li>JavaScript(valina)- React JS, Angular JS</li>
              <li>CMS- WordPress, Magento.</li>
              <li>
                Front-end Technologies (HTML, CSS, Bootstrap, Material UI,
                Tailwindcss, SASS, jQuery).
              </li>
              <li>git (github, gitlab)</li>
              <li>Live server, heroku, netlify, etc.</li>
              <li>Image optimization</li>
              <li>Single page SEO.</li>
              <li>Adobe Creative Cloud. (Photoshop, Illustrator, adobe xd)</li>
              <li>MS Office (Excel, Power point)</li>
              <li>Software Technical Support</li>
              <li>Social Media marketing and managing.</li>
            </ul>
            <p>
              I have some graphics design related practical works knowledge
              also. I love to work in digital marketing and search engine
              optimization fields. My all skills and projects are demonstrating
              in linkedIn and github profile.
            </p>
          </aside>
        </div>
      </section>
      <div className="page_break">
        <hr />
      </div>
      <section className="section-secound_page">
        <div className="info">
          <aside className="info-left">
            <span className="info_headline">
              <h3>Project based works</h3>
              <i class="bi bi-award-fill"></i>
            </span>
            <ol>
              <li>
                Konna(she for she):
                <br />
                <span>
                  Making a website about women health using popular php
                  framework codeIgniter.
                </span>
              </li>
              <li>
                Shokhbari:
                <br />
                <span>Making an e-commerce website, using MERN STACK.</span>
              </li>
              <li>
                Indo-Italiano:
                <br />
                <span>
                  It's a restaurant base website in Denmark. Made by WordPress
                  woo commerce.
                </span>
              </li>
              <br />
              <span>
                And Many More....Look into my GITHUB:
                <a href="https://github.com/mdmoinulhossain">
                  {" "}
                  mdmoinulhossain
                </a>
              </span>
            </ol>
            <span className="info_headline">
              <h3>Personal Information</h3>
              <i class="bi bi-info-circle-fill"></i>
            </span>
            <span>
              <b>Date of Birth:</b> March 16, 1996.
              <br /> <b>Nationality:</b> Bangladeshi.
              <br />
              <b> Address:</b>
              Mohammadpur, Dhaka.
            </span>
            <br />
            <br />
            <span className="info_headline">
              <h3>References</h3>
              <i class="bi bi-person-check-fill"></i>
            </span>
            <span>
              <b>Md. Moshaidul Islam</b>
              <br />
              Consultant, IsDB-BISEW IT Scholarship, Program and Show and tell
              Consulting Ltd. Contact: +880 171107-1219
              moshaidul@showtellconsulting.com
            </span>
          </aside>
          <aside className="info-right">
            <span className="info_headline">
              <h3>Courses and Certificates</h3>
              <i class="bi bi-patch-check-fill"></i>
            </span>
            <ul>
              <li>
                <p>
                  <b>Digital Marketing. (2021)</b>
                  <br />
                  Digital Marketing course from Learning and earning development
                  project under ICT Division of Bangladesh.
                </p>
              </li>
              <li>
                <p>
                  <b>Web Development. (2019-2020)</b>
                  <br />
                  Web Application Development with PHP and Frameworks from
                  IsDB-BISEW IT Scholarship Program.
                </p>
              </li>
              <li>
                <p>
                  <b>Graphic Design. (2018)</b>
                  <br />
                  Graphic Design course from Dimension IT and software.
                </p>
              </li>
              <li>
                <p>
                  <b>Diploma in Computer Science. (2017-2018)</b>
                  <br />
                  Diploma in Computer Science and Technology (Basic hardware,
                  software and Adobe Photoshop) from National Institute of
                  Technology.
                </p>
              </li>
            </ul>
            <span className="info_headline">
              <h3>Education</h3>
              <i class="bi bi-mortarboard-fill"></i>
            </span>
            <ul>
              <li>
                <p>
                  <b>Masters of Business Administration</b>
                  <br />
                  Finance and Banking | CGPA- 3.53 out of 4.00 | 2017-2018
                  National University of Bangladesh.
                </p>
              </li>
              <li>
                <p>
                  <b>Bachelor of Business Administration</b>
                  <br />
                  Finance and Banking | CGPA-3.38 out of 4.00 | 2013-2017
                  National University of Bangladesh.
                </p>
              </li>
              <li>
                <p>
                  <b>Higher School Certificate </b>
                  <br />
                  Business Studies | GPA- 3.70 out of 5.00 | 2011-2013 Govt.
                  Science College.
                </p>
              </li>
              <li>
                <p>
                  <b>Secondary School Certificate</b>
                  <br />
                  Science | GPA- 4.56 out of 5.00 | 2001-2011 Mohammadpur Govt.
                  High School.
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default App;
