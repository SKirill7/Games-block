"use strict";

var tab1 = document.getElementById('tab_01');
var tab2 = document.getElementById('tab_02');
var tab3 = document.getElementById('tab_03');
var link1 = document.getElementById('tab-link_01');
var link2 = document.getElementById('tab-link_02');
var link3 = document.getElementById('tab-link_03');
var tabs = [tab1, tab2, tab3];
var links = [link1, link2, link3];

var showTab = function showTab(_ref) {
  var target = _ref.target;
  var id = parseInt(target.id[target.id.length - 1]) - 1;
  if (links[id].classList.contains('disabled')) return;
  links.forEach(function (link) {
    return link.classList.remove('active');
  });
  links[id].classList.add('active');
  tabs.forEach(function (tab) {
    return tab.style.display = 'none';
  });
  tabs[id].style.display = 'block';
};

link1.addEventListener('click', showTab);
link2.addEventListener('click', showTab);
link3.addEventListener('click', showTab); //=================Modal========================

var openModal = document.getElementById("open_modal");
var gameModal = document.getElementById("modal");
var closeModal = document.getElementById("close_modal");
openModal.addEventListener('click', function () {
  return gameModal.classList.add("open");
});
closeModal.addEventListener('click', function () {
  return gameModal.classList.remove("open");
});