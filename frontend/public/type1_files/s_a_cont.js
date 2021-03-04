var myApp=angular.module('myApp', ['ngSanitize']);

myApp.controller('QuizController',['$scope', '$window','$http','$timeout','QuizService',function($scope,$window ,$http, $timeout,QuizService){

		$scope.arrQuizDetail;	
		$scope.arrQuizQuestions;	
		$scope.tick=0;	
		$scope.userTimeTaken=0;	
		$scope.userSelectedAvtar=0;	
		$scope.enableAvtarSelection=0;	
		$scope.questionNo=0;
                $scope.questionNoDecreasing=0;
		$scope.maxQuestion;
		$scope.currentQuestion;
		$scope.currentQuestionIndex;
		$scope.userQuesIndex=[];
		$scope.allQuesIndex=[];
		$scope.userQuesResponse=[];
		$scope.userFullName;
		$scope.countryId;
		$scope.categoryId;
		$scope.quizId;
		$scope.syncQuiz;$scope.namePostQuiz=0;
                $scope.enableOnePageOptionSelection=0;
        $scope.optionClass;$scope.questionCardClass;
        $scope.isValidForm;
        $scope.userGender;$scope.friendGender;$scope.friendName;
		$scope.encUserQuizId;$scope.score=0;
    $scope.lovePercentage;$scope.quesSelected=0;$scope.enableQueEditing=0;
    $scope.enableUserFriendEditing=0;$scope.useMeta=0;$scope.colorTheme="";
    $scope.adQueCounter=0;
    $scope.flipanimation = 1;
    $scope.saveOptionText = 0;
    $scope.userFriendAnsTimeout = '';
    $scope.enableNextQuestion = 0;
    $scope.arrQueCardColorList=[];
    $scope.enableMaxScore=0;   
        $scope.redirectCalculateLovePercentage=function(encUserQuizId){
            var domainUrl='/';
            if(arrJsConfig.URL_PREFIX!=''){
                  domainUrl='/'+arrJsConfig.URL_PREFIX+'/';
            }
            $window.location.href=domainUrl+arrJsConfig.CALCULATE_LOVE+'/'+encUserQuizId;
        }

        $scope.setColorTheme=function(colorTheme){
          $('body').removeClass($scope.colorTheme);
          $('body').addClass(colorTheme);
          $scope.colorTheme=colorTheme;
        }

        $scope.createQuiz=function(categoryId){
            $window.location.href='/'+arrJsConfig.CREATE_QUIZ_URL+'/'+categoryId;
        }

        $scope.realLoveCalculate=function(startLimit, upperLimit){
            $scope.isValidForm=check_friend_form();
            if($scope.isValidForm){

              var min = Math.ceil(startLimit);
              var max = Math.floor(upperLimit);
              $scope.lovePercentage= Math.floor(Math.random() * (max - min + 1)) + min;

              $("#calulcateRealLovePercentageDiv").hide();
              $("#showRelaLovePercentageDiv").show();
              $("#showRelaLovePercentageDiv").focus();
              if($("#main_container")){
                $("html, body").animate({
                  scrollTop: 0,
                  behavior: "smooth"
                }, 100);
              }
              
            }
        }

        $scope.realLoveReplay=function(){
            $("#calulcateRealLovePercentageDiv").show();
            $("#showRelaLovePercentageDiv").hide();
            $("#calulcateRealLovePercentageDiv").focus();
        }


        $scope.initPlay=function(){
          $scope.syncQuiz=0;
          $scope.isValidForm=0;

        }

      $scope.initSync=function(encUserQuizId){
        $scope.syncQuiz=1;
        $scope.encUserQuizId=encUserQuizId;
        $scope.isValidForm=0;
      }

        $scope.initLoveMeterPlay=function(syncQuiz){
          $scope.syncQuiz=syncQuiz;
          $scope.isValidForm=false;

        }

        $scope.saveLoveMeterUserQuiz=function(quizId, categoryId, encUserQuizId){
           $scope.categoryId=categoryId; $scope.quizId=quizId;  
           $scope.encUserQuizId=encUserQuizId;
          if($scope.syncQuiz==0)
            $scope.isValidForm=check_play_form();
          else
            $scope.isValidForm=check_friend_form();
            console.log($scope.isValidForm);
          if($scope.isValidForm){
              $scope.userFullName=$("#name").val();
              $scope.userGender="";$scope.friendGender="";
              if($("#gender"))
                $scope.userGender=$("#gender").val();

              if($("#friendGender"))
                $scope.friendGender=$("#friendGender").val();
              
              $('#loadingDiv').show();
              $('#quizDiv').hide();

              var postData='';
              postData +='userFullName='+$scope.userFullName+'&useMeta=1&countryId=0&gender='+$scope.userGender+'&quizId='+$scope.quizId+''+'&categoryId='+$scope.categoryId;
              if($scope.syncQuiz==1){
                $scope.friendName=$("#friendName").val();

                postData +='&friendName='+$scope.friendName;
                postData +='&friendGender='+$scope.friendGender;
                postData +='&encUserQuizId='+$scope.encUserQuizId;
              }             
              
              console.log(postData);
              var serviceResponse = QuizService.saveUserQuiz(postData);
                serviceResponse.then(function(responseData) {
                         console.log('service response');
                         console.log(responseData);
                         if(responseData.status==1){
                          var userQuizId=responseData.data.userQuizId;
                          var encUserQuizId=responseData.data.encUserQuizId;

                          var domainUrl='/';
                          if(arrJsConfig.URL_PREFIX!=''){                                
                                if(arrJsConfig.catUrl!=''){
                                  domainUrl = '/'+arrJsConfig.URL_PREFIX+arrJsConfig.catUrl+'/';
                                }else{
                                  domainUrl='/'+arrJsConfig.URL_PREFIX+'/';
                                }
                          }else if(arrJsConfig.catUrl!=''){
                            domainUrl = arrJsConfig.catUrl+'/';
                          }       

                          if(responseData.data.isSync && responseData.data.isSync==1){
                            $scope.TMUserCompletion(1);
                            $window.location.href=domainUrl+arrJsConfig.RESULT_QUIZ_URL+'/'+$scope.encUserQuizId;
                          }else{
                            $scope.TMUserCompletion(0);
                            $window.location.href=domainUrl+arrJsConfig.SHARE_QUIZ_URL+'/'+encUserQuizId;
                          }
                          
                         }else{
                          $window.location.href='/';
                         }
                }); 
          }
            
        }
        $scope.TMUserCompletion=function(isSync){
          if(isSync==0 && arrJsConfig.ENABLE_TM_USER_QUIZ_COMP==1){
            dataLayer.push({ 'event':'User Completion'});
          }else if(isSync==1 && arrJsConfig.ENABLE_TM_UFRIEND_QUIZ_COMP==1){
            dataLayer.push({ 'event':'User Friend Completion'});
          }
        }
        
        $scope.initQuestionUi=function(){
                if($('#tabs').length>0){
                  var $tabs = $('#tabs').tabs();
                }
                 $scope.arrQuizDetail=arrQuizDetail;
                 //do not shuffle for sync ,a s prev question selected genretae issue
                 if(parseInt($scope.arrQuizDetail.typeId)!=arrJsConfig.QUIZ_TEST_TYPE_ID && enableQuizShuffle && $scope.syncQuiz!='1')
                    $scope.arrQuizQuestions=shuffle(arrQuizDetail.questions);
                 else 
                    $scope.arrQuizQuestions=arrQuizDetail.questions;
                 $scope.maxQuestion=parseInt(arrQuizDetail.maxQuestion);
                 $scope.quizId=arrQuizDetail.id;
                 $scope.userFullName=userFullName;
                 for(var i=0; i<$scope.arrQuizQuestions.length; i++){
                  $scope.arrQuizQuestions[i].isSelected=false;
                  if(i<$scope.quesSelected){
                    $scope.arrQuizQuestions[i].isSelected=true;
                  }

                  $scope.arrQuizQuestions[i].question=$scope.arrQuizQuestions[i].question.replace('{USERNAME}', $scope.userFullName); 
                 	$scope.allQuesIndex.push(i);
                 }
                 $scope.currentQuestionIndex=0; 

                
        				$scope.countryId=countryId;
        				$scope.categoryId=categoryId;
        				$scope.syncQuiz=syncQuiz;
        				$scope.encUserQuizId=encUserQuizId; 
                if(typeof namePostQuiz!='undefined')
                  $scope.namePostQuiz=namePostQuiz;
                else
                  $scope.namePostQuiz=0;  

                if(typeof arrQueCardColorList!='undefined')
                  $scope.arrQueCardColorList=arrQueCardColorList; 

        				if($scope.syncQuiz=='1'){
        					$('#changeQuesB').hide();
        				}        
                $scope.optionListClass='hlist';   
            
            $scope.resumeQuiz();
        }
         $scope.enableOnePageOptionSelection = function(enableOnePageOptionSelection)
         {
             $scope.enableOnePageOptionSelection = enableOnePageOptionSelection;
         }
         $scope.showAllQuestion=function(defaultSelQue, enableQueEditing){
          $scope.quesSelected=defaultSelQue;
          $scope.enableQueEditing=enableQueEditing;
          $scope.useMeta=1;
              $scope.initQuestionUi();

              if($scope.arrQueCardColorList.length>0){
                for(let i=0; i<$scope.arrQuizQuestions.length; i++){
                  if(i<$scope.arrQueCardColorList.length){
                      $scope.questionCardColorIndex=i;
                  }else{
                      $scope.questionCardColorIndex=((i)%$scope.arrQueCardColorList.length);
                  } 
                  $scope.arrQuizQuestions[i].questionCardClass=$scope.arrQueCardColorList[$scope.questionCardColorIndex];
                }
              }
        }

        $scope.enableUseMeta=function(){
          $scope.useMeta=1;
        }
        
        $scope.enableQueEditing=function(){
          $scope.enableQueEditing=1;
        }
        
        $scope.enableMaxScore=function(){
          $scope.enableMaxScore=1;
        }
        $scope.enableSaveOptionText=function(){
          $scope.saveOptionText=1;
        }

        $scope.showFriendQuestion=function(enableQueEditing){
            $scope.enableUserFriendEditing=enableQueEditing;
            $scope.useMeta=1;
            $scope.initQuestionUi();$scope.questionNo++;
            $scope.showQuestion();
            
        }

        $scope.setQuestionNoSel=function(){
        	$('#questionNoList').find( "li" ).each(function( index ) {			  	
    			  	if(index<$scope.questionNo){
    			  		$(this).addClass('h-custom-tab-active');
    			  	}
    			});

          $('#questionNoList').find( "div" ).each(function( index ) {    

              if(index<$scope.questionNo){
                $(this).addClass('progress-child-active active');
              }
          });
        	
        }

        $scope.resumeQuiz=function(){
            var userQuizReponseKey='';var userQuizIndexKey='';var questionNoKey='';var currQuesIndexKey='';
            /*if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){
                userQuizReponseKey="quiz_userQuesResponse_"+$scope.arrQuizDetail.id;
                userQuizIndexKey="quiz_userQuesIndex_"+$scope.arrQuizDetail.id;
                questionNoKey="quiz_questionNo_"+$scope.arrQuizDetail.id;
                currQuesIndexKey="quiz_currentQuestionIndex_"+$scope.arrQuizDetail.id;
                //trviia can playu n no of times
            }else */if($scope.syncQuiz=='1')
            {
                userQuizReponseKey="userQuesResponse_"+$scope.encUserQuizId;
                userQuizIndexKey="userQuesIndex_"+$scope.encUserQuizId;
                questionNoKey="questionNo_"+$scope.encUserQuizId;
                currQuesIndexKey="currentQuestionIndex_"+$scope.encUserQuizId;
            }

            let key =   localStorage.getItem(userQuizReponseKey);

            if(key!==null)
            {
                $scope.userQuesResponse     =   JSON.parse(key);
                $scope.userQuesIndex        =   JSON.parse(localStorage.getItem(userQuizIndexKey));

                $scope.questionNo           =   localStorage.getItem(questionNoKey);
                $scope.currentQuestionIndex =   localStorage.getItem(currQuesIndexKey);

                $scope.setNewQuestionIndex(0);
                $scope.showQuestion();
            }
        }

        $scope.nextQuestion=function(){
            
          if($scope.maxQuestion==$scope.userQuesIndex.length){
            //save test
            $scope.callSaveQuiz();
            
          }else{
            $("#optionSelError").removeClass("error");
            $("#optionSelError2").hide();
              if($scope.choosenOptionIndex<0){
                $("#optionSelError").addClass("error");
                $("#optionSelError").show();
              }else if($scope.arrQuizQuestions[$scope.currentQuestionIndex].options[$scope.choosenOptionIndex].content==''){
                  $("#optionSelError2").show();
              }else{
                $scope.choosenOption($scope.arrQuizQuestions[$scope.currentQuestionIndex].options[$scope.choosenOptionIndex].questionOptionId, $scope.arrQuizQuestions[$scope.currentQuestionIndex].options[$scope.choosenOptionIndex]);
                $scope.choosenOptionIndex=-1;
              }
          }

            
        }

        //cardOption 0 for bake quiz project, 1 for guesing game
        $scope.flipImage=function(option,time=2000,scrollOnOptionSel='',cardOption=0){
          //console.log(option,time,scrollOnOptionSel,cardOption);
          if($scope.flipanimation==0)
          return false;
          
          if(document.getElementById("flipCard")){
            setTimeout(() => {
              document.getElementById("flipCard").play();
            }, 500);
          }
          if(scrollOnOptionSel!=''){
            document.getElementById("menubar").scrollIntoView({behavior: "smooth"});
          }else{
            if(document.getElementById("question_number_border"))
            document.getElementById("question_number_border").scrollIntoView({behavior: "smooth"});
          }
          $scope.flipanimation = 0;
          var flip = 1;

        if(cardOption==0){
          if(option.type==1){
            var patternNumber = Math.floor(Math.random() * Math.floor(8));
            document.getElementById("back").style.backgroundImage = "url(/public/images/baketheme1/pattern"+patternNumber+".jpg)";
            document.getElementById("chosse_img").style.display = "none";
            document.getElementById("expandedtext").innerText = option.content;

          }else if(option.type==2){
            document.getElementById("chosse_img").style.display = "none";
            document.getElementById("expandedtext").innerHTML = option.content;

          }
        }else if(cardOption==1){
          if(option.content){
            document.getElementById("expandedtext").innerHTML = option.content;
          }else{
            document.getElementById("expandedtext").innerHTML = document.getElementById("option_text_"+$scope.currentQuestion.questionId).value;
          }
        }          
          flipCard(flip,time);
        }
        function flipCard(flip,time=2000){          
          var element = document.getElementById("card");

          if(element && flip){

            if(element.style.transform == "rotateY(180deg)") {
              element.style.transform = "rotateY(0deg)";
              element.style.transition = "0s";
              $scope.flipanimation = 1;
              if(document.getElementById("chosse_img"))
                document.getElementById("chosse_img").style.display = "block";
                
              flip = 0; 
            }
            else {
              element.style.transform = "rotateY(180deg)";  
              element.style.transition = "2s";

               $scope.userFriendAnsTimeout = setTimeout(function(){
                console.log("timeout called");
                flipCard(flip);
              }, time); 
            }  
            //$scope.enableNextQuestion = 1;//ToDo See useages
          }
          
        }
        var timerNextQuestion;
        //guessing game
        $scope.moveToNextQuestionGGame =function(time){
          clearTimeout($scope.userFriendAnsTimeout);
          var element = document.getElementById("card");
          if(element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
            element.style.transition = "0s";
            $scope.flipanimation =1;   
            $timeout.cancel(timerNextQuestion);
            //if times executed same time then need to check to jump next question
            if($scope.userQuesIndex.indexOf($scope.currentQuestionIndex)>=0)
              $scope.proceedForNextQuestion();
          }  clicknextSound();
                    
        }
       
        //guessing game
        $scope.customOption =function(time){
          var option = document.getElementById("option_text_"+$scope.currentQuestion.questionId).value;
              option = option.replace(/\s/g, '');
          if(!option){
            $("#selectOptionErrorDiv").show();
            return false;
          }        
           
          //for guessing gmae
          if($scope.syncQuiz==1){             
              $scope.choosenOption(0,'',time);    
              if(time>0)           
              $scope.flipImage('',time,'',1);        
          }else{
              $scope.choosenOption(0,'',time); 
          }          
        } 
        
        $scope.toggleQuestionEditing=function(varIndex=-1)
        {
          console.log(varIndex);
          if(varIndex>=0){
            if($scope.arrQuizQuestions[varIndex].editing && $scope.arrQuizQuestions[varIndex].editing == 1)
              $scope.arrQuizQuestions[varIndex].editing = 0;
            else{
              $scope.arrQuizQuestions[varIndex].editing = 1;   
            }
          }else{
            if($scope.currentQuestion.editing && $scope.currentQuestion.editing == 1)
              $scope.currentQuestion.editing = 0;
            else{
              $scope.currentQuestion.editing = 1;   
            }
          }
          
        }
        $scope.optionSelection=function($event,qIndex,optionIndex,optionId){           
                if($scope.syncQuiz != 1)
                {
                    gtmEventTracking('option');
                }               
                
                if(!$scope.arrQuizQuestions[qIndex].isSelected){
                  $scope.quesSelected++;
                }

                $scope.arrQuizQuestions[qIndex].isSelected=true; 
                $scope.arrQuizQuestions[qIndex].choosenOptionIndex=optionIndex;
                $scope.arrQuizQuestions[qIndex].userQuestionOptionId=optionId;

                $($event.currentTarget).siblings().removeClass('selected');
                $($event.currentTarget).siblings().addClass('deselect');
                $($event.currentTarget).addClass('selected');
                $($event.currentTarget).removeClass('deselect');
                $($event.currentTarget).parent().addClass('selected');                              
        }
        $scope.moveToNextQuestion=function(){
            if($("#question_"+$scope.currentQuestion.questionId)){
               var chkData = $("#question_"+$scope.currentQuestion.questionId).val();
                var remove_space = chkData.replace(/ /g,'');
                if(remove_space === '')
                {
                    $("#questionEditingErrosMessage").show();
                }
                else
                {
                    $("#questionEditingErrosMessage").hide();
                    $scope.choosenOption(0);
                }
            }
        }
           $scope.enableAvtarSelection = function(){
                $scope.enableAvtarSelection = 1;
           }
           $scope.questionNoDecreasing=function()
           {
               $scope.questionNoDecreasing = 10;
           }
           $scope.timerInit=function()
           {   var now = new Date();
               $scope.tick = now;  
           }
           $scope.choosenOption=function(optionId, option='',time=500){
                if($scope.syncQuiz == 1)
                {
                    gtmEventTracking('sync_option');
                }
                if($scope.syncQuiz != 1)
                {
                    gtmEventTracking('option');
                }
                if($scope.enableAvtarSelection== 1)
                { 
                     var now = new Date();
                     if($scope.tick > 0)
                       $scope.userTimeTaken = Math.round((now - $scope.tick) / 1000);
                     $scope.tick = now;
                }
           if($("#selectOptionErrorDiv").length>0)
            $("#selectOptionErrorDiv").hide();
          if($scope.flipanimation==0)
          return false;    
          
          if($scope.userQuesIndex.indexOf($scope.currentQuestionIndex)<0){
              //two times click
              $scope.userQuesIndex.push($scope.currentQuestionIndex);

                $scope.questionNo++;
                $scope.saveQuestion(optionId,option);
                 timerNextQuestion=$timeout( function(){                  
                  $scope.proceedForNextQuestion();
             }, time );
          }else{
            //console same vent clicked
            console.log('same event clicked');
          } 
          
        }
    
        $scope.proceedForNextQuestion=function(){ 
          if($scope.maxQuestion==$scope.userQuesIndex.length){
            //save test           
            $scope.callSaveQuiz();
          }else{
            $scope.updateProgresspercentage();
            $scope.setNewQuestionIndex(0);
            
            $scope.enableNextQuestion = 0;

            if($("#continue_btn").length>0)
                $("#continue_btn").hide();

            $scope.showQuestion();
          }
          if($scope.enableAvtarSelection== 1)
             $scope.questionNoDecreasing = $scope.questionNoDecreasing -1;
        }

        $scope.callSaveQuiz=function(){
            if($scope.syncQuiz=='1' || $scope.namePostQuiz==0){
              $scope.saveUserQuiz();
            }else{
              $("#quizDiv").hide();
              $("#name_post_quiz_div").show();

            }
        }

        $scope.updateProgresspercentage=function(){
            questionProgressPercentage=($scope.questionNo/$scope.maxQuestion)*100;
            if($("#questionProgressDiv").length){
              $("#questionProgressDiv").css('width',questionProgressPercentage+'%');              
            }
        }


        $scope.questionCardColorIndex=0;
        
        $scope.showQuestion=function(){
                  if($("#selectOptionErrorDiv").length>0)
                    $("#selectOptionErrorDiv").hide();
                  if($("#continue_btn").length>0)
                    $("#continue_btn").hide();                                   
                  $scope.adQueCounter++;
                  $scope.currentQuestion=$scope.arrQuizQuestions[$scope.currentQuestionIndex];     
                 if($scope.arrQuizQuestions[$scope.currentQuestionIndex].options[0].type=='2'){
                    $scope.optionListClass='ques_pt_sec imglist';    
                 }else{
                    $scope.optionListClass='hlist'; 
                 }   

                 if($scope.arrQueCardColorList.length>0){
                    if($scope.questionNo<=$scope.arrQueCardColorList.length){
                      $scope.questionCardColorIndex=$scope.questionNo-1;
                    }else{
                      $scope.questionCardColorIndex=(($scope.questionNo)%$scope.arrQueCardColorList.length);
                      if($scope.questionCardColorIndex>0)
                        $scope.questionCardColorIndex--;
                      else if($scope.questionCardColorIndex==0)
                        $scope.questionCardColorIndex=($scope.arrQueCardColorList.length-1);
                    } 
                    console.log($scope.questionCardColorIndex,$scope.questionNo);
                    $scope.questionCardClass =" "+$scope.arrQueCardColorList[$scope.questionCardColorIndex];                   
                  }       
                
                 if($scope.enableNextQuestion==0)
                    $(".questionCustomAnswerClass:input").val('');                  
                        if(document.getElementById("question_number_border")) 
                            document.getElementById("question_number_border").scrollIntoView({behavior: "smooth"}); 
                        else 
                            $window.scrollTo(0, angular.element(document.getElementById('questionH')).offsetTop); 

                        $scope.setQuestionNoSel();
                        $scope.refreshDfpAdd();
        }

        $scope.refreshDfpAdd=function(){
            if(arrJsConfig.DFP_ADREFRESH_PQ>0 && $scope.adQueCounter>1 && ($scope.adQueCounter-1)%arrJsConfig.DFP_ADREFRESH_PQ==0){
              refreshDfpAdd();
            }
            
        }

        $scope.saveQuizPostName=function(){
          var formValid=check_friend_form();
          if(formValid){
            $scope.userFullName=$("#name").val();
            $("#name_post_quiz_div").hide();            
            $scope.saveUserQuiz();
          }

        }

        $scope.saveLoveUserQuiz=function(){

          if($scope.syncQuiz==0)
            $scope.isValidForm=check_play_form();
          else
            $scope.isValidForm=check_friend_form();
            
          if($scope.isValidForm){
              $scope.userFullName=$("#name").val();

              
              $('#loadingDiv').show();
              $('#quizDiv').hide();

              var postData='';
              postData +='userFullName='+$scope.userFullName;
              postData +='&categoryId=0';
              postData +='&countryId=0';
              postData +='&quizId=0';

              if($scope.syncQuiz==1){
                $scope.crushFullName=$("#friendName").val();

                postData +='&crushFullName='+$scope.crushFullName;
                postData +='&encUserQuizId='+$scope.encUserQuizId;
              }             
              
              //console.log(postData);
              var serviceResponse = QuizService.saveUserQuiz(postData);
                serviceResponse.then(function(responseData) {
                         console.log('service response');
                         console.log(responseData);
                         if(responseData.status==1){
                          var userQuizId=responseData.data.userQuizId;
                          var encUserQuizId=responseData.data.encUserQuizId;

                          var domainUrl='/';
                          if(arrJsConfig.URL_PREFIX!=''){                                
                                if(arrJsConfig.catUrl!=''){
                                  domainUrl = '/'+arrJsConfig.URL_PREFIX+arrJsConfig.catUrl+'/';
                                }else{
                                  domainUrl='/'+arrJsConfig.URL_PREFIX+'/';
                                }
                          }else if(arrJsConfig.catUrl!=''){
                            domainUrl = arrJsConfig.catUrl+'/';
                          }       

                          if(responseData.data.isSync && responseData.data.isSync==1){
                            $scope.TMUserCompletion(1);
                            $window.location.href=domainUrl+arrJsConfig.RESULT_QUIZ_URL+'/'+$scope.encUserQuizId;
                          }else{
                            $scope.TMUserCompletion(0);
                            $window.location.href=domainUrl+arrJsConfig.SHARE_QUIZ_URL+'/'+encUserQuizId;
                          }
                          
                         }else{
                          $window.location.href='/';
                         }
                }); 
          }
          
        }
        $scope.showTimer=function(){
            var minutesLabel = document.getElementById("minutes");
            var secondsLabel = document.getElementById("seconds");
            var totalSeconds = 0;
            setInterval(setTime, 1000);

            function setTime() {
              ++totalSeconds;
              secondsLabel.innerHTML = pad(totalSeconds % 60);
              minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
            }

            function pad(val) {
              var valString = val + "";
              if (valString.length < 2) {
                return "0" + valString;
              } else {
                return valString;
              }
            }
        }
        $scope.canSelectQues=function(){
            if($scope.quesSelected==$scope.maxQuestion){
                return false;
            }else{
              return true;
            }
        }

        $scope.saveQuestionSelUserQuiz=function(){
            $("#questionSelError").hide();
            $("#questionSelError2").hide();
            $("#questionSelError3").hide();

            if($scope.canSelectQues()){
              $("#questionSelError").show();
              return false;
            }else{
                var quesEmpty=0;
                for(var i=0; i<$scope.arrQuizQuestions.length; i++){
                  if($scope.arrQuizQuestions[i].isSelected && $scope.enableQueEditing==1 && $scope.arrQuizQuestions[i].question==''){
                    quesEmpty=$scope.arrQuizQuestions[i].questionId;
                  }
                }

                if(quesEmpty!=0){
                  $("#questionSelError2").show();
                  return false;
                }                
                
            }
            $scope.saveUserQuiz();
        }

        $scope.saveUserQuiz=function(){ 

        	$('#quizDiv').hide();
        	$('#loadingDiv').show();

        	var postData='';
        	postData +='userFullName='+$scope.userFullName;
        	postData +='&categoryId='+$scope.categoryId;
        	postData +='&countryId='+$scope.countryId;
        	postData +='&quizId='+$scope.quizId;    
          if($scope.syncQuiz==1){
        		postData +='&encUserQuizId='+$scope.encUserQuizId;
        		postData +='&score='+$scope.score;
            if($scope.useMeta==0 || ($scope.useMeta==1 && $scope.enableMaxScore > 0)){
        		  postData +='&maxScore='+$scope.maxQuestion;
            }
        	}else if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){
            postData +='&score='+$scope.score;
            postData +='&maxScore='+$scope.maxQuestion;

          }else if($scope.useMeta==1 && $scope.enableMaxScore > 0){
            postData +='&maxScore='+$scope.maxQuestion;
          }
          
            for(var i=0;i<$scope.userQuesResponse.length; i++){

                postData +='&userQuestionId['+i+']='+$scope.userQuesResponse[i].questionId;
                postData +='&userQuestionOptionId['+i+']='+$scope.userQuesResponse[i].questionOptionId;
                if($scope.saveOptionText==1){
                 postData +='&userQuestionOptionText['+i+']='+$scope.userQuesResponse[i].questionOptionText;
                }
                if($scope.syncQuiz==1 || parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){
                        postData +='&userChQuestionOptionId['+i+']='+$scope.userQuesResponse[i].chQuestionOptionId;
                }

                if($scope.enableUserFriendEditing==1){
                    postData +='&choosenOptionText['+i+']='+$scope.userQuesResponse[i].choosenOptionText;
                    postData +='&choosenOptionIndex['+i+']='+$scope.userQuesResponse[i].choosenOptionIndex;
                }

            if($scope.enableQueEditing==1){
                postData +='&question['+i+']='+$scope.arrQuizQuestions[i].question;
            }
            if($scope.enableAvtarSelection ==1)
            {  
                postData +='&userTimeTaken['+i+']='+$scope.userQuesResponse[i].userTimeTaken; // every question basis
                 $scope.userTimeTaken = $scope.userTimeTaken + $scope.userQuesResponse[i].userTimeTaken;
                if(($scope.userQuesResponse.length)-1 == i){ 
                    postData +='&userTotalTimeTaken='+$scope.userTimeTaken;
                    $scope.userTimeTaken = 0;
                }
            }
            if($scope.enableAvtarSelection ==1 && $scope.syncQuiz == 1 && ($scope.userQuesResponse.length)-1 == i){
                postData +='&avtar='+$scope.userSelectedAvtar;
            }
        
            if($scope.enableQueEditing==1){
                postData +='&question['+i+']='+$scope.arrQuizQuestions[i].question;
            }

        }
          if($scope.quesSelected>0){
            var qIndex=0;
            for(var i=0; i<$scope.arrQuizQuestions.length; i++){
                if($scope.arrQuizQuestions[i].isSelected){ 
                   if($scope.enableOnePageOptionSelection == 1) {
                     postData +='&questions['+qIndex+'][questionId]='+$scope.arrQuizQuestions[i].questionId;
                     postData +='&questions['+qIndex+'][choosenOption]='+$scope.arrQuizQuestions[i].choosenOptionIndex;
                     postData +='&questions['+qIndex+'][userQuestionOptionId]='+$scope.arrQuizQuestions[i].userQuestionOptionId;
                 
                    }else{
                      postData +='&userQuestionId['+qIndex+']='+$scope.arrQuizQuestions[i].questionId;
                      if($scope.enableQueEditing==1){
                        postData +='&question['+qIndex+']='+$scope.arrQuizQuestions[i].question;
                      }
                    }                       
                   
                  qIndex++;
                }
            }
          }
        	
          if($scope.useMeta==1)
            postData +='&useMeta='+$scope.useMeta;

          if($scope.isAonymousUser==1){
            postData +='&isAonymousUser='+$scope.isAonymousUser;
          }

          if($scope.arrQuizDetail.customQuestion || $scope.arrQuizDetail.customQuestion==1){
              postData +='&customQuestion=1';
          }

          if($scope.colorTheme!=''){
            postData +='&colorTheme='+$scope.colorTheme;
          }
        	//console.log(postData);
        	var serviceResponse = QuizService.saveUserQuiz(postData);
            serviceResponse.then(function(responseData) {
                     console.log('service response');
                     console.log(responseData);
                     if(responseData.status==1){
                     	var userQuizId=responseData.data.userQuizId;
                     	var encUserQuizId=responseData.data.encUserQuizId;

                      var domainUrl='/';
                      if(arrJsConfig.URL_PREFIX!=''){                                
                            if(arrJsConfig.catUrl!=''){
                              domainUrl = '/'+arrJsConfig.URL_PREFIX+arrJsConfig.catUrl+'/';
                            }else{
                              domainUrl='/'+arrJsConfig.URL_PREFIX+'/';
                            }
                      }else if(arrJsConfig.catUrl!=''){
                        domainUrl = arrJsConfig.catUrl+'/';
                      }  
                     	if(responseData.data.isSync && responseData.data.isSync==1 && parseInt($scope.arrQuizDetail.typeId)!=arrJsConfig.QUIZ_TEST_TYPE_ID){
                        $scope.TMUserCompletion(1);
                     		$window.location.href=domainUrl+arrJsConfig.RESULT_QUIZ_URL+'/'+$scope.encUserQuizId;
                     	}else{
                        $scope.TMUserCompletion(0);
                     		$window.location.href=domainUrl+arrJsConfig.SHARE_QUIZ_URL+'/'+encUserQuizId;

                     	}
                     	
                     }else{ 
                     	$window.location.href='/';
                     }
            }); 
        }
        $scope.wait=function(ms){
		   var start = new Date().getTime();
		   var end = start;
		   while(end < start + ms) {
		     end = new Date().getTime();
		  }
		}              
        $scope.selUnselQuestion=function(qIndex){
          $("#questionSelError").hide();
          $("#questionSelError2").hide();
          $("#questionSelError3").hide();
          
            if($scope.arrQuizQuestions[qIndex].isSelected){
               $scope.arrQuizQuestions[qIndex].isSelected= false;
               $scope.quesSelected--;
            }else if($scope.canSelectQues()){
               $scope.arrQuizQuestions[qIndex].isSelected= true;
               $scope.quesSelected++;
            }else if(!$scope.canSelectQues()){
                $("#questionSelError3").show();
            }
        
          
        }

        $scope.choosenOptionIndex=-1;
        $scope.selUnselOption=function(optionIndex){
            $scope.choosenOptionIndex=optionIndex;
            for(var i=0; i<$scope.arrQuizQuestions[$scope.currentQuestionIndex].options.length; i++){
                if(i==optionIndex){
                  $scope.arrQuizQuestions[$scope.currentQuestionIndex].options[i].isSelected=true;
                }else{
                  $scope.arrQuizQuestions[$scope.currentQuestionIndex].options[i].isSelected=false;
                }
            }
            $scope.arrQuizQuestions[$scope.currentQuestionIndex].isSelected=true;
           
        }

        $scope.isAonymousUser=0;
        $scope.initAonymousFriendQuiz=function(isAonymousUser){
            $scope.isAonymousUser=isAonymousUser;
        }
        $scope.changeAnonymouse=function($event, isAonymousUser){
            console.log("hi",$scope.isAonymousUser);
            $scope.isAonymousUser=isAonymousUser;
            $event.preventDefault();
        }
        $scope.selectAvtar=function(avtarId){
          $("#avtar"+avtarId).parent().parent().find('.carousel-item').removeClass('avActive'); 
           $("#avtar"+avtarId).addClass('avActive'); 
           $scope.userSelectedAvtar = $('#avtar'+avtarId).attr("data");
           localStorage.setItem("avtar",$scope.userSelectedAvtar); 
        }
        
        $scope.userSelectedAvtar=function(){ 
            $scope.userSelectedAvtar = localStorage.getItem("avtar");
        }
        $scope.checkAnonymouseFriendForm=function($event){ 

            if($scope.isAonymousUser==0){
                $scope.isValidForm=check_friend_form();
                if(!$scope.isValidForm){
                  $event.preventDefault();
                }
            }else{
              $scope.userFullName='n/a';
            }
        }

        $scope.saveQuestion=function(optionId, option){
                  //save question
               	 var quesData={};
               	 quesData.questionId=$scope.currentQuestion.questionId;
                  quesData.questionOptionId=optionId;
                  if($scope.saveOptionText==1){
                    if(optionId==0){
                      if(document.getElementById("option_text_"+$scope.currentQuestion.questionId))
                        quesData.questionOptionText=document.getElementById("option_text_"+$scope.currentQuestion.questionId).value;                        
                    }else{
                      quesData.questionOptionText= document.getElementById("optionId"+optionId).children[0].innerText;
                    }

                  }
                  if(document.getElementById("selectQuestion")){
                    document.getElementById("selectQuestion").play();
                }
               	 if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID || $scope.syncQuiz==1){
                 	 	
                 	 	if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID && optionId==$scope.currentQuestion.correctOptionId){
                      $scope.score++;
                      $("#optionId"+optionId).parent('li').addClass('green');
                      $("#optionId"+optionId).parent('div').addClass('green');
                      if($("#checkbox"+optionId)){
                        $("#checkbox"+optionId).removeClass("defaultHide");
                        $("#checkbox"+optionId).addClass("right");
                        $("#checkbox"+optionId).html("&#x2713;");
                      }
                      quesData.chQuestionOptionId=$scope.currentQuestion.correctOptionId;
                    }else if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){               
                      if($("#checkbox"+optionId)){
                        $("#checkbox"+optionId).removeClass("defaultHide");
                        $("#checkbox"+optionId).addClass("wrong");
                        $("#checkbox"+optionId).html("&#10005;");
                        $("#checkbox"+$scope.currentQuestion.correctOptionId).addClass("right");
                        $("#checkbox"+$scope.currentQuestion.correctOptionId).html("&#x2713;");
                      }
                      quesData.chQuestionOptionId=$scope.currentQuestion.correctOptionId;
                      $("#optionId"+optionId).parent('li').addClass('red');
                      $("#optionId"+optionId).parent('div').addClass('red');
                      $("#optionId"+$scope.currentQuestion.correctOptionId).parent('li').addClass('green');
                    }else if($scope.syncQuiz==1 && optionId==$scope.currentQuestion.chQuestionOptionId){
                 	 		$scope.score++;
                 	 		$("#optionId"+optionId).parent('li').addClass('green');
                                  
                      $("#optionId"+optionId).parent('div').addClass('green');
                        if(document.getElementById("rightSelection")){
                            setTimeout(() => {
                              document.getElementById("rightSelection").play();
                            }, 100);
                          }
                        if($('#verdict').length){
                          $('#verdict').removeClass('defaultHide');
                          $('#verdict').addClass('right_img');
                          $('#verdict').html('<img src="/public/images/baketheme1/right.png?v=20200518_01">');
                        }
                      quesData.chQuestionOptionId=$scope.currentQuestion.chQuestionOptionId;
                 	 	}else{
                 	 		$("#optionId"+optionId).parent('li').addClass('red');
                      $("#optionId"+optionId).parent('div').addClass('red');
                      quesData.chQuestionOptionId=$scope.currentQuestion.chQuestionOptionId;
                        $("#optionId"+$scope.currentQuestion.chQuestionOptionId).parent('li').addClass('green');
                        $("#optionId"+$scope.currentQuestion.chQuestionOptionId).parent('div').addClass('green');
                        if(document.getElementById("wrongSelection")){
                            setTimeout(() => {
                              document.getElementById("wrongSelection").play();
                            }, 100);
                        }
                        if($('#verdict').length){
                          $('#verdict').removeClass('defaultHide');
                          $('#verdict').addClass('wrong_img');
                          $('#verdict').html('<img src="/public/images/baketheme1/wrong.png?v=20200518_01">');
                           $("#optionId"+ quesData.chQuestionOptionId).parent('div').addClass('green');

                        }
                    }
                    
                      if($('#verdict').length){
                        setTimeout(() => {
                          $('#verdict').addClass('defaultHide');
      
                        }, 3000);
                      }
                      

                  }                  
            if($scope.enableUserFriendEditing==1){
                quesData.choosenOptionIndex=$scope.choosenOptionIndex;
                quesData.choosenOptionText=$scope.arrQuizQuestions[$scope.currentQuestionIndex].options[$scope.choosenOptionIndex].content;
            }
            if($scope.enableAvtarSelection == 1){
                quesData.userTimeTaken = $scope.userTimeTaken;
            }
            $scope.userQuesResponse.push(quesData);
            if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){
                localStorage.setItem("quiz_userQuesResponse_"+$scope.arrQuizDetail.id,JSON.stringify($scope.userQuesResponse)); 
                localStorage.setItem("quiz_userQuesIndex_"+$scope.arrQuizDetail.id,JSON.stringify($scope.userQuesIndex));
                localStorage.setItem("quiz_questionNo_"+$scope.arrQuizDetail.id,$scope.questionNo);
                localStorage.setItem("quiz_currentQuestionIndex_"+$scope.arrQuizDetail.id,$scope.currentQuestionIndex);
            }else if($scope.syncQuiz=='1')
            {
                localStorage.setItem("userQuesResponse_"+$scope.encUserQuizId,JSON.stringify($scope.userQuesResponse)); 
                localStorage.setItem("userQuesIndex_"+$scope.encUserQuizId,JSON.stringify($scope.userQuesIndex));
                localStorage.setItem("questionNo_"+$scope.encUserQuizId,$scope.questionNo);
                localStorage.setItem("currentQuestionIndex_"+$scope.encUserQuizId,$scope.currentQuestionIndex);
            }          
        }
       
        $scope.setNewQuestionIndex=function(isChange){
               	 //change questionIndex
               	 var allQues=$scope.allQuesIndex;

               	 var remainQIndex=[];
               	 for(var i=0; i<allQues.length; i++){
               	 	var qIndex=allQues[i];
               	 	if($scope.userQuesIndex.indexOf(qIndex)<0 && (isChange==0 || $scope.currentQuestionIndex!=qIndex)){
               	 		//not attempt
               	 		remainQIndex.push(qIndex);
               	 	}
               	 }

                 /*if(isChange){
                  $scope.currentQuestionIndex=remainQIndex[Math.floor(Math.random()*remainQIndex.length)];
                 }else{
                  $scope.currentQuestionIndex=remainQIndex.shift();
                 }*/
               	 var cIndexFind=0;
                 for(var k=0; k<remainQIndex.length; k++){
                    if(cIndexFind==1){
                      //console.log(remainQIndex[k]);
                      $scope.currentQuestionIndex=remainQIndex[k];
                      break;
                    }
                    
                    if((remainQIndex[k])>=$scope.currentQuestionIndex && $scope.currentQuestionIndex!=0){
                      cIndexFind=1;
                      $scope.currentQuestionIndex=remainQIndex[k];
                      break;
                    }else if((remainQIndex[k+1])>=$scope.currentQuestionIndex && $scope.currentQuestionIndex!=0){
                      cIndexFind=1;
                    }
                    if(k==(remainQIndex.length-1))
                      cIndexFind=0;
                 }
                 //console.log(remainQIndex);
                 if(cIndexFind==0){
                    $scope.currentQuestionIndex=remainQIndex.shift();
                 }

                 if($scope.syncQuiz=='1'){
                    localStorage.setItem("currentQuestionIndex_"+$scope.encUserQuizId,$scope.currentQuestionIndex); 	 
                 }   
        }

        $scope.changeQuestion=function(){
          gtmEventTracking('change_question');
          if(document.getElementById("submitSound")){
              document.getElementById("submitSound").play();
          }
           	$scope.setNewQuestionIndex(1);
        	$scope.showQuestion();
        }

        $scope.initSyncFriendsQuiz=function(){
            OneSignal.push(function() {
                OneSignal.getTags(function(pushTags) {   
                    var redirectUrl='/';
                    if(("quiz_sync_encid" in pushTags)){
                        console.log("pushTags-"+pushTags);
                        var encUserTagId=pushTags['quiz_sync_encid'];
                        var arrEncUserTagId=[];

                        if(encUserTagId && encUserTagId!=''){
                            arrEncUserTagId=encUserTagId.split('||');
                            var uinde=Math.floor((Math.random()*arrEncUserTagId.length));
                            if(arrEncUserTagId[uinde])
                              redirectUrl='/'+arrJsConfig.SYNC_QUIZ_URL+'/'+arrEncUserTagId[uinde];
                            else
                              redirectUrl='/'+arrJsConfig.SYNC_QUIZ_URL+'/'+arrEncUserTagId[0];
                        }
                            
                    }  
                    console.log("redirectUrl-"+redirectUrl);
                    $window.location.href=redirectUrl;    
                    
                });
            });
        }

        $scope.initResultUi=function(score='',maxScore=''){
          if(score&&maxScore){
            var width = (score*100)/maxScore;
            console.log(width);
            document.getElementById("result_meter_inner").style.width = width+"%";
          }else{

            $(".gauge-c").css({
              "-webkit-transform": "rotate("+angle+"deg)",
              "-moz-transform": "rotate("+angle+"deg)",
              "transform": "rotate("+angle+"deg)" /* For modern
              browsers(CSS3)  */
            });
          }

        }

        //Game Section
        $scope.initGame=function(){
          $scope.categoryId=categoryId;
          $scope.arrQuizDetail=arrQuizDetail;
          $scope.setQuizLikedState(-1);
        }

        $scope.setQuizLikedState=function(action){
          let key="ql_"+($scope.arrQuizDetail.id);

          if(action!=-1){
            localStorage.setItem(key, action);
          }else{
            let data =   localStorage.getItem(key);
            if(data!=null && parseInt(data)==1){
              $scope.arrQuizDetail.liked=1;
            }else{
              $scope.arrQuizDetail.liked=0;
            }
          }
        }

        $scope.quizLike=function(){
          var quizStats={};
          if($scope.arrQuizDetail.liked==0){
            $scope.arrQuizDetail.liked=1;
            quizStats.action='like';
          }else{
            $scope.arrQuizDetail.liked=0;
             quizStats.action='unlike';
          }

          $scope.setQuizLikedState($scope.arrQuizDetail.liked);
          $scope.updateQuizStats(quizStats);
        }

        $scope.updateQuizStats=function(quizStats){
          quizStats.quizId=$scope.arrQuizDetail.id;
          var serviceResponse = QuizService.updateQuizStats(quizStats);
          serviceResponse.then(function(responseData) {
                   console.log('service response',responseData);
          }); 
        }

        $scope.playHtml5Game=function(){
          playHtml5Game();
          var quizStats={};
          quizStats.action='play';
          $scope.updateQuizStats(quizStats);
        }

        $scope.socialButton=function(buttonName){
          console.log("button clicked",buttonName);
          gtmEventTracking(buttonName);
          var quizStats={};
          quizStats.action='share';
          quizStats.type=buttonName;
          $scope.updateQuizStats(quizStats);
        }
        //End Game Section

        	     
}]);

