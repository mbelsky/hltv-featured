module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta property="mock" content="lets eat bee">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1"
    id="metaViewport">
  <meta property="fb:admins" content="1004164229">
  <meta property="fb:pages" content="249997999009">
  <meta property="fb:app_id" content="1460388157605817">
  <meta name="google-site-verification"
    content="DcypRFLQvgYQL5Acx7feoGWbblSsmKv6HpPI7mM_1uw">
  <link rel="apple-touch-icon" sizes="180x180"
    href="/img/static/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32"
    href="/img/static/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16"
    href="/img/static/favicon/favicon-16x16.png">
  <link rel="manifest" href="/img/static/favicon/manifest.json">
  <link rel="mask-icon" href="/img/static/favicon/safari-pinned-tab.svg"
    color="#5bbad5">
  <meta name="theme-color" content="#ffffff">
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Oswald:700&amp;amp;subset=latin-ext"
    rel="stylesheet">
  <link rel="stylesheet"
    href="/vendor/font-awesome-4.7.0/css/font-awesome.min.css" type="text/css">
  <script type="text/javascript"
    src="/scripts/hltv-csstheme.js?hash=c4ed9eeda88e8de33b199aa1e1677a09"
    data-day-css="4b17988dcc58478a5dc9165fdc9c2098"
    data-night-css="9d39c70e25cb167f532f501707e3400d"></script>
  <script type="text/javascript"
    src="/scripts/hltv.js?hash=2e4c45a4844f2760d09509f5be68b6ef"></script>
  <script type="text/javascript"
    src="https://notification-secure.hltv.org/hltvNotification.js?v4"
    async="async"></script>
  <script type="text/javascript"
    src="https://scorebot-secure.hltv.org/scorebotClientApi.js?v9"
    async="async"></script>
  <title>CS:GO Matches &amp; livescore | HLTV.org</title>
  <link href="/rss/news" rel="alternate" type="application/rss+xml">
  <meta name="description"
    content="All upcoming CS:GO Matches &amp; events listed in one place. Containing livescore, lineups, statistics and much more!">
  <meta property="og:title"
    content="HLTV.org - The home of competitive Counter-Strike">
  <meta property="og:image"
    content="https://www.hltv.org/img/static/openGraphHltvLogo.png">
  <meta property="og:site_name" content="HLTV.org">
