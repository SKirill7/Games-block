"use strict";

document.addEventListener('DOMContentLoaded', function () {
  //==================TABS========================
  var tabs = [document.getElementById('tab_01'), document.getElementById('tab_02'), document.getElementById('tab_03')];
  var links = [document.getElementById('tab-link_01'), document.getElementById('tab-link_02'), document.getElementById('tab-link_03')];

  var showTab = function showTab(_ref) {
    var target = _ref.target;
    var id = parseInt(target.id[target.id.length - 1]) - 1;
    if (links[id].classList.contains('disabled')) return null;
    links.forEach(function (link) {
      return link.classList.remove('active');
    });
    tabs.forEach(function (tab) {
      return tab.style.display = 'none';
    });
    links[id].classList.add('active');
    tabs[id].style.display = 'block';
  };

  links.forEach(function (link) {
    return link.addEventListener('click', showTab);
  }); //=================MODAL========================

  var gameModal = document.getElementById('modal');
  document.getElementById('open_modal').addEventListener('click', function () {
    return gameModal.classList.add('open');
  });
  document.getElementById('close_modal').addEventListener('click', function () {
    return gameModal.classList.remove('open');
  }); //==================SHOW/HIDE ADS===============

  var game = document.getElementById('game');
  var abs = [document.getElementById('ads_l'), document.getElementById('ads_r')]; // const player = document.getElementsByClassName("player")[0]

  var showAds = function showAds() {
    // 460 это ширина одного рекламного блока с отступами
    if (game.clientWidth + 460 * 2 > screen.width) abs[0].style.display = 'none';else abs[0].style.display = 'block';
    if (game.clientWidth + 460 > screen.width) abs[1].style.display = 'none';else abs[1].style.display = 'block'; // if(game.clientWidth >= screen.width) player.style.overscrollBehaviorX="scroll"
  };

  window.onresize = showAds;
  showAds();
});