myApp.controller('OtherUserStatsController',['$scope', '$window','$http','$timeout','OtherUserStatsService','getUserPopupStats',function($scope,$window ,$http, $timeout,OtherUserStatsService,getUserPopupStats){
    $scope.encUserQuizId;
    $scope.userFullName="";
    $scope.scoreboardAnonymousText='';
    $scope.arrOtherUserStat=[];$scope.arrOtherUserStatCurr=[];    
    $scope.pageLimit;$scope.startLimit;$scope.hasMaxScore=0;
    $scope.userScoreSortBy='id';
    $scope.init=function(userFullName){
      $scope.userFullName=userFullName;
    }

    $scope.setuserScoreSortBy=function(userScoreSortBy){
      if(userScoreSortBy==1)
        $scope.userScoreSortByCol='id';
      else
        $scope.userScoreSortByCol='score';
    }

    $scope.setAcoreboardAnonymousText=function(scoreboardAnonymousText){
      $scope.scoreboardAnonymousText=scoreboardAnonymousText;
    }

    $scope.sortUserScoreFunction=function(a,b){
       // console.log(a[$scope.userScoreSortByCol], b[$scope.userScoreSortByCol]);
       if(a['userTotalTimeTaken']){
        if (parseInt(a[$scope.userScoreSortByCol]) === parseInt(b[$scope.userScoreSortByCol]) && parseInt(a["userTotalTimeTaken"]) === parseInt(b["userTotalTimeTaken"])) {
            return 0;
        }else if (parseInt(a[$scope.userScoreSortByCol]) === parseInt(b[$scope.userScoreSortByCol])) {
           console.log("aaa",a,b);
            return (parseInt(a["userTotalTimeTaken"]) > parseInt(b["userTotalTimeTaken"])) ? 1 : -1;            
        }else {
            return (parseInt(a[$scope.userScoreSortByCol]) < parseInt(b[$scope.userScoreSortByCol])) ? 1 : -1;
        }
       }else{
        if (parseInt(a[$scope.userScoreSortByCol]) === parseInt(b[$scope.userScoreSortByCol])) {
            return 0;
        }
        else {
            return (parseInt(a[$scope.userScoreSortByCol]) < parseInt(b[$scope.userScoreSortByCol])) ? 1 : -1;
        }
       }
        

    }

    $scope.getUserStats=function(encUserQuizId, userStatsPageLimit){
          $scope.encUserQuizId=encUserQuizId;
          $scope.pageLimit=userStatsPageLimit;$scope.startLimit=0;
          var serviceResponse = OtherUserStatsService.getUserStats($scope.encUserQuizId);
            serviceResponse.then(function(responseData) {
                     if(responseData.status==1 && responseData.data.length>0){
                        for(var i=0; i<responseData.data.length; i++){
                            var userData=JSON.parse(responseData.data[i]);
                            if(userData.isAonymousUser && userData.isAonymousUser==1){
                              userData.userFullName=$scope.scoreboardAnonymousText;
                            }

                           if(userData.maxScore){
                              $scope.hasMaxScore=1;
                            }
                            
                            $scope.arrOtherUserStat.push(userData);
                        }

                        $scope.arrOtherUserStat.sort($scope.sortUserScoreFunction);
                        otherUserStatsRecords=$scope.arrOtherUserStat;
                        $scope.loadMoreStats();
                     }else{
                        $("#userStatsImg").hide();
                        $("#nonAttemptUserStatsDiv").show();
                     }
            }); 
    }

    $scope.loadMoreStats=function(){
      var endLoop=$scope.startLimit+$scope.pageLimit;
      for(var i=$scope.startLimit;i<endLoop && i<$scope.arrOtherUserStat.length;i++){
          $scope.arrOtherUserStatCurr.push($scope.arrOtherUserStat[i]);
          $scope.startLimit++;
      }
      console.log($scope.arrOtherUserStatCurr);
      console.log(endLoop);
    }

    $scope.friendName="";
    $scope.getUserPopupStats=function(id, name)
    {
        $scope.friendName=$scope.UserPopupStatsName = name;
        var serviceResponse = getUserPopupStats.getData(id);
        serviceResponse.then(function(responseData) {
    

            if(responseData.questions && responseData.questions.length>0)
            {
                for(var i=0; i<responseData.questions.length; i++){

                  responseData.questions[i].question=responseData.questions[i].question.replace("{USERNAME}", $scope.userFullName);
                }
                $scope.UserPopupStats = responseData.questions;
            }
        });         
    }

}]);


