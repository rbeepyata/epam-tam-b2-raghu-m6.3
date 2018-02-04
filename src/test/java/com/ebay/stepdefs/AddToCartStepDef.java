package com.ebay.stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;

import com.ebay.pages.SearchResultPage;
import com.ebay.pages.ShoppingCartPage;

public class AddToCartStepDef extends BaseStepDef {

	SearchResultPage resultsPage;
	ShoppingCartPage cartPage;

	@Given("^User launch the website \"([^\"]*)\"$")
	public void launchApplication(String url) {
		driver.get(url);
	}

	@Given("^User search for an item \"([^\"]*)\"$")
	public void iSetSearchRequest(String searchRequest) {
		resultsPage = new SearchResultPage(driver);
		resultsPage.searchFor(searchRequest);
	}

	@Then("^User selects the First Item listed$")
	public void selectFirstListedItem() throws Throwable {
		cartPage = resultsPage.selectFirstResultItem();
	}

	@Then("^User adds the item to cart$")
	public void addFirstListedItem() throws Throwable {
		try {
			cartPage.clickOnAddToCart();
		} catch (NoSuchElementException e) {
			Assert.fail("Item is not in Stock");
		}
	}

	@Then("^User adds the item with \"([^\"]*)\" color and \"([^\"]*)\" RAM to cart$")
	public void addFirstListedItem(String Color, String Memory) throws Throwable {
		try {
			cartPage.clickOnAddToCart(Color, Memory);
		} catch (NoSuchElementException e) {
			Assert.fail("Item with the given variant is not in Stock");
		}
	}

	@Then("^Verify Item is succesfully added to cart$")
	public void VerifyItemIsAdded() throws Throwable {
		Assert.assertTrue("Item Added To Cart", cartPage.verifyItemAddedToCart());
	}

}
