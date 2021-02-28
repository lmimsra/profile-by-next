import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import SkillBar from '../components/skillBar'
import Resume from '../components/resume'

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
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <h3 className="title is-4">Profile</h3>

                  <div className="content">
                    <table className="table-profile">
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
                  <div className="buttons has-addons is-centered">
                    <a href="https://github.com/lmimsra" className="button is-link">
                      Github
                    </a>
                    <a
                      href="https://twitter.com/lmimsra_dev"
                      className="button is-link"
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
                    {
                      getSkillPoints().map((val) =>
                        <SkillBar name={val.name} point={val.point}/>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skill tags*/}
        <div className="tags custom-tags">
          {
            getSkillTags().map((val) =>
              <span className="tag is-light">{val}</span>
            )
          }
        </div>

        {/* resume */}
        <section className="section" id="resume">
          <div className="section-heading section-text">
            <h3 className="title is-2">Resume</h3>
            <h4 className="subtitle is-5">実績・経験</h4>
          </div>
          <div className="container">
            <div className="columns is-multiline">
              {
                getResumeData().map((val) =>
                  <Resume
                    title={val.title}
                    about={val.about}
                    technology={val.technology}
                    role={val.role}
                    performance={val.performance}
                    members={val.members}
                  />)
              }
            </div>
          </div>
        </section>

        {/* portfolio */}
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

// スキルの値取得
function getSkillPoints() {
  return [
    // max100にすると計算しやすい
    {name: 'PHP(Laravel)', point: 75},
    {name: 'JavaScript(vue.js)', point: 30},
    {name: 'HTML5/CSS3', point: 30},
    {name: 'Dart(Flutter)', point: 10},
    {name: 'Go', point: 10},
    {name: 'Database(MySQL)', point: 45}
  ]
}

// スキルタグの値取得
function getSkillTags() {
  return [
    'Node.js',
    'VueJS',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Bulma',
    'Bootstrap',
    'PHP',
    'Laravel',
    'MySQL',
    'AWS',
    'Go',
    'Flutter',
    'PHPUnit',
    'Git',
    'RESTful API',
    'JetBrains',
    'Nginx',
    'firebase',
    'serverless'
  ]
}

// 経験の値取得
function getResumeData() {
  return [
    {
      title: 'スマホ予約アプリAPI開発',
      about: '大手飲食店の席予約アプリ運用開発',
      technology: 'Lumen(php7.0), Redis, MySQL, EC2(AWS)',
      role:
        '運用保守案件の要件定義, 設計, 実装, テスト, アプリ開発のベンダコントロール',
      performance:
        'バックエンド開発リード, 既存バグの改修, 案件レベルの要件定義, アプリ用の管理画面新規開発',
      members: '6人(PM1, バックエンド2, ネイティブ3)'
    },
    {
      title: '商品注文SPA API開発',
      about: '大手飲食店の注文アプリ新規開発・運用',
      technology:
        'vue.js, Laravel(php7.3), RedisCluster, MySQL, Docker, ECS(AWS)',
      role:
        '新規開発の要件定義, 設計, 実装, テスト, 運用保守全般, ' +
        'アプリ開発のベンダコントロール, ネイティブ, web, API横断的な開発サポート',
      performance:
        'PM, PL, バックエンド開発リード, 新規API設計90本(PJ合計), API実装, 運用保守対応全般, cloudWatchを使ったログ調査',
      members: '10人(PM1, バックエンド3, ネイティブ3, フロント2, 企画1)'
    },
    {
      title: '飲食店向けオウンドアプリ開発',
      about: '大手飲食チェーン向けのオウンドアプリ新規開発',
      technology:
        'bootstrap, Laravel(php7.4), RedisCluster, MySQL, Docker, ECS(AWS)',
      role: '新規開発の要件定義, アーキテクチャ設計, API概要設計',
      performance:
        'アプリケーション全体の要件定義, サーバーサイド技術選定, サーバーサイド全体のアーキテクチャ設計, RESTFullなAPI設計',
      members: '8人(PM1, バックエンド3, ネイティブ3, フロント1)'
    },
    {
      title: '飲食店向けスマホ注文アプリ web拡張',
      about:
        '飲食チェーンを対象としたスマートフォン注文アプリのネイティブ版からweb対応する機能拡張',
      technology:
        'vue.js, Laravel(php7.3), RedisCluster, MySQL, Docker, ECS(AWS)',
      role: '要件定義, 設計, 実装, テスト, アーキテクチャ設計',
      performance:
        'バックエンド開発全体のリード, タスク管理, 機能拡張に伴う認証周辺の詳細設計・実装',
      members: '7人(PM1, バックエンド2, ネイティブ2, フロント1, 企画1)'
    },
    {
      title: '問診票システム開発',
      about: '病院向け問診票電子化プロジェクト(大学在学中)',
      technology: 'JavaEE(Java8), JSF, Jax-rs, MySQL, Tomcat',
      role:
        '要求整理, 要件定義, 設計, デザイン(CSS), 実装, ' +
        'テスト, システム全体のUI, UX対応',
      performance:
        'プロトタイプ型開発提案, 開発環境構築全般, 画面デザイン・調整, 進捗管理',
      members: '3人(PM1, エンジニア2)'
    }
  ]
}
