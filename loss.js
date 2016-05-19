var WeightLoss = angular.module("WeightLoss", ["firebase"]);
 
function MainController($scope, $firebase) {
    
    
       
    
    
//Global Variables
        var nDate = 14;
        var nMonth = 1;
    
       
    
        var currentdate = new Date(); 
        var datetime = currentdate.getFullYear();
        var myMonth = (currentdate.getMonth()+nMonth);
        var myDay   =  (currentdate.getDay()+nDate);
        var totalTime = parstInt = datetime
        
  
        
//important arrays
    var month = new Array();
                month[1] = "January";
                month[2] = "February";
                month[3] = "March";
                month[4] = "April";
                month[5] = "May";
                month[6] = "June";
                month[7] = "July";
                month[8] = "August";
                month[9] = "September";
                month[10] = "October";
                month[11] = "November";
                month[12] = "December";
    var d = new Date();

    var n = month[(d.getMonth()+nMonth)]; 
    
    var may2016 = new Array();
                may2016[1] = "1st";
                may2016[2] = "2nd";
                may2016[3] = "3rd";
                may2016[4] = "4th";
                may2016[5] = "5th";
                may2016[6] = "6th";
                may2016[7] = "7th";
                may2016[8] = "8th";
                may2016[9] = "9th";
                may2016[10] = "10th";
                may2016[11] = "11th";
                may2016[12] = "12th";
                may2016[13] = "13th";
                may2016[14] = "14th";
                may2016[15] = "15th";
                may2016[16] = "16th";
                may2016[17] = "17th";
                may2016[18] = "18th";
                may2016[19] = "19th";
                may2016[20] = "20th";
                may2016[21] = "21st";
                may2016[22] = "22nd";
                may2016[23] = "23rd";
                may2016[24] = "24th";
                may2016[25] = "25th";
                may2016[26] = "26th";
                may2016[27] = "27th";
                may2016[28] = "28th";
                may2016[29] = "29th";
                may2016[30] = "30th";
                may2016[31] = "31st";
    


    
    var days = new Array();
                days[1] = "first";days[2] = "second"; days[3] = "third";days[4] = "fourth";days[5] = "fifth";
                days[6] = "sixth";days[7] = "seventh";days[8] = "eighth";days[9] = "ninth";days[10] = "tenth";
                days[11] = "eleventh";days[12] = "twelfth";days[13] = "thirteenth";days[14] = "fourteenth";
                days[15] = "fifteenth";days[16] = "sixteenth";days[17] = "seventeenth";days[18] = "eighteenth";
                days[19] = "nineteenth";days[20] = "twentieth";days[21] = "twentyfirst";days[22] = "twentysecond";
                days[23] = "twentythird";days[24] = "twentyfourth";days[25] = "twentyfifth";days[26] = "twentysixth";
                days[27] = "twentyseventh";days[28] = "twentyeighth";days[29] = "twentyninth";days[30] = "thirtieth";
                days[31] = "thirtyfirst";
         var k = new Date();
        var p = days[(k.getDay()+nDate)];
    
        $scope.moveF =  function() { nMonth = nMonth + 1;}
  
$scope.moveB = function() {
  setTimeout(function() {
    nMonth = nMonth - 1;
    $scope.$apply(); //this triggers a $digest
  }, 200);
};


    
//Important $scopes/urls
    $scope.monthDate = $firebase(new Firebase('https://trackmyloss.firebaseio.com/calender/' + datetime + '/' + n + '/' + p)); 
   
    $scope.Account = $firebase(new Firebase('https://trackmyloss.firebaseio.com/Account'));
    $scope.today = $firebase(new Firebase('https://trackmyloss.firebaseio.com/calender/' + myDay + myMonth + totalTime));
    
    
    
    
    //Next and previous months 

   
    
    
    
    
    
/*-------------------------------------------------------------------
    mega Attempt
---------------------------------------------------------------------*/  
    
    $scope.myMonthIs = { month:   $scope.calender,};
    $scope.monthOfYear = function() {
       var thisYear = datetime;
        var newMonth = myMonth + nMonth - 1 ;
        var combine = thisYear +""+ newMonth;
        //2016
                 if (combine ==20161){ return month[1]   + "/" + thisYear;}
            else if (combine ==20162){ return month[2]   + "/" + thisYear;}
            else if (combine ==20163){ return month[3]   + "/" + thisYear;}
            else if (combine ==20164){ return month[4]   + "/" + thisYear;}
            else if (combine ==20165){ return month[5]   + "/" + thisYear;}
            else if (combine ==20166){ return month[6]   + "/" + thisYear;}
            else if (combine ==20167){ return month[7]   + "/" + thisYear;}
            else if (combine ==20168){ return month[8]   + "/" + thisYear;}
            else if (combine ==20169){ return month[9]   + "/" + thisYear;}
            else if (combine ==201610){ return month[10] + "/" + thisYear;}
            else if (combine ==201611){ return month[11] + "/" + thisYear;}
            else if (combine ==201612){ return month[12] + "/" + thisYear;}
        
        //2017
            else if (combine ==20171){ return month[1];}
            else if (combine ==20172){ return month[2];}
            else if (combine ==20173){ return month[3]   + "/" + thisYear;}
            else if (combine ==20174){ return month[4]   + "/" + thisYear;}
            else if (combine ==20175){ return month[5]   + "/" + thisYear;}
            else if (combine ==20176){ return month[6]   + "/" + thisYear;}
            else if (combine ==20177){ return month[7]   + "/" + thisYear;}
            else if (combine ==20178){ return month[8]   + "/" + thisYear;}
            else if (combine ==20179){ return month[9]   + "/" + thisYear;}
            else if (combine ==201710){ return month[10] + "/" + thisYear;}
            else if (combine ==201711){ return month[11] + "/" + thisYear;}
            else if (combine ==201712){ return month[12] + "/" + thisYear;}
        
        
        else { return daysInMonth[1];}  
        
    }
    

  /*-------------------------------------------------------------------
    Get createdDate
---------------------------------------------------------------------*/    
       $scope.getCreatedDate = { created:  $scope.Account,}; 
         $scope.getCreated = function() {
          var user = $scope.getCreatedDate.created;
             var myStart = user.created;
             if (typeof myStart  != 'undefined' && myStart) {
             return myStart; } else { return "Loading"}}
  /*-------------------------------------------------------------------
    Get createdDate
---------------------------------------------------------------------*/    
       $scope.startW = { startWeight:  $scope.Account,}; 
         $scope.startingW = function() {
          var sw = $scope.startW.startWeight;
             var myStart = sw.startWeight;
             if (typeof myStart  != 'undefined' && myStart) {
             return myStart; } else { return "Loading"}}
/*-------------------------------------------------------------------
    Get goalDifferece
---------------------------------------------------------------------*/    
       $scope.goalT = { targetW:  $scope.Account,}; 
         $scope.getGoalDiff = function() {
             var gl = $scope.goalT.targetW.targetW;
             var sw = $scope.goalT.targetW.startWeight;
            var glsw = sw - gl;
             var fixW = glsw.toFixed(1);
             if (typeof fixW  != 'undefined' && fixW) {
           return fixW; } else { return "Loading"}
         }
/*-------------------------------------------------------------------
    Get Name variable for Graph and Title
---------------------------------------------------------------------*/    
       $scope.getName = { name:  $scope.Account,}; 
         $scope.getUn2 = function() {
          var user = $scope.getName.name;
             var myName = user.name;
                        return myName;}
 /*-------------------------------------------------------------------
    Get todays weight for title
---------------------------------------------------------------------*/    
       $scope.getToday = { MyToday:  $scope.monthDate,}; 
         $scope.todayInput = function() {
          var gmd = $scope.getToday;
             var m = new Date();
             var yes = gmd.MyToday[days[(m.getDay()+nDate)]];
             if (typeof yes  != 'undefined' && yes) {
             return yes; } else { return "N/A"}
                 
                }
 /*-------------------------------------------------------------------
    Insert New Weight 
---------------------------------------------------------------------*/
    $scope.insertNewWeight = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            var todayWeight = $scope.todayWeight.trim();
            
                x = {};
                x[p] = todayWeight;
                if (todayWeight > 39 && todayWeight < 351) {
         
                    $scope.monthDate.$set(x);
                    
                    initalWeight.value = '';
            } else (alert("Error: Please enter a value between 40Kg and 350KG"))
            initalWeight.value = '';
        }
    }     
