package com.ebay.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.ebay.stepdefs.BaseStepDef;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true, 
	features = "src/test/resources", 
	glue = { "com.ebay.stepdefs" }, 
	plugin = { "pretty", "html:target/cucumber-html-report" }, 
	tags = { "@ebay", "@Regression" }

)
public class TestRunner {
	
	@BeforeClass
	public static void initSelenium() {
		BaseStepDef.init();
	}

	@AfterClass
	public static void closeSelenium() {
		BaseStepDef.close();
	}
	
}
