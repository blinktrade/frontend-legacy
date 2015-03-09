goog.provide('bitex.ui.RemittanceBox');

goog.require('bitex.ui.RemittancesBox.templates');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.ui.Component');
goog.require('goog.ui.registry');
goog.require('goog.debug.Logger');
goog.require('goog.events.Event');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.dom.classes');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
bitex.ui.RemittanceBox = function(opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);
  this.setModel( [ [ "USD",  "CoinsetterUSD" ] ]);

  this.last_best_bid_ = {'USD':0};
  this.last_best_ask_ = {'USD':0};
};
goog.inherits(bitex.ui.RemittanceBox, goog.ui.Component);

/**
 * @type {Object}
 */
bitex.ui.RemittanceBox.prototype.last_best_bid_;

/**
 * @type {Object}
 */
bitex.ui.RemittanceBox.prototype.last_best_ask_;


/**
 * @type {Socket}
 */
bitex.ui.RemittanceBox.prototype.coinsetter_io_socket_;


/**
 * @type {string}
 */
bitex.ui.RemittanceBox.CSS_CLASS = goog.getCssName('remittance-box');




/** @inheritDoc */
bitex.ui.RemittanceBox.prototype.getCssClass = function() {
  return bitex.ui.RemittanceBox.CSS_CLASS;
};

/** @inheritDoc */
bitex.ui.RemittanceBox.prototype.createDom = function() {
  var dom = this.getDomHelper();

  var el = goog.soy.renderAsElement(bitex.ui.RemittancesBox.templates.RemittancesBox, {
    id                        : this.makeId( 'remittance_box' ),
    remittance_pairs          : this.getModel()
  });
  this.setElementInternal(el);
};


/** @inheritDoc */
bitex.ui.RemittanceBox.prototype.decorateInternal = function(element) {
  goog.base(this, 'decorateInternal', element);
  var dom = this.getDomHelper();
  return element;
};

bitex.ui.RemittanceBox.prototype.clearCurrencies = function() {
  this.setModel( [ ]);

  var currency_record = [ "USD",  "CoinsetterUSD" ];
  this.getModel().push(currency_record);

  var table_tbody_el =
    goog.dom.getElementsByTagNameAndClass( goog.dom.TagName.TBODY,
                                           undefined,
                                           goog.dom.getElement(this.makeId('remittance_box')))[0];

  goog.dom.removeChildren(table_tbody_el);

  var wrapper = this.getDomHelper().createElement('tbody');
  wrapper.innerHTML = bitex.ui.RemittancesBox.templates.RemittancesBoxCurrency({
    id: this.makeId('remittance_box'),
    remittance_pair: currency_record
  });
  goog.dom.appendChild( table_tbody_el, wrapper.firstChild );

};

bitex.ui.RemittanceBox.prototype.addCurrency = function(currency) {
  var currency_record = [ "USDBTC" + currency, "USD -> BTC -> " + currency  ];
  this.getModel().push(currency_record);

  var table_tbody_el =
    goog.dom.getElementsByTagNameAndClass( goog.dom.TagName.TBODY,
                                           undefined,
                                           goog.dom.getElement(this.makeId('remittance_box')))[0];

  var wrapper = this.getDomHelper().createElement('tbody');
  wrapper.innerHTML = bitex.ui.RemittancesBox.templates.RemittancesBoxCurrency({
    id: this.makeId('remittance_box'),
    remittance_pair: currency_record
  });
  goog.dom.appendChild( table_tbody_el, wrapper.firstChild );
};

/**
 * A logger to help debugging
 * @type {goog.debug.Logger}
 * @private
 */
bitex.ui.RemittanceBox.prototype.logger_ =
    goog.debug.Logger.getLogger('bitex.ui.RemittanceBox');


/** @inheritDoc */
bitex.ui.RemittanceBox.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  this.coinsetter_io_socket_ = io.connect("https://plug.coinsetter.com:3000");
  this.coinsetter_io_socket_.on('connect',goog.bind(this.onCoinsetterConnect_, this) );
  this.coinsetter_io_socket_.on('ticker', goog.bind(this.onCoinsetterTicker_, this) );
};

