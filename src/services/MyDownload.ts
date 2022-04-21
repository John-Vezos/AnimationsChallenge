class MyDownload {
  name: string;
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }

  image = async () => {
    const image = await fetch(this.url);

    if (!image.ok) return false;

    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const linkDownload = document.createElement("a");
    linkDownload.href = imageURL;
    linkDownload.download = this.name;
    document.body.appendChild(linkDownload);
    linkDownload.click();
    document.body.removeChild(linkDownload);
    return true;
  };
}

export default MyDownload;
