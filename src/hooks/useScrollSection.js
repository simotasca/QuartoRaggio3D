import { useEffect } from "react";
import { sinInOut } from "../helpers/easing";
import { doScroll } from "../helpers/scroll";
import useEventListener, { usePageEventListener } from "./useEventListener";
import usePage from "./usePage";

const top = (elem) => elem.offsetTop;
const bottom = (elem) => elem.offsetTop + elem.offsetHeight;

const useScrollSection = (references, duration) => {
  useEffect(() => {
    references.sort((a, b) => (top(a.current) > top(b.current)) ? 1 : -1)
  }, []);

  let current = 0;
  let locked = false;
  const currRef = () => references[current].current;

  function unlokka() {
    locked = false;
  }

  usePageEventListener("wheel", (e) => {
    if (!locked) {
      if (e.deltaY < 0) { // scroll up
        if (current != 0 & currRef().getBoundingClientRect().top >= top(usePage())) {
          current--;
          locked = true;
          doScroll(bottom(currRef()) - usePage().offsetHeight - top(usePage()), duration, unlokka);
          e.preventDefault();
        }
      }
      else if (e.deltaY > 0) { // scroll down
        if (current != references.length - 1 & currRef().getBoundingClientRect().bottom <= bottom(usePage())) {
          current++;
          locked = true;
          e.preventDefault();
          doScroll(top(currRef()) - top(usePage()), duration, unlokka);
        }
      }
    }
  });

  /*
  usePageEventListener("touchstart", (e) => {
    first = true;
    touchVirgin = true;
  });

  var lastT = 0;
  var first = true;
  usePageEventListener("touchmove", (e) => {
    var currT = e.changedTouches[0].clientY;
    var scr = 0;
    var delta = lastT - currT;

    if (!first) {
      if (!locked) {
        if (delta < 0) {
          // console.log('up');
          if (current != 0 & currRef().getBoundingClientRect().top >= top(usePage())) {
            touchVirgin = false;
            current--;
            locked = true;
            doScroll(bottom(currRef()) - usePage().offsetHeight - top(usePage()), duration, unlokka);
            e.preventDefault();
          } else {
            //          scr = delta * 1.7;
          }
        } else {
          // console.log('down');
          if (current != references.length - 1 & currRef().getBoundingClientRect().bottom <= bottom(usePage())) {
            touchVirgin = false;
            current++;
            locked = true;
            doScroll(top(currRef()) - top(usePage()), duration, unlokka);
            e.preventDefault();
          } else {
            //            scr = delta * 1.7;
          }
        }
      }
      //  usePage().scrollTo({ top: usePage().scrollTop + scr });
    }
    lastT = e.changedTouches[0].clientY;
    first = false;
  });
*/
  // var lastScrollTop = 0;
  // var touchVirgin = true;
  // usePageEventListener("scroll", e => {
  //   console.log(e)
  //   if (!locked) {
  //     if (current != 0 & currRef().getBoundingClientRect().top >= top(usePage())) {
  //       if (touchVirgin) {
  //         touchVirgin = false;
  //         current--;
  //         locked = true;
  //         doScroll(bottom(currRef()) - usePage().offsetHeight - top(usePage()), duration, unlokka);
  //       } else {
  //         window.requestAnimationFrame(() => { usePage().scrollTo({ top: lastScrollTop }) });
  //       }
  //     } else if (current != references.length - 1 & currRef().getBoundingClientRect().bottom <= bottom(usePage())) {
  //       if (touchVirgin) {
  //         touchVirgin = false;
  //         current++;
  //         locked = true;
  //         doScroll(top(currRef()) - top(usePage()), duration, unlokka);
  //       } else {
  //         window.requestAnimationFrame(() => { usePage().scrollTo({ top: lastScrollTop }) });
  //       }
  //     }
  //   }
  //   lastScrollTop = usePage().scrollTop;
  // })
}

export default useScrollSection;
