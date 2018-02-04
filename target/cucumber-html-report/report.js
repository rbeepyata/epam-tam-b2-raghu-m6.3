$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ebay/AddToCart.feature");
formatter.feature({
  "line": 2,
  "name": "ebay Add to Cart.",
  "description": "",
  "id": "ebay-add-to-cart.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ebay"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the website \"https://www.ebay.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com/",
      "offset": 25
    }
  ],
  "location": "AddToCartStepDef.launchApplication(String)"
});
formatter.result({
  "duration": 3515737169,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Search and Add to Cart",
  "description": "",
  "id": "ebay-add-to-cart.;search-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User search for an item \"Nokia 3310 red\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User selects the First Item listed",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User adds the item to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify Item is succesfully added to cart",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia 3310 red",
      "offset": 25
    }
  ],
  "location": "AddToCartStepDef.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 3861359585,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStepDef.selectFirstListedItem()"
});
formatter.result({
  "duration": 7108394599,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStepDef.addFirstListedItem()"
});
formatter.result({
  "duration": 3499687403,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStepDef.VerifyItemIsAdded()"
});
formatter.result({
  "duration": 101751301,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Search and Add multiple Items to Cart",
  "description": "",
  "id": "ebay-add-to-cart.;search-and-add-multiple-items-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User search for an item \"\u003cMobile\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User selects the First Item listed",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User adds the item with \"\u003cColor\u003e\" color and \"\u003cRam\u003e\" RAM to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify Item is succesfully added to cart",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "ebay-add-to-cart.;search-and-add-multiple-items-to-cart;",
  "rows": [
    {
      "cells": [
        "Mobile",
        "Color",
        "Ram"
      ],
      "line": 21,
      "id": "ebay-add-to-cart.;search-and-add-multiple-items-to-cart;;1"
    },
    {
      "cells": [
        "IPhone 6",
        "Silver",
        "16GB"
      ],
      "line": 22,
      "id": "ebay-add-to-cart.;search-and-add-multiple-items-to-cart;;2"
    },
    {
      "cells": [
        "Iphone 7",
        "Black",
        "128GB"
      ],
      "line": 23,
      "id": "ebay-add-to-cart.;search-and-add-multiple-items-to-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the website \"https://www.ebay.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com/",
      "offset": 25
    }
  ],
  "location": "AddToCartStepDef.launchApplication(String)"
});
formatter.result({
  "duration": 2027178305,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search and Add multiple Items to Cart",
  "description": "",
  "id": "ebay-add-to-cart.;search-and-add-multiple-items-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ebay"
    },
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User search for an item \"IPhone 6\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User selects the First Item listed",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User adds the item with \"Silver\" color and \"16GB\" RAM to cart",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify Item is succesfully added to cart",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "IPhone 6",
      "offset": 25
    }
  ],
  "location": "AddToCartStepDef.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 7444238377,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStepDef.selectFirstListedItem()"
});
formatter.result({
  "duration": 4938860416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 25
    },
    {
      "val": "16GB",
      "offset": 44
    }
  ],
  "location": "AddToCartStepDef.addFirstListedItem(String,String)"
});
formatter.result({
  "duration": 3353005593,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStepDef.VerifyItemIsAdded()"
});
formatter.result({
  "duration": 79771343,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launch the website \"https://www.ebay.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com/",
      "offset": 25
    }
  ],
  "location": "AddToCartStepDef.launchApplication(String)"
});
formatter.result({
  "duration": 1629621514,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search and Add multiple Items to Cart",
  "description": "",
  "id": "ebay-add-to-cart.;search-and-add-multiple-items-to-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ebay"
    },
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User search for an item \"Iphone 7\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User selects the First Item listed",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User adds the item with \"Black\" color and \"128GB\" RAM to cart",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify Item is succesfully added to cart",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone 7",
      "offset": 25
    }
  ],
  "location": "AddToCartStepDef.iSetSearchRequest(String)"
});
formatter.result({
  "duration": 3602507469,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStepDef.selectFirstListedItem()"
});
formatter.result({
  "duration": 4334282801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 25
    },
    {
      "val": "128GB",
      "offset": 43
    }
  ],
  "location": "AddToCartStepDef.addFirstListedItem(String,String)"
});
formatter.result({
  "duration": 3281322501,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStepDef.VerifyItemIsAdded()"
});
formatter.result({
  "duration": 95376199,
  "status": "passed"
});
});