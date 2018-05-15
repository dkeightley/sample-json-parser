$(function(){
    var jsonURL = "sample.json";
    $.getJSON(jsonURL, function (data)
    {
      $.each(data.results, function (key, val) {
        html = '<div class="image-list">';
        html += '<img src ="' + val.img_url + '" class="image-styles" />';
        html += '<p class="image-title">' + val.name + '</p>';
        html += '</div>';
        $('#target').append(html);
      });
    });
});
