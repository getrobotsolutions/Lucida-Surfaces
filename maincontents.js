conf_count = 0;
        var jokes = new Array( );
        jokes[1]="Why do I get so angry? Because people keep pushing my buttons!";
        jokes[2]="What is my favorite type of music? Heavy metal";
        jokes[3]="Why was I feeling bad? I had a virus";
        jokes[4]="Why did I go to the mall? Because I had hardware and software but needed underwear";
        jokes[5]="Why was I so tired when I got here? I had a hard drive";
        jokes[6]="Why did I cross the road? I was programmed by a chicken";
        jokes[7]="Why can’t bad programmers drive well? They can’t C sharp";
        jokes[8]="Want to know my favorite drink? It’s a screwdriver";
        jokes[9]="Want to know my favorite dance? It’s the robot";

        var speak = new Array( );
        speak[0] = "";
        speak[1] = "Take a picture with me.";
        speak[2] = "Pick a song and let's boogie.";
        speak[3] = "Become a robot.";
        speak[4] = "see our pictures from today on our slack channel";
        speak[5] = "";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I’m Tracey, welcome to the Novartis booth. Please click around on my screen and then speak to my smart human friends in the booth.");
            break;
        case "Home":
            //writeCookie("NavigationState", true, 30);
           location.href = "../../maincontents.htm";
           break;

        case "MatchGame":
            //writeCookie("NavigationState", true, 30);
           location.href = "Contents/MatchGame/index.html";
           break;

        case "Selfie":
            location.href = "Contents/Selfie/index.html";
            PlaySpeech(speak[1]);
            break;

        case "Dance":
            location.href = "Contents/Dance/index.html";
            PlaySpeech(speak[2]);
            break;

            case "Slides":
            location.href = "Contents/Slides/index.html";
           /* PlaySpeech(speak[2]); */
            break;

        case "Avatar":
            location.href = "Contents/RobotAvatar/index.htm";
            PlaySpeech(speak[3]);
            break;

        case "SlackChannel":
            location.href = "Contents/slackScreen/index.htm";
            PlaySpeech(speak[4]);
            break;Rental

        case "OurPhotos":
            location.href = "Contents/Photos/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "Rental":
            location.href = "Contents/Rental/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "RentalSlide":
            location.href = "../RentalSlide/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "RentalVideo":
            location.href = "../RentalVideo/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "BackToRental":
            location.href = "../Rental/index.html";
            //PlaySpeech(speak[5]);
            break;
        
        
        
            
        case "Config":
            if(conf_count === 3)
            {
                conf_count = 0;
                location.href = "Contents/Config/Config.htm";
            }
            else
            {
                conf_count++;
                console.log(conf_count);
            }

            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the BWl Airport. Please press a button on my screen to begin.");
}


function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}
function ShowPopupForm(productName){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '0px!important';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({}).show();
    $('#dialog-box').css({top:dialogTop}).show();
    document.getElementById('dialog-box').style.display = "block";
   // document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';

   switch(productName){
     case "product1":
      document.getElementById('popupimage').src = ''
      document.getElementById('popupimage').src = 'assets/popup/product1.jpg'
            //PlaySpeech(speak[5]);
            break;

      case "product2":
      document.getElementById('popupimage').src = ''
      document.getElementById('popupimage').src = 'assets/popup/product2.jpg'
            //PlaySpeech(speak[5]);
            break;


    case "product3":
      document.getElementById('popupimage').src = ''
      document.getElementById('popupimage').src = 'assets/popup/product3.jpg'
            //PlaySpeech(speak[5]);
            break;      

    case "product4":
      document.getElementById('popupimage').src = ''
      document.getElementById('popupimage').src = 'assets/popup/product4.jpg'
            //PlaySpeech(speak[5]);
            break;

    case "product5":
      document.getElementById('popupimage').src = ''
      document.getElementById('popupimage').src = 'assets/popup/product5.jpg'
            //PlaySpeech(speak[5]);
            break;

    case "product6":
      document.getElementById('popupimage').src = ''
      document.getElementById('popupimage').src = 'assets/popup/product6.jpg'
            //PlaySpeech(speak[5]);
            break;

    case "product7":
      document.getElementById('popupimage').src = ''
      document.getElementById('popupimage').src = 'assets/popup/product7.jpg'
            //PlaySpeech(speak[5]);
            break;

    case "product8":
      document.getElementById('popupimage').src = ''
      document.getElementById('popupimage').src = 'assets/popup/product8.jpg'
            //PlaySpeech(speak[5]);
            break;

   }


}



$(document).ready(function(){

    //$('.navigation').hide();
    /*$('.get-started').click(function(){
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
        
    });
    if (readCookie("NavigationState")) {
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
    }
    $('.close-menu').click(function(){
        $('.navigation').hide();
        $('.welcome-text, .get-started, footer').show();
        writeCookie("NavigationState", false, 30);
    });*/
    

    $('.close1').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        document.getElementById('popupimage').src = '';
        return false;
    });

  


});

function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
           // window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Take a picture with me");     
    }

    if(btn_info[1] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Hi, I'm Tracey the robot, nice to meet you.");
        
    }
    if(btn_info[2] == '1'){
        //window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Wouldn't I be fun at your next event?");
    }
    if(btn_info[3] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
       window.external.PlaySpeech("Want to see me dance?");
        
    }
    if(btn_info[4] == '1'){
        FC_ContentsCall('Config');       
    }
}