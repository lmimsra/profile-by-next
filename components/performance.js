/**
 *
 * @param {string} props.title
 * @param {array} props.tags
 * @param {string | null} props.imageFile
 * @param {string} props.description
 * @param {string | null} props.previewLink
 * @param {string} props.codeLink
 * @returns {JSX.Element}
 */
function PortfolioCard(props) {
  return (
    <div className="column is-half-tablet">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <span>{props.title}</span>
            <span className="is-pulled-right">
            {props.tags.map((val) =>
              <span className="tag is-default tag-space">{val}</span>
            )}
        </span>
          </p>
        </header>
        <div className="card-content">
          {
            props.imageFile === null ? '' : (
              <figure className="image">
                <img src={getImage(props.imageFile)} alt="portfolioイメージ"/>
              </figure>
            )
          }
          <p>{props.description.replace(/\n/g, '<br />')}</p>
        </div>
        <footer className="card-footer">
          <a href={getPreviewLink(props.previewLink)} className="card-footer-item" target="_blank">
        <span className={props.previewLink === null ? 'null-target-link' : ''}>
          Preview
        </span>
          </a>
          <a href={props.codeLink} className="card-footer-item" target="_blank">
            Source Code
          </a>
        </footer>
      </div>
    </div>
  )
}

function getImage(imageFile) {
  return '/img/portfolio/' + imageFile
}

function getPreviewLink(previewLink) {
  return previewLink === null ? '#' : previewLink
}

export default PortfolioCard
