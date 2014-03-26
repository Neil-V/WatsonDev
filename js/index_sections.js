// Start function when DOM has completely loaded 
$(document).ready(function(){ 

    // Open the everypage.xml file
    $.get("everypage.xml",{},function(xml){
        
        // Build an HTML string
            var myHTMLOutput = '';
            var myHTMLsOutput = ''; //currently not being used
            var i = 0;
            var j = 0;
            var k = 0;


        // Run the function for each chapter tag in the XML file
        $('chapter',xml).each(function(i) {
            var chapterName = $(this).find("cname").text();
            var chapterPath = $(this).find("cpath").text();

            
            // Build row HTML data and store in string
            mydata = BuildChaptersHTML(chapterName, chapterPath, i);
            myHTMLOutput = myHTMLOutput + mydata;

            // Run the function for each section tag in (chapter i?) the XML file
            $('sections',xml).each(function(j){

                $('section',xml).each(function(j) {
                var sectionName = $(this).find("sname").text();
                var sectionPath = $(this).find("spath").text();
                var sectionNumFigures = $(this).find("snumfigures").text();

                // Build row HTML data and store in string
                mydata = BuildSectionsHTML(sectionName, sectionPath, sectionNumFigures, i, j);
                myHTMLOutput = myHTMLOutput + mydata;


                }); // End of <sections> roll through function
            }); // End of <sections> roll through function
        }); // End of <chapter> roll through
        
        // Update the DIV called Content Area with the HTML string
        begin = '<ul class="archive_year">';
        end = '</ul>'
        myHTMLOutput = begin+ myHTMLOutput + end;
        $("#ContentAreaSections").append(myHTMLOutput);

    }); // End of $.get("everypage.xml",{},function(xml) 
}); // End of $(document).ready(function()
 
 
 
 function BuildChaptersHTML(chapterName, chapterPath, i){
    
    // Check to see if their is a "post" attribute in the name field
    
    // Build HTML string and return
    output = '';
    output += '<a href=' + chapterPath + '>';
    output += '<li id="years"> Chapter ' + ++i + ': ' + chapterName + '</li>';
    output += '</a>';
    return output;
}

 function BuildSectionsHTML(sectionName, sectionPath, sectionNumFigures, i, j){
    
    
    
    // Build HTML string and return
    output = '';
    output += '<ul class="archive_month">';
    output += '<li id="months"><a href=' + sectionPath + '>' + ++i + '.' + ++j + ' ' + sectionName + '<span> numfigs = ' + sectionNumFigures + '</span></a></li>';
    output += '</ul>';
    return output;
}

/*function getNext(p){

    return pathArray[p++];

}

function getPrev(p){
    
    return pathArray[p--];

}*/

