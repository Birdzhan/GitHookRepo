angular.module("employeeList").service("dataService",function(){

  var itemArray = [
	{'name':'Jim Buffulo',"start":"1/13/2001","dep":"Maint"},
    {'name':'Karren Parse',"start":"2/22/2002","dep":"Acct"},
    {'name':'John Doe',"start":"3/13/2005","dep":"Maint"},
    {'name':'Cracken Drink',"start":"7/20/2013","dep":"Manfac"}];

  this.getItems = function(){
    var str = localStorage.getItem("itemLS");
    itemArray = JSON.parse(str) || itemArray;
    return itemArray;
  }
  this.addItem = function(item){
    itemArray.push(item);
    var str = JSON.stringify(itemArray);
    localStorage.setItem("itemLS",str);
  }
  this.removeItem = function(item){
    itemArray.splice(itemArray.indexOf(item),1);
    var str = JSON.stringify(itemArray);
    localStorage.setItem("itemLS",str);
  }
});