

$(document).ready(function() {


  $("button#shoeA").click(function() {
    $("div#productImg").removeClass();
    $("div#productImg").addClass("shoeA");
  });

  $("button#shoeB").click(function() {
    $("div#productImg").removeClass();
    $("div#productImg").addClass("shoeB");
  });

  $("button#shoeC").click(function() {
    $("div#productImg").removeClass();
    $("div#productImg").addClass("shoeC");
  });

  // var product = ($("#prodSelect").val());
  $(".add").submit(function(event){
    var userColor = $("input#color").val();
    var product = $("select#product-type").val();
    event.preventDefault();

    $(".colorClass").text(userColor);
    $(".productClass").text(product);

});
    // styles.insertRule("body {backgound-color: userColor;}");

    $(".checkout").submit(function(event){
    var userName = $("input#name").val();
    var userAddress = $("input#address").val();
    var product = $("select#product-type").val();
    event.preventDefault();

    $(".name").text(userName);
    $(".address").text(userAddress);
    $(".product").text(product);


    // styles.insertRule("body {backgound-color: userColor;}");



    // console.log(userColor);
    // console.log(product);
  });
  //
  // $(".test").submit(function(event){
  //   console.log(userColor);
  // });



//   $(".prodType").submit(function(e))
//
});
