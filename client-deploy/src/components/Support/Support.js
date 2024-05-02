import './Support.scss'
function Support() {
    // 
    const linkHandler = () => {
        window.open("https://chrome.google.com/webstore/detail/tabtabtab-ext/ekiahackpfmlmiogmfiljngjbamiefof?hl=en-US&authuser=0");
      };
    return (
        <div className="support__background">
        <div className="support">
            <h1 className="support__header"><span className="support__logo">TabTabTab</span> has two components: Chrome Extension &amp; it's homepage.</h1>
            <h2 className="support__sub-header">Simply <span onClick={linkHandler} className="support__logo--second">download Chrome Extension</span>, pin it to your extension bar. <br/>Start adding your Tabs!</h2>
        </div>
        </div>
    )
}

export default Support
