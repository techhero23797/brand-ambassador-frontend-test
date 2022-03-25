import { Mission } from "../@types/feeds";

const useMetaTags = () => {
    const setTags = (feed:Mission) => {
        window.document.getElementsByTagName('meta')["og:title" as any].content = feed.title.toString();
        window.document.getElementsByTagName('meta')["twitter:title" as any].content = feed.title.toString();
        if ("image" in feed){
          window.document.getElementsByTagName('meta')["og:image" as any].content = feed.image.src.toString();
          window.document.getElementsByTagName('meta')["twitter:image" as any].content = feed.image.src.toString();
        }
    }

    return setTags
}

export default useMetaTags;