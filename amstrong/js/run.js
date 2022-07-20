
   var number=370;
   var sum=0;
   var n=number;
   while(n>=1)
   {
      var rem=n%10;
      sum=sum+(rem*rem*rem);
      n=Math.floor(n/10);
   }
   if(sum==number)
   {
      console.log( number,' is an armstong number');
   }
else{
   console.log(number,' is not a armstong nunber');
}

