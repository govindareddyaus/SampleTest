Feature: Search IsLands
  As a user I should be able to search IsLands successfully

  Scenario: Search Islands
    Given I go to Search Islands website
    When I am on the Search Islands website
    Then I should see Search Box
    And I should see Search Button

  Scenario: Search Islands
    Given I go to Search Islands website
    When I enter search criteria as "Isla"
    And I click on Search button
    Then I should see search results containing "Isla"

  Scenario: Search Islands with No Text
    Given I go to Search Islands website
    When I enter search criteria as " "
    And I click on Search button
    Then I should see search results with empty error message "Provide some query"



  Scenario: Search Islands with no such Islands
    Given I go to Search Islands website
    When I enter search criteria as "Castle"
    And I click on Search button
    Then I should see search results with error message "No results"


  Scenario: Search Islands with definite count of Results
    Given I go to Search Islands website
    When I enter search criteria as "Port Royal"
    And I click on Search button
    Then I should see search results having only "1" containing "Port Royal"



  