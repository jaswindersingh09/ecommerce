const footerHTML = `
<footer class="section-footer">
  <div class="footer-container container">
    <div class="content-1">
      <a href="index.html"><img src="/public/images/logo.png" alt="thapa store"></a>
      <p>Welcome to Thapa EcomStore, your ultimate designation for cutting-edge gadgets!</p>
    </div>
  </div>
  <div class="container grid grid-four--cols">
    <div class="footer-1--div">

    <div class="social-footer--icons">
      <a href="https://discord.gg/fDuFEXfyyH" target="_blank"><i class="fa-brands fa-discord"></i></a>
      <a href="https://www.youtube.com/thapatechnical" target="_blank"><i class="fa-brands fa-youtube"></i></a>
      <a href="https://www.instagram.com/thapatechnical" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    </div>
    </div>

    <div class="footer-2--div">
      <p class="footer-subheading">Courses</p>
      <ul>
        <li><a href="index.html">home</a></li>
        <li><a href="index.html">home</a></li>
        <li><a href="index.html">home</a></li>
        <li><a href="index.html">home</a></li>
        <li><a href="index.html">home</a></li>
      </ul>
    </div>

    <div class="footer-3--div">
      <p class="footer-subheading">Links</p>
      <ul>
        <li><a href="index.html">link</a></li>
        <li><a href="index.html">link</a></li>
        <li><a href="index.html">link</a></li>
        <li><a href="index.html">link</a></li>
        <li><a href="index.html">link</a></li>
      </ul>
    </div>

    <div class="footer-4--div">
      <p class="footer-subheading">Blogs</p>
      <ul>
        <li><a href="index.html">Html</a></li>
        <li><a href="index.html">Html</a></li>
        <li><a href="index.html">Html</a></li>
        <li><a href="index.html">Html</a></li>
        <li><a href="index.html">Html</a></li>
      </ul>
    </div>
  </div>
</footer>
`;

const footerElem = document.querySelector(".section-footer");

footerElem.insertAdjacentHTML("afterbegin", footerHTML)