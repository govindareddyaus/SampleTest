package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import pageobjects.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Search_Steps {
    public WebDriver driver;
    
    public Search_Steps()
    {
    	driver = Hooks.driver;
    }
    
   


    @Given("^I go to Search Islands website$")
    public void i_go_to_Search_Islands_website() throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        driver.get("https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_csharp_search/862b0faa506b8487c25a3384cfde8af4/static/attachments/reference_page.html");
        Assert.assertTrue(Search_PO.isSearchPageVisible());

    }

    @When("^I am on the Search Islands website$")
    public void i_am_on_the_Search_Islands_website() throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        Assert.assertTrue(Search_PO.isSearchPageVisible());
    }

    @Then("^I should see Search Box$")
    public void i_should_see_Search_Box() throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        Assert.assertTrue(Search_PO.searchBoxExists());
    }

    @Then("^I should see Search Button$")
    public void i_should_see_Search_Button() throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        Assert.assertTrue(Search_PO.searchButtonExists());
    }

    @When("^I enter search criteria as \"([^\"]*)\"$")
    public void i_enter_search_criteria_as(String searchCriteria) throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        Search_PO.enterSearchCriteria(searchCriteria);

    }

    @When("^I click on Search button$")
    public void i_click_on_Search_button() throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        Search_PO.clickSearch();

    }

    @Then("^I should see search results containing \"([^\"]*)\"$")
    public void i_should_see_search_results_containing(String searchCriteria) throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        Assert.assertTrue(Search_PO.checkifResultshasText(searchCriteria));

    }

    @Then("^I should see search results having text \"([^\"]*)\"$")
    public void i_should_see_search_results_having_text(String searchCriteria) throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        Assert.assertTrue(Search_PO.checkifResultshasText(searchCriteria));

    }

    @Then("^I should see search results having only \"([^\"]*)\" containing \"([^\"]*)\"$")
    public void i_should_see_search_results_having_only_containing(String count, String criteria) throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
       Assert.assertEquals(Search_PO.getResultsCount(), count);
       Assert.assertTrue(Search_PO.checkifResultshasText(criteria));
    }

    @Then("^I should see search results with empty error message \"([^\"]*)\"$")
    public void i_should_see_search_results_with_empty_error_message(String errorMessage) throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        Assert.assertTrue(Search_PO.emptyErrorMessage(errorMessage));
    }

    @Then("^I should see search results with error message \"([^\"]*)\"$")
    public void i_should_see_search_results_with_error_message(String errorMessage) throws Throwable {
        PageFactory.initElements(driver, Search_PO.class);
        Assert.assertTrue(Search_PO.noResultsErrorMessage(errorMessage));
    }


}