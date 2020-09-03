window.onload=init;
var value=[10,10,10,10,10];
var status_1=["Good","Angry","Bored","Excited","Pleased","Sick","Tired","Hungry"];
function init()
{
    
    var action=["PLAY","FEED","GROOM","MEDICINE","SEND TO BED"];
    var value_name=["Friendliness","Boredom","Hunger Level","Health"];
    var obj=document.getElementById("image1");
    obj.setAttribute("src","default.jpg");
    document.getElementById("status").innerHTML=status_1[0];
    document.getElementById("friend").innerHTML=value[0];
    document.getElementById("bore").innerHTML=value[1];
    document.getElementById("hunger").innerHTML=value[2];
    document.getElementById("health").innerHTML=value[3];
    document.getElementById("sleep").innerHTML=value[4];
    document.getElementById("play").onclick = play;
    document.getElementById("feed").onclick = feed;
    document.getElementById("groom").onclick = groom;
    document.getElementById("medicine").onclick = medicine;
    document.getElementById("send").onclick = send;
}
function change(i1,i2,i3,i4,i5)
{
    var i;
    var origin=[i1,i2,i3,i4,i5];
    for(i=0;i<5;i++)
    {
        if (judge(value[i]+origin[i])==100)value[i]=value[i]+origin[i];//if in the range, change
        else value[i]=judge(value[i]+origin[i]);//0 or 20
    }
    change_status();
    document.getElementById("friend").innerHTML=value[0];
    document.getElementById("bore").innerHTML=value[1];
    document.getElementById("hunger").innerHTML=value[2];
    document.getElementById("health").innerHTML=value[3];
    document.getElementById("sleep").innerHTML=value[4];
    
}
function judge(x)
{
    if (x>=0&&x<=20)return 100;//within the range
    else if(x<0) return 0;
    else return 20;
}
function change_status()
{
    //sick
    if (value[3]<5)
    {
        document.getElementById("status").innerHTML=status_1[5];
        var obj1=document.getElementById("image1");
        obj1.setAttribute("src","sick.jpg");
    }
    //not sick 
        //hungry
    else if(value[2]>15)
    {
        document.getElementById("status").innerHTML=status_1[7];
        var obj2=document.getElementById("image1");
        obj2.setAttribute("src","hungry.jpg");
    }
    //not sick //not hungry
        //tired
    else if(value[4]>15)
    {
        document.getElementById("status").innerHTML=status_1[6];
        var obj3=document.getElementById("image1");
        obj3.setAttribute("src","tired.jpg");
    }
    //not sick //not hungry //not tired
        //bored
    else if(value[1]>15)
    {
        document.getElementById("status").innerHTML=status_1[2];
        var obj4=document.getElementById("image1");
        obj4.setAttribute("src","bored.jpg");
    }
    
    //not sick //not hungry //not tired //not bored
        //angry
    else if(value[0]<5)
    {
        document.getElementById("status").innerHTML=status_1[1];
        var obj5=document.getElementById("image1");
        obj5.setAttribute("src","angry.jpg");
    }
    //not sick //not hungry //not tired //not bored //not angry
        //excited
    else if(value[0]>15&&value[1]<=5&&value[4]<=5)
    {
        document.getElementById("status").innerHTML=status_1[3];
        var obj6=document.getElementById("image1");
        obj6.setAttribute("src","excited.jpg");
    }
    //not sick //not hungry //not tired //not bored //not angry //not excited
        //pleased
    else if(value[0]>15&&value[1]<10&&value[2]<5&&value[3]>15&&value[4]>5)
    {
        document.getElementById("status").innerHTML=status_1[4];
        var obj7=document.getElementById("image1");
        obj7.setAttribute("src","pleased.jpg");
    }
    else 
    {
        document.getElementById("status").innerHTML=status_1[0];
        var obj8=document.getElementById("image1");
        obj8.setAttribute("src","default.jpg");
    }
}
function play()
{
    change(-2,-10,2,-1,2);
}
function feed()
{
    change(0,0,-10,5,0);
}
function groom()
{
    change(10,2,0,2,2);
}
function medicine()
{
    change(-5,0,0,10,0);
}
function send()
{
    change(3,5,5,0,-15);
}