/*---------------------------------------------------------------------------------------------------------------------------------------
Draw the Graph
----------------------------------------------------------------------------------------------------------------------------------------*/  
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
 
     $scope.getCalender = { MyTimes:  $scope.calender,}; 
         $scope.getdates = function() {
            var Ti = $scope.getCalender;
             var may = Ti.MyTimes;

             
              if (typeof may[days[1]]   != 'undefined' && may[days[1]])  { var may1  = may[days[1]].first;
            if(may1 = may1) { document.getElementById("1st").style.color = "#ff6666"; document.getElementById("1st").innerHTML = may1;} else {  document.getElementById("1st").style.color = '#28a543'; document.getElementById("1st").innerHTML = may1;}}else {var may1 = null; document.getElementById("1st").innerHTML = null;};
             
               if (typeof may[days[2]]   != 'undefined' && may[days[2]])  { var may2  = may[days[2]].second;
            if(may2 > may1) { document.getElementById("2nd").style.color = "#ff6666"; document.getElementById("2nd").innerHTML = may2;} else {  document.getElementById("2nd").style.color = '#28a543'; document.getElementById("2nd").innerHTML = may2;}}else {var may2 = null; document.getElementById("2nd").innerHTML = null;};
             
               if (typeof may[days[3]]   != 'undefined' && may[days[3]])  { var may3  = may[days[3]].third;
            if(may3 > may2) { document.getElementById("3rd").style.color = "#ff6666"; document.getElementById("3rd").innerHTML = may3;} else {  document.getElementById("3rd").style.color = '#28a543'; document.getElementById("3rd").innerHTML = may3;}}else {var may3 = null; document.getElementById("3rd").innerHTML = null;};
             
             if (typeof may[days[4]]   != 'undefined' && may[days[4]])  { var may4  = may[days[4]].fourth;
            if(may4 > may3) { document.getElementById("4th").style.color = "#ff6666"; document.getElementById("4th").innerHTML = may4;} else {  document.getElementById("4th").style.color = '#28a543'; document.getElementById("4th").innerHTML = may4;}}else {var may4 = null; document.getElementById("4th").innerHTML = null;};
             
               if (typeof may[days[5]]   != 'undefined' && may[days[5]])  { var may5  = may[days[5]].fifth;
            if(may5 > may4) { document.getElementById("5th").style.color = "#ff6666"; document.getElementById("5th").innerHTML = may5;} else {  document.getElementById("5th").style.color = '#28a543'; document.getElementById("5th").innerHTML = may5;}}else {var may5 = null; document.getElementById("5th").innerHTML = null;};
             
             if (typeof may[days[6]]   != 'undefined' && may[days[6]])  { var may6  = may[days[6]].sixth;
            if(may6 > may5) { document.getElementById("6th").style.color = "#ff6666"; document.getElementById("6th").innerHTML = may6;} else {  document.getElementById("6th").style.color = '#28a543'; document.getElementById("6th").innerHTML = may6;}}else {var may6 = null; document.getElementById("6th").innerHTML = null;};
             
               if (typeof may[days[7]]   != 'undefined' && may[days[7]])  { var may7  = may[days[7]].seventh;
            if(may7 > may6) { document.getElementById("7th").style.color = "#ff6666"; document.getElementById("7th").innerHTML = may7;} else {  document.getElementById("7th").style.color = '#28a543'; document.getElementById("7th").innerHTML = may7;}}else {var may7 = null; document.getElementById("7th").innerHTML = null;};
             
             
         
          
             
            if (typeof may[days[8]]   != 'undefined' && may[days[8]])  { var may8  = may[days[8]].eighth;
            if(may8 > may7) { document.getElementById("8th").style.color = "#ff6666"; document.getElementById("8th").innerHTML = may8;} else {  document.getElementById("8th").style.color = '#28a543'; document.getElementById("8th").innerHTML = may8;}}else {var may8 = null; document.getElementById("8th").innerHTML = null;};
       
             
            if (typeof may[days[9]]   != 'undefined' && may[days[9]])  { var may9  = may[days[9]].ninth;
            if(may9 > may8) { document.getElementById("9th").style.color = "#ff6666"; document.getElementById("9th").innerHTML = may9;} else {  document.getElementById("9th").style.color = '#28a543'; document.getElementById("9th").innerHTML = may9;}}else {var may9 = null; document.getElementById("9th").innerHTML = null;};
              
            if (typeof may[days[10]]   != 'undefined' && may[days[10]])  { var may10  = may[days[10]].tenth;
            if(may10 > may9) { document.getElementById("10th").style.color = "#ff6666"; document.getElementById("10th").innerHTML = may10;} else {  document.getElementById("10th").style.color = '#28a543'; document.getElementById("10th").innerHTML = may10;}}else {var may10 = null; document.getElementById("10th").innerHTML = null;};
             
            if (typeof may[days[11]]  != 'undefined' && may[days[11]]) { var may11 = may[days[11]].eleventh;
            if(may11 > may10) { document.getElementById("11th").style.color = "#ff6666"; document.getElementById("11th").innerHTML = may11;} else {  document.getElementById("11th").style.color = '#28a543'; document.getElementById("11th").innerHTML = may11;}}else {var may11 = null; document.getElementById("11th").innerHTML = null;};
       
            if (typeof may[days[12]]  != 'undefined' && may[days[12]]) { var may12 = may[days[12]].twelfth;
            if(may12 > may11) { document.getElementById("12th").style.color = "#ff6666"; document.getElementById("12th").innerHTML = may12;} else {  document.getElementById("12th").style.color = '#28a543'; document.getElementById("12th").innerHTML = may12;}}else {var may12 = null; document.getElementById("12th").innerHTML = null;};

            if (typeof may[days[13]]  != 'undefined' && may[days[13]]) { var may13 = may[days[13]].thirteenth;                       if(may13 > may12) { document.getElementById("13th").style.color = "#ff6666"; document.getElementById("13th").innerHTML = may13;} else {  document.getElementById("13th").style.color = '#28a543'; document.getElementById("13th").innerHTML = may13;}}else {var may13 = null; document.getElementById("13th").innerHTML = null;};
             
            if (typeof may[days[14]]  != 'undefined' && may[days[14]]) { var may14 = may[days[14]].fourteenth;
            if(may14 > may13) { document.getElementById("14th").style.color = "#ff6666"; document.getElementById("14th").innerHTML = may14;} else {  document.getElementById("14th").style.color = '#28a543'; document.getElementById("14th").innerHTML = may14;}}else {var may14 = null; document.getElementById("14th").innerHTML = null;};

            if (typeof may[days[15]]  != 'undefined' && may[days[15]]) { var may15 = may[days[15]].fifteenth;
            if(may15 > may14) { document.getElementById("15th").style.color = "#ff6666"; document.getElementById("15th").innerHTML = may15;} else {  document.getElementById("15th").style.color = '#28a543'; document.getElementById("15th").innerHTML = may15;}}else {var may14 = null; document.getElementById("15th").innerHTML = null;};
             
              if (typeof may[days[16]]  != 'undefined' && may[days[16]]) { var may16 = may[days[16]].sixteenth;
            if(may16 > may15) { document.getElementById("16th").style.color = "#ff6666"; document.getElementById("16th").innerHTML = may16;} else {  document.getElementById("16th").style.color = '#28a543'; document.getElementById("16th").innerHTML = may16;}}else {var may16 = null; document.getElementById("16th").innerHTML = null;}; 
          
          
          
          
          
            if (typeof may[days[17]]  != 'undefined' && may[days[17]]) { var may17 = may[days[17]].seventeenth;
            if(may17 > may16) { document.getElementById("17th").style.color = "#ff6666"; document.getElementById("17th").innerHTML = may17;} else {  document.getElementById("17th").style.color = '#28a543'; document.getElementById("17th").innerHTML = may17;}}else {var may17 = null; document.getElementById("17th").innerHTML = null;}; 
    
       if (typeof may[days[18]]  != 'undefined' && may[days[18]]) { var may18 = may[days[18]].eighteenth;
            if(may16 > may15) { document.getElementById("18th").style.color = "#ff6666"; document.getElementById("18th").innerHTML = may18;} else {  document.getElementById("18th").style.color = '#28a543'; document.getElementById("18th").innerHTML = may18;}}else {var may18 = null; document.getElementById("18th").innerHTML = null;}; 

 if (typeof may[days[19]]  != 'undefined' && may[days[19]]) { var may19 = may[days[19]].nineteenth;
            if(may19 > may18) { document.getElementById("19th").style.color = "#ff6666"; document.getElementById("19th").innerHTML = may19;} else {  document.getElementById("19th").style.color = '#28a543'; document.getElementById("19th").innerHTML = may19;}}else {var may19 = null; document.getElementById("19th").innerHTML = null;}; 

  if (typeof may[days[20]]  != 'undefined' && may[days[20]]) { var may20 = may[days[20]].twentieth;
            if(may20 > may19) { document.getElementById("20th").style.color = "#ff6666"; document.getElementById("20th").innerHTML = may20;} else {  document.getElementById("20th").style.color = '#28a543'; document.getElementById("20th").innerHTML = may20;}}else {var may20 = null; document.getElementById("20th").innerHTML = null;}; 

  if (typeof may[days[21]]  != 'undefined' && may[days[21]]) { var may21 = may[days[21]].twentyfirst;
            if(may21 > may20) { document.getElementById("21st").style.color = "#ff6666"; document.getElementById("21st").innerHTML = may21;} else {  document.getElementById("21st").style.color = '#28a543'; document.getElementById("21st").innerHTML = may21;}}else {var may21 = null; document.getElementById("21st").innerHTML = null;}; 
             
             
  if (typeof may[days[22]]  != 'undefined' && may[days[22]]) { var may22 = may[days[22]].twentysecond;
            if(may22 > may21) { document.getElementById("22nd").style.color = "#ff6666"; document.getElementById("22nd").innerHTML = may22;} else {  document.getElementById("22nd").style.color = '#28a543'; document.getElementById("22nd").innerHTML = may22;}}else {var may22 = null; document.getElementById("22nd").innerHTML = null;}; 
             
                if (typeof may[days[23]]  != 'undefined' && may[days[23]]) { var may23 = may[days[23]].twentythird;
            if(may23 > may23) { document.getElementById("23rd").style.color = "#ff6666"; document.getElementById("23rd").innerHTML = may23;} else {  document.getElementById("23rd").style.color = '#28a543'; document.getElementById("23rd").innerHTML = may23;}}else {var may23 = null; document.getElementById("23rd").innerHTML = null;}; 
             
               if (typeof may[days[24]]  != 'undefined' && may[days[24]]) { var may24 = may[days[24]].twentyfourth;
            if(may24 > may23) { document.getElementById("24th").style.color = "#ff6666"; document.getElementById("24th").innerHTML = may24;} else {  document.getElementById("24th").style.color = '#28a543'; document.getElementById("24th").innerHTML = may24;}}else {var may24 = null; document.getElementById("24th").innerHTML = null;}; 
             
               if (typeof may[days[25]]  != 'undefined' && may[days[25]]) { var may25 = may[days[25]].twentyfifth;
            if(may25 > may24) { document.getElementById("25th").style.color = "#ff6666"; document.getElementById("25th").innerHTML = may25;} else {  document.getElementById("25th").style.color = '#28a543'; document.getElementById("25th").innerHTML = may25;}}else {var may25 = null; document.getElementById("25th").innerHTML = null;}; 
             
               if (typeof may[days[26]]  != 'undefined' && may[days[26]]) { var may26 = may[days[26]].twentysixth;
            if(may26 > may25) { document.getElementById("26th").style.color = "#ff6666"; document.getElementById("26th").innerHTML = may26;} else {  document.getElementById("26th").style.color = '#28a543'; document.getElementById("26th").innerHTML = may26;}}else {var may26 = null; document.getElementById("26th").innerHTML = null;}; 
             
               if (typeof may[days[27]]  != 'undefined' && may[days[27]]) { var may27 = may[days[27]].twentyseventh;
            if(may27 > may26) { document.getElementById("27th").style.color = "#ff6666"; document.getElementById("27th").innerHTML = may27;} else {  document.getElementById("27th").style.color = '#28a543'; document.getElementById("27th").innerHTML = may27;}}else {var may27 = null; document.getElementById("27th").innerHTML = null;}; 
             
            if (typeof may[days[28]]  != 'undefined' && may[days[28]]) { var may28 = may[days[28]].twentyeighth;
            if(may28 > may29) { document.getElementById("28th").style.color = "#ff6666"; document.getElementById("28th").innerHTML = may28;} else {  document.getElementById("28th").style.color = '#28a543'; document.getElementById("28th").innerHTML = may28;}}else {var may21 = null; document.getElementById("28th").innerHTML = null;};
             
            $scope.correct29 = function() {
            var checkDate = may2016[29]; 
            if ((currentdate.getMonth()+nMonth) == 2 ){ return null } else {return checkDate}}
             
                if (typeof may[days[29]]  != 'undefined' && may[days[29]]) { var may29 = may[days[29]].twentyninth;
            if(may29 > may28) { document.getElementById("29th").style.color = "#ff6666"; document.getElementById("29th").innerHTML = may29;} else {  document.getElementById("29th").style.color = '#28a543'; document.getElementById("29th").innerHTML = may29;}}else {var may29 = null; document.getElementById("29th").innerHTML = null;}; 
          

/*-------------------------------------------------------------------------------------------------------------------------------------
Checking to see how many dates are in the month
-------------------------------------------------------------------------------------------------------------------------------------*/
         $scope.correct30 = function() {
            var checkDate = may2016[30]; 
            if ((currentdate.getMonth()+nMonth) == 2 ){ return null } else {return checkDate}}
             
             
                     if (typeof may[days[30]]  != 'undefined' && may[days[30]]) { var may30 = may[days[30]].thirtieth;
            if(may30 > may29) { document.getElementById("30th").style.color = "#ff6666"; document.getElementById("30th").innerHTML = may30;} else {  document.getElementById("30th").style.color = '#28a543'; document.getElementById("30th").innerHTML = may30;}}else {var may30 = null; document.getElementById("30th").innerHTML = null;}; 
             
                              
/*-------------------------------------------------------------------------------------------------------------------------------------
Checking to see how many dates are in the month
-------------------------------------------------------------------------------------------------------------------------------------*/
         $scope.correct31 = function() {
            var checkDate = may2016[31]; 
             var MD = (currentdate.getMonth()+nMonth)
            if (MD ==  1 || MD == 3 || MD == 5 ||MD == 7 || MD == 8 || MD== 10 ){ return checkDate } else {return null}}
         
         $scope.BLeft = function() {
            var checkDate =  "()"; 
             var MD = (currentdate.getMonth()+nMonth)
            if (MD ==  1 || MD == 3 || MD == 5 ||MD == 7 || MD == 8 || MD== 10 ){ return checkDate } else {return null}}
         
        
             
            if (typeof may[days[31]]  != 'undefined' && may[days[30]]) { var may31 = may[days[31]].thirtyfirst;
            if(may31 > may30) { document.getElementById("31st").style.color = "#ff6666"; document.getElementById("31st").innerHTML = may31;} else {  document.getElementById("31st").style.color = '#28a543'; document.getElementById("31st").innerHTML = may31;}}else {var may31 = null; document.getElementById("31st").innerHTML = null;}; 
             
/*----------------------------------------------------------------------------------------------------------------------------------------
Google Graph Stats
--------------------------------------------------------------------------------------------------------------------------------------*/   
             
        var data = google.visualization.arrayToDataTable([
            [month[4],  "Paul Hayward", "Christian Cox"],
            [may2016[1], parseInt(may1), null],
            [may2016[2],may2, 96],
            [may2016[3],may3, 97],
            [may2016[4],may4, 95.8],
            [may2016[5],may5, 96.2],
            [may2016[6],may6, 96.1],
            [may2016[7],may7, 95.7],
            [may2016[8],may8, 95.3],
            [may2016[9],may9, null],
            [may2016[10],may10, null],
            [may2016[11],may11, null],
            [may2016[12],may12, null],
            [may2016[13],may13, null],
            [may2016[14],may14, null],
            [may2016[15],may15, null],
            [may2016[16],may16, null],
            [may2016[17],may17, null],
            [may2016[18],may18, null],
            [may2016[19],may19, null],
            [may2016[20],may20, null],
            [may2016[21],may21, null],
            [may2016[22],may22, null],
            [may2016[23],may23, null],
            [may2016[24],may24, null],
            [may2016[25],may25, null],
            [may2016[26],may26, null],
            [may2016[27],may27, null],
            [may2016[28],may28, null],
            [may2016[29],may29, null],
            [may2016[30],may30, null],
            [may2016[31],may31, null],   
        ]);

        var options = {
          title: 'Weight Loss Line Graph',
          colors: ['#0080FF', '#DF0101', '#ec8f6e', '#f3b49f', '#f6c7b6'],
          curveType: 'function',
            interpolateNulls: true,
          legend: {position: 'bottem', textStyle: {fontSize: 14}}  
        };
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
      }
       
}
      
    
/*-------------------------------------------------------------------
   Create New User
---------------------------------------------------------------------*/  
    

    
    
    
    
