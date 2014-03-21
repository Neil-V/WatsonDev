
// Start function when DOM has completely loaded 
$(document).ready(function()
{ 

    // Open the everypage.xml file
    $.get("everypage.xml",{},function(xml)
    {
        
        // Build an HTML string
            var myHTMLOutput = '';
            var i = 0;

        // Run the function for each student tag in the XML file
        $('chapter',xml).each(function(i) 
        {
            var chapterName = $(this).find("cname").text();
            var chapterPath = $(this).find("cpath").text();
            
            // Build row HTML data and store in string
            mydata = BuildChaptersHTML(chapterName, chapterPath, i);
            myHTMLOutput = myHTMLOutput + mydata;
        });
        
        // Update the DIV with id="ContentArea" with the HTML string
        $("#ContentArea").append(myHTMLOutput);
    });
});
 
 
 
function BuildChaptersHTML(chapterName, chapterPath, i)
{

    // Build HTML string and return
    output = '';
    output += '<a href=' + chapterPath + '>';
    output += '<li class="archive_year"> Chapter ' + ++i + ': ' + chapterName + '</li>';
    output += '</a>';

    return output;
}
     