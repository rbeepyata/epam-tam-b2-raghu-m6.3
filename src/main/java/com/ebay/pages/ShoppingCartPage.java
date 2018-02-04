package com.ebay.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ShoppingCartPage {

	WebDriver driver;

	@FindBy(how = How.ID, using = "isCartBtn_btn")
	private WebElement addToCartButton;

	@FindBy(how = How.NAME, using = "Color")
	private WebElement colorDropDown;

	@FindBy(how = How.NAME, using = "Storage Capacity")
	private WebElement memoryDropDown;

	@FindBy(how = How.XPATH, using = ".//*[contains(text(),'was just added to your cart.')]")
	private WebElement itemAddedMessage;

	public ShoppingCartPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public ShoppingCartPage clickOnAddToCart(String color, String memory) {
		(new WebDriverWait(driver, 10)).until(ExpectedConditions.visibilityOf(addToCartButton));
		Select colorSelect = new Select(colorDropDown);
		Select MemorySelect = new Select(memoryDropDown);

		colorSelect.selectByVisibleText(color);
		MemorySelect.selectByVisibleText(memory);
		clickOnAddToCart();
		return this;
	}

	public ShoppingCartPage clickOnAddToCart() {
		if (addToCartButton.isDisplayed())
			addToCartButton.click();
		return this;
	}

	public boolean verifyItemAddedToCart() {
		return itemAddedMessage.isDisplayed();
	}

}