myApp.controller('UserThemeController',['$scope', '$window','$http','$timeout','UserThemeService',function($scope,$window ,$http, $timeout,UserThemeService){
      
        $scope.currTheme='';

        $scope.init=function(themeName)
        {
            $scope.currTheme=themeName;
        }

        $scope.toggletheme=function(themeId, themeName) 
        {
            $('body').removeClass($scope.currTheme);
            $('body').addClass(themeName);
            
            $scope.currTheme    =   themeName;
            var serviceResponse = UserThemeService.setUserTheme(themeId);
        }

}]);

var loginApp    =   angular.module('myApp');
loginApp.controller("headerController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
    
    $scope.show_me           =   false;
    $scope.loginFormData     =   {};
    $scope.registerFormData  =   {};

    $scope.login  =   function(){
        $http({
                method  :   'POST',
                url     :   $scope.loginUrl,
                data    :   $.param($scope.loginFormData),
                headers :   {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data){
            if(data.success)
            {
                $scope.name        =   data.name;
                $scope.show_me     =   true;
                element            =   document.getElementById("navbarToggle");
                if(window.getComputedStyle(element).display!='none')
                {
                    element.click();
                }
                
                closeAllModals();
            }
            else
            {
                $scope.message = data.message;
            }
        });
    };

    $scope.register  =   function(){

        // Try to change this code into angular way.
        if(match_input('login-psw','login-confirm-psw','login-password-err'))
        {
            $http({
                    method  :   'POST',
                    url     :   $scope.registerUrl,
                    data    :   $.param($scope.registerFormData),
                    headers :   {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if(data.success)
                {
                    $scope.name         =   data.name;
                    $scope.show_me      =   true;
                    element             =   document.getElementById("navbarToggle");
                    if(window.getComputedStyle(element).display!='none')
                    {
                        element.click();
                    }
                    closeAllModals();
                }
                else
                {
                    $scope.message = data.message;
                }
            });
        }
    };
}]);


