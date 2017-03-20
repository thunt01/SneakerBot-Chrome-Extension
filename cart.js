//alert("uhvwuydc");
//var bar = document.getElementsByClassName("exp-pdp-size-dropdown-container nsg-form--drop-down--option-container selectBox-options nsg-form--drop-down exp-pdp-size-dropdown exp-pdp-dropdown two-column-dropdown selectBox-dropdown-menu")[0];
//alert(bar);
//var sizes = document.getElementsByClassName("nsg-form--drop-down--option");

//bar.style = 'display: block;'
//alert(sizes.length + sizes[0].innerHTML.trim() + "wehbdw");

//alert(document.URL);
chrome.storage.sync.get('stores', function(site){
  if (document.URL.includes("nike") && site.stores[0]==true){
    chrome.storage.sync.get('size', function(data){
      var mySize = data.size + "";
      var sizes = document.getElementsByName("skuAndSize")[0];
          console.log(sizes.selectedIndex + " yooo");
      for (var i = 0; i <sizes.length; i++) {
        if(sizes[i].innerHTML.trim() == mySize){
          console.log("hfjwevhuwfvwhufvuwyfguywf");
          sizes.selectedIndex = i;
          console.log(sizes.selectedIndex + " yooo");
        } else{
          console.log(sizes[i].innerHTML.trim() + " " + mySize);
        }
      }
      document.getElementById('buyingtools-add-to-cart-button').click();
    });
  }
});
// chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//     console.log(tabs[0].url);
// });

  // chrome.storage.sync.get('size', function(data){
  //   var mySize = data.size + "";
  //   var sizes = document.getElementsByName("skuAndSize")[0];
  //       console.log(sizes.selectedIndex + " yooo");
  //   for (var i = 0; i <sizes.length; i++) {
  //     if(sizes[i].innerHTML.trim() == mySize){
  //       console.log("hfjwevhuwfvwhufvuwyfguywf");
  //       sizes.selectedIndex = i;
  //       console.log(sizes.selectedIndex + " yooo");
  //     } else{
  //       console.log(sizes[i].innerHTML.trim());
  //     }
  //   }
  // document.getElementById('buyingtools-add-to-cart-button').click();
  // });
