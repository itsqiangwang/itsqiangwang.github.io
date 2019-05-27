$(document).ready(function () {
          setTimeout(function () {
               
                $('a[href]#no-link').each(function () {
                    var href = this.href;
    
                    $(this).removeAttr('href').css('cursor', 'pointer').click(function () {
                        if (href.toLowerCase().indexOf("#") >= 0) {
    
                        } else {
                            window.open(href, '_self');
                        }
                    });
                });
    
          }, 500);
    
    setTimeout(function () {
               
                $('a[href]#no-link-blank').each(function () {
                    var href = this.href;
    
                    $(this).removeAttr('href').css('cursor', 'pointer').click(function () {
                        if (href.toLowerCase().indexOf("#") >= 0) {
    
                        } else {
                            window.open(href, '_blank');
                        }
                    });
                });
    
          }, 500);
            
          $('#indexButton').click (function() {
            if ($('#indexContainer').css('opacity') == 0) {
                $('#indexContainer').css({"opacity":"1", "visibility":"visible", "z-index":"1"});
                $('#Inde').css({"opacity":"0", "visibility":"hidden"});
                $('#x').css({"transform":"scale(2) translateX(-2pt)"});
                $('#bioContainer').css({"opacity":"0", "visibility":"hidden"});
                $('#who').css({"opacity":"1", "visibility":"visible"});
                $('#whoX').css({"opacity":"0", "visibility":"hidden", "transform":"scale(1) translateX(0pt)"});
            }
            else{
                $('#indexContainer').css({"opacity":"0", "visibility":"hidden", "z-index":"-1"}); 
                $('#Inde').css({"opacity":"1", "visibility":"visible", "display":"inline-block"});
                $('#x').css({"transform":"scale(1)"});
            }
          });
            
          $('#whoButton').click (function() {
            if ($('#bioContainer').css('opacity') == 0) {
                $('#bioContainer').css({"opacity":"1", "visibility":"visible", "z-index":"1"});
                $('#who').css({"opacity":"0", "visibility":"hidden"});
                $('#whoX').css({"opacity":"1", "visibility":"visible", "transform":"scale(2) translateX(-12pt)"});
                $('#indexContainer').css({"opacity":"0", "visibility":"hidden"}); 
                $('#Inde').css({"opacity":"1", "visibility":"visible", "display":"inline-block"});
                $('#x').css({"transform":"scale(1)"});
            }
            else{
                $('#bioContainer').css({"opacity":"0", "visibility":"hidden", "z-index":"-1"});
                $('#who').css({"opacity":"1", "visibility":"visible"});
                $('#whoX').css({"opacity":"0", "visibility":"hidden", "transform":"scale(1) translateX(0pt)"});
            }
          });
});