class MyForm {
  constructor() {}
  render() {
    return (
    `<form class="ui form">
    
      <div class="ui center aligned segment" id='gif'></div>

      <div class="ui center aligned segment">

        <audio id="gunit" src="./sounds/50_5.mp3" type="audio/mp3"></audio>
        <audio id="sweedish" src="./sounds/marioLoseLife.mp3" type="audio/mp3"></audio>

        <button class="ui inverted green button" id="buttn" type="submit" data-create="create">Invest</button>
        <button class="ui inverted grey button" id="buttn" type="submit" data-clear="clear" onclick="show()">Clear</button>
      </div>

      <div class="ui centered cards">
        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src="http://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg">
            <div class="header">
              Apple
            </div>
            <div class="meta">
              Ticker: APPL
            </div>
            <div class="description">
              Apple Inc. is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services.
            </div>
          </div>
          <div class="extra content">
            <div class="ui toggle checkbox">
              <input type="checkbox" name="public" id="portfolio" value="Apple">
              <label>Invest?</label>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src="https://s3.amazonaws.com/BURC_Pages/downloads/a-smile_color_btn.png">
            <div class="header">
              Amazon
            </div>
            <div class="meta">
              Ticker: AMZN
            </div>
            <div class="description">
              Amazon.com, Inc., commonly referred to as simply Amazon, is an American electronic commerce and cloud computing company that was founded on July 5, 1994, by Jeff Bezos and is based in Seattle, Washington.</b>
            </div>
          </div>
          <div class="extra content">
              <div class="ui toggle checkbox">
                <input type="checkbox" name="public" id="portfolio" value="Amazon">
                <label>Invest?</label>
              </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Google-favicon-2015.png/150px-Google-favicon-2015.png">
            <div class="header">
              Google
            </div>
            <div class="meta">
              Ticker: GOOGL
            </div>
            <div class="description">
              Alphabet Inc. is an American multinational conglomerate created in a corporate restructuring on October 2, 2015. It is the parent company of Google and several former Google subsidiaries.</b>
            </div>
          </div>
          <div class="extra content">
              <div class="ui toggle checkbox">
                <input type="checkbox" name="public" id="portfolio" value="Google">
                <label>Invest?</label>
              </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png">
            <div class="header">
              Facebook
            </div>
            <div class="meta">
              Ticker: FB
            </div>
            <div class="description">
              Facebook is an American for-profit corporation and an online social media and social networking service based in Menlo Park, California.</b>
            </div>
          </div>
          <div class="extra content">
              <div class="ui toggle checkbox">
                <input type="checkbox" name="public" id="portfolio" value="Facebook">
                <label>Invest?</label>
              </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src="https://betanews.com/wp-content/uploads/2022/08/Microsoft-Logo1.jpg">
            <div class="header">
              Microsoft
            </div>
            <div class="meta">
              Ticker: MSFT
            </div>
            <div class="description">
              Microsoft Corporation is an American multinational technology company headquartered in Redmond, Washington. It develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and services.</b>
            </div>
          </div>
          <div class="extra content">
              <div class="ui toggle checkbox">
                <input type="checkbox" name="public" id="portfolio" value="Microsoft">
                <label>Invest?</label>
              </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src="http://logodatabases.com/wp-content/uploads/2012/03/nvidia-logo-black-1024x772.jpg">
            <div class="header">
              NVIDIA
            </div>
            <div class="meta">
              Ticker: NVDA
            </div>
            <div class="description">
              Nvidia Corporation is an American technology company based in Santa Clara, California. It designs graphics processing units for the gaming and professional markets, as well as system on a chip units for the mobile computing and automotive market.</b>
            </div>
          </div>
          <div class="extra content">
              <div class="ui toggle checkbox">
                <input type="checkbox" name="public" id="portfolio" value="NVIDIA">
                <label>Invest?</label>
              </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2000px-IBM_logo.svg.png">
            <div class="header">
              IBM
            </div>
            <div class="meta">
              Ticker: IBM
            </div>
            <div class="description">
              IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.</b>
            </div>
          </div>
          <div class="extra content">
              <div class="ui toggle checkbox">
                <input type="checkbox" name="public" id="portfolio" value="IBM">
                <label>Invest?</label>
              </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src="http://logos-download.com/wp-content/uploads/2016/03/EBay_logo.png">
            <div class="header">
              eBay
            </div>
            <div class="meta">
              Ticker: EBAY
            </div>
            <div class="description">
              eBay Inc. is a multinational e-commerce corporation, facilitating online consumer-to-consumer and business-to-consumer sales. It is headquartered in San Jose, California.</b>
            </div>
          </div>
          <div class="extra content">
              <div class="ui toggle checkbox">
                <input type="checkbox" name="public" id="portfolio" value="eBay">
                <label>Invest?</label>
              </div>
          </div>
        </div>

      </div>
    </form>`)
  }
}