/*-------------------------------------------------------------------
   edit Task on firebase
---------------------------------------------------------------------*/
                $scope.edit = function(index) {
    	var mw = $scope.myWeight[index];
        var newWeight = prompt("Update the task name", mw.weight); // to keep things simple and old skool :D
        if (newWeight && newWeight.length > 0) {
            // build the FB endpoint to the item in movies collection
            var updateWeightRef = buildEndPoint(mw.key, $firebase);
            updateWeightRef.$set({
                weight: newWeight
            });
        }
    } 
/*-------------------------------------------------------------------
   editTarget Task on firebase
---------------------------------------------------------------------*/
                $scope.editTarget = function(index) {
    	var mw = $scope.target = $firebase(new Firebase('https://trackmyloss.firebaseio.com/target'));
        var newWeight = prompt("Update the task name", mw.weight); // 
        if (newWeight && newWeight.length > 0) {
         
            var updateTargetRef = buildEndPoint("target", $firebase);
            updateTargetRef.$set({
                
                weight: newWeight
            });
        }
    }
/*-------------------------------------------------------------------
  delete task from firebase
---------------------------------------------------------------------*/
                $scope.del = function(index) {
    	var mw = $scope.myWeight[index];
        var response = confirm("Are certain about removing \"" + mw.name + "\" from the list?");
        if (response == true) {
            // build the FB endpoint to the item in movies collection
            var deleteWeightRef = buildEndPoint(mw.key, $firebase);
          deleteWeightRef.$remove();        
        }
    }
 /*-------------------------------------------------------------------
Build End Point
---------------------------------------------------------------------*/   
           function buildEndPoint(key, $firebase) {
            return $firebase(new Firebase('https://trackmyloss.firebaseio.com/' + key));
     }
   
}