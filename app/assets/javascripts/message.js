$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="main_chat__message_list--user_info">
          <div class="main_chat__message_list--user_info--name">
            ${message.user_name}
          </div>
          <div class="main_chat__message_list--user_info--time">
            ${message.created_at}
          </div>
        </div>
        <div class="main_chat__message_list--message">
          ${message.content}
          <img class="main_chat__message_list--image" src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="main_chat__message_list--user_info">
          <div class="main_chat__message_list--user_info--name">
            ${message.user_name}
          </div>
          <div class="main_chat__message_list--user_info--time">
            ${message.created_at}
          </div>
        </div>
        <div class="main_chat__message_list--message">
          ${message.content}
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main_chat__message_list').append(html);
      $('.main_chat__message_list').animate({ scrollTop: $('.main_chat__message_list')[0].scrollHeight});
      $('form')[0].reset();
      $('.send').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
});