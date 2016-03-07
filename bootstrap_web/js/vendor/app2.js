$(document).ready(function (){

// when user clocks the button = do something

	$(".theform").submit(function (event) {
		event.preventDefault();
		var frm = $(".theform");
		myJournal.addEntry(frm);
		myJournal.displayEntries();
	});

});

// variables
var myJournal = new Journal();


// classes/constructor functions
function Jounal (){
	this.entries [];

}

function Entry (title, author, content){
this.title = title1;
this.author = author;
this.content = content;
}

// prototypes
Journal.prototype.addEntry = function(frm) {
	var title = frm.find("input[name='title']").val();
	var author = frm.find("input[name='author']").val();
	var content = frm.find("textarea[name='title']").val();

	var entry = new Entry(title, author, content);

	this.entries.unshift(entry);

};

Journal.prototype.displayEntries = function(){

	var n = this.entries.length;
	var html = "";

	for(var 1 = 0; i < n;i++){

		html+= "<div class='eachEntry'>";
		html+= "<h2>" + this.entries[i].title + "</h2>";
		html+= "<h3>" + this.entries[i].author + "</h3>";
		html+= "<p>" + this.entries[i].content + "</h3>";
	}
	$(".theJournal").html(html);

};