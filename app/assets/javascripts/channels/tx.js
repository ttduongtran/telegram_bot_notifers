(function() {
  var txes = $("#txes");
  var eth_to_usd = $("#eth_to_usd");
  if(eth_to_usd.length > 0){
    App.eth_rate = App.cable.subscriptions.create({
      channel:"EthRateChannel"
    }, {
      connected: function() {
      },
      disconnected: function() {
      },
      received: function(data) {
        var bank_roll = parseFloat($('.bank-roll').text());
        // console.log(data, bank_roll);
        $("#eth_to_usd").html(data.message * bank_roll)
      }
    });
  }

  if(txes.length > 0){
    App.txes = App.cable.subscriptions.create({
      channel: "TxChannel",
      user_id: user_id}, {
      connected: function() {
      },
      disconnected: function() {
      },
      received: function(data) {
        $(data.message).hide().prependTo("#txes").fadeIn(1000);
        // txes.prepend(data.message)
      }
    });  
  }
}).call(this);