/**
 * @private
 */
bitex.ui.RemittanceBox.prototype.onCoinsetterConnect_ = function() {
  this.coinsetter_io_socket_.emit('ticker room', '');
};

/**
 *
 * @param {Object} data
 * @private
 */
bitex.ui.RemittanceBox.prototype.onCoinsetterTicker_ = function(data) {
  var best_bid = parseInt(parseFloat(data['bid']['price']) * 1e8, 10);
  var best_ask = parseInt(parseFloat(data['ask']['price']) * 1e8, 10);

  if (this.last_best_bid_['USD'] !=  best_bid) {
    this.last_best_bid_['USD'] = best_bid;
  }


  if ( this.last_best_ask_['USD'] !=  best_ask ) {
    this.last_best_ask_['USD'] = best_ask;
  }
  this.calculateQuotes_();
};

/**
 *
 * @param {string} currency
 * @param {number} best_bid
 * @param {number} best_ask
 * @param {number} last_price
 */
bitex.ui.RemittanceBox.prototype.setMarketData = function( currency, best_bid, best_ask, last_price ) {
  if (this.last_best_bid_[currency] !=  best_bid) {
    this.last_best_bid_[currency] = best_bid;
  }
  if ( this.last_best_ask_[currency] !=  best_ask ) {
    this.last_best_ask_[currency] = best_ask;
  }

  this.calculateQuotes_();
};

bitex.ui.RemittanceBox.prototype.calculateQuotes_ = function() {
  var fmt = new goog.i18n.NumberFormat( goog.i18n.NumberFormat.Format.DECIMAL);
  fmt.setMaximumFractionDigits(2);
  fmt.setMinimumFractionDigits(2);

  goog.array.forEach(this.getModel(), function(currency_record){
    var currency_record_code = currency_record[0];

    var from_currency = currency_record_code[0] + currency_record_code[1] + currency_record_code[2];
    var buy_quote  =  this.last_best_bid_[from_currency] / 1e8;
    var sell_quote  =  this.last_best_ask_[from_currency] / 1e8;
    if (currency_record_code.length >= 9) {
      var to_currency = currency_record_code[6] + currency_record_code[7] + currency_record_code[8];

      try {
        buy_quote  =  this.last_best_bid_[to_currency] / this.last_best_ask_[from_currency];
        sell_quote =  this.last_best_ask_[to_currency] / this.last_best_bid_[from_currency];
      } catch(e) {}
    }

    try {
      var buy_el = goog.dom.getElement(this.makeId('remittance_box_' + currency_record_code + '_buy'));
      var sell_el = goog.dom.getElement(this.makeId('remittance_box_' + currency_record_code + '_sell'));

      if (goog.dom.getTextContent(buy_el) != fmt.format(buy_quote)) {
        goog.dom.setTextContent(buy_el, fmt.format(buy_quote));

        var buy_blink_class = buy_el.getAttribute('data-blink-class');
        if (goog.isDefAndNotNull(buy_blink_class)) {
          var buy_blink_delay = buy_el.getAttribute('data-blink-delay') || 700;
          buy_blink_delay = parseInt(buy_blink_delay, 10);

          goog.dom.classes.add(buy_el, buy_blink_class);
          goog.Timer.callOnce(function () {
            goog.dom.classes.remove(buy_el, buy_blink_class);
          }, buy_blink_delay, this);
        }
      }

      if (goog.dom.getTextContent(sell_el) != fmt.format(sell_quote)) {
        goog.dom.setTextContent(sell_el, fmt.format(sell_quote));

        var sell_blink_class = sell_el.getAttribute('data-blink-class');
        if (goog.isDefAndNotNull(buy_blink_class)) {
          var sell_blink_delay = sell_el.getAttribute('data-blink-delay') || 700;
          sell_blink_delay = parseInt(sell_blink_delay, 10);

          goog.dom.classes.add(sell_el, sell_blink_class);
          goog.Timer.callOnce(function () {
            goog.dom.classes.remove(sell_el, sell_blink_class);
          }, sell_blink_delay, this);
        }
      }
    } catch (e){}
  }, this);
};
