//everything is located in function loaded(), this function is called as page loaded, or any value changes on the page
function loaded() {

// daily energy, kcal
var energy = 2000;
// daily energy from fat, kcal
var energyFromFat = energy*0.75;
// daily energy from protein, kcal
var energyFromProtein = energy*0.2;
//daily energy from carbs, kcal
var energyFromCarbs = energy*0.05;
// daily fiber, g


// items nutrients content / 100 g, e: energy(kcal), f: fat(g), p: protein(g), c: carb(g), fi: fiber(g)
// empty sample: {e:, f:, p:, c:}, other sample: var tomato = {e:15, f:0.3, p:1, c:3}
// seafoods
var salmon = {e:127, f:4.4, p:21, c:0}; //Fish, raw, pink, salmon
var sardine = {e:208, f:11, p:25, c:0}; //Fish, drained solids with bone, canned in oil, Atlantic, sardine
var mackerel = {e:305, f:25, p:19, c:0}; //Fish, salted, mackerel
var tuna = {e:198, f:8.2, p:29, c:0}; //Fish, drained solids, canned in oil, light, tuna

// vegetables
var kale = {e:49, f:0.9, p:4.3, c:8.8};
var broccoli = {e:34, f:0.1, p:2.8, c:6.6};
var cauliflower = {e:25, f:0.3, p:1.9, c:5.5};
var zucchini = {e:17, f:0.3, p:1.2, c:3.1};
var spinach = {e:23, f:0.4, p:2.9, c:3.6};
var celery = {e:16, f:0.2, p:0.7, c:3};
var olive = {e:115, f:11, p:0.8, c:6.3};

// fruits
var blackberry = {e:43, f:0.5, p:1.4, c:9.6};
var blueberry = {e:57, f:0.3, p:0.7, c:14};
var raspberry = {e:52, f:0.7, p:1.2, c:12};
var strawberry = {e:32, f:0.3, p:0.7, c:7.7};

// seeds
var almond = {e:579, f:50, p:21, c:22};
var cashews = {e:553, f:44, p:18, c:30};
var pecan = {e:691, f:72, p:9.2, c:14};
var pistachios = {e:560, f:45, p:20, c:27};
var walnut = {e:619, f:59, p:24, c:9.6};
var chiaSeed = {e:486, f:31, p:17, c:42};
var pumpkinSeed = {e:559, f:49, p:30, c:11};
var sesameSeed = {e:573, f:50, p:18, c:23};

// oils
var coconutOil = {e:892, f:99, p:0, c:0};
var oliveOil = {e:884, f:100, p:0, c:0};

// meats
var beef = {e:198, f:13, p:19, c:0};
var chicken = {e:143, f:8.1, p:17, c:0};

// dairy
var cheese = {e:356, f:27, p:25, c:2.2};
var butter = {e:717, f:81, p:0.9, c:0.1};
var cream = {e:340, f:36, p:2.8, c:2.7};
var cottageCheese = {e:81, f:2.3, p:10, c:4.8};
var greekYoghurt = {e:97, f:5, p:9, c:4};

// etc
var egg = {e:143, f:9.5, p:13, c:0.7};
var darkChocolate = {e:558, f:44, p:15, c:17};
var cocoaPowder = {e:228, f:14, p:20, c:58};

// computing values
// the ENERGY computed from the the values given by the user
var xEnergy = Math.floor(
  document.getElementById("salmon").value*salmon.e/100 +
  document.getElementById("sardine").value*sardine.e/100  +
  document.getElementById("mackerel").value*mackerel.e/100 +
  document.getElementById("tuna").value*tuna.e/100 +
  document.getElementById("kale").value*kale.e/100 +
  document.getElementById("broccoli").value*broccoli.e/100 +
  document.getElementById("cauliflower").value*cauliflower.e/100 +
  document.getElementById("zucchini").value*zucchini.e/100 +
  document.getElementById("celery").value*celery.e/100 +
  document.getElementById("olive").value*olive.e/100 +
  document.getElementById("blackberry").value*blackberry.e/100 +
  document.getElementById("blueberry").value*blueberry.e/100 +
  document.getElementById("raspberry").value*raspberry.e/100 +
  document.getElementById("strawberry").value*strawberry.e/100 +
  document.getElementById("almond").value*almond.e/100 +
  document.getElementById("cashews").value*cashews.e/100 +
  document.getElementById("pecan").value*pecan.e/100 +
  document.getElementById("pistachios").value*pistachios.e/100 +
  document.getElementById("walnut").value*walnut.e/100 +
  document.getElementById("chiaSeed").value*chiaSeed.e/100 +
  document.getElementById("pumpkinSeed").value*pumpkinSeed.e/100 +
  document.getElementById("sesameSeed").value*sesameSeed.e/100 +
  document.getElementById("coconutOil").value*coconutOil.e/100 +
  document.getElementById("oliveOil").value*oliveOil.e/100 +
  document.getElementById("beef").value*beef.e/100 +
  document.getElementById("chicken").value*chicken.e/100 +
  document.getElementById("cheese").value*cheese.e/100 +
  document.getElementById("butter").value*butter.e/100 +
  document.getElementById("cream").value*cream.e/100 +
  document.getElementById("cottageCheese").value*cottageCheese.e/100 +
  document.getElementById("greekYoghurt").value*greekYoghurt.e/100 +
  document.getElementById("egg").value*egg.e/100 +
  document.getElementById("darkChocolate").value*darkChocolate.e/100 +
  document.getElementById("cocoaPowder").value*cocoaPowder.e/100);
  document.getElementById("energyGivenByUser").innerHTML = xEnergy + " kcal" + "<br>" + "total";


// FAT in g computed from the the values given by the user
var xFat = Math.floor(
  document.getElementById("salmon").value*salmon.f/100 +
  document.getElementById("sardine").value*sardine.f/100 +
  document.getElementById("mackerel").value*mackerel.f/100 +
  document.getElementById("tuna").value*tuna.f/100 +
  document.getElementById("kale").value*kale.f/100 +
  document.getElementById("broccoli").value*broccoli.f/100 +
  document.getElementById("cauliflower").value*cauliflower.f/100 +
  document.getElementById("zucchini").value*zucchini.f/100 +
  document.getElementById("celery").value*celery.f/100 +
  document.getElementById("olive").value*olive.f/100 +
  document.getElementById("blackberry").value*blackberry.f/100 +
  document.getElementById("blueberry").value*blueberry.f/100 +
  document.getElementById("raspberry").value*raspberry.f/100 +
  document.getElementById("strawberry").value*strawberry.f/100 +
  document.getElementById("almond").value*almond.f/100 +
  document.getElementById("cashews").value*cashews.f/100 +
  document.getElementById("pecan").value*pecan.f/100 +
  document.getElementById("pistachios").value*pistachios.f/100 +
  document.getElementById("walnut").value*walnut.f/100 +
  document.getElementById("chiaSeed").value*chiaSeed.f/100 +
  document.getElementById("pumpkinSeed").value*pumpkinSeed.f/100 +
  document.getElementById("sesameSeed").value*sesameSeed.f/100 +
  document.getElementById("coconutOil").value*coconutOil.f/100 +
  document.getElementById("oliveOil").value*oliveOil.f/100 +
  document.getElementById("beef").value*beef.f/100 +
  document.getElementById("chicken").value*chicken.f/100 +
  document.getElementById("cheese").value*cheese.f/100 +
  document.getElementById("butter").value*butter.f/100 +
  document.getElementById("cream").value*cream.f/100 +
  document.getElementById("cottageCheese").value*cottageCheese.f/100 +
  document.getElementById("greekYoghurt").value*greekYoghurt.f/100 +
  document.getElementById("egg").value*egg.f/100 +
  document.getElementById("darkChocolate").value*darkChocolate.f/100 +
  document.getElementById("cocoaPowder").value*cocoaPowder.f/100);
  document.getElementById("FatGivenByUser").innerHTML = xFat + " g" + "<br>" + " fat";

// PROTEIN in g computed from the the values given by the user
var xProtein = Math.floor(
    document.getElementById("salmon").value*salmon.p/100 +
    document.getElementById("sardine").value*sardine.p/100 +
    document.getElementById("mackerel").value*mackerel.p/100 +
    document.getElementById("tuna").value*tuna.p/100 +
    document.getElementById("kale").value*kale.p/100 +
    document.getElementById("broccoli").value*broccoli.p/100 +
    document.getElementById("cauliflower").value*cauliflower.p/100 +
    document.getElementById("zucchini").value*zucchini.p/100 +
    document.getElementById("celery").value*celery.p/100 +
    document.getElementById("olive").value*olive.p/100 +
    document.getElementById("blackberry").value*blackberry.p/100 +
    document.getElementById("blueberry").value*blueberry.p/100 +
    document.getElementById("raspberry").value*raspberry.p/100 +
    document.getElementById("strawberry").value*strawberry.p/100 +
    document.getElementById("almond").value*almond.p/100 +
    document.getElementById("cashews").value*cashews.p/100 +
    document.getElementById("pecan").value*pecan.p/100 +
    document.getElementById("pistachios").value*pistachios.p/100 +
    document.getElementById("walnut").value*walnut.p/100 +
    document.getElementById("chiaSeed").value*chiaSeed.p/100 +
    document.getElementById("pumpkinSeed").value*pumpkinSeed.p/100 +
    document.getElementById("sesameSeed").value*sesameSeed.p/100 +
    document.getElementById("coconutOil").value*coconutOil.p/100 +
    document.getElementById("oliveOil").value*oliveOil.p/100 +
    document.getElementById("beef").value*beef.p/100 +
    document.getElementById("chicken").value*chicken.p/100 +
    document.getElementById("cheese").value*cheese.p/100 +
    document.getElementById("butter").value*butter.p/100 +
    document.getElementById("cream").value*cream.p/100 +
    document.getElementById("cottageCheese").value*cottageCheese.p/100 +
    document.getElementById("greekYoghurt").value*greekYoghurt.p/100 +
    document.getElementById("egg").value*egg.p/100 +
    document.getElementById("darkChocolate").value*darkChocolate.p/100 +
    document.getElementById("cocoaPowder").value*cocoaPowder.p/100);
    document.getElementById("ProteinGivenByUser").innerHTML = xProtein + " g" + "<br>" + " protein";

// CARBS in g computed from the the values given by the user
var xCarbs = Math.floor(
      document.getElementById("salmon").value*salmon.c/100 +
      document.getElementById("sardine").value*sardine.c/100 +
      document.getElementById("mackerel").value*mackerel.c/100 +
      document.getElementById("tuna").value*tuna.c/100 +
      document.getElementById("kale").value*kale.c/100 +
      document.getElementById("broccoli").value*broccoli.c/100 +
      document.getElementById("cauliflower").value*cauliflower.c/100 +
      document.getElementById("zucchini").value*zucchini.c/100 +
      document.getElementById("celery").value*celery.c/100 +
      document.getElementById("olive").value*olive.c/100 +
      document.getElementById("blackberry").value*blackberry.c/100 +
      document.getElementById("blueberry").value*blueberry.c/100 +
      document.getElementById("raspberry").value*raspberry.c/100 +
      document.getElementById("strawberry").value*strawberry.c/100 +
      document.getElementById("almond").value*almond.c/100 +
      document.getElementById("cashews").value*cashews.c/100 +
      document.getElementById("pecan").value*pecan.c/100 +
      document.getElementById("pistachios").value*pistachios.c/100 +
      document.getElementById("walnut").value*walnut.c/100 +
      document.getElementById("chiaSeed").value*chiaSeed.c/100 +
      document.getElementById("pumpkinSeed").value*pumpkinSeed.c/100 +
      document.getElementById("sesameSeed").value*sesameSeed.c/100 +
      document.getElementById("coconutOil").value*coconutOil.c/100 +
      document.getElementById("oliveOil").value*oliveOil.c/100 +
      document.getElementById("beef").value*beef.c/100 +
      document.getElementById("chicken").value*chicken.c/100 +
      document.getElementById("cheese").value*cheese.c/100 +
      document.getElementById("butter").value*butter.c/100 +
      document.getElementById("cream").value*cream.c/100 +
      document.getElementById("cottageCheese").value*cottageCheese.c/100 +
      document.getElementById("greekYoghurt").value*greekYoghurt.c/100 +
      document.getElementById("egg").value*egg.c/100 +
      document.getElementById("darkChocolate").value*darkChocolate.c/100 +
      document.getElementById("cocoaPowder").value*cocoaPowder.c/100);
      document.getElementById("CarbsGivenByUser").innerHTML = xCarbs + " g" + "<br>" + " carbs";

// comparing User's values with reference values
if (xEnergy>1900 && xEnergy<2100) {document.getElementById("energyGivenByUser").style.backgroundColor = "rgb(46, 184, 46)";}
else {document.getElementById("energyGivenByUser").style.backgroundColor = "rgb(217, 217, 217)";}
if (xFat*9>xEnergy*0.7) {document.getElementById("FatGivenByUser").style.backgroundColor = "rgb(46, 184, 46)";}
else {document.getElementById("FatGivenByUser").style.backgroundColor = "rgb(217, 217, 217)";}
if (xProtein*4>xEnergy*0.2 && xProtein*4<xEnergy*0.3) {document.getElementById("ProteinGivenByUser").style.backgroundColor = "rgb(46, 184, 46)";}
else {document.getElementById("ProteinGivenByUser").style.backgroundColor = "rgb(217, 217, 217)";}
if (xCarbs*4<xEnergy*0.05) {document.getElementById("CarbsGivenByUser").style.backgroundColor = "rgb(46, 184, 46)";}
else {document.getElementById("CarbsGivenByUser").style.backgroundColor = "rgb(217, 217, 217)";}


if ((xEnergy>1900 && xEnergy<2100) && (xFat*9>xEnergy*0.7) && (xProtein*4>xEnergy*0.2 && xProtein*4<xEnergy*0.3) && (xCarbs*4<xEnergy*0.05))
    {document.getElementById("okay").style.display ="block";} else {document.getElementById("okay").style.display ="none";}
//closing function loaded()
}
 function showAboutKeto() {document.getElementById("aboutKeto").style.display ="block"; document.getElementById("book").style.display ="none";}
 function closeAboutKeto() {document.getElementById("aboutKeto").style.display ="none";}
 function openBook() {document.getElementById("book").style.display ="block"; document.getElementById("aboutKeto").style.display ="none";}
 function closeBook() {document.getElementById("book").style.display ="none";}
 function showMyMail() {document.getElementById("myMail").style.display ="inline"; setTimeout(closeMyMail, 10000);}
 function closeMyMail() {document.getElementById("myMail").style.display ="none";}
