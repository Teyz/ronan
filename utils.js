export const isMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};

export const disableScroll = (disableScroll) => {
  const html = document?.querySelector("body");
  if (disableScroll) {
    html.style.overflowY = "hidden";
  } else {
    html.style.overflowY = "auto";
  }
};
