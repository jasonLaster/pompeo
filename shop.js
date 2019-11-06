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

  const cartHTML = `<form data-node-type="commerce-cart-form" style="" class="w-commerce-commercecartform">
    <div class="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-34bc3a59-1352-1089-9cca-0fd466a6e76b">">
    <img  src="https://uploads-ssl.webflow.com/5dbb82fb9684003de9771a62/5dbb82fb96840003b8771ba7_5bb3c8953dbcc19f9365e582_oriento-742751-unsplash.png" alt="" class="w-commerce-commercecartitemimage">
</div></div>

<div class="w-commerce-commercecartfooter">

<div class="w-commerce-commercecartlineitem cart-line-item">
<div>Subtotal</div>
  <div  class="w-commerce-commercecartordervalue">$1,490.00</div>
</div>
<div>
  <div data-node-type="commerce-cart-quick-checkout-actions" style="display:none">
  <a data-node-type="commerce-cart-quick-checkout-button" style="display:none" class="w-commerce-commercecartquickcheckoutbutton">
  <svg class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon><polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon></defs><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path><path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path><g transform="translate(0 4)"><mask id="google-mark-b" fill="#fff"><use xlink:href="#google-mark-a"></use></mask><path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)"></path></g><mask id="google-mark-d" fill="#fff"><use xlink:href="#google-mark-c"></use></mask><path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)"></path></g></svg>
  <svg class="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon><polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon><polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon><polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon></g></svg>
  <div>Pay with browser</div></a></div><a href="/checkout" value="Continue to Checkout" data-node-type="cart-checkout-button" class="w-commerce-commercecartcheckoutbutton button dark center w-inline-block" data-loading-text="Hang Tight...">`


let cart = []

function addToCart(item) {

  cart.push(item)

  const cartItem = `
    <div class="w-commerce-commercecartitem">
      <img src="${item.image}" alt="" class="w-commerce-commercecartitemimage">
      <div class="w-commerce-commercecartiteminfo">
        <div class="w-commerce-commercecartproductname tittle-product">${item.title}!!! </div>
        <div class="items-price">${item.price}</div>
          <a href="#" class="w-inline-block" data-wf-cart-action="remove-item" data-commerce-sku-id="5dbb82fb968400b5d8771b8a">
            <div class="text-block">Remove</div>
          </a>
          <ul></ul>
        </div>
        <input type="text" required="" pattern="[0-9]+" class="w-commerce-commercecartquantity quantity-cart" name="quantity" min="0" value="${item.quantity}">
      </div>
    </div>
        `

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

  addToCart(productInfo());
}

function hideCart() {
  wrapper$.style.opacity = "";
  wrapper$.style.transition = ``;

  wrapper2$.style.display = 'none'
  wrapperContainer$.style.transform = ``;
  wrapperContainer$.style.transition = ``;
}

function productInfo() {
  const el = document.querySelector('.product-info');
  const image = document.querySelector('.product-page-image').style.backgroundImage.slice(5,-2)
  const summary = el.querySelector('p').innerText
  const title = el.querySelector('.sale-tittle').innerText
  const price = el.querySelector('.price-text').innerText
  const quantity = +el.querySelector('input').value;

  return { image, summary, title, price, quantity }
}



addToCart$.addEventListener('click', showCart);
mask$.addEventListener('click', hideCart);
