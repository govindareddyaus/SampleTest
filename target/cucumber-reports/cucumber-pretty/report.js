$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search IsLands",
  "description": "As a user I should be able to search IsLands successfully",
  "id": "search-islands",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2403058100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search Islands",
  "description": "",
  "id": "search-islands;search-islands",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I go to Search Islands website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the Search Islands website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see Search Box",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Search_Steps.i_go_to_Search_Islands_website()"
});
formatter.result({
  "duration": 1190648000,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.i_am_on_the_Search_Islands_website()"
});
formatter.result({
  "duration": 55000600,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.i_should_see_Search_Box()"
});
formatter.result({
  "duration": 56905700,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.i_should_see_Search_Button()"
});
formatter.result({
  "duration": 43569400,
  "status": "passed"
});
formatter.after({
  "duration": 1155230400,
  "status": "passed"
});
formatter.before({
  "duration": 1308083500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search Islands",
  "description": "",
  "id": "search-islands;search-islands",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I go to Search Islands website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter search criteria as \"Isla\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see search results containing \"Isla\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.i_go_to_Search_Islands_website()"
});
formatter.result({
  "duration": 1118701100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Isla",
      "offset": 28
    }
  ],
  "location": "Search_Steps.i_enter_search_criteria_as(String)"
});
formatter.result({
  "duration": 154016400,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.i_click_on_Search_button()"
});
formatter.result({
  "duration": 65250600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Isla",
      "offset": 40
    }
  ],
  "location": "Search_Steps.i_should_see_search_results_containing(String)"
});
formatter.result({
  "duration": 968582300,
  "status": "passed"
});
formatter.after({
  "duration": 703736800,
  "status": "passed"
});
formatter.before({
  "duration": 1450686400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search Islands with No Text",
  "description": "",
  "id": "search-islands;search-islands-with-no-text",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I go to Search Islands website",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter search criteria as \" \"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see search results with empty error message \"Provide some query\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.i_go_to_Search_Islands_website()"
});
formatter.result({
  "duration": 1354101800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 28
    }
  ],
  "location": "Search_Steps.i_enter_search_criteria_as(String)"
});
formatter.result({
  "duration": 337789100,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.i_click_on_Search_button()"
});
formatter.result({
  "duration": 138906400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Provide some query",
      "offset": 54
    }
  ],
  "location": "Search_Steps.i_should_see_search_results_with_empty_error_message(String)"
});
formatter.result({
  "duration": 815817700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#error\\-empty\\-query\"}\n  (Session info: chrome\u003d90.0.4430.212)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VOTDP1M\u0027, ip: \u002710.0.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Satish\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:61006}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 86da1f55ec060996eb176985b6697c65\n*** Element info: {Using\u003did, value\u003derror-empty-query}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat pageobjects.Search_PO.emptyErrorMessage(Search_PO.java:98)\r\n\tat stepDefinitions.Search_Steps.i_should_see_search_results_with_empty_error_message(Search_Steps.java:133)\r\n\tat ✽.Then I should see search results with empty error message \"Provide some query\"(Search.feature:20)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_csharp_search/862b0faa506b8487c25a3384cfde8af4/static/attachments/reference_page.html");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 929447600,
  "status": "passed"
});
formatter.before({
  "duration": 1318756500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search Islands with no such Islands",
  "description": "",
  "id": "search-islands;search-islands-with-no-such-islands",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I go to Search Islands website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I enter search criteria as \"Castle\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see search results with error message \"No results\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.i_go_to_Search_Islands_website()"
});
formatter.result({
  "duration": 1099665100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Castle",
      "offset": 28
    }
  ],
  "location": "Search_Steps.i_enter_search_criteria_as(String)"
});
formatter.result({
  "duration": 147868500,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.i_click_on_Search_button()"
});
formatter.result({
  "duration": 62055400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No results",
      "offset": 48
    }
  ],
  "location": "Search_Steps.i_should_see_search_results_with_error_message(String)"
});
formatter.result({
  "duration": 88329900,
  "status": "passed"
});
formatter.after({
  "duration": 688305800,
  "status": "passed"
});
formatter.before({
  "duration": 1387999100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Search Islands with definite count of Results",
  "description": "",
  "id": "search-islands;search-islands-with-definite-count-of-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I go to Search Islands website",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter search criteria as \"Port Royal\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see search results having only \"1\" containing \"Port Royal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.i_go_to_Search_Islands_website()"
});
formatter.result({
  "duration": 1042768400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Port Royal",
      "offset": 28
    }
  ],
  "location": "Search_Steps.i_enter_search_criteria_as(String)"
});
formatter.result({
  "duration": 167657700,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.i_click_on_Search_button()"
});
formatter.result({
  "duration": 68637600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    },
    {
      "val": "Port Royal",
      "offset": 56
    }
  ],
  "location": "Search_Steps.i_should_see_search_results_having_only_containing(String,String)"
});
formatter.result({
  "duration": 718358100,
  "error_message": "java.lang.AssertionError: expected [1] but found [1]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:442)\r\n\tat stepDefinitions.Search_Steps.i_should_see_search_results_having_only_containing(Search_Steps.java:126)\r\n\tat ✽.Then I should see search results having only \"1\" containing \"Port Royal\"(Search.feature:35)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_csharp_search/862b0faa506b8487c25a3384cfde8af4/static/attachments/reference_page.html");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1031126500,
  "status": "passed"
});
});