import "./App.css";
import img from "./images/pic.webp";

function App() {
  return (
    <main className="cvBody">
      <section className="section-first_page">
        <div className="head-section">
          <div className="image">
            <img src={img} alt="Md. Moinul Hossain" className="myImg" />
          </div>
          <div className="name_designation">
            <p>MD.MOINUL HOSSAIN</p>
            <span>Web Developer (Full Stack)</span>
          </div>
          <div className="links">
            <table>
              <tbody>
                <tr>
                  <td>a</td>
                  <td>b</td>
                </tr>
                <tr>
                  <td>c</td>
                  <td>d</td>
                </tr>
                <tr>
                  <td>e</td>
                  <td>f</td>
                </tr>
                <tr>
                  <td>g</td>
                  <td>h</td>
                </tr>
                <tr>
                  <td>i</td>
                  <td>j</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="info">
          <aside className="info-left"></aside>
          <aside className="info-right"></aside>
        </div>
      </section>
      <section className="section-secound_page">
        <div className="info">
          <aside className="info-left"></aside>
          <aside className="info-right"></aside>
        </div>
      </section>
    </main>
  );
}

export default App;