</head>
<body class="preload colsCustom1101  "
  data-livescore-server-url="https://cf1-scorebot.hltv.org,https://cf2-scorebot.hltv.org,https://cf3-scorebot.hltv.org">
  <div class="navbar">
    <nav class="navcon"><a href="/" class="small-logo"><img alt="HLTV.org"
          src="/img/static/TopSmallLogo2x.png" class="small-logo-img"></a><a
        href="/" class="navnews">News</a><a href="/matches"
        class="navmatches">Matches</a><a href="/results"
        class="navresults">Results</a><a href="/events"
        class="navevents">Events</a>
      <div class="navburger navburger1"><i class="fa fa-bars"
          aria-hidden="true"></i></div>
      <div class="navbreakline1"></div>
      <a href="/stats" class="navstats">Stats</a><a href="/galleries"
        class="navgalleries">Galleries</a><a href="/ranking/teams"
        class="navranking smartphone-only">Rankings</a><a href="/forums"
        class="navforums no-promode">Forums</a><a href="/betting"
        class="navbets">Bets</a><a href="/live"
        class="navlive gtSmartphone-only">Live</a><a href="/fantasy"
        class="navfantasy">Fantasy<span class="new-feature">NEW!</span></a>
      <div class="navburger navburger2"><i class="fa fa-bars"
          aria-hidden="true"></i></div>
      <div class="navbreakline2"></div>
      <div class="navsearch search-typeahead">
        <form action="/search?term="><input type="text" class="navsearchinput"
            name="query" data-topbar-search-url="/search?term="
            placeholder="Search...">
          <div class="search-submit-hidden"><input type="submit" tabIndex="-1">
          </div>
          <div class="navsearchborder"></div>
          <button type="submit" class="navsearchicon"><i
              class="fa fa-search"></i></button>
        </form>
      </div>
      <div class="navborder"></div>
      <div class="hidden">
        <div class="fixed-overlay-popup-content-con" id="loginpopup">
          <div class="fixed-overlay-popup-content">
            <div class="login-dialog standard-box" id="loginpopup"
              data-login-url="/login">
              <div class="logo"><img alt="HLTV.org"
                  src="/img/static/TopSmallLogo2x.png" height="46px"></div>
              <form><input type="text" name="username" class="loginInput"
                  required="required" placeholder="Username"><input
                  type="password" name="password" class="loginInput"
                  required="required" placeholder="Password">
                <div class="login-elm clearfix"><span
                    class="remember-me left"><input type="checkbox"
                      name="autologin" class="loginCheckbox" checked="checked">
                    Remember me</span><span class="forgot-link right">Forgot
                    password</span></div>
                <div class="g-recaptcha" id="login-recaptcha"></div>
                <div class="login-error"></div>
                <button type="submit" class="login-button button"
                  name="login">Login</button>
              </form>
              <hr class="login-elm">
              <a href="/signup" class="signup-button button">Sign up</a>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden">
        <div class="fixed-overlay-popup-content-con" id="forgotpopup">
          <div class="fixed-overlay-popup-content">
            <div class="forgot-password-dialog standard-box">
              <div>
                <div class="logo"><img alt="HLTV.org"
                    src="/img/static/TopSmallLogo2x.png" height="46px"></div>
                <div id="forgot-password-username"><input type="text"
                    name="username" class="loginInput" required="required"
                    placeholder="Username"><span
                    class="validation-error hidden"><i class=" fa fa-times"
                      aria-hidden="true"></i><span
                      class="message"></span></span></div>
              </div>
              <div>
                <div class="g-recaptcha" id="forgot-password-recaptcha"></div>
                <button type="button" class="recover-button button"
                  data-forgot-password-location="/forgotpassword">Recover</button>
                <hr class="login-elm">
                <button type="button" class="back-button button"
                  id="backToLoginDialog">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navsignin">Sign in</div>
      <div class="navborder"></div>
      <div class="navdown"><i class="fa fa-caret-down"></i>
        <div class="arrow"></div>
        <div class="arrow2"></div>
      </div>
      <div class="navpopup" id="popupsettings">
        <div class="nav-popup-header">Settings</div>
        <div class="nav-popup-elm"><span>Theme</span><span
            class="right slider"><span class="toggleUserTheme userTheme-day"
              data-url="/profile/settings/changetheme?theme=day">Day</span><span
              class="toggleUserTheme userTheme-night"
              data-url="/profile/settings/changetheme?theme=night">Night</span><span
              class="toggleUserTheme userTheme-auto selected"
              data-url="/profile/settings/changetheme?theme=auto">Auto</span></span>
        </div>
        <div class="nav-popup-elm"><span
            title="Show/hide results in results section &amp; on match pages.">Show
            results</span><span class="right slider"><span
              class="toggleSpoilers show-spoilers">Yes</span><span
              class="toggleSpoilers hide-spoilers">No</span></span></div>
        <div class="nav-popup-elm"><span>Timezone</span><span class="right">
            <form action=""><select class="timezoneSelector"
                data-timezone-update-on-select="1" id="timezoneSelector"
                name="timezone"></select></form>
          </span></div>
        <div class="nav-popup-elm desktop-mode-con"><span>Force desktop
            mode</span><span class="right slider"><span
              class="toggleDesktopMode desktopModeOn">On</span><span
              class="toggleDesktopMode desktopModeOff">off</span></span></div>
      </div>
    </nav>
  </div>
  <div class="bgPadding">
    <div class="widthControl">
      <div class="logoCon"><a href="/">
          <div class="hltv-logo-container"></div>
        </a>
        <div class="" id="g0_middle"></div>
        <div class="" id="g0_right"></div>
      </div>
      <div class="colCon">
        <div class="contentCol">
          <div class="matches">
            <h2 class="standard-headline">Event guide - <span
                data-time-format="MMMM d" data-unix="1572980520171">November
                5</span> - <span data-time-format="MMMM d"
                data-unix="1573498920171">November 11</span></h2>
            <div class="guide-section">
              <div class="guide-scroll">
                <table class="guide-table">
                  <thead>
                    <tr>
                      <th class="guide-event-name">Featured events</th>
                      <th class="guide-weekday" data-day-timestamp="1572980520">
                        <span data-time-format="EEE"
                          data-unix="1572980520171">Tue</span></th>
                      <th class="guide-weekday" data-day-timestamp="1573066920">
                        <span data-time-format="EEE"
                          data-unix="1573066920171">Wed</span></th>
                      <th class="guide-weekday" data-day-timestamp="1573153320">
                        <span data-time-format="EEE"
                          data-unix="1573153320171">Thu</span></th>
                      <th class="guide-weekday" data-day-timestamp="1573239720">
                        <span data-time-format="EEE"
                          data-unix="1573239720171">Fri</span></th>
                      <th class="guide-weekday" data-day-timestamp="1573326120">
                        <span data-time-format="EEE"
                          data-unix="1573326120171">Sat</span></th>
                      <th class="guide-weekday" data-day-timestamp="1573412520">
                        <span data-time-format="EEE"
                          data-unix="1573412520171">Sun</span></th>
                      <th class="guide-weekday" data-day-timestamp="1573498920">
                        <span data-time-format="EEE"
                          data-unix="1573498920171">Mon</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="guide-event text-ellipsis"><img
                          alt="IEM Beijing 2019"
                          src="https://static.hltv.org/images/eventLogos/4837.png"
                          class="event-logo" title="IEM Beijing 2019"><a
                          href="/events/4837/iem-beijing-2019"
                          class="strong a-reset">IEM Beijing</a></td>
                      <td class="guide-day event_4837 no-matches"
                        data-parent-timestamp="1572980520171"></td>
                      <td class="guide-day event_4837 no-matches"
                        data-parent-timestamp="1573066920171"></td>
                      <td class="guide-day event_4837 active"
                        data-parent-timestamp="1573153320171">
                        <div class="guide-same-day-matches" data-event="4837"
                          data-parent-timestamp="1573153320171"
                          data-start-timestamp="1573099200000"><a
                            href="/matches?event=4837"
                            class="guide-link a-reset"><span
                              class="guide-day-type">Group stage</span><br><span
                              data-time-format="H:mm"
                              data-unix="1573099200000">5:00</span>-<span
                              data-time-format="H:mm"
                              data-unix="1573135200000">15:00</span></a></div>
                      </td>
                      <td class="guide-day event_4837 active"
                        data-parent-timestamp="1573239720171">
                        <div class="guide-same-day-matches" data-event="4837"
                          data-parent-timestamp="1573239720171"
                          data-start-timestamp="1573185600000"><a
                            href="/matches?event=4837"
                            class="guide-link a-reset"><span
                              class="guide-day-type">Group stage</span><br><span
                              data-time-format="H:mm"
                              data-unix="1573185600000">5:00</span>-<span
                              data-time-format="H:mm"
                              data-unix="1573221600000">15:00</span></a></div>
                      </td>
                      <td class="guide-day event_4837 active"
                        data-parent-timestamp="1573326120171">
                        <div class="guide-same-day-matches" data-event="4837"
                          data-parent-timestamp="1573326120171"
                          data-start-timestamp="1573279200000"><a
                            href="/matches?event=4837"
                            class="guide-link a-reset"><span
                              class="guide-day-type">Semi-finals</span><br><span
                              data-time-format="H:mm"
                              data-unix="1573279200000">7:00</span>-<span
                              data-time-format="H:mm"
                              data-unix="1573304400000">14:00</span></a></div>
                      </td>
                      <td class="guide-day event_4837 active"
                        data-parent-timestamp="1573412520171">
                        <div class="guide-same-day-matches" data-event="4837"
                          data-parent-timestamp="1573412520171"
                          data-start-timestamp="1573371000000"><a
                            href="/matches?event=4837"
                            class="guide-link a-reset"><span
                              class="guide-day-type">Grand final
                              (Bo5)</span><br><span data-time-format="H:mm"
                              data-unix="1573371000000">8:30</span>-<span
                              data-time-format="H:mm"
                              data-unix="1573387200000">13:00</span></a></div>
                      </td>
                      <td class="guide-day event_4837 no-matches"
                        data-parent-timestamp="1573498920171"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="bet-widget"
              data-bet-json="{&quot;DK&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;eoddset&quot;,&quot;shortCallToAction&quot;:&quot;Er dit aim godt nok? Så ram her for CS:GO-odds&quot;,&quot;link&quot;:&quot;https://danskespil.dk/oddset/esport/counter-strike-go&quot;,&quot;dayLogo&quot;:&quot;eoddsetlogo.png&quot;,&quot;nightLogo&quot;:&quot;eoddsetlogo.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/4602&quot;,&quot;team1Name&quot;:&quot;AVANGAR&quot;,&quot;team2Name&quot;:&quot;Tricked&quot;,&quot;team1Odds&quot;:&quot;1.70&quot;,&quot;team2Odds&quot;:&quot;2.15&quot;,&quot;rgText&quot;:&quot;*Regler og vilkår gælder&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;PL&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbet&quot;,&quot;shortCallToAction&quot;:&quot;Odbierz freebet 30 zł bez depozytu na esport&quot;,&quot;link&quot;:&quot;https://stsplaffiliates-api.omarsys.com/tracking.php?tracking_code\u0026aid\u003d100072\u0026mid\u003d68\u0026sid\u003d774\u0026pid\u003d46&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/4602&quot;,&quot;team1Name&quot;:&quot;AVANGAR&quot;,&quot;team2Name&quot;:&quot;Tricked&quot;,&quot;team1Odds&quot;:&quot;1.57&quot;,&quot;team2Odds&quot;:&quot;2.22&quot;,&quot;rgText&quot;:&quot;STS posiada zezwolenie na urządzanie zakładów wzajemnych. Udział w nielegalnych grach hazardowych stanowi naruszenie przepisów. Hazard związany jest z ryzykiem.&quot;,&quot;hideBetHere&quot;:true,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;RU&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;parimatch&quot;,&quot;shortCallToAction&quot;:&quot;ставка без риска до 2000 рублей&quot;,&quot;link&quot;:&quot;http://www.paripartners.ru/C.ashx?btag\u003da_17586b_1190c_\u0026affid\u003d7481\u0026siteid\u003d17586\u0026adid\u003d1190\u0026c\u003d&quot;,&quot;dayLogo&quot;:&quot;pari_day.svg&quot;,&quot;nightLogo&quot;:&quot;pari_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.80&quot;,&quot;team2Odds&quot;:&quot;1.40&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;CN&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;thunderfire&quot;,&quot;shortCallToAction&quot;:&quot;雷火电竞---亚洲第一电竞盘口&quot;,&quot;link&quot;:&quot;https://www.e8682.com&quot;,&quot;dayLogo&quot;:&quot;thunderfire_day.png&quot;,&quot;nightLogo&quot;:&quot;thunderfire_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/10150&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/10315&quot;,&quot;team1Name&quot;:&quot;CR4ZY&quot;,&quot;team2Name&quot;:&quot;SMASH&quot;,&quot;team1Odds&quot;:&quot;1.45&quot;,&quot;team2Odds&quot;:&quot;2.63&quot;,&quot;rgText&quot;:&quot;&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;HK&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;thunderfire&quot;,&quot;shortCallToAction&quot;:&quot;雷火电竞---亚洲第一电竞盘口&quot;,&quot;link&quot;:&quot;https://www.e8682.com&quot;,&quot;dayLogo&quot;:&quot;thunderfire_day.png&quot;,&quot;nightLogo&quot;:&quot;thunderfire_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/10150&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/10315&quot;,&quot;team1Name&quot;:&quot;CR4ZY&quot;,&quot;team2Name&quot;:&quot;SMASH&quot;,&quot;team1Odds&quot;:&quot;1.45&quot;,&quot;team2Odds&quot;:&quot;2.63&quot;,&quot;rgText&quot;:&quot;&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;BR&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;1xbet&quot;,&quot;shortCallToAction&quot;:&quot;Bônus de boas vindas até 650 reais Código da promoção - HLTV&quot;,&quot;link&quot;:&quot;http://refpaysb.host/L?tag\u003dd_46491m_1599c_Brazil\u0026site\u003d46491\u0026ad\u003d1599\u0026r\u003dline/eSports/&quot;,&quot;dayLogo&quot;:&quot;1xbet_day.png&quot;,&quot;nightLogo&quot;:&quot;1xbet_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.60&quot;,&quot;team2Odds&quot;:&quot;1.48&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;TR&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;1xbet&quot;,&quot;shortCallToAction&quot;:&quot;Hoşgeldin depozito bonusu 130€ Promosyon kodu - HLTV&quot;,&quot;link&quot;:&quot;http://refpaysb.host/L?tag\u003dd_46491m_1599c_Turkey\u0026site\u003d46491\u0026ad\u003d1599\u0026r\u003dline/eSports/&quot;,&quot;dayLogo&quot;:&quot;1xbet_day.png&quot;,&quot;nightLogo&quot;:&quot;1xbet_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.60&quot;,&quot;team2Odds&quot;:&quot;1.48&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;KZ&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;1xbet&quot;,&quot;shortCallToAction&quot;:&quot;Бірінші депозиттік бонус 130€ дейін Promocode - HLTV&quot;,&quot;link&quot;:&quot;http://refpaysb.host/L?tag\u003dd_46491m_1599c_KZ\u0026site\u003d46491\u0026ad\u003d1599\u0026r\u003dline/eSports/&quot;,&quot;dayLogo&quot;:&quot;1xbet_day.png&quot;,&quot;nightLogo&quot;:&quot;1xbet_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.60&quot;,&quot;team2Odds&quot;:&quot;1.48&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;IN&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;1xbet&quot;,&quot;shortCallToAction&quot;:&quot;आपका स्वागत है जमा राशि 130€ प्रोमोकोड - HLTV&quot;,&quot;link&quot;:&quot;http://refpaysb.host/L?tag\u003dd_46491m_1599c_India\u0026site\u003d46491\u0026ad\u003d1599\u0026r\u003dline/eSports/&quot;,&quot;dayLogo&quot;:&quot;1xbet_day.png&quot;,&quot;nightLogo&quot;:&quot;1xbet_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.60&quot;,&quot;team2Odds&quot;:&quot;1.48&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;UA&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;1xbet&quot;,&quot;shortCallToAction&quot;:&quot;Бонус на первый депозит до 130 € Промокод - HLTV&quot;,&quot;link&quot;:&quot;http://refpaysb.host/L?tag\u003dd_46491m_1599c_Ukraine\u0026site\u003d46491\u0026ad\u003d1599\u0026r\u003dline/Esports/&quot;,&quot;dayLogo&quot;:&quot;1xbet_day.png&quot;,&quot;nightLogo&quot;:&quot;1xbet_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.60&quot;,&quot;team2Odds&quot;:&quot;1.48&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;VN&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;1xbet&quot;,&quot;shortCallToAction&quot;:&quot;Tiền thưởng tiền gửi đầu tiên lên tới 130 € Quảng cáo - HLTV&quot;,&quot;link&quot;:&quot;http://refpaysb.host/L?tag\u003dd_46491m_1599c_Vietnam\u0026site\u003d46491\u0026ad\u003d1599\u0026r\u003dline/Esports/&quot;,&quot;dayLogo&quot;:&quot;1xbet_day.png&quot;,&quot;nightLogo&quot;:&quot;1xbet_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.60&quot;,&quot;team2Odds&quot;:&quot;1.48&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;MN&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;1xbet&quot;,&quot;shortCallToAction&quot;:&quot;Баярлалаа ордын шагнал 130€ Promocode - HLTV&quot;,&quot;link&quot;:&quot;http://refpaysb.host/L?tag\u003dd_46491m_1599c_Mong\u0026site\u003d46491\u0026ad\u003d1599\u0026r\u003dline/eSports/&quot;,&quot;dayLogo&quot;:&quot;1xbet_day.png&quot;,&quot;nightLogo&quot;:&quot;1xbet_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.60&quot;,&quot;team2Odds&quot;:&quot;1.48&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;PH&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;1xbet&quot;,&quot;shortCallToAction&quot;:&quot;Unang Deposit Bonus hanggang 130 € Promocode - HLTV&quot;,&quot;link&quot;:&quot;http://refpaysb.host/L?tag\u003dd_46491m_1599c_Philipp\u0026site\u003d46491\u0026ad\u003d1599\u0026r\u003dline/Esports/&quot;,&quot;dayLogo&quot;:&quot;1xbet_day.png&quot;,&quot;nightLogo&quot;:&quot;1xbet_night.png&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.60&quot;,&quot;team2Odds&quot;:&quot;1.48&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;BET HERE&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;GI&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbetintl&quot;,&quot;shortCallToAction&quot;:&quot;5 euro freebet without deposit with \&quot;HLTV\&quot; code&quot;,&quot;link&quot;:&quot;https://media.stsaffiliates.com/tracking.php?tracking_code\u0026aid\u003d100020\u0026mid\u003d167\u0026sid\u003d75\u0026pid\u003d115&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.51&quot;,&quot;team2Odds&quot;:&quot;1.50&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;Bet at STS&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;IS&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbetintl&quot;,&quot;shortCallToAction&quot;:&quot;5 euro freebet without deposit with \&quot;HLTV\&quot; code&quot;,&quot;link&quot;:&quot;https://media.stsaffiliates.com/tracking.php?tracking_code\u0026aid\u003d100020\u0026mid\u003d167\u0026sid\u003d75\u0026pid\u003d115&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.51&quot;,&quot;team2Odds&quot;:&quot;1.50&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;Bet at STS&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;LV&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbetintl&quot;,&quot;shortCallToAction&quot;:&quot;5 euro freebet without deposit with \&quot;HLTV\&quot; code&quot;,&quot;link&quot;:&quot;https://media.stsaffiliates.com/tracking.php?tracking_code\u0026aid\u003d100020\u0026mid\u003d167\u0026sid\u003d75\u0026pid\u003d115&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.51&quot;,&quot;team2Odds&quot;:&quot;1.50&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;Bet at STS&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;LU&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbetintl&quot;,&quot;shortCallToAction&quot;:&quot;5 euro freebet without deposit with \&quot;HLTV\&quot; code&quot;,&quot;link&quot;:&quot;https://media.stsaffiliates.com/tracking.php?tracking_code\u0026aid\u003d100020\u0026mid\u003d167\u0026sid\u003d75\u0026pid\u003d115&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.51&quot;,&quot;team2Odds&quot;:&quot;1.50&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;Bet at STS&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;MT&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbetintl&quot;,&quot;shortCallToAction&quot;:&quot;5 euro freebet without deposit with \&quot;HLTV\&quot; code&quot;,&quot;link&quot;:&quot;https://media.stsaffiliates.com/tracking.php?tracking_code\u0026aid\u003d100020\u0026mid\u003d167\u0026sid\u003d75\u0026pid\u003d115&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.51&quot;,&quot;team2Odds&quot;:&quot;1.50&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;Bet at STS&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;SM&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbetintl&quot;,&quot;shortCallToAction&quot;:&quot;5 euro freebet without deposit with \&quot;HLTV\&quot; code&quot;,&quot;link&quot;:&quot;https://media.stsaffiliates.com/tracking.php?tracking_code\u0026aid\u003d100020\u0026mid\u003d167\u0026sid\u003d75\u0026pid\u003d115&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.51&quot;,&quot;team2Odds&quot;:&quot;1.50&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;Bet at STS&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;SK&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbetintl&quot;,&quot;shortCallToAction&quot;:&quot;5 euro freebet without deposit with \&quot;HLTV\&quot; code&quot;,&quot;link&quot;:&quot;https://media.stsaffiliates.com/tracking.php?tracking_code\u0026aid\u003d100020\u0026mid\u003d167\u0026sid\u003d75\u0026pid\u003d115&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.51&quot;,&quot;team2Odds&quot;:&quot;1.50&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;Bet at STS&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;SI&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbetintl&quot;,&quot;shortCallToAction&quot;:&quot;5 euro freebet without deposit with \&quot;HLTV\&quot; code&quot;,&quot;link&quot;:&quot;https://media.stsaffiliates.com/tracking.php?tracking_code\u0026aid\u003d100020\u0026mid\u003d167\u0026sid\u003d75\u0026pid\u003d115&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.51&quot;,&quot;team2Odds&quot;:&quot;1.50&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;Bet at STS&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;},&quot;AD&quot;:{&quot;provider&quot;:{&quot;providerId&quot;:&quot;stsbetintl&quot;,&quot;shortCallToAction&quot;:&quot;5 euro freebet without deposit with \&quot;HLTV\&quot; code&quot;,&quot;link&quot;:&quot;https://media.stsaffiliates.com/tracking.php?tracking_code\u0026aid\u003d100020\u0026mid\u003d167\u0026sid\u003d75\u0026pid\u003d115&quot;,&quot;dayLogo&quot;:&quot;sts_day.svg&quot;,&quot;nightLogo&quot;:&quot;sts_night.svg&quot;},&quot;team1LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/7020&quot;,&quot;team2LogoUrl&quot;:&quot;https://static.hltv.org/images/team/logo/8120&quot;,&quot;team1Name&quot;:&quot;Spirit&quot;,&quot;team2Name&quot;:&quot;AVANGAR&quot;,&quot;team1Odds&quot;:&quot;2.51&quot;,&quot;team2Odds&quot;:&quot;1.50&quot;,&quot;rgText&quot;:&quot;*18+ terms \u0026 conditions apply&quot;,&quot;hideBetHere&quot;:false,&quot;customBetHere&quot;:&quot;Bet at STS&quot;,&quot;customBetHereMobile&quot;:&quot;BET HERE AT&quot;}}">
            </div>
            <div
              class="section-header featured-match-widget-container wide-widget hidden matchpage-widget geowidget">
              <a class="a-reset widget-link"
                href="https://egbaffiliates.com/track?aff_cid=1&amp;aff_id=52">
                <div class="standard-box featured-match-widget">
                  <div class="extraBox"></div>
                  <div class="provider gtSmartphone-only">
                    <div class="provider-logo-container"><img
                        class="provider-logo day-only gtSmartphone-only"
                        src="/img/static/betting/egb.png"><img
                        class="provider-logo night-only gtSmartphone-only"
                        src="/img/static/betting/egb.png"></div>
                    <span class="gtSmartphone-only matchText"></span>
                  </div>
                  <div class="ageIndicator matchpage-widget geowidget">18+</div>
                  <img src="/img/static/widgets/betway/betwayResponsible2.png"
                    class="extraImage matchpage-widget geowidget">
                  <div class="team-part">
                    <div class="relative">
                      <div class="team">
                        <div class="team-logo-square-box"></div>
                        <img alt="AVANGAR"
                          src="https://static.hltv.org/images/team/logo/8120"
                          class="team-logo team1-logo" title="AVANGAR">
                        <div class="team1-name-and-odds">
                          <div class="team-name text-ellipsis left-name">AVANGAR
                          </div>
                          <div class="team-odds">1.57</div>
                        </div>
                      </div>
                    </div>
                    <div class="vs-container">
                      <div class="vs">VS</div>
                    </div>
                    <div class="bet-now gtSmartphone-only bethere"><span
                        class="gtSmartphone-only betheretext">BET
                        HERE</span><img
                        class="provider-logo day-only smartphone-only"
                        src="/img/static/betting/egb.png"><img
                        class="provider-logo night-only smartphone-only"
                        src="/img/static/betting/egb.png"></div>
                    <div class="relative">
                      <div class="team reverse">
                        <div class="team-logo-square-box"></div>
                        <img alt="Tricked"
                          src="https://static.hltv.org/images/team/logo/4602"
                          class="team-logo team2-logo" title="Tricked">
                        <div class="team2-name-and-odds">
                          <div class="team-name text-ellipsis right-name">
                            Tricked</div>
                          <div class="team-odds">2.19</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="smartphone-only bet-now-container"><span
                      class="smartphone-only bet-now bethere betheretext-mobile">BET
                      HERE AT</span><span
                      class="smartphone-only matchText custom-bet-here-text-mobile"></span><img
                      class="provider-logo day-only smartphone-only"
                      src="/img/static/betting/egb.png"><img
                      class="provider-logo night-only smartphone-only"
                      src="/img/static/betting/egb.png"></div>
                </div>
              </a>
              <div class="sub-text rg">*18+ terms &amp; conditions apply</div>
            </div>
            <div class="hidden" id="matches_overview"></div>
            <div class="section-spacer"></div>
            <h2 class="standard-headline">Live matches</h2>
            <div class="live-matches">
              <div class="live-match"><a
                  href="/matches/2337426/hard-legion-vs-giants-united-masters-league-season-2"
                  class="a-reset">
                  <div class="standard-box">
                    <div class="live-match-header">
                      <div class="line-align">
                        <div><img alt="United Masters League Season 2"
                            src="https://static.hltv.org/images/eventLogos/4945.png"
                            class="event-logo"
                            title="United Masters League Season 2"></div>
                        <div class="event-name">United Masters League Season 2
                        </div>
                      </div>
                      <div class="stars "></div>
                    </div>
                    <div class="scores">
                      <table class="table" data-livescore-match="2337426">
                        <tr class="header">
                          <td class="bestof">Best of 3</td>
                          <td class="map ">ovp</td>
                          <td class="map ">vtg</td>
                          <td class="map ">d2</td>
                          <td class="total">Maps</td>
                        </tr>
                        <tr>
                          <td class="teams">
                            <div class="line-align">
                              <div class="logo-container"><img alt="Hard Legion"
                                  src="https://static.hltv.org/images/team/logo/10421"
                                  class="logo" title="Hard Legion"></div>
                              <span class="team-name">Hard Legion</span>
                            </div>
                          </td>
                          <td class="livescore map  mapscore"><span
                              class="leading" data-livescore-full-score=""
                              data-livescore-map="1"
                              data-livescore-team="10421">16</span></td>
                          <td class="livescore map  mapscore"><span
                              class="trailing" data-livescore-full-score=""
                              data-livescore-map="2"
                              data-livescore-team="10421">4</span></td>
                          <td class="livescore map  mapscore"><span class="tied"
                              data-livescore-full-score=""
                              data-livescore-map="3"
                              data-livescore-team="10421">-</span></td>
                          <td class="total"><span data-livescore-maps-won-for=""
                              data-livescore-team="10421">1</span></td>
                        </tr>
                        <tr>
                          <td class="teams">
                            <div class="line-align">
                              <div class="logo-container"><img alt="Giants"
                                  src="https://static.hltv.org/images/team/logo/4949"
                                  class="logo" title="Giants"></div>
                              <span class="team-name">Giants</span>
                            </div>
                          </td>
                          <td class="livescore map  mapscore"><span
                              class="trailing" data-livescore-full-score=""
                              data-livescore-map="1"
                              data-livescore-team="4949">9</span></td>
                          <td class="livescore map  mapscore"><span
                              class="leading" data-livescore-full-score=""
                              data-livescore-map="2"
                              data-livescore-team="4949">16</span></td>
                          <td class="livescore map  mapscore"><span class="tied"
                              data-livescore-full-score=""
                              data-livescore-map="3"
                              data-livescore-team="4949">-</span></td>
                          <td class="total"><span data-livescore-maps-won-for=""
                              data-livescore-team="4949">1</span></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </a></div>
              <div class="live-match"><a
                  href="/matches/2337610/baecon-vs-ldlc-omen-atlantic-challenge-2019-europe-closed-qualifier"
                  class="a-reset">
                  <div class="standard-box">
                    <div class="live-match-header">
                      <div class="line-align">
                        <div><img
                            alt="OMEN Atlantic Challenge 2019 Europe Closed Qualifier"
                            src="https://static.hltv.org/images/eventLogos/5010.png"
                            class="event-logo"
                            title="OMEN Atlantic Challenge 2019 Europe Closed Qualifier">
                        </div>
                        <div class="event-name">OMEN Atlantic Challenge 2019
                          Europe Closed Qualifier</div>
                      </div>
                      <div class="stars "></div>
                    </div>
                    <div class="scores">
                      <table class="table" data-livescore-match="2337610">
                        <tr class="header">
                          <td class="bestof">Best of 3</td>
                          <td class="map ">d2</td>
                          <td class="map ">nuke</td>
                          <td class="map ">ovp</td>
                          <td class="total">Maps</td>
                        </tr>
                        <tr>
                          <td class="teams">
                            <div class="line-align">
                              <div class="logo-container"><img alt="Baecon"
                                  src="https://static.hltv.org/images/team/logo/9768"
                                  class="logo" title="Baecon"></div>
                              <span class="team-name">Baecon</span>
                            </div>
                          </td>
                          <td class="livescore map  mapscore"><span
                              class="trailing" data-livescore-full-score=""
                              data-livescore-map="1"
                              data-livescore-team="9768">12</span></td>
                          <td class="livescore map  mapscore"><span class="tied"
                              data-livescore-full-score=""
                              data-livescore-map="2"
                              data-livescore-team="9768">-</span></td>
                          <td class="livescore map  mapscore"><span class="tied"
                              data-livescore-full-score=""
                              data-livescore-map="3"
                              data-livescore-team="9768">-</span></td>
                          <td class="total"><span data-livescore-maps-won-for=""
                              data-livescore-team="9768">0</span></td>
                        </tr>
                        <tr>
                          <td class="teams">
                            <div class="line-align">
                              <div class="logo-container"><img alt="LDLC"
                                  src="https://static.hltv.org/images/team/logo/4674"
                                  class="logo" title="LDLC"></div>
                              <span class="team-name">LDLC</span>
                            </div>
                          </td>
                          <td class="livescore map  mapscore"><span
                              class="leading" data-livescore-full-score=""
                              data-livescore-map="1"
                              data-livescore-team="4674">16</span></td>
                          <td class="livescore map  mapscore"><span class="tied"
                              data-livescore-full-score=""
                              data-livescore-map="2"
                              data-livescore-team="4674">-</span></td>
                          <td class="livescore map  mapscore"><span class="tied"
                              data-livescore-full-score=""
                              data-livescore-map="3"
                              data-livescore-team="4674">-</span></td>
                          <td class="total"><span data-livescore-maps-won-for=""
                              data-livescore-team="4674">1</span></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </a></div>
            </div>
            <div class="section-spacer"></div>
            <h1 class="standard-headline inline">Upcoming CS:GO matches</h1>
            <div class="upcoming-matches">
              <div class=""
                data-zonedgrouping-headline-format="yyyy-MM-dd - EEEE"
                data-zonedgrouping-headline-classes="standard-headline"
                data-zonedgrouping-group-classes="match-day">
                <div class="match-day"><span
                    class="standard-headline">2019-11-05 - Tuesday</span><a
                    href="/matches/2337428/big-vs-virtuspro-united-masters-league-season-2"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1572984000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1572984000000">21:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="BIG"
                              src="https://static.hltv.org/images/team/logo/7532"
                              class="logo" title="BIG">
                            <div class="team">BIG</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Virtus.pro"
                              src="https://static.hltv.org/images/team/logo/5378"
                              class="logo" title="Virtus.pro">
                            <div class="team">Virtus.pro</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="United Masters League Season 2"
                            src="https://static.hltv.org/images/eventLogos/4945.png"
                            class="event-logo"
                            title="United Masters League Season 2"><span
                            class="event-name">United Masters League Season
                            2</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337611/fate-vs-movistar-riders-omen-atlantic-challenge-2019-europe-closed-qualifier"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1572987600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1572987600000">22:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="FATE"
                              src="https://static.hltv.org/images/team/logo/9863"
                              class="logo" title="FATE">
                            <div class="team">FATE</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Movistar Riders"
                              src="https://static.hltv.org/images/team/logo/7718"
                              class="logo" title="Movistar Riders">
                            <div class="team">Movistar Riders</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="OMEN Atlantic Challenge 2019 Europe Closed Qualifier"
                            src="https://static.hltv.org/images/eventLogos/5010.png"
                            class="event-logo"
                            title="OMEN Atlantic Challenge 2019 Europe Closed Qualifier"><span
                            class="event-name">OMEN Atlantic Challenge 2019
                            Europe Closed Qualifier</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-06 - Wednesday</span><a
                    href="/matches/2337227/intz-vs-riot-squad-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573002000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573002000000">02:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="INTZ"
                              src="https://static.hltv.org/images/team/logo/6619"
                              class="logo" title="INTZ">
                            <div class="team">INTZ</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Riot Squad"
                              src="https://static.hltv.org/images/team/logo/10164"
                              class="logo" title="Riot Squad">
                            <div class="team">Riot Squad</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">trn</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337643/peekers-advantage-vs-rap-gang-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573002000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573002000000">02:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Peeker's Advantage"
                              src="https://static.hltv.org/images/team/logo/10092"
                              class="logo" title="Peeker's Advantage">
                            <div class="team">Peeker's Advantage</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Rap Gang"
                              src="https://static.hltv.org/images/team/logo/10261"
                              class="logo" title="Rap Gang">
                            <div class="team">Rap Gang</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">mrg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337185/bens-anime-team-vs-intz-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573005600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573005600000">03:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Ben's Anime Team"
                              src="https://static.hltv.org/images/team/logo/7612"
                              class="logo" title="Ben's Anime Team">
                            <div class="team">Ben's Anime Team</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="INTZ"
                              src="https://static.hltv.org/images/team/logo/6619"
                              class="logo" title="INTZ">
                            <div class="team">INTZ</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">mrg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337405/rap-gang-vs-big-frames-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573005600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573005600000">03:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Rap Gang"
                              src="https://static.hltv.org/images/team/logo/10261"
                              class="logo" title="Rap Gang">
                            <div class="team">Rap Gang</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Big Frames"
                              src="https://static.hltv.org/images/team/logo/9229"
                              class="logo" title="Big Frames">
                            <div class="team">Big Frames</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">ovp</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337406/monstars-vs-ascent-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573005600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573005600000">03:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Monstars"
                              src="https://static.hltv.org/images/team/logo/7841"
                              class="logo" title="Monstars">
                            <div class="team">Monstars</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Ascent"
                              src="https://static.hltv.org/images/team/logo/10059"
                              class="logo" title="Ascent">
                            <div class="team">Ascent</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">inf</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337618/the-quest-vs-just-swing-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573005600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573005600000">03:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="The Quest"
                              src="https://static.hltv.org/images/team/logo/9785"
                              class="logo" title="The Quest">
                            <div class="team">The Quest</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Just Swing"
                              src="https://static.hltv.org/images/team/logo/10146"
                              class="logo" title="Just Swing">
                            <div class="team">Just Swing</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">ovp</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337619/peekers-advantage-vs-livid-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573005600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573005600000">03:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Peeker's Advantage"
                              src="https://static.hltv.org/images/team/logo/10092"
                              class="logo" title="Peeker's Advantage">
                            <div class="team">Peeker's Advantage</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="LiviD"
                              src="https://static.hltv.org/images/team/logo/9392"
                              class="logo" title="LiviD">
                            <div class="team">LiviD</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">mrg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337407/bushido-boyz-vs-livid-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573009200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573009200000">04:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Bushido Boyz"
                              src="https://static.hltv.org/images/team/logo/7885"
                              class="logo" title="Bushido Boyz">
                            <div class="team">Bushido Boyz</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="LiviD"
                              src="https://static.hltv.org/images/team/logo/9392"
                              class="logo" title="LiviD">
                            <div class="team">LiviD</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">ovp</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337644/peekers-advantage-vs-just-swing-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573009200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573009200000">04:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Peeker's Advantage"
                              src="https://static.hltv.org/images/team/logo/10092"
                              class="logo" title="Peeker's Advantage">
                            <div class="team">Peeker's Advantage</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Just Swing"
                              src="https://static.hltv.org/images/team/logo/10146"
                              class="logo" title="Just Swing">
                            <div class="team">Just Swing</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">ovp</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337645/mythic-vs-riot-squad-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573009200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573009200000">04:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Mythic"
                              src="https://static.hltv.org/images/team/logo/5479"
                              class="logo" title="Mythic">
                            <div class="team">Mythic</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Riot Squad"
                              src="https://static.hltv.org/images/team/logo/10164"
                              class="logo" title="Riot Squad">
                            <div class="team">Riot Squad</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">mrg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337526/invictus-vs-mithmaple-qi-banja-luka-2019-asia-qualifier"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573012800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573012800000">05:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Invictus"
                              src="https://static.hltv.org/images/team/logo/7966"
                              class="logo" title="Invictus">
                            <div class="team">Invictus</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="MiTH.Maple"
                              src="https://static.hltv.org/images/team/logo/10419"
                              class="logo" title="MiTH.Maple">
                            <div class="team">MiTH.Maple</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="Qi Banja Luka 2019 - Asia Qualifier"
                            src="https://static.hltv.org/images/eventLogos/4992.png"
                            class="event-logo"
                            title="Qi Banja Luka 2019 - Asia Qualifier"><span
                            class="event-name">Qi Banja Luka 2019 - Asia
                            Qualifier</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337628/d7g-vs-ehome-epicenter-2019-china-qualifier"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573012800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573012800000">05:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="D7G"
                              src="https://static.hltv.org/images/team/logo/10433"
                              class="logo" title="D7G">
                            <div class="team">D7G</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="EHOME"
                              src="https://static.hltv.org/images/team/logo/7024"
                              class="logo" title="EHOME">
                            <div class="team">EHOME</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="EPICENTER 2019 China Qualifier"
                            src="https://static.hltv.org/images/eventLogos/5011.png"
                            class="event-logo"
                            title="EPICENTER 2019 China Qualifier"><span
                            class="event-name">EPICENTER 2019 China
                            Qualifier</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337527/5power-vs-onethree-qi-banja-luka-2019-asia-qualifier"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573023600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573023600000">08:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="5POWER"
                              src="https://static.hltv.org/images/team/logo/7092"
                              class="logo" title="5POWER">
                            <div class="team">5POWER</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="OneThree"
                              src="https://static.hltv.org/images/team/logo/10022"
                              class="logo" title="OneThree">
                            <div class="team">OneThree</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="Qi Banja Luka 2019 - Asia Qualifier"
                            src="https://static.hltv.org/images/eventLogos/4992.png"
                            class="event-logo"
                            title="Qi Banja Luka 2019 - Asia Qualifier"><span
                            class="event-name">Qi Banja Luka 2019 - Asia
                            Qualifier</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337430/cr4zy-vs-smash-united-masters-league-season-2"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573041600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573041600000">13:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="CR4ZY"
                              src="https://static.hltv.org/images/team/logo/10150"
                              class="logo" title="CR4ZY">
                            <div class="team">CR4ZY</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="SMASH"
                              src="https://static.hltv.org/images/team/logo/10315"
                              class="logo" title="SMASH">
                            <div class="team">SMASH</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="United Masters League Season 2"
                            src="https://static.hltv.org/images/eventLogos/4945.png"
                            class="event-logo"
                            title="United Masters League Season 2"><span
                            class="event-name">United Masters League Season
                            2</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a href="/matches/2337641/espada-vs-nemiga-sector-mostbet"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573045200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573045200000">14:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Espada"
                              src="https://static.hltv.org/images/team/logo/8669"
                              class="logo" title="Espada">
                            <div class="team">Espada</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Nemiga"
                              src="https://static.hltv.org/images/team/logo/7969"
                              class="logo" title="Nemiga">
                            <div class="team">Nemiga</div>
                          </div>
                        </td>
                        <td class="event"><img alt="SECTOR: MOSTBET"
                            src="https://static.hltv.org/images/eventLogos/4492.png"
                            class="event-logo" title="SECTOR: MOSTBET"><span
                            class="event-name">SECTOR: MOSTBET</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337650/5power-vs-lynn-vision-epicenter-2019-china-qualifier"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573045200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573045200000">14:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="5POWER"
                              src="https://static.hltv.org/images/team/logo/7092"
                              class="logo" title="5POWER">
                            <div class="team">5POWER</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Lynn Vision"
                              src="https://static.hltv.org/images/team/logo/8840"
                              class="logo" title="Lynn Vision">
                            <div class="team">Lynn Vision</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="EPICENTER 2019 China Qualifier"
                            src="https://static.hltv.org/images/eventLogos/5011.png"
                            class="event-logo"
                            title="EPICENTER 2019 China Qualifier"><span
                            class="event-name">EPICENTER 2019 China
                            Qualifier</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337651/gamerlegion-vs-heretics-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573048800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573048800000">15:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="GamerLegion"
                              src="https://static.hltv.org/images/team/logo/9928"
                              class="logo" title="GamerLegion">
                            <div class="team">GamerLegion</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Heretics"
                              src="https://static.hltv.org/images/team/logo/8346"
                              class="logo" title="Heretics">
                            <div class="team">Heretics</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">inf</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337652/avangar-vs-cr4zy-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573052400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573052400000">16:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="AVANGAR"
                              src="https://static.hltv.org/images/team/logo/8120"
                              class="logo" title="AVANGAR">
                            <div class="team">AVANGAR</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="CR4ZY"
                              src="https://static.hltv.org/images/team/logo/10150"
                              class="logo" title="CR4ZY">
                            <div class="team">CR4ZY</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i><i
                                class="fa fa-star star"></i></div>
                            <div class="map map-text">d2</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337653/ago-vs-heretics-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573056000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573056000000">17:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="AGO"
                              src="https://static.hltv.org/images/team/logo/8068"
                              class="logo" title="AGO">
                            <div class="team">AGO</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Heretics"
                              src="https://static.hltv.org/images/team/logo/8346"
                              class="logo" title="Heretics">
                            <div class="team">Heretics</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">vtg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2336139/nemiga-vs-phoenix-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573059600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573059600000">18:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Nemiga"
                              src="https://static.hltv.org/images/team/logo/7969"
                              class="logo" title="Nemiga">
                            <div class="team">Nemiga</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Phoenix"
                              src="https://static.hltv.org/images/team/logo/10420"
                              class="logo" title="Phoenix">
                            <div class="team">Phoenix</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">d2</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337638/spirit-vs-avangar-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573059600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573059600000">18:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Spirit"
                              src="https://static.hltv.org/images/team/logo/7020"
                              class="logo" title="Spirit">
                            <div class="team">Spirit</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="AVANGAR"
                              src="https://static.hltv.org/images/team/logo/8120"
                              class="logo" title="AVANGAR">
                            <div class="team">AVANGAR</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">mrg</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337654/pact-vs-heretics-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573059600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573059600000">18:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="PACT"
                              src="https://static.hltv.org/images/team/logo/8248"
                              class="logo" title="PACT">
                            <div class="team">PACT</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Heretics"
                              src="https://static.hltv.org/images/team/logo/8346"
                              class="logo" title="Heretics">
                            <div class="team">Heretics</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">nuke</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337655/demise-vs-pro100-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573059600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573059600000">18:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Demise"
                              src="https://static.hltv.org/images/team/logo/8698"
                              class="logo" title="Demise">
                            <div class="team">Demise</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="pro100"
                              src="https://static.hltv.org/images/team/logo/7898"
                              class="logo" title="pro100">
                            <div class="team">pro100</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">d2</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337197/spirit-vs-phoenix-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573063200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573063200000">19:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Spirit"
                              src="https://static.hltv.org/images/team/logo/7020"
                              class="logo" title="Spirit">
                            <div class="team">Spirit</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Phoenix"
                              src="https://static.hltv.org/images/team/logo/10420"
                              class="logo" title="Phoenix">
                            <div class="team">Phoenix</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">mrg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337656/tricked-vs-japaleno-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573063200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573063200000">19:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Tricked"
                              src="https://static.hltv.org/images/team/logo/4602"
                              class="logo" title="Tricked">
                            <div class="team">Tricked</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Japaleno"
                              src="https://static.hltv.org/images/team/logo/7144"
                              class="logo" title="Japaleno">
                            <div class="team">Japaleno</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">ovp</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337355/avangar-vs-tricked-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573066800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573066800000">20:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="AVANGAR"
                              src="https://static.hltv.org/images/team/logo/8120"
                              class="logo" title="AVANGAR">
                            <div class="team">AVANGAR</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Tricked"
                              src="https://static.hltv.org/images/team/logo/4602"
                              class="logo" title="Tricked">
                            <div class="team">Tricked</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i><i
                                class="fa fa-star star"></i></div>
                            <div class="map map-text">inf</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337657/demise-vs-cr4zy-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573066800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573066800000">20:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Demise"
                              src="https://static.hltv.org/images/team/logo/8698"
                              class="logo" title="Demise">
                            <div class="team">Demise</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="CR4ZY"
                              src="https://static.hltv.org/images/team/logo/10150"
                              class="logo" title="CR4ZY">
                            <div class="team">CR4ZY</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">inf</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2335780/detona-vs-red-canids-brasileiro-season-1"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573074900000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573074900000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="DETONA"
                              src="https://static.hltv.org/images/team/logo/8902"
                              class="logo" title="DETONA">
                            <div class="team">DETONA</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="RED Canids"
                              src="https://static.hltv.org/images/team/logo/7176"
                              class="logo" title="RED Canids">
                            <div class="team">RED Canids</div>
                          </div>
                        </td>
                        <td class="event"><img alt="Brasileirão Season 1"
                            src="https://static.hltv.org/images/eventLogos/4780.png"
                            class="event-logo"
                            title="Brasileirão Season 1"><span
                            class="event-name">Brasileirão Season 1</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo2</div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-07 - Thursday</span><a
                    href="/matches/2335781/pain-vs-isurus-brasileiro-season-1"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573083000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573083000000">00:30</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="paiN"
                              src="https://static.hltv.org/images/team/logo/4773"
                              class="logo" title="paiN">
                            <div class="team">paiN</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Isurus"
                              src="https://static.hltv.org/images/team/logo/7653"
                              class="logo" title="Isurus">
                            <div class="team">Isurus</div>
                          </div>
                        </td>
                        <td class="event"><img alt="Brasileirão Season 1"
                            src="https://static.hltv.org/images/eventLogos/4780.png"
                            class="event-logo"
                            title="Brasileirão Season 1"><span
                            class="event-name">Brasileirão Season 1</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo2</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337620/peekers-advantage-vs-rugratz-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573088400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573088400000">02:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Peeker's Advantage"
                              src="https://static.hltv.org/images/team/logo/10092"
                              class="logo" title="Peeker's Advantage">
                            <div class="team">Peeker's Advantage</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Rugratz"
                              src="https://static.hltv.org/images/team/logo/10017"
                              class="logo" title="Rugratz">
                            <div class="team">Rugratz</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">nuke</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337621/just-swing-vs-big-frames-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573088400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573088400000">02:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Just Swing"
                              src="https://static.hltv.org/images/team/logo/10146"
                              class="logo" title="Just Swing">
                            <div class="team">Just Swing</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Big Frames"
                              src="https://static.hltv.org/images/team/logo/9229"
                              class="logo" title="Big Frames">
                            <div class="team">Big Frames</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">ovp</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337646/riot-squad-vs-rap-gang-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573088400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573088400000">02:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Riot Squad"
                              src="https://static.hltv.org/images/team/logo/10164"
                              class="logo" title="Riot Squad">
                            <div class="team">Riot Squad</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Rap Gang"
                              src="https://static.hltv.org/images/team/logo/10261"
                              class="logo" title="Rap Gang">
                            <div class="team">Rap Gang</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">d2</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337251/mythic-vs-peekers-advantage-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573092000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573092000000">03:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Mythic"
                              src="https://static.hltv.org/images/team/logo/5479"
                              class="logo" title="Mythic">
                            <div class="team">Mythic</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Peeker's Advantage"
                              src="https://static.hltv.org/images/team/logo/10092"
                              class="logo" title="Peeker's Advantage">
                            <div class="team">Peeker's Advantage</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">ovp</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337408/ascent-vs-just-swing-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573092000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573092000000">03:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Ascent"
                              src="https://static.hltv.org/images/team/logo/10059"
                              class="logo" title="Ascent">
                            <div class="team">Ascent</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Just Swing"
                              src="https://static.hltv.org/images/team/logo/10146"
                              class="logo" title="Just Swing">
                            <div class="team">Just Swing</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">mrg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337622/intz-vs-rugratz-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573092000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573092000000">03:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="INTZ"
                              src="https://static.hltv.org/images/team/logo/6619"
                              class="logo" title="INTZ">
                            <div class="team">INTZ</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Rugratz"
                              src="https://static.hltv.org/images/team/logo/10017"
                              class="logo" title="Rugratz">
                            <div class="team">Rugratz</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">mrg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337623/monstars-vs-riot-squad-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573092000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573092000000">03:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Monstars"
                              src="https://static.hltv.org/images/team/logo/7841"
                              class="logo" title="Monstars">
                            <div class="team">Monstars</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Riot Squad"
                              src="https://static.hltv.org/images/team/logo/10164"
                              class="logo" title="Riot Squad">
                            <div class="team">Riot Squad</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">ovp</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337409/ascent-vs-rap-gang-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573095600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573095600000">04:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Ascent"
                              src="https://static.hltv.org/images/team/logo/10059"
                              class="logo" title="Ascent">
                            <div class="team">Ascent</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Rap Gang"
                              src="https://static.hltv.org/images/team/logo/10261"
                              class="logo" title="Rap Gang">
                            <div class="team">Rap Gang</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">d2</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337647/bushido-boyz-vs-just-swing-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573095600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573095600000">04:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Bushido Boyz"
                              src="https://static.hltv.org/images/team/logo/7885"
                              class="logo" title="Bushido Boyz">
                            <div class="team">Bushido Boyz</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Just Swing"
                              src="https://static.hltv.org/images/team/logo/10146"
                              class="logo" title="Just Swing">
                            <div class="team">Just Swing</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">mrg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337648/mythic-vs-the-quest-esea-mdl-season-32-north-america"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573095600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573095600000">04:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Mythic"
                              src="https://static.hltv.org/images/team/logo/5479"
                              class="logo" title="Mythic">
                            <div class="team">Mythic</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="The Quest"
                              src="https://static.hltv.org/images/team/logo/9785"
                              class="logo" title="The Quest">
                            <div class="team">The Quest</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESEA MDL Season 32 North America"
                            src="https://static.hltv.org/images/eventLogos/4737.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 North America"><span
                            class="event-name">ESEA MDL Season 32 North
                            America</span></td>
                        <td class="star-cell">
                          <div class="map-text">ovp</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337449/astralis-vs-vici-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573099200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573099200000">05:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Astralis"
                              src="https://static.hltv.org/images/team/logo/6665"
                              class="logo" title="Astralis">
                            <div class="team">Astralis</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ViCi"
                              src="https://static.hltv.org/images/team/logo/7606"
                              class="logo" title="ViCi">
                            <div class="team">ViCi</div>
                          </div>
                        </td>
                        <td class="event"><img alt="IEM Beijing 2019"
                            src="https://static.hltv.org/images/eventLogos/4837.png"
                            class="event-logo" title="IEM Beijing 2019"><span
                            class="event-name">IEM Beijing 2019</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337450/100-thieves-vs-ence-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573099200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573099200000">05:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="100 Thieves"
                              src="https://static.hltv.org/images/team/logo/8474"
                              class="logo" title="100 Thieves">
                            <div class="team">100 Thieves</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ENCE"
                              src="https://static.hltv.org/images/team/logo/4869"
                              class="logo" title="ENCE">
                            <div class="team">ENCE</div>
                          </div>
                        </td>
                        <td class="event"><img alt="IEM Beijing 2019"
                            src="https://static.hltv.org/images/eventLogos/4837.png"
                            class="event-logo" title="IEM Beijing 2019"><span
                            class="event-name">IEM Beijing 2019</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i><i
                                class="fa fa-star star"></i></div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337451/vitality-vs-tyloo-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573113000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573113000000">08:50</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Vitality"
                              src="https://static.hltv.org/images/team/logo/9565"
                              class="logo" title="Vitality">
                            <div class="team">Vitality</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="TYLOO"
                              src="https://static.hltv.org/images/team/logo/4863"
                              class="logo" title="TYLOO">
                            <div class="team">TYLOO</div>
                          </div>
                        </td>
                        <td class="event"><img alt="IEM Beijing 2019"
                            src="https://static.hltv.org/images/eventLogos/4837.png"
                            class="event-logo" title="IEM Beijing 2019"><span
                            class="event-name">IEM Beijing 2019</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337452/faze-vs-evil-geniuses-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573113000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573113000000">08:50</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="FaZe"
                              src="https://static.hltv.org/images/team/logo/6667"
                              class="logo" title="FaZe">
                            <div class="team">FaZe</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Evil Geniuses"
                              src="https://static.hltv.org/images/team/logo/10399"
                              class="logo" title="Evil Geniuses">
                            <div class="team">Evil Geniuses</div>
                          </div>
                        </td>
                        <td class="event"><img alt="IEM Beijing 2019"
                            src="https://static.hltv.org/images/eventLogos/4837.png"
                            class="event-logo" title="IEM Beijing 2019"><span
                            class="event-name">IEM Beijing 2019</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i><i
                                class="fa fa-star star"></i><i
                                class="fa fa-star star"></i></div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337454/iem-beijing-group-a-winners-match-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573126800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573126800000">12:40</div>
                        </td>
                        <td class="placeholder-text-cell">IEM Beijing - Group A
                          Winners' Match</td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337455/iem-beijing-group-a-elimination-match-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573126800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573126800000">12:40</div>
                        </td>
                        <td class="placeholder-text-cell">IEM Beijing - Group A
                          Elimination Match</td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337642/natus-vincere-junior-vs-spirit-sector-mostbet"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573131600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573131600000">14:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img
                              alt="Natus Vincere Junior"
                              src="https://static.hltv.org/images/team/logo/10371"
                              class="logo" title="Natus Vincere Junior">
                            <div class="team">Natus Vincere Junior</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Spirit"
                              src="https://static.hltv.org/images/team/logo/7020"
                              class="logo" title="Spirit">
                            <div class="team">Spirit</div>
                          </div>
                        </td>
                        <td class="event"><img alt="SECTOR: MOSTBET"
                            src="https://static.hltv.org/images/eventLogos/4492.png"
                            class="event-logo" title="SECTOR: MOSTBET"><span
                            class="event-name">SECTOR: MOSTBET</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2336638/gamerlegion-vs-japaleno-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573138800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573138800000">16:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="GamerLegion"
                              src="https://static.hltv.org/images/team/logo/9928"
                              class="logo" title="GamerLegion">
                            <div class="team">GamerLegion</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Japaleno"
                              src="https://static.hltv.org/images/team/logo/7144"
                              class="logo" title="Japaleno">
                            <div class="team">Japaleno</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">ovp</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337603/havu-vs-tricked-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573142400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573142400000">17:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="HAVU"
                              src="https://static.hltv.org/images/team/logo/7865"
                              class="logo" title="HAVU">
                            <div class="team">HAVU</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Tricked"
                              src="https://static.hltv.org/images/team/logo/4602"
                              class="logo" title="Tricked">
                            <div class="team">Tricked</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">nuke</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2336865/cr4zy-vs-phoenix-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573156800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573156800000">21:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="CR4ZY"
                              src="https://static.hltv.org/images/team/logo/10150"
                              class="logo" title="CR4ZY">
                            <div class="team">CR4ZY</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Phoenix"
                              src="https://static.hltv.org/images/team/logo/10420"
                              class="logo" title="Phoenix">
                            <div class="team">Phoenix</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">mrg</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-08 - Friday</span><a
                    href="/matches/2337456/iem-beijing-group-b-winners-match-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573185600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573185600000">05:00</div>
                        </td>
                        <td class="placeholder-text-cell">IEM Beijing - Group B
                          Winners' Match</td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337457/iem-beijing-group-b-elimination-match-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573185600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573185600000">05:00</div>
                        </td>
                        <td class="placeholder-text-cell">IEM Beijing - Group B
                          Elimination Match</td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337458/iem-beijing-group-a-decider-match-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573199400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573199400000">08:50</div>
                        </td>
                        <td class="placeholder-text-cell">IEM Beijing - Group A
                          Decider Match</td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337459/iem-beijing-group-b-decider-match-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573212300000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573212300000">12:25</div>
                        </td>
                        <td class="placeholder-text-cell">IEM Beijing - Group B
                          Decider Match</td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337635/heretics-vs-spirit-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573218000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573218000000">14:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Heretics"
                              src="https://static.hltv.org/images/team/logo/8346"
                              class="logo" title="Heretics">
                            <div class="team">Heretics</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Spirit"
                              src="https://static.hltv.org/images/team/logo/7020"
                              class="logo" title="Spirit">
                            <div class="team">Spirit</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">mrg</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337241/heretics-vs-japaleno-esea-mdl-season-32-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573228800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573228800000">17:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Heretics"
                              src="https://static.hltv.org/images/team/logo/8346"
                              class="logo" title="Heretics">
                            <div class="team">Heretics</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Japaleno"
                              src="https://static.hltv.org/images/team/logo/7144"
                              class="logo" title="Japaleno">
                            <div class="team">Japaleno</div>
                          </div>
                        </td>
                        <td class="event"><img alt="ESEA MDL Season 32 Europe"
                            src="https://static.hltv.org/images/eventLogos/4736.png"
                            class="event-logo"
                            title="ESEA MDL Season 32 Europe"><span
                            class="event-name">ESEA MDL Season 32 Europe</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">vtg</div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-09 - Saturday</span><a
                    href="/matches/2337460/iem-beijing-semi-final-2-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573279200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573279200000">07:00</div>
                        </td>
                        <td class="placeholder-text-cell">IEM Beijing -
                          Semi-final #2</td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337461/iem-beijing-semi-final-1-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573293000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573293000000">10:50</div>
                        </td>
                        <td class="placeholder-text-cell">IEM Beijing -
                          Semi-final #1</td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337629/ex-bluejays-vs-fate-esl-southeast-europe-championship-season-10-finals"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573308000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573308000000">15:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ex-BLUEJAYS"
                              src="https://static.hltv.org/images/team/logo/10453"
                              class="logo" title="ex-BLUEJAYS">
                            <div class="team">ex-BLUEJAYS</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="FATE"
                              src="https://static.hltv.org/images/team/logo/9863"
                              class="logo" title="FATE">
                            <div class="team">FATE</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Southeast Europe Championship Season 10 Finals"
                            src="https://static.hltv.org/images/eventLogos/5012.png"
                            class="event-logo"
                            title="ESL Southeast Europe Championship Season 10 Finals"><span
                            class="event-name">ESL Southeast Europe Championship
                            Season 10 Finals</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-10 - Sunday</span><a
                    href="/matches/2337462/iem-beijing-grand-final-iem-beijing-2019"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573371000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573371000000">08:30</div>
                        </td>
                        <td class="placeholder-text-cell">IEM Beijing - Grand
                          Final</td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-11 - Monday</span><a
                    href="/matches/2335782/keyd-vs-w7m-brasileiro-season-1"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573506900000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573506900000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Keyd"
                              src="https://static.hltv.org/images/team/logo/6033"
                              class="logo" title="Keyd">
                            <div class="team">Keyd</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="W7M"
                              src="https://static.hltv.org/images/team/logo/8574"
                              class="logo" title="W7M">
                            <div class="team">W7M</div>
                          </div>
                        </td>
                        <td class="event"><img alt="Brasileirão Season 1"
                            src="https://static.hltv.org/images/eventLogos/4780.png"
                            class="event-logo"
                            title="Brasileirão Season 1"><span
                            class="event-name">Brasileirão Season 1</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo2</div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-12 - Tuesday</span><a
                    href="/matches/2335786/isurus-vs-red-canids-brasileiro-season-1"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573515000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573515000000">00:30</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Isurus"
                              src="https://static.hltv.org/images/team/logo/7653"
                              class="logo" title="Isurus">
                            <div class="team">Isurus</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="RED Canids"
                              src="https://static.hltv.org/images/team/logo/7176"
                              class="logo" title="RED Canids">
                            <div class="team">RED Canids</div>
                          </div>
                        </td>
                        <td class="event"><img alt="Brasileirão Season 1"
                            src="https://static.hltv.org/images/eventLogos/4780.png"
                            class="event-logo"
                            title="Brasileirão Season 1"><span
                            class="event-name">Brasileirão Season 1</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo2</div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-13 - Wednesday</span><a
                    href="/matches/2337385/invictus-vs-alpha-red-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573639200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573639200000">11:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Invictus"
                              src="https://static.hltv.org/images/team/logo/7966"
                              class="logo" title="Invictus">
                            <div class="team">Invictus</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Alpha Red"
                              src="https://static.hltv.org/images/team/logo/8848"
                              class="logo" title="Alpha Red">
                            <div class="team">Alpha Red</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337386/tyloo-vs-lucid-dream-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573650000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573650000000">14:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="TYLOO"
                              src="https://static.hltv.org/images/team/logo/4863"
                              class="logo" title="TYLOO">
                            <div class="team">TYLOO</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Lucid Dream"
                              src="https://static.hltv.org/images/team/logo/8680"
                              class="logo" title="Lucid Dream">
                            <div class="team">Lucid Dream</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337357/g2-vs-nip-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573665900000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573665900000">18:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="G2"
                              src="https://static.hltv.org/images/team/logo/5995"
                              class="logo" title="G2">
                            <div class="team">G2</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="NiP"
                              src="https://static.hltv.org/images/team/logo/4411"
                              class="logo" title="NiP">
                            <div class="team">NiP</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i><i
                                class="fa fa-star star"></i></div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a href="/matches/2335788/pain-vs-w7m-brasileiro-season-1"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573679700000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573679700000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="paiN"
                              src="https://static.hltv.org/images/team/logo/4773"
                              class="logo" title="paiN">
                            <div class="team">paiN</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="W7M"
                              src="https://static.hltv.org/images/team/logo/8574"
                              class="logo" title="W7M">
                            <div class="team">W7M</div>
                          </div>
                        </td>
                        <td class="event"><img alt="Brasileirão Season 1"
                            src="https://static.hltv.org/images/eventLogos/4780.png"
                            class="event-logo"
                            title="Brasileirão Season 1"><span
                            class="event-name">Brasileirão Season 1</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo2</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337358/north-vs-big-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573679700000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573679700000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="North"
                              src="https://static.hltv.org/images/team/logo/7533"
                              class="logo" title="North">
                            <div class="team">North</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="BIG"
                              src="https://static.hltv.org/images/team/logo/7532"
                              class="logo" title="BIG">
                            <div class="team">BIG</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-14 - Thursday</span><a
                    href="/matches/2335785/isurus-vs-keyd-brasileiro-season-1"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573687800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573687800000">00:30</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Isurus"
                              src="https://static.hltv.org/images/team/logo/7653"
                              class="logo" title="Isurus">
                            <div class="team">Isurus</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Keyd"
                              src="https://static.hltv.org/images/team/logo/6033"
                              class="logo" title="Keyd">
                            <div class="team">Keyd</div>
                          </div>
                        </td>
                        <td class="event"><img alt="Brasileirão Season 1"
                            src="https://static.hltv.org/images/eventLogos/4780.png"
                            class="event-logo"
                            title="Brasileirão Season 1"><span
                            class="event-name">Brasileirão Season 1</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo2</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337369/complexity-vs-detona-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573694700000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573694700000">02:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Complexity"
                              src="https://static.hltv.org/images/team/logo/5005"
                              class="logo" title="Complexity">
                            <div class="team">Complexity</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="DETONA"
                              src="https://static.hltv.org/images/team/logo/8902"
                              class="logo" title="DETONA">
                            <div class="team">DETONA</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337370/atk-vs-envy-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573708500000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573708500000">06:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ATK"
                              src="https://static.hltv.org/images/team/logo/9943"
                              class="logo" title="ATK">
                            <div class="team">ATK</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Envy"
                              src="https://static.hltv.org/images/team/logo/5991"
                              class="logo" title="Envy">
                            <div class="team">Envy</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337383/tyloo-vs-invictus-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573725600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573725600000">11:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="TYLOO"
                              src="https://static.hltv.org/images/team/logo/4863"
                              class="logo" title="TYLOO">
                            <div class="team">TYLOO</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Invictus"
                              src="https://static.hltv.org/images/team/logo/7966"
                              class="logo" title="Invictus">
                            <div class="team">Invictus</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337384/lucid-dream-vs-alpha-red-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573736400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573736400000">14:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Lucid Dream"
                              src="https://static.hltv.org/images/team/logo/8680"
                              class="logo" title="Lucid Dream">
                            <div class="team">Lucid Dream</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Alpha Red"
                              src="https://static.hltv.org/images/team/logo/8848"
                              class="logo" title="Alpha Red">
                            <div class="team">Alpha Red</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337359/nip-vs-big-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573752300000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573752300000">18:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="NiP"
                              src="https://static.hltv.org/images/team/logo/4411"
                              class="logo" title="NiP">
                            <div class="team">NiP</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="BIG"
                              src="https://static.hltv.org/images/team/logo/7532"
                              class="logo" title="BIG">
                            <div class="team">BIG</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337360/g2-vs-north-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573766100000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573766100000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="G2"
                              src="https://static.hltv.org/images/team/logo/5995"
                              class="logo" title="G2">
                            <div class="team">G2</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="North"
                              src="https://static.hltv.org/images/team/logo/7533"
                              class="logo" title="North">
                            <div class="team">North</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-15 - Friday</span><a
                    href="/matches/2337371/detona-vs-envy-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573781100000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573781100000">02:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="DETONA"
                              src="https://static.hltv.org/images/team/logo/8902"
                              class="logo" title="DETONA">
                            <div class="team">DETONA</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Envy"
                              src="https://static.hltv.org/images/team/logo/5991"
                              class="logo" title="Envy">
                            <div class="team">Envy</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337372/complexity-vs-atk-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573794900000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573794900000">06:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Complexity"
                              src="https://static.hltv.org/images/team/logo/5005"
                              class="logo" title="Complexity">
                            <div class="team">Complexity</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ATK"
                              src="https://static.hltv.org/images/team/logo/9943"
                              class="logo" title="ATK">
                            <div class="team">ATK</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337382/lucid-dream-vs-invictus-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573812000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573812000000">11:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Lucid Dream"
                              src="https://static.hltv.org/images/team/logo/8680"
                              class="logo" title="Lucid Dream">
                            <div class="team">Lucid Dream</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Invictus"
                              src="https://static.hltv.org/images/team/logo/7966"
                              class="logo" title="Invictus">
                            <div class="team">Invictus</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337381/tyloo-vs-alpha-red-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573822800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573822800000">14:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="TYLOO"
                              src="https://static.hltv.org/images/team/logo/4863"
                              class="logo" title="TYLOO">
                            <div class="team">TYLOO</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Alpha Red"
                              src="https://static.hltv.org/images/team/logo/8848"
                              class="logo" title="Alpha Red">
                            <div class="team">Alpha Red</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337361/g2-vs-big-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573838700000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573838700000">18:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="G2"
                              src="https://static.hltv.org/images/team/logo/5995"
                              class="logo" title="G2">
                            <div class="team">G2</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="BIG"
                              src="https://static.hltv.org/images/team/logo/7532"
                              class="logo" title="BIG">
                            <div class="team">BIG</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337362/north-vs-nip-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573852500000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573852500000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="North"
                              src="https://static.hltv.org/images/team/logo/7533"
                              class="logo" title="North">
                            <div class="team">North</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="NiP"
                              src="https://static.hltv.org/images/team/logo/4411"
                              class="logo" title="NiP">
                            <div class="team">NiP</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-16 - Saturday</span><a
                    href="/matches/2337373/envy-vs-complexity-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573867500000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573867500000">02:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Envy"
                              src="https://static.hltv.org/images/team/logo/5991"
                              class="logo" title="Envy">
                            <div class="team">Envy</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Complexity"
                              src="https://static.hltv.org/images/team/logo/5005"
                              class="logo" title="Complexity">
                            <div class="team">Complexity</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337374/detona-vs-atk-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573881300000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573881300000">06:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="DETONA"
                              src="https://static.hltv.org/images/team/logo/8902"
                              class="logo" title="DETONA">
                            <div class="team">DETONA</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ATK"
                              src="https://static.hltv.org/images/team/logo/9943"
                              class="logo" title="ATK">
                            <div class="team">ATK</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337387/grayhound-vs-chiefs-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573887600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573887600000">08:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Grayhound"
                              src="https://static.hltv.org/images/team/logo/8008"
                              class="logo" title="Grayhound">
                            <div class="team">Grayhound</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Chiefs"
                              src="https://static.hltv.org/images/team/logo/6010"
                              class="logo" title="Chiefs">
                            <div class="team">Chiefs</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337388/order-vs-avant-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573898400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573898400000">11:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ORDER"
                              src="https://static.hltv.org/images/team/logo/8668"
                              class="logo" title="ORDER">
                            <div class="team">ORDER</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="AVANT"
                              src="https://static.hltv.org/images/team/logo/5293"
                              class="logo" title="AVANT">
                            <div class="team">AVANT</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337363/faze-vs-vitality-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573925100000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573925100000">18:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="FaZe"
                              src="https://static.hltv.org/images/team/logo/6667"
                              class="logo" title="FaZe">
                            <div class="team">FaZe</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Vitality"
                              src="https://static.hltv.org/images/team/logo/9565"
                              class="logo" title="Vitality">
                            <div class="team">Vitality</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i><i
                                class="fa fa-star star"></i><i
                                class="fa fa-star star"></i></div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337364/fnatic-vs-hellraisers-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573938900000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573938900000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="fnatic"
                              src="https://static.hltv.org/images/team/logo/4991"
                              class="logo" title="fnatic">
                            <div class="team">fnatic</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="HellRaisers"
                              src="https://static.hltv.org/images/team/logo/5310"
                              class="logo" title="HellRaisers">
                            <div class="team">HellRaisers</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-17 - Sunday</span><a
                    href="/matches/2337375/furia-vs-isurus-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573953900000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573953900000">02:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="FURIA"
                              src="https://static.hltv.org/images/team/logo/8297"
                              class="logo" title="FURIA">
                            <div class="team">FURIA</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Isurus"
                              src="https://static.hltv.org/images/team/logo/7653"
                              class="logo" title="Isurus">
                            <div class="team">Isurus</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337376/100-thieves-vs-eunited-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573967700000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573967700000">06:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="100 Thieves"
                              src="https://static.hltv.org/images/team/logo/8474"
                              class="logo" title="100 Thieves">
                            <div class="team">100 Thieves</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="eUnited"
                              src="https://static.hltv.org/images/team/logo/7106"
                              class="logo" title="eUnited">
                            <div class="team">eUnited</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337389/grayhound-vs-avant-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573974000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573974000000">08:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Grayhound"
                              src="https://static.hltv.org/images/team/logo/8008"
                              class="logo" title="Grayhound">
                            <div class="team">Grayhound</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="AVANT"
                              src="https://static.hltv.org/images/team/logo/5293"
                              class="logo" title="AVANT">
                            <div class="team">AVANT</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337390/order-vs-chiefs-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1573984800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1573984800000">11:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ORDER"
                              src="https://static.hltv.org/images/team/logo/8668"
                              class="logo" title="ORDER">
                            <div class="team">ORDER</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Chiefs"
                              src="https://static.hltv.org/images/team/logo/6010"
                              class="logo" title="Chiefs">
                            <div class="team">Chiefs</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337365/faze-vs-hellraisers-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574011500000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574011500000">18:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="FaZe"
                              src="https://static.hltv.org/images/team/logo/6667"
                              class="logo" title="FaZe">
                            <div class="team">FaZe</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="HellRaisers"
                              src="https://static.hltv.org/images/team/logo/5310"
                              class="logo" title="HellRaisers">
                            <div class="team">HellRaisers</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337366/fnatic-vs-vitality-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574025300000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574025300000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="fnatic"
                              src="https://static.hltv.org/images/team/logo/4991"
                              class="logo" title="fnatic">
                            <div class="team">fnatic</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Vitality"
                              src="https://static.hltv.org/images/team/logo/9565"
                              class="logo" title="Vitality">
                            <div class="team">Vitality</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i><i
                                class="fa fa-star star"></i><i
                                class="fa fa-star star"></i><i
                                class="fa fa-star star"></i></div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-18 - Monday</span><a
                    href="/matches/2337377/furia-vs-eunited-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574040300000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574040300000">02:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="FURIA"
                              src="https://static.hltv.org/images/team/logo/8297"
                              class="logo" title="FURIA">
                            <div class="team">FURIA</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="eUnited"
                              src="https://static.hltv.org/images/team/logo/7106"
                              class="logo" title="eUnited">
                            <div class="team">eUnited</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337378/100-thieves-vs-isurus-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574054100000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574054100000">06:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="100 Thieves"
                              src="https://static.hltv.org/images/team/logo/8474"
                              class="logo" title="100 Thieves">
                            <div class="team">100 Thieves</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Isurus"
                              src="https://static.hltv.org/images/team/logo/7653"
                              class="logo" title="Isurus">
                            <div class="team">Isurus</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337391/avant-vs-chiefs-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574060400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574060400000">08:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="AVANT"
                              src="https://static.hltv.org/images/team/logo/5293"
                              class="logo" title="AVANT">
                            <div class="team">AVANT</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Chiefs"
                              src="https://static.hltv.org/images/team/logo/6010"
                              class="logo" title="Chiefs">
                            <div class="team">Chiefs</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337392/grayhound-vs-order-esl-pro-league-season-10-asia-pacific"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574071200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574071200000">11:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Grayhound"
                              src="https://static.hltv.org/images/team/logo/8008"
                              class="logo" title="Grayhound">
                            <div class="team">Grayhound</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ORDER"
                              src="https://static.hltv.org/images/team/logo/8668"
                              class="logo" title="ORDER">
                            <div class="team">ORDER</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Asia-Pacific"
                            src="https://static.hltv.org/images/eventLogos/4694.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Asia-Pacific"><span
                            class="event-name">ESL Pro League Season 10
                            Asia-Pacific</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337367/vitality-vs-hellraisers-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574097900000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574097900000">18:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Vitality"
                              src="https://static.hltv.org/images/team/logo/9565"
                              class="logo" title="Vitality">
                            <div class="team">Vitality</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="HellRaisers"
                              src="https://static.hltv.org/images/team/logo/5310"
                              class="logo" title="HellRaisers">
                            <div class="team">HellRaisers</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i>
                            </div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2335784/w7m-vs-detona-brasileiro-season-1"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574111700000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574111700000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="W7M"
                              src="https://static.hltv.org/images/team/logo/8574"
                              class="logo" title="W7M">
                            <div class="team">W7M</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="DETONA"
                              src="https://static.hltv.org/images/team/logo/8902"
                              class="logo" title="DETONA">
                            <div class="team">DETONA</div>
                          </div>
                        </td>
                        <td class="event"><img alt="Brasileirão Season 1"
                            src="https://static.hltv.org/images/eventLogos/4780.png"
                            class="event-logo"
                            title="Brasileirão Season 1"><span
                            class="event-name">Brasileirão Season 1</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo2</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337368/fnatic-vs-faze-esl-pro-league-season-10-europe"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574111700000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574111700000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="fnatic"
                              src="https://static.hltv.org/images/team/logo/4991"
                              class="logo" title="fnatic">
                            <div class="team">fnatic</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="FaZe"
                              src="https://static.hltv.org/images/team/logo/6667"
                              class="logo" title="FaZe">
                            <div class="team">FaZe</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Europe"
                            src="https://static.hltv.org/images/eventLogos/4699.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Europe"><span
                            class="event-name">ESL Pro League Season 10
                            Europe</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i><i
                                class="fa fa-star star"></i><i
                                class="fa fa-star star"></i></div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-19 - Tuesday</span><a
                    href="/matches/2335787/detona-vs-keyd-brasileiro-season-1"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574119800000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574119800000">00:30</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="DETONA"
                              src="https://static.hltv.org/images/team/logo/8902"
                              class="logo" title="DETONA">
                            <div class="team">DETONA</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Keyd"
                              src="https://static.hltv.org/images/team/logo/6033"
                              class="logo" title="Keyd">
                            <div class="team">Keyd</div>
                          </div>
                        </td>
                        <td class="event"><img alt="Brasileirão Season 1"
                            src="https://static.hltv.org/images/eventLogos/4780.png"
                            class="event-logo"
                            title="Brasileirão Season 1"><span
                            class="event-name">Brasileirão Season 1</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo2</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337379/furia-vs-100-thieves-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574126700000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574126700000">02:25</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="FURIA"
                              src="https://static.hltv.org/images/team/logo/8297"
                              class="logo" title="FURIA">
                            <div class="team">FURIA</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="100 Thieves"
                              src="https://static.hltv.org/images/team/logo/8474"
                              class="logo" title="100 Thieves">
                            <div class="team">100 Thieves</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-and-stars">
                            <div class="stars"><i class="fa fa-star star"></i><i
                                class="fa fa-star star"></i><i
                                class="fa fa-star star"></i></div>
                            <div class="map map-text">bo3</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337380/isurus-vs-eunited-esl-pro-league-season-10-americas"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574140500000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574140500000">06:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Isurus"
                              src="https://static.hltv.org/images/team/logo/7653"
                              class="logo" title="Isurus">
                            <div class="team">Isurus</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="eUnited"
                              src="https://static.hltv.org/images/team/logo/7106"
                              class="logo" title="eUnited">
                            <div class="team">eUnited</div>
                          </div>
                        </td>
                        <td class="event"><img
                            alt="ESL Pro League Season 10 Americas"
                            src="https://static.hltv.org/images/eventLogos/4698.png"
                            class="event-logo"
                            title="ESL Pro League Season 10 Americas"><span
                            class="event-name">ESL Pro League Season 10
                            Americas</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
                <div class="match-day"><span
                    class="standard-headline">2019-11-20 - Wednesday</span><a
                    href="/matches/2337566/big-vs-ex-windigo-european-champions-cup"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574247600000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574247600000">12:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="BIG"
                              src="https://static.hltv.org/images/team/logo/7532"
                              class="logo" title="BIG">
                            <div class="team">BIG</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="ex-Windigo"
                              src="https://static.hltv.org/images/team/logo/10445"
                              class="logo" title="ex-Windigo">
                            <div class="team">ex-Windigo</div>
                          </div>
                        </td>
                        <td class="event"><img alt="European Champions Cup"
                            src="https://static.hltv.org/images/eventLogos/4826.png"
                            class="event-logo"
                            title="European Champions Cup"><span
                            class="event-name">European Champions Cup</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337568/sprout-vs-spirit-european-champions-cup"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574258400000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574258400000">15:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Sprout"
                              src="https://static.hltv.org/images/team/logo/8637"
                              class="logo" title="Sprout">
                            <div class="team">Sprout</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Spirit"
                              src="https://static.hltv.org/images/team/logo/7020"
                              class="logo" title="Spirit">
                            <div class="team">Spirit</div>
                          </div>
                        </td>
                        <td class="event"><img alt="European Champions Cup"
                            src="https://static.hltv.org/images/eventLogos/4826.png"
                            class="event-logo"
                            title="European Champions Cup"><span
                            class="event-name">European Champions Cup</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337569/smash-vs-movistar-riders-european-champions-cup"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574269200000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574269200000">18:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="SMASH"
                              src="https://static.hltv.org/images/team/logo/10315"
                              class="logo" title="SMASH">
                            <div class="team">SMASH</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Movistar Riders"
                              src="https://static.hltv.org/images/team/logo/7718"
                              class="logo" title="Movistar Riders">
                            <div class="team">Movistar Riders</div>
                          </div>
                        </td>
                        <td class="event"><img alt="European Champions Cup"
                            src="https://static.hltv.org/images/eventLogos/4826.png"
                            class="event-logo"
                            title="European Champions Cup"><span
                            class="event-name">European Champions Cup</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2337567/hard-legion-vs-gamerlegion-european-champions-cup"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574280000000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574280000000">21:00</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="Hard Legion"
                              src="https://static.hltv.org/images/team/logo/10421"
                              class="logo" title="Hard Legion">
                            <div class="team">Hard Legion</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="GamerLegion"
                              src="https://static.hltv.org/images/team/logo/9928"
                              class="logo" title="GamerLegion">
                            <div class="team">GamerLegion</div>
                          </div>
                        </td>
                        <td class="event"><img alt="European Champions Cup"
                            src="https://static.hltv.org/images/eventLogos/4826.png"
                            class="event-logo"
                            title="European Champions Cup"><span
                            class="event-name">European Champions Cup</span>
                        </td>
                        <td class="star-cell">
                          <div class="map-text">bo3</div>
                        </td>
                      </tr>
                    </table>
                  </a><a
                    href="/matches/2335783/red-canids-vs-pain-brasileiro-season-1"
                    class="a-reset block upcoming-match standard-box"
                    data-zonedgrouping-entry-unix="1574284500000">
                    <table class="table">
                      <tr>
                        <td class="time">
                          <div class="time" data-time-format="HH:mm"
                            data-unix="1574284500000">22:15</div>
                        </td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="RED Canids"
                              src="https://static.hltv.org/images/team/logo/7176"
                              class="logo" title="RED Canids">
                            <div class="team">RED Canids</div>
                          </div>
                        </td>
                        <td class="vs">vs</td>
                        <td class="team-cell">
                          <div class="line-align"><img alt="paiN"
                              src="https://static.hltv.org/images/team/logo/4773"
                              class="logo" title="paiN">
                            <div class="team">paiN</div>
                          </div>
                        </td>
                        <td class="event"><img alt="Brasileirão Season 1"
                            src="https://static.hltv.org/images/eventLogos/4780.png"
                            class="event-logo"
                            title="Brasileirão Season 1"><span
                            class="event-name">Brasileirão Season 1</span></td>
                        <td class="star-cell">
                          <div class="map-text">bo2</div>
                        </td>
                      </tr>
                    </table>
                  </a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="leftCol">
          <aside
            class="standard-box featured-match-container first-col-bet-1xbet">
            <span class="featured-header">FEATURED MATCH STARTS IN</span>
            <div class="featured-match-teams">
              <div class="team"><img alt="BIG"
                  src="https://static.hltv.org/images/team/logo/7532" class=""
                  title="BIG"><a
                  href="http://co.hltv.org/1xbet_new.php?ref=%2Fline%2FEsports%2F1835783-CSGO-United-Masters-League%2F61286095-BIG-Virtuspro%2F&amp;placement=F3"><span
                    class="team-odds">1.22</span></a></div>
              <div class="featured-vs-box">vs<span class="time-box"><span
                    class="" data-time-countdown="LIVE"
                    data-unix="1572984000000">57m : 4s</span></span></div>
              <div class="team"><img alt="Virtus.pro"
                  src="https://static.hltv.org/images/team/logo/5378" class=""
                  title="Virtus.pro"><a
                  href="http://co.hltv.org/1xbet_new.php?ref=%2Fline%2FEsports%2F1835783-CSGO-United-Masters-League%2F61286095-BIG-Virtuspro%2F&amp;placement=F3"><span
                    class="team-odds">3.32</span></a></div>
            </div>
            <a href="/matches/2337428/big-vs-virtuspro-united-masters-league-season-2"
              data-link-tracking-page="Frontpage"
              data-link-tracking-column="[1st column]"
              data-link-tracking-destination="Click on match page [button]">
              <div class="featured-match-matchpage">Match page</div>
            </a>
          </aside>
          <aside
            class="standard-box raybet featured-match-container first-col-bet-raybet hidden">
            <span class="featured-header"><img
                src="/img/static/betting/raybet2.svg"
                class="featured-header-provider-logo">HLTV合作伙伴雷竞技提供</span>
            <div class="featured-match-teams">
              <div class="team"><img alt="BIG"
                  src="https://static.hltv.org/images/team/logo/7532" class=""
                  title="BIG"><a
                  href="https://www.ray50.com/?aid=849266&amp;mid=25239950"><span
                    class="team-odds">1.29</span></a></div>
              <div class="featured-vs-box">vs<span class="time-box"><span
                    class="" data-time-countdown="LIVE"
                    data-unix="1572984000000">57m : 4s</span></span></div>
              <div class="team"><img alt="Virtus.pro"
                  src="https://static.hltv.org/images/team/logo/5378" class=""
                  title="Virtus.pro"><a
                  href="https://www.ray50.com/?aid=849266&amp;mid=25239950"><span
                    class="team-odds">3.48</span></a></div>
            </div>
            <a href="/matches/2337428/big-vs-virtuspro-united-masters-league-season-2"
              data-link-tracking-page="Frontpage"
              data-link-tracking-column="[1st column]"
              data-link-tracking-destination="Click on match page [button]">
              <div class="featured-match-matchpage">Match page</div>
            </a>
          </aside>
          <div class="results">
            <div class="sidebar-con">
              <div class="sidebar-box ">
                <div class="sidebar-headline">Filters</div>
                <div class="sidebar-first-level">
                  <div>
                    <div class="filter-column-con">
                      <div class="filter-column-header open">Star filter<span
                          class="fa fa-caret-down"></span><span
                          class="fa fa-caret-up"></span></div>
                      <div class="filter-column-content  star-filter"><a
                          href="/matches"
                          class="sidebar-single-line-item selected" title="">
                          All</a><a href="/matches?star=1"
                          class="sidebar-single-line-item " title=""> </a><a
                          href="/matches?star=2"
                          class="sidebar-single-line-item " title=""> </a><a
                          href="/matches?star=3"
                          class="sidebar-single-line-item " title=""> </a><a
                          href="/matches?star=4"
                          class="sidebar-single-line-item " title=""> </a><a
                          href="/matches?star=5"
                          class="sidebar-single-line-item " title=""> </a>
                      </div>
                      <div class="filter-column-header open">Events<span
                          class="fa fa-caret-down"></span><span
                          class="fa fa-caret-up"></span></div>
                      <div class="filter-column-content  "><a href="/matches"
                          class="sidebar-single-line-item selected" title="">
                          Show all</a><a href="/matches?event=4699"
                          class="sidebar-single-line-item " title=""> ESL Pro
                          League Season 10 Europe</a><a
                          href="/matches?event=4698"
                          class="sidebar-single-line-item " title=""> ESL Pro
                          League Season 10 Americas</a><a
                          href="/matches?event=4837"
                          class="sidebar-single-line-item " title=""> IEM
                          Beijing 2019</a><a href="/matches?event=4736"
                          class="sidebar-single-line-item " title=""> ESEA MDL
                          Season 32 Europe</a><a href="/matches?event=4826"
                          class="sidebar-single-line-item " title=""> European
                          Champions Cup</a><a href="/matches?event=4945"
                          class="sidebar-single-line-item " title=""> United
                          Masters League Season 2</a><a
                          href="/matches?event=4492"
                          class="sidebar-single-line-item " title=""> SECTOR:
                          MOSTBET</a><a href="/matches?event=4694"
                          class="sidebar-single-line-item " title=""> ESL Pro
                          League Season 10 Asia-Pacific</a><a
                          href="/matches?event=4737"
                          class="sidebar-single-line-item " title=""> ESEA MDL
                          Season 32 North America</a><a
                          href="/matches?event=5012"
                          class="sidebar-single-line-item " title=""> ESL
                          Southeast Europe Championship Season 10 Finals</a><a
                          href="/matches?event=5011"
                          class="sidebar-single-line-item " title=""> EPICENTER
                          2019 China Qualifier</a><a href="/matches?event=5010"
                          class="sidebar-single-line-item " title=""> OMEN
                          Atlantic Challenge 2019 Europe Closed Qualifier</a><a
                          href="/matches?event=4992"
                          class="sidebar-single-line-item " title=""> Qi Banja
                          Luka 2019 - Asia Qualifier</a><a
                          href="/matches?event=4780"
                          class="sidebar-single-line-item " title="">
                          Brasileirão Season 1</a></div>
                      <div class="filter-column-header ">Status<span
                          class="fa fa-caret-down"></span><span
                          class="fa fa-caret-up"></span></div>
                      <div class="filter-column-content hidden "><a
                          href="/matches"
                          class="sidebar-single-line-item selected" title="">
                          All</a><a href="/matches?status=Live"
                          class="sidebar-single-line-item " title=""> Live</a><a
                          href="/matches?status=Upcoming"
                          class="sidebar-single-line-item " title="">
                          Upcoming</a></div>
                      <div class="filter-column-header ">Type<span
                          class="fa fa-caret-down"></span><span
                          class="fa fa-caret-up"></span></div>
                      <div class="filter-column-content hidden "><a
                          href="/matches"
                          class="sidebar-single-line-item selected" title="">
                          All</a><a href="/matches?eventType=MAJOR"
                          class="sidebar-single-line-item " title="">
                          Major</a><a href="/matches?eventType=INTLLAN"
                          class="sidebar-single-line-item " title="">
                          International LAN</a><a
                          href="/matches?eventType=REGIONALLAN"
                          class="sidebar-single-line-item " title=""> Regional
                          LAN</a><a href="/matches?eventType=ONLINE"
                          class="sidebar-single-line-item " title="">
                          Online</a><a href="/matches?eventType=LOCALLAN"
                          class="sidebar-single-line-item " title=""> Local
                          LAN</a><a href="/matches?eventType=OTHER"
                          class="sidebar-single-line-item " title=""> Other</a>
                      </div>
                      <div class="filter-column-header ">Team<span
                          class="fa fa-caret-down"></span><span
                          class="fa fa-caret-up"></span></div>
                      <div class="filter-column-content hidden ">
                        <div class="padded-content search-typeahead"><input
                            type="text" class="filter-team-input"
                            data-search-url="/searchTeam?term="
                            data-search-team="" data-search-redirect="/matches"
                            placeholder="Team search"><a href="/matches">
                            <div class=""> Require all teams</div>
                          </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-rek3">
            <aside>
              <div class="widget-match-listing widget-unikrn">
                <div class="widget-logo"><img
                    src="/img/static/betting/unikrn_night.svg"></div>
                <div class="widget-upcoming-matches">
                  <div class="widget-upcoming-matches-text">Matches</div>
                  <a href="https://unikrn.com/bet/games/counter-strike-go/big-v-virtuspro_united_masters_league_1/290427?utm_source=hltv&amp;utm_medium=odds&amp;utm_campaign=sportsbook"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="BIG"
                              src="https://static.hltv.org/images/team/logo/7532"
                              class="team-logo" title="BIG"></div>
                          BIG
                        </div>
                        <span class="team-odds">1.25</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1572984000000">21 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Virtus.pro"
                              src="https://static.hltv.org/images/team/logo/5378"
                              class="team-logo" title="Virtus.pro"></div>
                          Virtus.pro
                        </div>
                        <span class="team-odds">3.75</span>
                      </div>
                    </div>
                  </a><a
                    href="https://unikrn.com/bet/games/counter-strike-go/cr4zy-v-smash_united_masters_league/281975?utm_source=hltv&amp;utm_medium=odds&amp;utm_campaign=sportsbook"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="CR4ZY"
                              src="https://static.hltv.org/images/team/logo/10150"
                              class="team-logo" title="CR4ZY"></div>
                          CR4ZY
                        </div>
                        <span class="team-odds">1.44</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573041600000">13 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="SMASH"
                              src="https://static.hltv.org/images/team/logo/10315"
                              class="team-logo" title="SMASH"></div>
                          SMASH
                        </div>
                        <span class="team-odds">2.62</span>
                      </div>
                    </div>
                  </a><a
                    href="https://unikrn.com/bet/games/counter-strike-go/team_spirit-v-avangar_esea_mdl_europe_season_28/290913?utm_source=hltv&amp;utm_medium=odds&amp;utm_campaign=sportsbook"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Spirit"
                              src="https://static.hltv.org/images/team/logo/7020"
                              class="team-logo" title="Spirit"></div>
                          Spirit
                        </div>
                        <span class="team-odds">2.62</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573059600000">18 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="AVANGAR"
                              src="https://static.hltv.org/images/team/logo/8120"
                              class="team-logo" title="AVANGAR"></div>
                          AVANGAR
                        </div>
                        <span class="team-odds">1.44</span>
                      </div>
                    </div>
                  </a><a
                    href="https://unikrn.com/bet/games/counter-strike-go/avangar-v-tricked_esport_esea_mdl_europe_season_28_1/283413?utm_source=hltv&amp;utm_medium=odds&amp;utm_campaign=sportsbook"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="AVANGAR"
                              src="https://static.hltv.org/images/team/logo/8120"
                              class="team-logo" title="AVANGAR"></div>
                          AVANGAR
                        </div>
                        <span class="team-odds">1.66</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573066800000">20 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Tricked"
                              src="https://static.hltv.org/images/team/logo/4602"
                              class="team-logo" title="Tricked"></div>
                          Tricked
                        </div>
                        <span class="team-odds">2.10</span>
                      </div>
                    </div>
                  </a>
                </div>
                <a href="https://unikrn.com/bet/offer/deposit/hltv50">
                  <div class="widget-cta">Bet now</div>
                </a>
              </div>
            </aside>
          </div>
          <div class="thunderfire-first">
            <div class="col-rek3" id="g1_bottom_2"></div>
          </div>
          <div class="ggbet-first">
            <aside>
              <div class="widget-match-listing widget-ggbet hidden"><a
                  href="http://ggrus.bet/ggbetting/rus?lp=00&amp;lg=ru&amp;param=hltv_sidebar1"
                  class="a-reset">
                  <div class="widget-logo"><img
                      src="/img/static/betting/ggbetnew_white.png"></div>
                </a>
                <div class="widget-upcoming-matches">
                  <div class="widget-upcoming-matches-text">МАТЧИ</div>
                  <a href="http://ggrus.bet/ggbetting/rus?lp=00&amp;lg=ru&amp;param=hltv_sidebar1&amp;mid=5:2372d5f2-f3f7-44ec-8ee6-db7fb55cace2"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="BIG"
                              src="https://static.hltv.org/images/team/logo/7532"
                              class="team-logo" title="BIG"></div>
                          BIG
                        </div>
                        <span class="team-odds">1.30</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1572984000000">21 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Virtus.pro"
                              src="https://static.hltv.org/images/team/logo/5378"
                              class="team-logo" title="Virtus.pro"></div>
                          Virtus.pro
                        </div>
                        <span class="team-odds">3.39</span>
                      </div>
                    </div>
                  </a><a
                    href="http://ggrus.bet/ggbetting/rus?lp=00&amp;lg=ru&amp;param=hltv_sidebar1&amp;mid=5:7f7aa4c8-454c-486c-b535-cf9c0ae67081"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="CR4ZY"
                              src="https://static.hltv.org/images/team/logo/10150"
                              class="team-logo" title="CR4ZY"></div>
                          CR4ZY
                        </div>
                        <span class="team-odds">1.50</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573041600000">13 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="SMASH"
                              src="https://static.hltv.org/images/team/logo/10315"
                              class="team-logo" title="SMASH"></div>
                          SMASH
                        </div>
                        <span class="team-odds">2.52</span>
                      </div>
                    </div>
                  </a><a
                    href="http://ggrus.bet/ggbetting/rus?lp=00&amp;lg=ru&amp;param=hltv_sidebar1&amp;mid=5:df22e238-3845-468d-85e4-d459a6a0ad94"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="AVANGAR"
                              src="https://static.hltv.org/images/team/logo/8120"
                              class="team-logo" title="AVANGAR"></div>
                          AVANGAR
                        </div>
                        <span class="team-odds">1.55</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573052400000">16 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="CR4ZY"
                              src="https://static.hltv.org/images/team/logo/10150"
                              class="team-logo" title="CR4ZY"></div>
                          CR4ZY
                        </div>
                        <span class="team-odds">2.39</span>
                      </div>
                    </div>
                  </a><a
                    href="http://ggrus.bet/ggbetting/rus?lp=00&amp;lg=ru&amp;param=hltv_sidebar1&amp;mid=5:bbc1c61e-4c4f-40d5-879b-dbe46a896520"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Spirit"
                              src="https://static.hltv.org/images/team/logo/7020"
                              class="team-logo" title="Spirit"></div>
                          Spirit
                        </div>
                        <span class="team-odds">2.61</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573059600000">18 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="AVANGAR"
                              src="https://static.hltv.org/images/team/logo/8120"
                              class="team-logo" title="AVANGAR"></div>
                          AVANGAR
                        </div>
                        <span class="team-odds">1.47</span>
                      </div>
                    </div>
                  </a><a
                    href="http://ggrus.bet/ggbetting/rus?lp=00&amp;lg=ru&amp;param=hltv_sidebar1&amp;mid=5:b5f43e81-94b2-47e5-8c72-4b58306ddea6"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Tricked"
                              src="https://static.hltv.org/images/team/logo/4602"
                              class="team-logo" title="Tricked"></div>
                          Tricked
                        </div>
                        <span class="team-odds">1.30</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573063200000">19 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Japaleno"
                              src="https://static.hltv.org/images/team/logo/7144"
                              class="team-logo" title="Japaleno"></div>
                          Japaleno
                        </div>
                        <span class="team-odds">3.40</span>
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="http://ggrus.bet/ggbetting/rus?lp=00&amp;lg=ru&amp;param=hltv_logo&amp;mid=&amp;goto=sitereg">
                  <div class="widget-cta">ПОСТАВИТЬ</div>
                </a>
              </div>
            </aside>
          </div>
        </div>
        <div class="right2Col">
          <aside>
            <div class="recent-activity">
              <h1><a href="/forums" class="a-reset">RECENT ACTIVITY</a></h1>
              <div class="pro-mode-toggle"
                title="Toggle Sport mode on, in Sport mode we reduce community interaction, and present mainly HLTV produced content. The Sport mode is in beta, and will be expanded going forward.">
                SPORT</div>
            </div>
            <div class="col-box-con">
              <div class="activitylist"><a
                  href="/forums/threads/2180475/90-of-anime-trash"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: 90% of anime - trash">90%
                    of anime - trash</span>22</a><a
                  href="/forums/threads/2180564/virtus-pro-fans"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: Virtus pro fans">Virtus
                    pro fans</span>7</a><a
                  href="/forums/threads/2180271/top-3-metal-bands"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: TOP 3 METAL BANDS?">TOP 3
                    METAL BANDS?</span>207</a><a
                  href="/forums/threads/2180536/countries-u-like"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default"
                    title="Cs: countries u like">countries u
                    like</span>142</a><a
                  href="/forums/threads/2180525/jw-best-awper"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: JW best awper">JW best
                    awper</span>35</a><a
                  href="/forums/threads/2180454/evil-g-top-1-why"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: Evil g top 1? Why?">Evil
                    g top 1? Why?</span>18</a><a
                  href="/forums/threads/2180542/last-time-you-cried"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: Last time you cried">Last
                    time you cried</span>65</a><a
                  href="/forums/threads/2180550/i-fucking-hate-sunny"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: I fucking hate Sunny">I
                    fucking hate Sunny</span>40</a><a
                  href="/forums/threads/2179618/racist-refrezh"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: racist refrezh">racist
                    refrezh</span>117</a><a
                  href="/forums/threads/2180503/fear-of-death"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: fear of death?">fear of
                    death?</span>63</a><a
                  href="/forums/threads/2179766/what-do-other-countries-think-about-finland"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default"
                    title="Cs: What do other countries think about Finland?">What
                    do other countries think about Finland?</span>126</a><a
                  href="/forums/threads/2180249/frankie-so-beautiful"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default"
                    title="Cs: Frankie so beautiful">Frankie so
                    beautiful</span>69</a><a
                  href="/forums/threads/2180002/eg-era"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: EG Era">EG
                    Era</span>65</a><a href="/forums/threads/2180534/gym"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: gym">gym</span>53</a><a
                  href="/matches/2337640/heretics-vs-phoenix-esea-mdl-season-32-europe"
                  class="col-box activity a-reset matchCat "><span
                    class="topic a-default"
                    title="Match: Heretics vs Phoenix">Heretics vs
                    Phoenix</span>56</a><a
                  href="/forums/threads/2180563/sunny-rain-cold"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: Sunny Rain Cold">Sunny
                    Rain Cold</span>1</a><a
                  href="/forums/threads/2169438/church-girl-last-update"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default"
                    title="Cs: Church Girl Last Update">Church Girl Last
                    Update</span>179</a><a
                  href="/forums/threads/2180562/got-mics"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: Got Mics?">Got
                    Mics?</span>11</a><a
                  href="/forums/threads/2180561/whos-the-best-awper-in-csgo-history"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default"
                    title="Cs: Who's the best awper in CSGO history?">Who's the
                    best awper in CSGO history?</span>6</a><a
                  href="/forums/threads/2180565/mm-not-smooth"
                  class="col-box activity a-reset csCat no-promode"><span
                    class="topic a-default" title="Cs: mm not smooth">mm not
                    smooth</span>0</a></div>
            </div>
          </aside>
          <div class="col-rek3 xbet-fourth">
            <aside class="column-widget-box xbet">
              <div class="a-reset"><a
                  href="http://co.hltv.org/1xbet_new.php?ref=%2Fline%2FEsports%2F1835783-CSGO-United-Masters-League%2F61286095-BIG-Virtuspro%2F&amp;placement=widgetmain">
                  <div class="column-widget-box-header"><img
                      src="/img/static/betting/1xbet_night.png"
                      class="column-widget-box-header-img"></div>
                  <div class="column-widget-box-content">
                    <div class="column-widget-box-content-teams">
                      <div class="column-widget-box-team">
                        <div class="column-widget-box-team-logo-container"><img
                            alt="BIG"
                            src="https://static.hltv.org/images/team/logo/7532"
                            class="column-widget-box-team-logo" title="BIG">
                        </div>
                        <div class="column-widget-box-odds">1.22</div>
                      </div>
                      <div class="column-widget-box-team">
                        <div class="column-widget-box-team-logo-container"><img
                            alt="Virtus.pro"
                            src="https://static.hltv.org/images/team/logo/5378"
                            class="column-widget-box-team-logo"
                            title="Virtus.pro"></div>
                        <div class="column-widget-box-odds">3.32</div>
                      </div>
                    </div>
                    <div class="column-widget-box-cta">BET NOW</div>
                  </div>
                  <a href="https://co.hltv.org/1xbet_new.php?placement=widgetreg&amp;ref=registration/"
                    class="flex">
                    <div class="column-widget-box-bonus-container">
                      <div class="column-widget-box-bonus">HLTV</div>
                      <div class="column-widget-box-bonus-text">BONUS CODE</div>
                    </div>
                  </a>
                </a></div>
            </aside>
          </div>
          <div class="hidden stavka-fourth">
            <aside class="column-widget-box xbet">
              <div class="a-reset"><a
                  href="http://co.hltv.org/1xbet_new.php?ref=%2Fline%2FEsports%2F1835783-CSGO-United-Masters-League%2F61286095-BIG-Virtuspro%2F&amp;placement=widgetmain">
                  <div class="column-widget-box-header"><img
                      src="/img/static/betting/1xstavka_night.png"
                      class="column-widget-box-header-img"></div>
                  <div class="column-widget-box-content">
                    <div class="column-widget-box-content-teams">
                      <div class="column-widget-box-team">
                        <div class="column-widget-box-team-logo-container"><img
                            alt="BIG"
                            src="https://static.hltv.org/images/team/logo/7532"
                            class="column-widget-box-team-logo" title="BIG">
                        </div>
                        <div class="column-widget-box-odds">1.22</div>
                      </div>
                      <div class="column-widget-box-team">
                        <div class="column-widget-box-team-logo-container"><img
                            alt="Virtus.pro"
                            src="https://static.hltv.org/images/team/logo/5378"
                            class="column-widget-box-team-logo"
                            title="Virtus.pro"></div>
                        <div class="column-widget-box-odds">3.32</div>
                      </div>
                    </div>
                    <div class="column-widget-box-cta">ПОСТАВИТЬ</div>
                  </div>
                  <a href="https://co.hltv.org/1xbet_new.php?placement=widgetreg&amp;ref=registration/"
                    class="flex">
                    <div class="column-widget-box-bonus-container">
                      <div class="column-widget-box-bonus">HLTVRU</div>
                      <div class="column-widget-box-bonus-text">ПРОМОКОД</div>
                    </div>
                  </a>
                </a></div>
            </aside>
          </div>
          <aside>
            <h1><a href="/results?content=vod" class="a-reset"
                data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'LATEST REPLAYS' [text]">LATEST
                REPLAYS</a></h1>
            <div class="col-box-con"><a
                href="/matches/2337639/pro100-vs-heretics-esea-mdl-season-32-europe"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="Russia"
                        src="https://static.hltv.org/images/bigflags/30x20/RU.gif"
                        class="flag" title="Russia"> <span
                        class="team">pro100</span></div>
                    <div class="teamrow"><img alt="France"
                        src="https://static.hltv.org/images/bigflags/30x20/FR.gif"
                        class="flag" title="France"> <span
                        class="team">Heretics</span></div>
                  </div>
                  <div class="middleExtra">DEMO</div>
                </div>
              </a><a
                href="/matches/2337637/virtuspro-vs-pact-esea-mdl-season-32-europe"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="Poland"
                        src="https://static.hltv.org/images/bigflags/30x20/PL.gif"
                        class="flag" title="Poland"> <span
                        class="team">Virtus.pro</span></div>
                    <div class="teamrow"><img alt="Poland"
                        src="https://static.hltv.org/images/bigflags/30x20/PL.gif"
                        class="flag" title="Poland"> <span
                        class="team">PACT</span></div>
                  </div>
                  <div class="middleExtra">DEMO</div>
                </div>
              </a><a
                href="/matches/2337633/havu-vs-gamerlegion-esea-mdl-season-32-europe"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="Finland"
                        src="https://static.hltv.org/images/bigflags/30x20/FI.gif"
                        class="flag" title="Finland"> <span
                        class="team">HAVU</span></div>
                    <div class="teamrow"><img alt="Sweden"
                        src="https://static.hltv.org/images/bigflags/30x20/SE.gif"
                        class="flag" title="Sweden"> <span
                        class="team">GamerLegion</span></div>
                  </div>
                  <div class="middleExtra">DEMO</div>
                </div>
              </a><a
                href="/matches/2337636/demise-vs-japaleno-esea-mdl-season-32-europe"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="Turkey"
                        src="https://static.hltv.org/images/bigflags/30x20/TR.gif"
                        class="flag" title="Turkey"> <span
                        class="team">Demise</span></div>
                    <div class="teamrow"><img alt="Sweden"
                        src="https://static.hltv.org/images/bigflags/30x20/SE.gif"
                        class="flag" title="Sweden"> <span
                        class="team">Japaleno</span></div>
                  </div>
                  <div class="middleExtra">DEMO</div>
                </div>
              </a><a
                href="/matches/2337634/pact-vs-nemiga-esea-mdl-season-32-europe"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="Poland"
                        src="https://static.hltv.org/images/bigflags/30x20/PL.gif"
                        class="flag" title="Poland"> <span
                        class="team">PACT</span></div>
                    <div class="teamrow"><img alt="Belarus"
                        src="https://static.hltv.org/images/bigflags/30x20/BY.gif"
                        class="flag" title="Belarus"> <span
                        class="team">Nemiga</span></div>
                  </div>
                  <div class="middleExtra">DEMO</div>
                </div>
              </a><a
                href="/matches/2337432/virtuspro-vs-forze-esea-mdl-season-32-europe"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="Poland"
                        src="https://static.hltv.org/images/bigflags/30x20/PL.gif"
                        class="flag" title="Poland"> <span
                        class="team">Virtus.pro</span></div>
                    <div class="teamrow"><img alt="Russia"
                        src="https://static.hltv.org/images/bigflags/30x20/RU.gif"
                        class="flag" title="Russia"> <span
                        class="team">forZe</span></div>
                  </div>
                  <div class="middleExtra">DEMO</div>
                </div>
              </a><a
                href="/matches/2337631/pro100-vs-gamerlegion-esea-mdl-season-32-europe"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="Russia"
                        src="https://static.hltv.org/images/bigflags/30x20/RU.gif"
                        class="flag" title="Russia"> <span
                        class="team">pro100</span></div>
                    <div class="teamrow"><img alt="Sweden"
                        src="https://static.hltv.org/images/bigflags/30x20/SE.gif"
                        class="flag" title="Sweden"> <span
                        class="team">GamerLegion</span></div>
                  </div>
                  <div class="middleExtra">DEMO</div>
                </div>
              </a><a
                href="/matches/2337630/forze-vs-havu-esea-mdl-season-32-europe"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="Russia"
                        src="https://static.hltv.org/images/bigflags/30x20/RU.gif"
                        class="flag" title="Russia"> <span
                        class="team">forZe</span></div>
                    <div class="teamrow"><img alt="Finland"
                        src="https://static.hltv.org/images/bigflags/30x20/FI.gif"
                        class="flag" title="Finland"> <span
                        class="team">HAVU</span></div>
                  </div>
                  <div class="middleExtra">DEMO</div>
                </div>
              </a><a
                href="/matches/2337627/onethree-vs-5power-epicenter-2019-china-qualifier"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="China"
                        src="https://static.hltv.org/images/bigflags/30x20/CN.gif"
                        class="flag" title="China"> <span
                        class="team">OneThree</span></div>
                    <div class="teamrow"><img alt="China"
                        src="https://static.hltv.org/images/bigflags/30x20/CN.gif"
                        class="flag" title="China"> <span
                        class="team">5POWER</span></div>
                  </div>
                  <div class="middleExtra">DEMO</div>
                </div>
              </a><a
                href="/matches/2337525/boot-vs-august-qi-banja-luka-2019-asia-qualifier"
                class="col-box a-reset" data-link-tracking-page="Frontpage"
                data-link-tracking-column="[4th column]"
                data-link-tracking-destination="Click on 'VOD / DEMO' [box]">
                <div class="teambox">
                  <div class="teamrows">
                    <div class="teamrow"><img alt="Singapore"
                        src="https://static.hltv.org/images/bigflags/30x20/SG.gif"
                        class="flag" title="Singapore"> <span
                        class="team">BOOT</span></div>
                    <div class="teamrow"><img alt="Mongolia"
                        src="https://static.hltv.org/images/bigflags/30x20/MN.gif"
                        class="flag" title="Mongolia"> <span
                        class="team">AUGUST</span></div>
                  </div>
                  <div class="middleExtra">VOD</div>
                </div>
              </a></div>
          </aside>
          <div class="col-rek3">
            <div class="col-rek3" id="g4_bottom"></div>
          </div>
          <div class="bet365-fourth">
            <aside>
              <div class="widget-match-listing widget-lootbet">
                <div class="widget-logo"><img
                    src="/img/static/betting/lootbet_night.png"></div>
                <div class="widget-upcoming-matches">
                  <div class="widget-upcoming-matches-text">Matches</div>
                  <a href="https://lootclick.net/_gsv9t6kIvAnlE-K0mpYMyWNd7ZgqdRLk/1609/?payload=bottom_banner"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="BIG"
                              src="https://static.hltv.org/images/team/logo/7532"
                              class="team-logo" title="BIG"></div>
                          BIG
                        </div>
                        <span class="team-odds">1.26</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1572984000000">21 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Virtus.pro"
                              src="https://static.hltv.org/images/team/logo/5378"
                              class="team-logo" title="Virtus.pro"></div>
                          Virtus.pro
                        </div>
                        <span class="team-odds">3.63</span>
                      </div>
                    </div>
                  </a><a
                    href="https://lootclick.net/_gsv9t6kIvAnlE-K0mpYMyWNd7ZgqdRLk/1609/?payload=bottom_banner"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="CR4ZY"
                              src="https://static.hltv.org/images/team/logo/10150"
                              class="team-logo" title="CR4ZY"></div>
                          CR4ZY
                        </div>
                        <span class="team-odds">1.47</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573041600000">13 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="SMASH"
                              src="https://static.hltv.org/images/team/logo/10315"
                              class="team-logo" title="SMASH"></div>
                          SMASH
                        </div>
                        <span class="team-odds">2.58</span>
                      </div>
                    </div>
                  </a><a
                    href="https://lootclick.net/_gsv9t6kIvAnlE-K0mpYMyWNd7ZgqdRLk/1609/?payload=bottom_banner"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Spirit"
                              src="https://static.hltv.org/images/team/logo/7020"
                              class="team-logo" title="Spirit"></div>
                          Spirit
                        </div>
                        <span class="team-odds">2.63</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573059600000">18 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="AVANGAR"
                              src="https://static.hltv.org/images/team/logo/8120"
                              class="team-logo" title="AVANGAR"></div>
                          AVANGAR
                        </div>
                        <span class="team-odds">1.45</span>
                      </div>
                    </div>
                  </a><a
                    href="https://lootclick.net/_gsv9t6kIvAnlE-K0mpYMyWNd7ZgqdRLk/1609/?payload=bottom_banner"
                    target="_blank">
                    <div class="widget-upcoming-match">
                      <div class="team1">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="AVANGAR"
                              src="https://static.hltv.org/images/team/logo/8120"
                              class="team-logo" title="AVANGAR"></div>
                          AVANGAR
                        </div>
                        <span class="team-odds">1.62</span><span
                          class="match-time"><span data-time-format="HH : mm"
                            data-unix="1573066800000">20 : 00</span></span>
                      </div>
                      <div class="team2">
                        <div class="team-name text-ellipsis">
                          <div class="team-logo-container"><img alt="Tricked"
                              src="https://static.hltv.org/images/team/logo/4602"
                              class="team-logo" title="Tricked"></div>
                          Tricked
                        </div>
                        <span class="team-odds">2.21</span>
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="https://lootclick.net/_gsv9t6kIvAnlE-K0mpYMyWNd7ZgqdRLk/1609/?payload=bottom_banner">
                  <div class="widget-cta">Bet now</div>
                </a>
              </div>
            </aside>
          </div>
          <div class="ggbet-fourth">
            <aside class="vertical-box single-widget-ggbet hidden"><a
                href="http://ggrus.bet/ggbetting/rus?lp=00&amp;lg=ru&amp;param=hltv_sidebar2&amp;mid=5:2372d5f2-f3f7-44ec-8ee6-db7fb55cace2">
                <div class="vertical-container">
                  <div class="provider"><img
                      src="/img/static/betting/ggbetnew_white.png"></div>
                  <div class="bets">
                    <div class="team-1"><img alt="BIG"
                        src="https://static.hltv.org/images/team/logo/7532"
                        class="team-logo" title="BIG"><span
                        class="bet-box">1.30</span></div>
                    <div class="vs-box">vs</div>
                    <div class="team-2"><img alt="Virtus.pro"
                        src="https://static.hltv.org/images/team/logo/5378"
                        class="team-logo" title="Virtus.pro"><span
                        class="bet-box">3.39</span></div>
                  </div>
                </div>
              </a></aside>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="widthControl footerlinks"><span><a href="/jobs"
          class="footerlink">Jobs</a></span><span><a href="/contact"
          class="footerlink">Contact</a></span><span><a href="/terms"
          class="footerlink">Terms</a></span><span><a href="/privacy"
          class="footerlink">Privacy policy</a></span><span
        class="gtSmartphone-only"><a href="/rss/news"
          class="footerlink">RSS</a></span><span class="gtSmartphone-only"><a
          href="https://www.facebook.com/HLTV.org" target="_blank"
          class="footerlink socicon"><i class="fa fa-facebook"
            aria-hidden="true"></i></a><a href="https://www.twitch.tv/hltvorg"
          target="_blank" class="footerlink socicon"><i class="fa fa-twitch"
            aria-hidden="true"></i></a><a
          href="https://www.youtube.com/user/wwwHLTVorg" target="_blank"
          class="footerlink socicon"><i class="fa fa-youtube"
            aria-hidden="true"></i></a><a href="https://www.twitter.com/HLTVorg"
          target="_blank" class="footerlink socicon"><i class="fa fa-twitter"
            aria-hidden="true"></i></a><a href="https://vk.com/hltvorg"
          target="_blank" class="footerlink socicon"><i class="fa fa-vk"
            aria-hidden="true"></i></a><a
          href="https://www.instagram.com/hltvorg/" target="_blank"
          class="footerlink socicon"><i class="fa fa-instagram"
            aria-hidden="true"></i></a></span><span><span class="footer-hltv">©
          HLTV.org</span><span class="footer-responsible">18+ Bet Responsibly<a
            href="https://www.gamblingtherapy.org"><img
              src="/img/static/gamcare.png"
              class="invertNight"></a></span></span></div>
  </footer>
  <!--Version: 2.1.535-->
  <!---->
  <div id="overlay"></div>
  <button class="leftColPullInButton"><i class="fa fa-th-list"
      aria-hidden="true"></i></button>
  <script defer src="https://static.cloudflareinsights.com/beacon.min.js"
    data-cf-beacon='{"rayId":"531115cb7b9dc2ae","version":"2019.10.1","startTime":1572980579155}'></script>
</body>
</html>
`
