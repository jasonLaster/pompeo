const wrapper$ = document.querySelector('.w-commerce-commercecartwrapper');
const wrapper2$ = document.querySelector('.w-commerce-commercecartcontainerwrapper')
const wrapperContainer$ = document.querySelector('.w-commerce-commercecartcontainer')
const addToCart$ = document.querySelector('.w-commerce-commerceaddtocartbutton')
const mask$ = document.querySelector('.w-commerce-commercecartcontainerwrapper')
let cartList$;

setTimeout(() => {
  wrapperContainer$.childNodes[1].innerHTML = cartHTML;
  cartList$ = document.querySelector('.w-commerce-commercecartlist')
}, 1000)

  const cartHTML = `<form data-node-type="commerce-cart-form" style="" class="w-commerce-commercecartform"><script type="text/x-wf-template" id="wf-template-34bc3a59-1352-1089-9cca-0fd466a6e76b">%3Cdiv%20class%3D%22w-commerce-commercecartitem%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20tittle-product%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_price_%2522%257D%257D%255D%22%20class%3D%22items-price%22%3E%240.00%3C%2Fdiv%3E%3Ca%20href%3D%22%23%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%3E%3Cdiv%20class%3D%22text-block%22%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-769c381e-b91b-4383-e571-092ddb6e1e37%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%253E%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-769c381e-b91b-4383-e571-092ddb6e1e37%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%3E%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3C%2Fdiv%3E%3Cinput%20type%3D%22text%22%20required%3D%22%22%20pattern%3D%22%5B0-9%5D%2B%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartquantity%20quantity-cart%22%20name%3D%22quantity%22%20min%3D%220%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E</script><div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-34bc3a59-1352-1089-9cca-0fd466a6e76b">"><img  src="https://uploads-ssl.webflow.com/5dbb82fb9684003de9771a62/5dbb82fb96840003b8771ba7_5bb3c8953dbcc19f9365e582_oriento-742751-unsplash.png" alt="" class="w-commerce-commercecartitemimage">



  </div></div><div class="w-commerce-commercecartfooter"><div class="w-commerce-commercecartlineitem cart-line-item"><div>Subtotal</div><div  class="w-commerce-commercecartordervalue">$1,490.00</div></div><div><div data-node-type="commerce-cart-quick-checkout-actions" style="display:none"><a data-node-type="commerce-cart-apple-pay-button" style="display:none;background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton"><div></div></a><a data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton"><svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg><svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg><div>Pay with browser</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button dark center w-inline-block" data-loading-text="Hang Tight...">`


function addToCart(item) {

  const cartItem = `
  <div class="w-commerce-commercecartitem"><img src="https://uploads-ssl.webflow.com/5dbb82fb9684003de9771a62/5dbb82fb968400a58d771ba1_5bb3def89ab3aa39fda26d59_plate-1.png" alt="" class="w-commerce-commercecartitemimage"><div class="w-commerce-commercecartiteminfo"><div class="w-commerce-commercecartproductname tittle-product">Decor Plate </div><div class="items-price">$65.00</div><a href="#" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="5dbb82fb968400b5d8771b8a"><div class="text-block">Remove</div></a><ul></ul></div><input type="text" required="" pattern="[0-9]+" class="w-commerce-commercecartquantity quantity-cart" name="quantity" min="0" value="7"></div>`

  const el = document.createElement('div')
  el.innerHTML = cartItem;
  cartList$.appendChild(el)
  // debugger;

}


function showCart(e) {
  e.stopPropagation();
  e.preventDefault();
  wrapper$.style.opacity = 1;
  // wrapper$.style.transition = `opacity 300ms ease 0s`;

  wrapper2$.style.display = 'flex'
  wrapperContainer$.style.transform = `translateX(0px)`;
  // wrapperContainer$.style.transition = `transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s`;

  addToCart();
}

function hideCart() {
  wrapper$.style.opacity = "";
  wrapper$.style.transition = ``;

  wrapper2$.style.display = 'none'
  wrapperContainer$.style.transform = ``;
  wrapperContainer$.style.transition = ``;
}



addToCart$.addEventListener('click', showCart);
mask$.addEventListener('click', hideCart);
