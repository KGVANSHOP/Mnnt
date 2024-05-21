// JavaScript for uploading picture
function uploadPicture() {
  var input = document.getElementById('imageInput');
  var preview = document.getElementById('imagePreview');

  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      preview.innerHTML = '<img src="' + e.target.result + '" />';
    }
    reader.readAsDataURL(input.files[0]);
  }
}

// JavaScript for updating content
function updateContent() {
  var content = document.getElementById('contentInput').value;
  var display = document.getElementById('contentDisplay');
  display.innerHTML = '<p>' + content + '</p>';
}
