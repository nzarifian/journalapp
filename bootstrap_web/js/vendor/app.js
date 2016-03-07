
$(document).ready(function () {
// this is triggered by button "submit" in the form
	$(".theform").submit(function (event){
		event.preventDefault();
		// included so form doesn't refresh page
		var form = $(".theform");
		// grabs form and stores it as variable
		myJournal.addEntry(form);
		myJournal.displayEntries();
	});
// search button
	$(".tfbutton").click(function (event){
		event.preventDefault();
		var searchform = $(".search");
		myJournal.searching(searchform);

	});
// delete button
$(".theJournal").on("click",".btn1",function(){
		//this looks at the specif button that was clicked and grabs the data-index attribute value
		var deletePoint = $(this).attr("data-index");
		myJournal.entries.splice(deletePoint, 1);
		myJournal.displayEntries();

	})

	myJournal.displayEntries();

});

// variables
var myJournal = new Journal();

// classes/constructor functions
function Journal(){
	this.entries = [];
}


function Entry (title, author, content, tag, time){
	this.title = title;
	this.author = author;
	this.content = content;
	this.tag = tag;
	this.time = time;
}

// prototypes

Journal.prototype.addEntry = function(frm){
	// grabs the input values from each form input field
	var title = frm.find("input[name='title']").val();
	// var title = $(".theform").find("input[name='title']").val();
	var author = frm.find("input[name='author']").val();
	var content = frm.find("textarea[name='content']").val();
	var tag = frm.find("input[name='tag']").val();
	tag = tag.split(', ');
	var time = new Date();
// makes new entry with inputs
	var entry = new Entry(title, author, content, tag, time);

	//adds(pushes)entry to our Journal entries array
	this.entries.unshift(entry);
};

Journal.prototype.displayEntries = function() {

	var n = this.entries.length;
	var html = "";
// this loop loops over array and uses "i" to access the index of the array
	for(var i = 0; i < n ;i++){
		// adds all of the html to a string
		html+="<div class = 'entrystyle'>";
		html+= "<h2> Title: " + this.entries[i].title + "</h2>";
		html+= "<h3> Author: " + this.entries[i].author + "</h3>";
		html+= "<p>" + this.entries[i].content + "</p>";
		html+= "<h4> Tag: " + this.entries[i].tag + "</h4>";
		html+= "<p>" + this.entries[i].time + "</p>";
		html+= "<button class='btn1' data-index = "+i+">delete</button>";
		html+= "</div></section>"
	}
	// html = "<h1>Title</h1><h2>subtitle</h2>"
	// injects our string html into our index file at theJournal class element
	$(".theJournal").html(html);
};


var Entry1 = new Entry("Today was Fun!", "Me", "What a fun day...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "fun, happy, warm", "January 4, 2016");
myJournal.entries.push(Entry1);
var Entry2 = new Entry("Today was Cold", "Me", "What a cold day...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "cold, sad", "January 3, 2016");
myJournal.entries.push(Entry2);
var Entry3 = new Entry("Today was Great!", "Me", "What a great day...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "amazing, great, fun", "January 2, 2016");
myJournal.entries.push(Entry3);
var Entry3 = new Entry("Today was Lame", "Me", "What a lame day...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "lame, stupid, annoying", "January 1, 2016");
myJournal.entries.push(Entry3);

// search
Journal.prototype.searching = function(form){
		// declare variable representing users input
	var title = form.find("input[name='searchbtn']").val();
	var html = "";
	// search through all indexes in my entries array (loop)
	
	for(var i = 0; i < this.entries.length; i++){
	// conditional that represents finding a match to my users input
	
		if (this.entries[i].title==title){
			// create HTML variable representing data injection
			html+="<div class = 'entrystyle'>";
			html+= "<h2> Title: " + this.entries[i].title + "</h2>";
			html+= "<h3> Author: " + this.entries[i].author + "</h3>";
			html+= "<p>" + this.entries[i].content + "</p>";
			html+= "<h4> Tag: " + this.entries[i].tag + "</h4>";
			html+= "<p>" + this.entries[i].time + "</p>";
			html+= "<button class='btn1' data-index = "+i+">delete</button>";
			html+= "</div></section>";
		}
		$(".theJournal").html(html);
	}
}		
	// inject data

		