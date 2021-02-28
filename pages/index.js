import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        {/* ここはhead内に追記されるやつ */}
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>


      <div>
        {/*header*/}
        <Header/>

        <section className="hero is-origin-color is-fullheight is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-one-fifth-tablet">
                  <figure className="image is-128x128 icon-spacer">
                    <img
                      alt="プロフィール写真"
                      className="is-rounded"
                      src="/img/myIcon.jpg"
                    />
                  </figure>
                </div>
                <div className="column is-four-fifths-tablet has-text-centered-mobile">
                  Hello! I am
                  <h1 className="title is-1">
                    Lima.json
                  </h1>
                  <h2 className="subtitle is-3">
                    Backend Engineer <br/>(API Developer)
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <h3 className="title is-2">About Me</h3>
            <h4 className="subtitle is-5">私について、概要</h4>
            <div className="container">
              <p>
                API開発を主としたバックエンドエンジニアをしています。<br/>
                MAU300万を超えるスマホアプリや、スマホでの注文を行うSPAのバックエンド開発をしてきました。
                業務経験のある言語はPHP(Laravel)、vue.jsはコードレビュー程度。AWS上での開発をしました。<br/>
                個人的にflutter, go, vue.jsの勉強をしています。
                このサイトもvue.jsとCSSとしてbulmaで作っています。<br/>
                バックエンドエンジニアから、次のステージとしてアーキテクトを目指してバックエンドに限らず様々な知識を集めています。
              </p>
            </div>
          </div>

          <div className="columns has-same-height is-gapless">
            <div class="column">
              <div class="card">
                <div class="card-content">
                  <h3 class="title is-4">Profile</h3>

                  <div class="content">
                    <table class="table-profile">
                      <tr>
                        <th colspan="1"></th>
                        <th colspan="2"></th>
                      </tr>
                      <tr>
                        <td>Address:</td>
                        <td>Tokyo, Kanagawa</td>
                      </tr>
                      <tr>
                        <td>Phone:</td>
                        <td>secret!!</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>lmimsra07@gmail.com</td>
                      </tr>
                    </table>
                  </div>
                  <br/>
                  <div class="buttons has-addons is-centered">
                    <a href="https://github.com/lmimsra" class="button is-link">
                      Github
                    </a>
                    <a
                      href="https://twitter.com/lmimsra_dev"
                      class="button is-link"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content skills-content">
                  <h3 className="title is-4">Skills</h3>
                  <div className="content">

                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>JavaScript:</strong>
                            <br/>
                            <progress className="progress is-primary" value="90" max="100"></progress>
                          </p>
                        </div>
                      </div>
                    </article>

                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Vue.js:</strong>
                            <br/>
                            <progress className="progress is-primary" value="90" max="100"></progress>
                          </p>
                        </div>
                      </div>
                    </article>

                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Node.js:</strong>
                            <br/>
                            <progress className="progress is-primary" value="75" max="100"></progress>
                          </p>
                        </div>
                      </div>
                    </article>

                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>HTML5/CSS3</strong>
                            <br/>
                            <progress className="progress is-primary" value="95" max="100"></progress>
                          </p>
                        </div>
                      </div>
                    </article>

                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Databases</strong>
                            <br/>
                            <progress className="progress is-primary" value="66" max="100"></progress>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <h3 className="title is-2">Services</h3>
            <h4 className="subtitle is-5">What can I do for you?</h4>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="box">
                  <div className="content">
                    <h4 className="title is-5">Front End Web Development</h4>
                    Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript
                    and
                    Vue.js.
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <div className="content">
                    <h4 className="title is-5">Back End Web Development</h4>
                    Develop Back End application/service using Node.js or ASP .NET and SQL server or Mongo DB databases.
                  </div>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <div className="box">
                  <div className="content">
                    <h4 className="title is-5">Front End Web Development</h4>
                    Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript
                    and
                    Vue.js.
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <div className="content">
                    <h4 className="title is-5">Back End Web Development</h4>
                    Develop Back End application/service using Node.js or ASP .NET and SQL server or Mongo DB databases.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="resume">
          <div className="section-heading">
            <h3 className="title is-2">Resume</h3>
            <h4 className="subtitle is-5">More about my past</h4>
            <a href="#" className="button is-link is-medium">
        <span className="icon">
          <i className="fas fa-file-alt"></i>
        </span>
              <span>Download My Resume</span>
            </a>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <div className="section-heading">
              <h3 className="title is-2">Portfolio</h3>
              <h4 className="subtitle is-5">My latest works</h4>
            </div>
            <br/>

            <div className="container portfolio-container">
              <div className="columns">
                <div className="column is-4">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Admin <small>(Light)</small></span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-danger">WIP</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/admin.png" alt="Admin template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/admin.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/admin.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Cards</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/cards.png" alt="Cards template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/cards.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cards.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Forum</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/forum.png" alt="Hero template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/forum.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/forum.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>InstaAlbum</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/instaalbum.png" alt="Landing template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/instaAlbum.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/instaAlbum.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Landing</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/landing.png" alt="Landing template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/landing.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>

                </div>
                <div className="column is-4">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Band</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/band.png" alt="Band template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/band.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/band.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Cheatsheet</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="https://dummyimage.com/555x255/000/fff" alt="Cheatsheet template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/cheatsheet.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cheatsheet.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Hero</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/hero.png" alt="Hero template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/hero.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Kanban</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/kanban.png" alt="Kanban template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/kanban.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Login</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/login.png" alt="Login template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/login.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/login.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Blog</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-danger">WIP</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/blog.png" alt="Blog template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/blog.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Cover</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/cover.png" alt="Cover template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/cover.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cover.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Inbox</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/inbox.png" alt="Inbox template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/inbox.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/inbox.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Kanban with Search box</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="../images/kanban2.png" alt="Kanban template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/kanban[search].html" className="card-footer-item">Preview</a>
                      <a
                        href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban[search].html"
                        className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Modal Cards</span>
                        <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                      </p>
                    </header>
                    <div className="card-content">
                      <figure className="image">
                        <img src="https://dummyimage.com/555x255/000/fff" alt="modal-cards template screenshot"/>
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a href="templates/modal-cards.html" className="card-footer-item">Preview</a>
                      <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/modal-cards.html"
                         className="card-footer-item">Source
                        Code</a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="section-heading">
              <h3 className="title is-2">Contact</h3>
              <h4 className="subtitle is-5">Get in touch</h4>
            </div>
            <br/>

            <div className="columns">
              <div className="column is-6 is-offset-3">
                <div className="box">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Text input"/>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input className="input" type="email" placeholder="Email input" value=""/>
                      <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea className="textarea" placeholder="Textarea"></textarea>
                    </div>
                  </div>

                  <div className="field is-grouped has-text-centered">
                    <div className="control">
                      <button className="button is-link is-large"><span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                        <span>Submit</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/*footer*/}
        <Footer/>
      </div>
    </div>
  )
}
