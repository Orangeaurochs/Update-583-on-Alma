javascript:(function() {
  var collections = { none:"",
                      education:"ioe",
				instituteofeducation:"ioe",
				ioe:"ioe",
				slavoniceasteuropeanstudies:"ssees",
				ssees:"ssees",
				slavonicandeasteuropeanstudies:"ssees",
				archaeology:"archaeology",
				archeology:"archaeology",
				ioa:"archaeology",
				instarch:"archaeology",
				scand:"scandinavian",
				scandi:"scandinavian",
				scandinavian:"scandinavian",
				scandinavianstudies:"scandinavian",
				hebrewjewishstudies:"hebrewandjewish",
				hebrewstudies:"hebrewandjewish",
				jewishstudies:"hebrewandjewish",
				hebrew:"hebrewandjewish",
                      jewish:"hebrewandjewish",
                      handj:"hebrewandjewish",
                      hs:"hebrewandjewish",
                      poetrystore:"poetrystore",
                      poetry:"poetrystore",
				ps:"poetrystore",
				neurology:"neurology",
				instituteofneurology:"neurology",
				ion:"neurology",
				pharmacy:"pharmacy",
				schoolofpharmacy:"pharmacy",
				sop:"pharmacy"};

var getActiveElement = function (element = document.activeElement) {
  var shadowRoot = element.shadowRoot ;
  var contentDocument = element.contentDocument;
  if (shadowRoot && shadowRoot.activeElement) {
    return getActiveElement(shadowRoot.activeElement);
  };
  if (contentDocument && contentDocument.activeElement) {
    return getActiveElement(contentDocument.activeElement);
  };
  return element;
};

  var activeEl=getActiveElement();

  var padding = function (number) {
    var strno = "";
    if (number < 10) {
      strno+= "0" + number.toString();
    }
    else {
      strno+=number.toString();
    }
    return strno;
  };

  var five83El = activeEl;
  var five83text = five83El.value;
  var dateNow = new Date();
  var todaysDate = "sgl" + padding(dateNow.getMonth()+1) + padding(dateNow.getDate());
  var reviewYear = padding(dateNow.getFullYear()+20);
  var reviewMonth = padding(dateNow.getMonth()+1);
  var reviewDate = " " + reviewYear + reviewMonth;
  if (five83text.match (/^\$\$a ?$/)) {
    var fieldContents ="$$a NBK-R $$c" + reviewDate + " $$5 UkLUC";
    var coll = prompt("Please enter a collection name (e.g. education) or abbreviation (e.g. ioe). Leave blank if no collection is to be assigned.");
    coll = coll.toLowerCase();
    coll = coll.replace(/[^a-zA-Z]/gi,"");
    var thistag = "";
    if (collections[coll]) {thistag = collections[coll]};
    if (thistag) {
      fieldContents+=" $$x "+thistag;
    }
    var new583text = fieldContents;
    five83El.value = new583text;
  }
  else {alert ("The 583 needs to be blank, starting $$a")};
  var event = new Event('change');
  five83El.dispatchEvent(event);

})();