function changeLang(obj){
  var langValue=obj.value;
  changeLangDomain(langValue);
}

function changeLangDomain(lang){
  var arrLang=lang.split("$$");
  lang=arrLang[0];
  var regex = new RegExp("^(http|https)://", "i");
    var match = regex.test(lang);
    if(match==true){
        url =lang;
    }else{
    var url='//'+lang+'.'+$("#mainDomainHostName").val();
    if(lang=='en')
      url='//'+$("#mainDomainHostName").val();
    }

    if(arrLang.length>1 && arrLang[1]!='0'){
      url +='/'+arrJsConfig.CREATE_QUIZ_URL+'/'+arrLang[1];
    }
  document.location.href  =url;
}
function closeAllModals() {

    // get modals
    const modals = document.getElementsByClassName('modal');

    // on every modal change state like in hidden modal
    for(let i=0; i<modals.length; i++) {
      modals[i].classList.remove('show');
      modals[i].setAttribute('aria-hidden', 'true');
      modals[i].setAttribute('style', 'display: none');
    }

     // get modal backdrops
     const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

     // remove every modal backdrop
     for(let i=0; i<modalsBackdrops.length; i++) {
        modalsBackdrops[i].parentNode.removeChild(modalsBackdrops[i]);
     }
  }


myApp.controller("auth", function($scope,$http,userService) {
    
    $scope.username            =   '';
    $scope.password            =   '';

    $scope.remember           =   false;
    $scope.remember_me         =   function(){

                                        if($scope.remember)
                                            setCookies('remember',false);
                                        else 
                                            setCookies('remember',true);
                                    };

    $scope.auth    =   function($event){

                            $scope.loginError       =   false;
                            $scope.usernameMsg      =   false;
                            $scope.pwdMsg           =   false;

                            if($scope.username=='')
                            {
                                $scope.usernameMsg  =   true;
                                return true;
                            }

                            if($scope.password=='')
                            {
                                $scope.pwdMsg  =   true;
                                return true;
                            }

                            $("#formDiv").hide();
                            window.scrollTo(0, 0); 
                            

                            let data    =   {
                                            username    :   $scope.username, 
                                            password    :   $scope.password, 
                                            action      :   'login', 
                                        };
                            if($("#name").length>0){
                              data.name=$("#name").val();
                              data.action="register";
                            }
                            console.log(data);
                            $("#loadingDiv").show();
                            userService.request($event.target,data).then(function(load){
                                response    =   load.data;
                                if(response.hasOwnProperty('status') && response.status==1 && Object.keys(response.data).length)
                                {
                                    window.location    =  $event.target.getAttribute('redirect');
                                }
                                else if(response.status==0 && response.error.code==150107){
                                      $scope.usernameExistsMsg  =   true;    
                                      $("#loadingDiv").hide();    
                                       $("#formDiv").show();          
                                }
                                else
                                {
                                    $scope.loginError  =   true;
                                    // $("#signin").modal("show");
                                    $("#loadingDiv").hide();$("#formDiv").show();  
                                }
                            });
                        };
});
