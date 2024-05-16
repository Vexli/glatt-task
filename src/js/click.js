/* IMPORT */

/* DEFINITION */
/** OPEN LINK ON CLICK **/
export function clickClassIdUrl(className, urlStart, urlEnd) {
    const elements = document.querySelectorAll(`.${className}`);
  
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        const id = element.id;
        const fullURL = `${urlStart}${id}${urlEnd}`;
        urlOpen(fullURL);
      });
    });
}

/* OPEN URL */
export function urlOpen(link) {
    window.location.href = link;
}