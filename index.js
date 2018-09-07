function takeANumber(katzDeliLine,newCustomer){
  katzDeliLine.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + (katzDeliLine.length) + " in line." ;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var x = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + x + ".";
  
  }
  else{
    return"There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length>0){
    var x = [];
    var i;
    for (i=0; i<katzDeliLine.length; i++){
      x.push((i+1)+ ". "+ katzDeliLine[i]);
      return "The line is currently " + x;
    }
  }
  else{
    return "The line is currently empty.";
  }
}