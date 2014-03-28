// Start function when DOM has completely loaded 
$(document).ready(function(){ 

    // Open the everypage.xml file
    $.get("everypage.xml",{},function(xml){
        
        // Build an HTML string
            var myHTMLOutput = '';
            var myHTMLsOutput = ''; //currently not being used
            var totalNumFigures = 0;
            var i = 0;
            var j = 0;
            var k = 0;


        // Run the function for each chapter tag in the XML file
        $('chapter',xml).each(function(i) {
            var chapterName = $(this).find("cname").text(); // Grabs the Chapter name and stores it
            var chapterPath = $(this).find("cpath").text(); // Grabs the Chapter path and stores it
            
            // Build row HTML data and store in string
            mydata = BuildChaptersHTML(chapterName, chapterPath, i); // Builds the HTML see function below // (i=chapter number)
            myHTMLOutput = myHTMLOutput + mydata; // concatenates the text current myHTMLOutput

           
            
                 // Run the function for each section tag in (chapter i?) the XML file
                $('section',xml).each(function(j){
                    
                    //if(numberofsectionslimit has been reached) { break;}
                    //else{ vvv }
                    

                    var sectionName = $(this).find("sname").text(); // Grabs the Section Name and stores it
                    var sectionPath = $(this).find("spath").text(); // Grabs the Seciton Path and stores it
                    var sectionNumFigures = Number($(this).find("snumfigures").text());
                    totalNumFigures = totalNumFigures + sectionNumFigures;

                    // Build row HTML data and store in string
                    mydata = BuildSectionsHTML(sectionName, sectionPath, sectionNumFigures, totalNumFigures, i, j);
                    myHTMLOutput = myHTMLOutput + mydata;
                
                }); // End of <sections> roll through function
            //}); // End of <sections> roll through function
        }); // End of <chapter> roll through
        
        // begin, end just adds an 'overall' class to function with the exapand and collaspe buttons on section table of ocntents
        var begin = '<ul class="archive_year">';
        var end = '</ul>'
        myHTMLOutput = begin + myHTMLOutput + end;

        // Update the DIV called Content Area with the HTML string
        $("#ContentAreaSections").append(myHTMLOutput);

    }); // End of $.get("everypage.xml",{},function(xml) 
}); // End of $(document).ready(function()
 
 
 
// function BuildChaptersHTML(chapterName, chapterPath, totalNumFigures, i){
function BuildChaptersHTML(chapterName, chapterPath, i){
    
    // Check to see if their is a "post" attribute in the name field
    
    // Build chapters HTML string and returns it
    output = '';
    output += '<a href=' + chapterPath + '>';
    output += '<li id="years"> Chapter ' + ++i + ': ' + chapterName + '</li>';
    output += '</a>';
    return output;
}

 function BuildSectionsHTML(sectionName, sectionPath, sectionNumFigures, totalNumFigures, i, j){
    
    
    
    // Build sections HTML string and return its
    output = '';
    output += '<ul class="archive_month">';
    output += '<li id="months"><a href=' + sectionPath + '>' + ++i + '.' + ++j + ' ' + sectionName + '<span class="pull-right"> | totalFigs = ' + totalNumFigures + ' |</span><span class="pull-right">  | numFigs = ' + sectionNumFigures + ' |</span></a></li>';
    output += '</ul>';
    return output;
}

/*function getNext(p){

    return pathArray[p++];

}

function getPrev(p){
    
    return pathArray[p--];

}*/


