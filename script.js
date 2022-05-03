const videoElement = document.getElementById("video");
const buttonVideo = document.getElementById("button");

//Prompt to Media Stream

async function selectMedia() {
  try {
    // something
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.error(error);
  }
}

buttonVideo.addEventListener("click", async () => {
  button.disable = true;
  await videoElement.requestPictureInPicture();
  button.disable = false;
});

// on loading

selectMedia();
