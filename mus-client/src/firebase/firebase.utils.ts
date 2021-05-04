import { storage } from ".";

const uploadContent = (content: any, setContent: any, contentType: string, setIsLoading: any) => {
  setIsLoading(true);
  const uploadContent = storage.ref(`${contentType}/${content.name}`).put(content);
  uploadContent.on(
    'state changed',
    (snapshot) => console.log(snapshot),
    error => console.error(error),
    () => {
      storage
        .ref(`${contentType}`)
        .child(content.name)
        .getDownloadURL()
        .then(url => {
          setContent(url);
          setIsLoading(false);
        });
    });
};

export { uploadContent };
