// $(".multiple-items").slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   prevArrow: $(".prev"),
//   nextArrow: $(".next"),
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         adaptiveHeight: true
//       }
//     },
//     {
//       breakpoint: 960,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         adaptiveHeight: true
//       }
//     }
//   ]
// });

// $(".btn-action").on("click", function(e) {
//   e.preventDefault();
//   $(this).addClass("btn-white");
//   if ($(this).attr("id") == "buy") {
//     $("#sell").removeClass("btn-white");
//   } else {
//     $("#buy").removeClass("btn-white");
//   }
// });

// // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
// //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// //     var target = $(this).hash;
// //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// //     if (target.length) {
// //       $('html, body').animate({
// //         scrollTop: (target.offset().top - 54)
// //       }, 1000, function(){

// //         // Add hash (#) to URL when done scrolling (default click behavior)
// //         window.location.hash = this.hash;
// //       });
// //       return false;
// //     }
// //   }
// // });

// $(window).on("scroll", function() {
//   if ($(this).scrollTop() > 1000) {
//     $("#back-top").fadeIn();
//   } else {
//     $("#back-top").fadeOut();
//   }
// });
// // scroll body to 0px on click
// $("#back-top").on("click", function() {
//   $("#back-top").tooltip("hide");
//   $("body,html").animate({
//       scrollTop: 0
//     },
//     1500
//   );
//   return false;
// });

// if($("#check_result_form").length > 0){
//     $("#check_result").click(function(){
//         srcPath = $("#check_result").data('url');
//         $('#page_loader').show();
//         if($('#tx_address').val() != ''){
//             $.ajax({
//                 url: srcPath,
//                 type: "GET",
//                 data: {
//                     hash: $("#tx_address").val(),
//                 },
//                 success: function(data){
//                     $('#page_loader').hide();
//                     $(".result-lotte").empty();
//                     $.each(data['result'], function( index, value ) {
//                         $(".result-lotte").append("<li class='bg-info text-white mr-1'>" + value + "</li>");
//                     });
//                     $('.text-hash').html('Hash: ' + $("#tx_address").val());
//                     $("#winning-number").modal("show");
//                 },
//                 error: function() {
//                     $('#tx_address').addClass('is-invalid');
//                     $('#error-hash').text('Hash is error');
//                     $('#page_loader').hide();
//                 }
//             });
//         }else{
//             $('#page_loader').hide();
//             $('#tx_address').addClass('is-invalid');
//             $('#error-hash').text('Hash is not empty');
//         }
//     });
// }

// if($("#changeProfile").length > 0){
//     var password = document.getElementById("user_password")
//         , confirm_password = document.getElementById("user_password_confirmation")
//         , btn_update_profile = document.getElementById("btn_update_profile")
//         , btn_update_password = document.getElementById("btn_update_password");

//     function validatePassword(){
//         if(password.value != confirm_password.value) {
//             confirm_password.classList.add('is-invalid');
//             btn_update_password.disabled = true;
//             $('.invalid-feedback').show().text('Passwords Don\'t Match');
//         } else {
//             confirm_password.classList.remove('is-invalid');
//             confirm_password.classList.add('is-valid');
//             btn_update_password.disabled = false;
//             confirm_password.setCustomValidity('');
//         }
//     }
//     password.onchange = validatePassword;
//     confirm_password.onkeyup = validatePassword;

//     $('#user_photo').change(function(){
//         if($(this).val().length>0) {
//             btn_update_profile.disabled = false;
//         }else{
//             btn_update_profile.disabled = true;
//         }
//     });
// }
// if($(".btn-show-qr-code").length > 0){
//     var qrcode = new QRCode("qr-code-image",{
//         width: 200,
//         height: 200,
//         colorDark : "#000000",
//         colorLight : "#ffffff",
//     });
//     $(".btn-show-qr-code").click(function(){
//         qrcode.clear();
//         qrcode.makeCode($(this).data('text'));
//         $("#addresscode").html($(this).data('text'));
//     });
//     $("#download-qr-code").click(function(){
//         var canvas = document.getElementById("qr-code-image").children[0];
//         var images = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");;
//         var link = document.createElement('a');
//         link.download = "qr-code.png";
//         link.href = images;
//         link.click();
//     });
// }
// if ($('.btn-copy').click(function () {
//     new ClipboardJS('.btn-copy');
//     toastr.success('Copied!');
    
// }))
// $( document ).ready(function() {
//     var clipboard = new ClipboardJS('.btn');
// });

// const getTimeBankRoll = (hour_draw, minute_draw = 0, second_draw = 0) => {
//   const today = new Date(Date.now());
//   const current_hour = today.getHours();
//   const current_minute = today.getMinutes();
//   const current_second = today.getSeconds();
//   let date_draw = today;

//   if (current_hour < hour_draw ||
//     (current_hour == hour_draw && current_minute < minute_draw) ||
//     (current_hour == hour_draw && current_minute == minute_draw && current_second < second_draw)) {
//     date_draw = today;
//   } else {
//     let tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);
//     date_draw = tomorrow;
//   }

//   date_draw.setHours(hour_draw);
//   date_draw.setMinutes(minute_draw);
//   date_draw.setSeconds(second_draw);

//   return date_draw;
// };

// const HOUR_DRAW = 18;
// const MINUTE_DRAW = 0;

// $('#count-down').timeTo({
//   timeTo: getTimeBankRoll(HOUR_DRAW, MINUTE_DRAW),
//   displayDays: 0,
//   theme: "black",
//   displayCaptions: true,
//   fontSize: 48,
//   captionSize: 12,
//   iSec: 18,                 // private, index of second digit
//   iHour: 16,   
//   intervalId: true
// });

// $('#count-down-basic').timeTo({
//   timeTo: getTimeBankRoll(HOUR_DRAW, MINUTE_DRAW),
//   displayDays: 0,
//   fontSize: 42,
//   iSec: 18,                 // private, index of second digit
//   iHour: 16,   
//   intervalId: true
// });

// $('.amount').change(function(){
//   var amount = parseFloat($(this).val());
//   if(amount < 0.02) {
//     toastr.error('Minimum withdraw is 0.02 ETH');
//     $(this).focus();
//     return false;
//   }
//   $('.amount_with_fee').html(amount - 0.003)
// });
// $('.amount').keyup(function(){
//   var amount = parseFloat($(this).val());
//   $('.amount_with_fee').html(amount - 0.003)
// });