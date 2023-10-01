export const Comment = () => (
  <section
    className="mt-12"
    ref={(elem) => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://utteranc.es/client.js";
      scriptElem.async = true;
      scriptElem.setAttribute("repo", "eliot-Cho/log");
      scriptElem.setAttribute("issue-term", "title");
      scriptElem.setAttribute("theme", "github-light");
      scriptElem.setAttribute("label", "blog-comment");
      scriptElem.crossOrigin = "anonymous";
      elem.appendChild(scriptElem);
    }}
  />
);
