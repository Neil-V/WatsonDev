// File: readXML.js

// Start function when DOM has completely loaded 
$(document).ready(function(){ 

    // Open the students.xml file
    $.get("everypage.xml",{},function(xml){
        
        // Build an HTML string
            var myHTMLOutput = '';
            var i = 0;
            var j = 0;

        // Run the function for each chapter tag in the XML file
        $('chapter',xml).each(function(i) {
            var chapterName = $(this).find("cname").text();
            var chapterPath = $(this).find("cpath").text();
            
            // Build row HTML data and store in string
            mydata = BuildChaptersHTML(chapterName, chapterPath, i);
            myHTMLOutput = myHTMLOutput + mydata;

            // Run the function for each section tag in (chapter i?) the XML file
            $('section',xml).each(function(j) {
            var sectionName = $(this).find("sname").text();
            var sectionPath = $(this).find("spath").text();
            var sectionNumFigures = $(this).find("snumfigures").text();

            // Build row HTML data and store in string
            mydata = BuildSectionsHTML(sectionName, sectionPath, i, j);
            myHTMLOutput = myHTMLOutput + mydata;
            });
        });
        
        // Update the DIV called Content Area with the HTML string
        $("#ContentAreaSections").append(myHTMLOutput);
    });
});
 
 
 
 function BuildChaptersHTML(chapterName, chapterPath, i){
    
    // Check to see if their is a "post" attribute in the name field
    
    // Build HTML string and return
    output = '';
    output += '<a href=' + chapterPath + '>';
    output += '<li class="archive_year"> Chapter ' + ++i + ': ' + chapterName + '</li>';
    output += '</a>';
    return output;
}

 function BuildSectionsHTML(sectionName, sectionPath, i, j){
    
    
    
    // Build HTML string and return
    output = '';
    output += '<ul class="archive_month">';
    output += '<li id="months"><a href=' + sectionPath + '>' + ++i + '.' + ++j + ' ' + sectionName + '</a></li>';
    output += '</ul>';
    return output;
}
