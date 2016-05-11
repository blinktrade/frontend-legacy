goog.provide('bitex.ui.MarketTradingView');

goog.require('goog.ui.Component');

/**
 * @param {Object} opt_model
 * @param {goog.dom.DomHelper=} opt_domHelper
 *
 * @extends {goog.ui.Component}
 * @constructor
 */
bitex.ui.MarketTradingView = function(symbol, opt_model, opt_domHelper) {
  goog.base(this, opt_domHelper);

  this.symbol_ = symbol;
};
goog.inherits(bitex.ui.MarketTradingView, goog.ui.Component);

/**
 * @const
 * @type {string}
 * @private
 */
bitex.ui.MarketTradingView.prototype.TRADING_VIEW_URL_ = 'https://www.tradingview.com/chart/';

/**
 * @const
 * @type {string}
 * @private
 */
bitex.ui.MarketTradingView.prototype.TRADING_VIEW_SYMBOL_ = '?symbol=';

/**
 * @type {string}
 * @private
 */
bitex.ui.MarketTradingView.prototype.symbol_;

/** @override */
bitex.ui.MarketTradingView.prototype.createDom = function() {
  var el = goog.dom.getElement('market_trading_view');
  if(goog.isDefAndNotNull(el)){
    var iframe = goog.dom.createDom('iframe', {
      src: this.TRADING_VIEW_URL_ + this.TRADING_VIEW_SYMBOL_ + this.symbol_,
      style: 'width:100%;height:600px;margin:10px 0 10px 0;border: 1px solid #ddd;'
    });
    this.setElementInternal(iframe);
  }
};
