package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import java.util.List;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Search_PO extends BaseClass{

	public Search_PO(WebDriver driver){
		super(driver);
	}    

	//view_container
	
	@FindBy(how= How.ID, using="search-button")
	public static WebElement searchButton;

	@FindBy(how= How.ID, using="search-input")
	public static WebElement searchBox;

	@FindBy(how= How.ID, using="search-results")
	public static WebElement resultsContainer;

	@FindBy(how= How.ID, using="error-no-results")
	public static WebElement noResults;

	@FindBy(how= How.ID, using="error-empty-query")
	public static WebElement errorEmpty;





	public static boolean searchButtonExists() {
		WebDriverWait wait = new WebDriverWait(driver,30);
		try {
			wait.until(ExpectedConditions.visibilityOf(searchButton));
			return true;
		}catch(Exception e) {
			return false;
		}
		
	}


	public static boolean searchBoxExists() {
		WebDriverWait wait = new WebDriverWait(driver,30);
		try {
			wait.until(ExpectedConditions.visibilityOf(searchBox));
			return true;
		}catch(Exception e) {
			return false;
		}

	}
	
		

	 public static void clickSearch() {
		 searchButton.click();
		 
	 }

	 public static void enterSearchCriteria(String searchCriteria){
		searchBox.clear();
		searchBox.sendKeys(searchCriteria);
	 }



	public static boolean checkifResultshasText(String searchCriteria){
		WebDriverWait wait = new WebDriverWait(driver,30);
		boolean textFound = false;

		wait.until(ExpectedConditions.visibilityOf(resultsContainer));

		List<WebElement> allOptions = resultsContainer.findElements(By.tagName("li"));

			for(WebElement element: allOptions){
				System.out.println(element.getText());
				if(element.getText().contains(searchCriteria));
				textFound = true;
			}

		return textFound;
	}


	public static boolean emptyErrorMessage(String searchCriteria){
		WebDriverWait wait = new WebDriverWait(driver,30);
		boolean textFound = false;
		wait.until(ExpectedConditions.visibilityOf(resultsContainer));
		if(errorEmpty.getText().contains(searchCriteria)){
			textFound = true;
		}
		return textFound;
	}

	public static boolean noResultsErrorMessage(String searchCriteria){
		WebDriverWait wait = new WebDriverWait(driver,30);
		boolean textFound = false;
		wait.until(ExpectedConditions.visibilityOf(resultsContainer));
		if(noResults.getText().contains(searchCriteria)){
			textFound = true;
		}
		return textFound;
	}




	public static int getResultsCount(){
		WebDriverWait wait = new WebDriverWait(driver,30);

		wait.until(ExpectedConditions.visibilityOf(resultsContainer));

		List<WebElement> allOptions = resultsContainer.findElements(By.tagName("li"));
		System.out.println(allOptions.size());
		return allOptions.size();

	}
	
	 
	 public static boolean isSearchPageVisible() {
			WebDriverWait wait = new WebDriverWait(driver,30);
			try {
				wait.until(ExpectedConditions.visibilityOf(searchButton));
				return true;
			}catch(Exception e) {
				return false;
			}
			
		}
	 

	 
}
		

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	