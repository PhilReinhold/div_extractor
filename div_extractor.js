var selected = false;
var elt;
var oldbg;
// todo: $(document).mouseenter / mouseleave?
$(document).mousemove(function(event) {
  if (!selected) {
    if (typeof elt != 'undefined') {
      elt.style.background = oldbg;
    }
    elt = document.elementFromPoint(event.clientX, event.clientY);
    oldbg = elt.style.background;
    elt.style.background = 'red';
  }
});

$(document).click(function(event) {
  elt.style.background = oldbg;
  selected = true;
  $("body").children().detach();
  $("body").append(elt);
});
