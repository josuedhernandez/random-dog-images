function getDogImages(number_pictures) {
    let endpoint = 'https://dog.ceo/api/breeds/image/random/' + number_pictures.toString();
    fetch(endpoint)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function creteHtmlImg(path) {
      // Create image element html string.
      return `<img src="${path}" class="results-img">`
  }

  function displayResults(responseJson) {
    //replace the existing image with the new one
    let array_response = responseJson.message;
    console.log(array_response);
    let htmlString = array_response.map(image_path => creteHtmlImg(image_path));
    // Clear elements in case there was something there
    $('.pictures-results').empty();
    // Join elements and create one html string
    $('.pictures-results').append(htmlString.join(''))
    //display the results section
    $('.results').removeClass('hidden');
  }
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let number_pics = $('#number').val();
      getDogImages(number_pics);
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });