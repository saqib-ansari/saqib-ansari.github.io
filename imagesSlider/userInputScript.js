const inputFilesRef = document.getElementById('inputFilesMultiple');
const addFilesBtnRef = document.getElementById('addFilesBtn');
const imagesContainerRef = document.getElementById('images-container');

function addFilesToSlider() {
  [...inputFilesRef.files].forEach((imgFile) => {
    let img = document.createElement("img");
    img.src = URL.createObjectURL(imgFile);
    imagesContainerRef.appendChild(img);
  })

  // clear input..
  inputFilesRef.value = '';
}

function removeAllSlides() {
  stopAutoSlide();
  imagesContainerRef.innerHTML = '';
}