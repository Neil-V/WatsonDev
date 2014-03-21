// File: readXML.js

// Start function when DOM has completely loaded 
$(document).ready(function(){ 

    // Open the students.xml file
    $.get("everypag.xml",{},function(xml){
        
        // Build an HTML string
            var myHTMLOutput = '';
            var i = 0;

        // Run the function for each student tag in the XML file
        $('chapter',xml).each(function(i) {
            var chapterName = $(this).find("name").text();
            var chapterPath = $(this).find("path").text();
            
            // Build row HTML data and store in string
            mydata = BuildChapter_TocHTML(chapterName, chapterPath, i);
            myHTMLOutput = myHTMLOutput + mydata;
        });
        
        // Update the DIV called Content Area with the HTML string
        $("#ContentArea").append(myHTMLOutput);
    });
});
 
 
 
 function BuildChapter_TocHTML(chapterName, chapterPath, i){
    
    // Check to see if their is a "post" attribute in the name field
    
    // Build HTML string and return
    output = '';
    output += '<a href=' + chapterPath + '>';
    output += '<li> Chapter ' + ++i + ': ' + chapterName + '</li>';
    output += '</a>';
    return output;
}
     